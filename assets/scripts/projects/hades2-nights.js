const renderDashboard = () => {
    // pull the data through from the window object
    const data = window.HadesData;
    if (!data) {
        console.error("Hades data not found - something went wrong loading the data when the script was included.");
        // TODO: Add visual error message for user display
        return;
    }
    const rawRunData = data.nights;
    const regions = data.regions;

    // Helper methods, encapsulated in an object for access purposes
    const helper = {
        getDepth(location) {
            return regions[location]?.level || null;
        },
        getPosition(location) {
            return regions[location]?.position || "unknown";
        },
        getColor(position, is_success) {
            if (!is_success) {
                return "#E74C3C"; // red
            } else if (position === "above") {
                return "#F1C40F"; // gold
            } else if (position === "below") {
                return "#2ECC71"; // green
            } else {
                console.error(`Position ${position} did not match expected options on a success; defaulting.`);
                return "#000000"; // black
            }
        }
    };

    // Transform nights into entries for each level so it matches the structure needed for the stackY2
    var perLevelData = [];
    rawRunData.forEach((run) => {
        var totalDepth = helper.getDepth(run.result?.ended_in);
        if (totalDepth != null) {
            // Each level of the run gets a 'succeeded' record until the final level, where the actual run status is used
            for (var i = 1; i <= totalDepth; i++) {
                var levelResult = (i === totalDepth) ? (run.result.status === "Failed" ? 0 : 1) : 1;
                var thisEntry = {
                    "night": run.night,
                    "position": helper.getPosition(run.result.ended_in),
                    "is_level_success": levelResult,
                    "level": i
                };
                perLevelData.push(thisEntry);
            }
        } else {
            console.error(`Night ${run.night} is missing an 'ended_in' value. Skipping.`);
        }
    });

    // Render the chart itself
    const chart = Plot.plot({
        aspectRatio: 1,
        x: { label: "Night #" },
        y: { axis: null }, // Turn off the default global axis to be overridden below
        fy: { domain: ["above", "below"] },
        marks: [
            Plot.axisY({
                ticks: [1, 2, 3, 4],
                tickFormat: (d, i, data) => {
                    console.log("d?", d);
                    // 'data' here is the specific subset for this facet!
                    const isAbove = data[0]?.position === "above";
                    const belowLabels = { 1: "Erebus", 2: "Oceanus", 3: "Fields", 4: "Tartarus" };
                    const aboveLabels = { 1: "Ephyra", 2: "Rift", 3: "Olympus", 4: "Summit" };

                    return isAbove ? aboveLabels[d] : belowLabels[d];
                }
            }),
            Plot.dot(
                perLevelData,
                Plot.stackY2({
                    x: (d) => d.night,
                    y: (d) => (d.position === "above") ? 1 : -1,
                    fill: (d) => helper.getColor(d.position, d.is_level_success)
                })
            ),
            Plot.ruleY([0])
        ],
        style: { // Look Hades-like
            fontFamily: '"Marcellus", serif',
            fontSize: "0.9rem",
        },
    });

    // Attach the graph for rendering
    document.getElementById("hades-plot").append(chart);
}

// Wait for the DOM to be ready, then add the chart
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderDashboard);
} else {
    renderDashboard();
}
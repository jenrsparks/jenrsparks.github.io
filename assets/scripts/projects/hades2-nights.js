const renderDashboard = () => {
    // pull the data through from the window object
    const data = window.HadesData;
    if (!data) {
        console.error("Hades data not found - something went wrong loading the data when the script was included.");
        // TODO: Add visual error message for user display
        return;
    }
    const rawRunData = data.nights.filter(run => run.run_type.toUpperCase() === "NORMAL");
    const regions = data.regions;

    // Helper methods, encapsulated in an object for access purposes
    const helper = {
        getDepth(location) {
            return regions[location]?.level || null;
        },
        getPosition(location) {
            return regions[location]?.position || "unknown";
        },
        getPositionColor(position, is_run_success) { // Sure, it could be neither; but we'll default anyway for complexity reduction since we control the data
            if (position === "above") {
                return (is_run_success === 1) ? "#5981a0" : "#7da1bc";
            } else {
                return (is_run_success === 1) ? "#a05996" : "#bc7db4";
            }
        },
        getSymbol(is_success) {
            return (is_success === 0) ? "cross" : "circle";
        }
    };

    // Transform nights into entries for each level so it matches the structure needed for the stackY2
    var perLevelData = [];
    rawRunData.forEach((run) => {
        var totalDepth = helper.getDepth(run.result?.ended_in);
        if (totalDepth != null) {
            // Each level of the run gets a 'succeeded' record until the final level, where the actual run status is used
            for (var i = 1; i <= totalDepth; i++) {
                var isTopLevelForRun = (i === totalDepth);
                var levelResult = isTopLevelForRun ? (run.result.status === "Failed" ? 0 : 1) : null;
                var thisEntry = {
                    "night": run.night,
                    "position": helper.getPosition(run.result.ended_in),
                    "is_level_success": levelResult,
                    "is_run_success": run.result.status === "Failed" ? 0 : 1,
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
        width: Math.min(rawRunData.length * 24, 1200),
        // TODO Change to window max width?
        marginLeft: 100, // Give the Y-axis labels room to breathe
        marginBottom: 40, // Adjust the bottom margin to uncramp the X-axis label
        symbol: { legend: true },
        x: { 
            label: "Nights",
            type: "point", // Treat nights as discrete categories, not a timeline
        },
        
        y: {
            grid: false,
            label: "← Below · Above →",
            labelAnchor: "center",
            inset: 20, // Adds 20px of padding at the top and bottom of the Y-range
            ticks: [-4, -3, -2, -1, 1, 2, 3, 4],
            tickFormat: (d) => {
                const belowLabels = { 1: "Erebus", 2: "Oceanus", 3: "Fields", 4: "Tartarus" };
                const aboveLabels = { 1: "Ephyra", 2: "Rift", 3: "Olympus", 4: "Summit" };

                return d > 0 ? aboveLabels[d] : belowLabels[(d*-1)];
            }        
        },
        marks: [
            Plot.dot(
                perLevelData,
                Plot.stackY2({
                    x: (d) => d.night,
                    y: (d) => (d.position === "above") ? 1 : -1,
                    fill: (d) => helper.getPositionColor(d.position, d.is_run_success),
                    symbol: (d) => helper.getSymbol(d.is_level_success),
                    rotate: (d) => (d.is_level_success === 0) ? 45 : 0, // turns the cross into an 'x' to indicate a death
                    // title: "placeholder",
                    r: 5,
                })
            ),
            Plot.ruleY([0]),
        ],
        style: { // Look Hades-like
            fontFamily: '"Marcellus", serif',
            fontSize: "0.8rem",
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
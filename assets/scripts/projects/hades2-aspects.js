const renderDashboard = () => {
    // pull the data through from the window object
    const data = window.HadesData;
    if (!data) {
        console.error("Hades data not found - something went wrong loading the data when the script was included.");
        // TODO: Add visual error message for user display
        return;
    }

    // Transform the raw data into a format that can be used for the graphing library
    const rawRunData = data.nights;
    const parsedData = []
    rawRunData.forEach((run) => {
        var weaponBase = run.weapon?.base || "Unknown";
        var weaponAspect = run.weapon?.aspect || "Unknown";
        var existingEntry = parsedData.find(entry => entry.weapon_base === weaponBase && entry.weapon_aspect === weaponAspect);
        var weaponAspectNumber = (parsedData.filter(entry => entry.weapon_base === weaponBase)?.length || 0) + 1; // This is a bit hacky, but it allows us to assign aspect numbers based on the order they appear in the data for each weapon base, which is sufficient for our purposes and doesn't require hardcoding aspect names or counts
        if(existingEntry) {
            var indexOfEntry = parsedData.indexOf(existingEntry);
            existingEntry.total += 1;
            if(run.result.status === "Failed") {
                existingEntry.fail += 1;
            } else {
                existingEntry.success += 1;
            }
            parsedData[indexOfEntry] = existingEntry;
        } else {
            parsedData.push( 
                {
                    "weapon_base": weaponBase,
                    "weapon_aspect": weaponAspect,
                    "weapon_aspect_number": weaponAspectNumber,
                    "success": (run.result.status === "Failed") ? 0 : 1,
                    "fail": (run.result.status === "Failed") ? 1 : 0,
                    "total": 1
                }
            );
        }
    });
    parsedData.sort((a, b) => a.weapon_base.localeCompare(b.weapon_base) || a.weapon_aspect.localeCompare(b.weapon_aspect));
    console.log(parsedData);

    // Render the chart itself
    const chart = Plot.plot({
        aspectRatio: 1.5,
        width: Math.min(rawRunData.length * 24, 1200),
        x: {
            axis: null,
            label: null,
            domain: [...new Set(parsedData.map(entry => entry.weapon_aspect_number))],
        },
        color: {
            domain: ["fail", ...parsedData.map(entry => entry.weapon_aspect_number)],
            // #545154 for semi-dark grays
            range: ["#D4D4D4", "#7c94ab", "#ab7ca7", "#A5BC9A", "#D1A2AF"], // Gray for fails, then a custom palette for the aspects (up to 4 aspects per weapon, which is the current max in the game)
            legend: true,
            tickFormat: d => d === "fail" ? "Failure" : `Aspect #${d}`
        },
        fx: {
            domain: [...new Set(parsedData.map(entry => entry.weapon_base))],
            label: null
        },
        y: { 
            grid: true, 
            label: "Number of Runs", 
            labelAnchor: "center",
            domain: [0, Math.max(...parsedData.map(entry => entry.total))] 
        },
        marks: [
            Plot.barY(parsedData, { 
                x: "weapon_aspect_number", 
                y: "total",
                fx: "weapon_base",
                fill: () => "fail", // Hardcoded string to trigger color domain
                fillOpacity: 1,
                stroke: "white",
                strokeWidth: 0.5,
                title: (d) => `Aspect of ${d.weapon_aspect}: ${d.fail} Deaths`
            }),
            Plot.barY(parsedData, {
                x: "weapon_aspect_number",
                y: "success",
                fx: "weapon_base",
                fill: "weapon_aspect_number",
                fillOpacity: 1, // Full opacity for Wins
                stroke: "white",
                strokeWidth: 0.5,
                title: (d) => `Aspect of ${d.weapon_aspect}: ${d.success} Clears`
            }),
            Plot.ruleY([0])
        ],
        style: { // Look Hades-like
            fontFamily: '"Marcellus", serif',
            fontSize: "1rem",
        },
    });

    // Attach the graph for rendering
    document.getElementById("hades2-aspects").append(chart);
}

// Wait for the DOM to be ready, then add the chart
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderDashboard);
} else {
    console.log("DOM loaded - rendering Hades 2 Aspects dashboard");
    renderDashboard();
}
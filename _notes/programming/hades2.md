---
title: Hades 2 Data Visualization
layout: default
published: true
category: Programming
---

<script src="https://cdn.jsdelivr.net/npm/d3@7"></script>
<script src="https://cdn.jsdelivr.net/npm/@observablehq/plot@0.6"></script>

<div id="hades-plot"></div>

<script type="text/javascript">

const regions = {
    "Erebus":              {"level": 1, "position": "below"},
    "Ephyra":              {"level": 1, "position": "above"},
    "Oceanus":             {"level": 2, "position": "below"},
    "Thessaly":            {"level": 2, "position": "above"},
    "The Mourning Fields": {"level": 3, "position": "below"},
    "Olympus":             {"level": 3, "position": "above"},
    "Tartarus":            {"level": 4, "position": "below"},
    "The Summit":          {"level": 4, "position": "above"}
};
const getDepth = (location) => {
    return regions[location]?.level || 0;
};
const getPosition = (location) => {
    return regions[location]?.position || "unknown";
};

const rawRunData = {{ site.data.hades2-runs | jsonify }};
var perLevelData = [];
console.info("records to process: " + rawRunData.length);
rawRunData.forEach((run) => {
    console.info("Working on run: " + run.night);
    var totalDepth = getDepth(run.result?.ended_in);
    if(totalDepth != null) {
        for(var i = 1; i <= totalDepth; i++) {
            var levelResult = (i === totalDepth) ? (run.result.status === "Failed" ? 0 : 1) : 1;
            var thisEntry = {
                    "night": run.night,
                    "position": getPosition(run.result.ended_in),
                    "is_level_success": levelResult,
                    "level": i
                };
            perLevelData.push(thisEntry);
        }
    }
    console.log("Total objects: " + perLevelData.length);
});

const chart = Plot.plot({
    aspectRatio: 1,
    x: {label: "Runs"},
    y: {
        grid: true,
        label: "← Below · Above →",
        labelAnchor: "center",
        tickFormat: Math.abs
    },
    marks: [
        Plot.dot(
            perLevelData,
            Plot.stackY2({
                x: (d) => d.night,
                y: (d) => (d.position === "above") ? 1 : -1,
                fill: "night",
                title: "placeholder"
            })
        ),
        Plot.ruleY([0])
    ]
  });

  // 4. Attach it to your div
  document.getElementById("hades-plot").append(chart);

</script>

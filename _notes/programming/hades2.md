---
title: Hades 2 Data Visualization
layout: default
published: true
category: Programming
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/d3@7"></script>
<script src="https://cdn.jsdelivr.net/npm/@observablehq/plot@0.6"></script>

The Hades series (and lets be honest, pretty much everything from Supergiant Games) has won my heart - so much that when its pre-release was announced, it pushed me over the edge after two years to _finally_ purchase the Steam Deck.

With all the runs I've done, though, and a record keeper to let me go look at them, I couldn't resist the temptation to visualize the data. Below is the collective of views I've created using my post-release game file.

I intend to continue updating it as I play more, however I can't promise that will be anywhere near real time. I haven't found a good way to automate it. Yet. 😉
<hr/>
<h3 style="font-family: 'Marcellus', serif; font-weight: 400; font-style: normal;">Nightly Progress</h3>
<div id="hades2-nights"></div>

<hr/>
<h3 style="font-family: 'Marcellus', serif; font-weight: 400; font-style: normal;">Weapons &amp; Aspects</h3>
<div id="hades2-aspects"></div>

<script>
  // We attach it to the window object so the external file can see it
  window.HadesData = {{ site.data.hades2-runs | jsonify }};
</script>
<script src="{{ 'assets/scripts/projects/hades2-nights.js' | relative_url }}" type="module"></script>
<script src="{{ 'assets/scripts/projects/hades2-aspects.js' | relative_url }}" type="module"></script>

<!-- Planned graphs:

      - Run depth (see `assets/scripts/projects/hades2-nights.js`)

      - Weapons + Aspects
        - Each weapon-aspect group is clustered (https://observablehq.com/@observablehq/plot-grouped-bar-chart)
        - stacked with win/loss

      - Boon Choice
        - heat map (https://observablehq.com/@observablehq/plot-seattle-temperature-heatmap)
        - One chart for 4 main choices (attack, special, hex, gain)
        - One chart for everything else

      - Daedelus
        - heatmap?
        - hover-over for names
        - toggle to filter to all, top, or bottom

      - Trinket choice
        - above / below split, as we don't have per-level
        - include win / loss stacks

      - Pets
        - stacked win/loss
        - top / bottom split
-->
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

I intend to continue updating it as I play more, however I can't promise that will be anywhere near real time. I haven't found a good way to automate it yet. 😉
<hr/>
<h3 style="font-family: 'Marcellus', serif; font-weight: 400; font-style: normal;">Nightly Progress</h3>
<div id="hades-plot"></div>

<script>
  // We attach it to the window object so the external file can see it
  window.HadesData = {{ site.data.hades2-runs | jsonify }};
</script>
<script src="{{ 'assets/scripts/projects/hades2-nights.js' | relative_url }}" type="module"></script>

---
title: Content Seeds
layout: page
published: false
---

## Observability & Operations Think Pieces

You can demonstrate your background in observability by writing opinionated, high-level pieces on industry practices.

### Why Single-Signal Alert Response is Failing You

- What's wrong with a single alert?
- where's the complexity & blast & downstream?
- how can we fix it?

### Rejected: ~~Eating Your Own Dog Food: CI/CD for the Digital Garden~~

~~Write a post detailing the operations practices behind your website itself. Document how you handle staging, testing, and deployments, and what telemetry you use to ensure your site is performing well.~~

### Draft created as 'Telemetry Trap' -- ~~Beyond the Three Pillars~~

~~Write a critique on why simply collecting logs, metrics, and traces isn't enough to achieve true observability without proper business context and well-defined Service Level Objectives (SLOs).~~

### The Anatomy of a Useful Alert

A practical guide on operations practices, detailing the difference between actionable alerts and alert fatigue, using real-world examples of how to write runbooks that actually help the person on call.

### Designing the Backend for a LitRPG "System"

Write a systems architecture think piece on what it would actually take to build the backend infrastructure for a universe like Dungeon Crawler Carl.

__The Angle:__ Discuss the immense, write-heavy database requirements needed to track the stats, inventory, and achievements of billions of entities in real-time. Explore how you would design the message brokers, handle caching, and ensure eventual consistency when a player levels up mid-battle.

### The State Machine of Metroidvanias

A deep dive into the software design patterns behind games like Hollow Knight or Ori.

__The Angle:__ Write about how ability-gating and map progression are essentially complex state machines. You can draw parallels between tracking a player's unlocked abilities and managing state in large-scale enterprise applications or distributed systems.

### The Observability of Web Typography

Combine your typography background with frontend engineering. Write a technical critique on the performance impact of web fonts.

__The Angle:__ Discuss font loading strategies, the rendering pipeline, and how poorly optimized typography causes Cumulative Layout Shift (CLS). You can write about how to set up synthetic monitoring to track rendering performance and enforce aesthetic standards without sacrificing speed.

## Bridging the Personal and Professional

You can use your existing content to demonstrate core engineering concepts.

### Relational Database Design via Cocktails

Take your existing cocktail recipe collection and use it as a domain model for a tutorial on database normalization. Show how you'd map many-to-many relationships (ingredients to recipes) in a relational SQL database versus how you'd structure them in a NoSQL document format.

## Hands-on Engineering Projects

### The Telemetry Garden

Build a lightweight IoT system to track environmental metrics like sunlight and soil moisture for seedlings, such as clarkia, sweet alyssum, and snapdragons. You can stream this data into an observability stack like Prometheus and visualize it in Grafana.
The Write-up: Focus on the operations and observability side. Document how you configured the data ingestion, established baseline metrics for plant health, and set up alerting rules for when the soil gets too dry.

### Digital Canvas to Thread Converter

Develop a web utility that takes an uploaded image—like a piece of pixel art or a watercolor painting—and maps its RGB values to the nearest DMC color substitutes to generate a grid pattern.
The Write-up: Focus on algorithmic thinking and software engineering. Discuss the color-matching algorithms (e.g., Euclidean distance in RGB versus LAB color space) and how you optimized the image processing for the browser.

### State-Management CLI for Large Tasks

Develop a custom command-line tool designed to track state and progress on massive, multi-step manual projects—like calculating completion percentages, time estimates, and error rates for a physical project with exactly 467 rows.
The Write-up: Discuss data persistence, CLI user experience design, and how you handle edge cases and state rollbacks.

### The Roguelike Telemetry Stack

Build a local telemetry collector that tracks your runs in a game like Hades or Balatro. You could write a lightweight Python script that parses local save files or game logs after each run, extracting data like build choices, run duration, and floor reached.

__The Write-up:__ Pipe this data into an observability dashboard to visualize your win rates over time. It’s a fantastic way to demonstrate data ingestion, parsing unstructured logs, and building custom metrics for a highly dynamic system.

### Parametric 3D Design & Automated Pipelines

Treat your 3D printing functional solves like software. Write a small project using a code-based CAD tool like OpenSCAD to design a household fix (like a custom bracket or mending tool).

__The Write-up:__ Detail how you put physical objects into version control (Git). You could even explore writing a simple CI/CD pipeline script that automatically slices the .stl file for your printer whenever a new commit is pushed to the main branch.

## Bridging Crafting and Code

### The Fiber Arts Algorithm

Write a piece drawing the technical parallels between software loops and crafting. Knitting and crochet are essentially binary systems (knit/purl, yarn-over/pull-through) executed by a human compiler.

__The Angle:__ Write a simple script that validates a knitting or crochet pattern for mathematical accuracy before you start, ensuring the stitch counts increase or decrease correctly per row. It’s a great way to showcase unit testing concepts applied to the physical world.
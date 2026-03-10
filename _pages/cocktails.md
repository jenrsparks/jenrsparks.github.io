---
title: Cocktails
id: Cocktails
permalink: /cocktails
category: Cocktails
layout: default
navigation_include: true
---

# {{ page.title }}

[Death & Co: Modern Classic Cocktails](https://app.thestorygraph.com/books/cc495afc-eaa6-46f4-a182-24551b3434e4) was my first cocktail book, and I've poured over it a dozen times to try to internalize the core concepts. Where I struggled, though, was that it felt as if I needed the right brand of a given liquor, which meant getting 20-30 different bottles to be able to make the drinks I was after. Instead, I wanted to be able to take what was in my cabinet, riff something together, and understand what I was doing.

The book [Cocktail Codex: Fundamentals, Formulas, Evolutions](https://app.thestorygraph.com/books/4d477c60-4b1a-442d-9f9d-70c6f7cd0c47) by the same authors took me across the line and helped me begin my journey towards exactly that. It's arguably my favorite cocktail book, to the extent that I've gifted copies of it to fellow cocktail enthusiasts. 

Leaning on the [Cocktail Codex](https://app.thestorygraph.com/books/4d477c60-4b1a-442d-9f9d-70c6f7cd0c47) model of categorization, I've created an inventory starting with the core templates. Branching off from these are variants, all of which are connected in the Relationship Visualization section in the sidebar. As this inventory expands, I may have some without relationships, though they can still be found in the full index of recipes below.

### Core Templates

### [[Daiquiri|The Daiquiri]]

- **Defining characteristics:** Sweetener \| Lime Juice \| Rum
- **Tasting notes:** Sharp, bright, slightly viscous mouthfeel

### [[Flip|The Flip]]

- **Defining characteristics:** Sweetener \| Spice \| Egg \| Sherry
- **Tasting notes:** _TBD_
- **Personal notes:** As someone who can't have egg, I miss out on a lot of the mouthfeel on this one, except for the one whiskey sour I got in Dublin where the bartender just _made it happen_ by, and I quote, "shaking the fuck out of it."

### [[Gin Martini|The Gin Martini]]

- **Defining characteristics:** Vermouth \| Bitter \| Gin
- **Tasting notes:** Bitter, smooth, slick/oily mouthfeel
- **Personal notes:** I must confess, I don't have much love of gin, so the traditional martini gets away from me knowledge-wise.

### [[Old Fashioned|The Old Fashioned]]

- **Defining characteristics:** Sweetener \| Bitters \| Bourbon
- **Tasting notes:** Sweet, boozy, carmel-like stickiness

### [[Sidecar|The Sidecar]]

- Defining characteristics: Sweetener \| Lemon Juice \| Curaçao \| Cognac
- **Tasting notes:** _TBD_

### [[Whiskey Highball|The Whiskey Highball]]

- **Defining characteristics:** Seltzer \| Whiskey
- **Tasting notes:** _TBD_

---

## The Collection

The below graph will take you to any of the recipes directly, as well as show you the relationships across them. Go explore!

{% capture category_value %}{{ page.category }}{% endcapture %}
{% include notes_graph.html category=category_value center_note='Core Template' height_modifier=0.7 %}

## Drinks Pending Recipes

{% assign notes = site.notes %}
<ul>
{% for note in notes %}
{% if note.placeholder == true %}
<li><a class="internal-link" href="{{ site.baseurl }}{{ note.url }}{%- if site.use_html_extension -%}.html{%- endif -%}">{{ note.title }}</a></li>
{% endif %}
{% endfor %}
</ul>
---
title: Programming 
id: Programming
permalink: /programming
category: Programming
layout: default
navigation_include: true
---

&nbsp;

<link rel="stylesheet" href="{{ 'assets/styles/masonry.css' | relative_url }}"/>
<script type="text/javascript" src="{{ 'assets/scripts/masonry.js' | relative_url }}" defer></script>

<div class="two-column masonry-grid">
{% for project in site.data.programming %}
    {% assign link_text = "View Project" %}
    {%- if project.link_text -%}
        {%- assign link_text = project.link_text -%}
    {%- endif -%}

    {% include masonry-card.html 
        title=project.name 
        date=project.date
        description=project.description
        url=project.url
        link_text=link_text %}
{% endfor %}
</div>
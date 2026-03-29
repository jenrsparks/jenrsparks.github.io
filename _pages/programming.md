---
title: Programming 
id: Programming
permalink: /programming
category: Programming
loyout: page
navigation_include: true
---

&nbsp;

<link rel="stylesheet" href="{{ 'assets/styles/masonry.css' | relative_url }}"/>
<script type="text/javascript" src="{{ 'assets/scripts/masonry.js' | relative_url }}" defer></script>

<div class="two-column masonry-grid">
{% for project in site.data.programming %}
    <div class="masonry-item">
        <div class="custom-card"> 
            <div class="custom-card__header">
                <h3 class="custom-card__title">{{ project.name | markdownify }}</h3>
                <span class="custom-card__date">{{ project.date }}</span>
            </div>
            <p class="custom-card__description">{{ project.description | markdownify }}</p>    
            <a href="{{ project.url }}" class="custom-card__link">View Project</a>
        </div>
    </div>
{% endfor %}
</div>
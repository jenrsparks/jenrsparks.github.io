---
title: Crafts
id: Crafts
permalink: /crafts
category: Crafts
layout: default
navigation_include: true
---

<link rel="stylesheet" href="{{ 'assets/styles/masonry.css' | relative_url }}"/>
<script type="text/javascript" src="{{ 'assets/scripts/masonry.js' | relative_url }}" defer></script>

{% for type in site.data.crafts %}

<h3>{{ type.category }}</h3>

<div class="three-column masonry-grid">
    {% for project in type.entries %}
        {% include masonry-card.html 
            title=project.name 
            date=project.completed
            description=project.description
            image=project.image
            url=project.link
            link_text='View Project' %}
    {% endfor %}
</div>
{% endfor %}    

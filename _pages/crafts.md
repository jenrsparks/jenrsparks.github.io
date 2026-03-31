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

I do a _lot_ of projects in my down-time. They don't move quickly, and some of them never see the light of day (though even Ziyal was something to _someone_ I'm sure), but I love all the things I make whether they're functional, asthetic, or somewhere in between. 

Below is hardly exhaustive, but it does show off some of the pieces I'm more proud of. 

{% assign crafts = site.data.crafts | sort: 'category' %}
{% for type in crafts %}

<h3>{{ type.category }}</h3>

<div class="three-column masonry-grid">
    {% assign entries = type.entries | sort: 'completed' | reverse %}
    {% for project in entries %}
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

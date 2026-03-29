---
title: Photography
id: Photography
permalink: /photography
category: Photography
layout: page
navigation_include: true
published: true
---

<link rel="stylesheet" href="{{ 'assets/styles/masonry.css' | relative_url }}"/>
<script type="text/javascript" src="{{ 'assets/scripts/masonry.js' | relative_url }}" defer></script>

Growing up, my grandfather was a beloved figure, far away in the Pacific Northwest for as long as I knew, and a great photographer. One summer, I had a two-week trip to stay with him, where I discovered my love for the camera, and that love has never left me. Over the years it has come and gone, sometimes with the intent to share, and others, to keep for the family.

Collected herein are those photographs I've gathered that I feel are worthy of sharing.

{% assign photo_types = 'digital,film' | split: ','%}

{% for type in photo_types %}
{% assign photos = site.static_files | where: "photo_type", type | sort: "name" | reverse %}

## {{ type | capitalize }}

<div class="masonry-grid">
{% for photo in photos %}
{% assign date = photo.basename | split: '_' | first | replace: '-xx-xx', '' | replace: '-', '/' %}
{% assign lowerwords = 'in,on,the,a,and,at,of,or' | split: ',' %}
{% assign acronyms = 'omg,stl' | split: ',' %}
{% assign title = photo.basename | split: '_' | last | replace: '-', ' ' | split: ' '  %}
{% capture title %}
  {% for word in title %}
    {% if lowerwords contains word %}
        {{ word }}
    {% else %}
        {% if acronyms contains word %}
            {{ word | upcase }}
        {% else %}
            {{ word | capitalize }}
        {% endif %}
    {% endif %}
  {% endfor %}
{% endcapture %}

  <div class="masonry-item">
    <img src="{{ site.baseurl }}{{ photo.path }}" 
       alt="{{ date }}: {{ title }}" 
    />
    <div class="masonry-label">
        <span class="image-title">{{ date }}: {{ title }}</span>
    </div>
  </div>
{% endfor %}
</div>
{% endfor %}

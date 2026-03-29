---
title: Photography
id: Photography
permalink: /photography
category: Photography
layout: default
navigation_include: true
---

<link rel="stylesheet" href="{{ 'assets/styles/masonry.css' | relative_url }}"/>
<script type="text/javascript" src="{{ 'assets/scripts/masonry.js' | relative_url }}" defer></script>
<script src="{{ 'assets/scripts/fslightbox/index.js' | relative_url }}" defer></script>

# Photography

Growing up, my grandfather was a beloved figure, far away in the Pacific Northwest for as long as I knew, and a great photographer. One summer, I had a two-week trip to stay with him, where I discovered my love for the camera, and that love has never left me. Over the years it comes and goes in frequency, sometimes with the intent to share, and others, to keep for the family.

Not all of them are particularly good, but that's why we take a lot. Below, you'll find those that I feel are worth your time.

{% assign photo_types = 'digital,film' | split: ','%}
{% for type in photo_types %}
{% assign photos = site.static_files | where: "photo_type", type | sort: "name" | reverse %}

## {{ type | capitalize }} Photographs
&nbsp;
<div class="four-column masonry-grid">
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
  {% assign title = title | strip | split: ' ' | join: ' ' %}

  <div class="masonry-item">
    <a class="internal-link" data-fslightbox href="{{ site.baseurl }}{{ photo.path }}" data-alt="{{ date }}: {{ title }}" data-type="image" >
      <img src="{{ site.baseurl }}{{ photo.path }}" alt="{{ date }}: {{ title }}" />
      <div class="masonry-label">
          <span class="image-title">{{ date }}: {{ title }}</span>
      </div>
    </a>
  </div>
{% endfor %}
</div>
{% endfor %}

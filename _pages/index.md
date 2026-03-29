---
layout: home
title: Home
id: home
permalink: /
---

# Welcome!

Somehow, you have stumbled upon a weird mess of random content by yours truly. As content progresses, there will be more variety, but for the time being, check out the couple collections on the navigation along the side.

But wait: who am I?



<div>
<strong>Recently updated</strong>
<ul>
  {% assign recent_notes = site.notes | sort: "last_modified_at_timestamp" | reverse %}
  {% for note in recent_notes limit: 5 %}
    <li>
      <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
    </li>
  {% endfor %}
</ul>
</div>
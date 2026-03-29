---
layout: home
title: Home
id: home
permalink: /
---

__Welcome!__ Somehow, you have stumbled upon a weird mess of random content by yours truly. For a sampling of the silly and often weird projects I've done, check out the couple collections on the navigation along the side.

### But wait, who am I?

Professionally, that's a bit hard to answer; I've been a software developer, an operations engineer, an architect, a process engineer. The closest easy answer these days is Site Reliability Engineer, but even that career tends to have a more straight line than I've had. At the core of it all, though, is my passion for quality, stability, observability, and above all else, quality of life for myself & my peers. 

On a personal front, I'm a maker through and through. My media ranges across crochet, cross stitch, 3d printing, photography, baking, graphic design, and many others. I'm also a parent, a partner, a daughter, and a friend to many. When I'm _not_ making something, relaxation comes in the form of movies, books, and especially video games. 

## Recently updated
<ul>
  {% assign recent_notes = site.notes | sort: "last_modified_at_timestamp" | reverse %}
  {% for note in recent_notes limit: 5 %}
    <li>
      <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
    </li>
  {% endfor %}
</ul>

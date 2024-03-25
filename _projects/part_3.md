---
layout: page
title: RESEARCH
description: Electric Vehicles
img: assets/img/research/part_3.png
importance: 3
category: 
---

Electricity generation and transportation consume about two-third of energy in the US and emit more than half of greenhouse gases.

Vehicles consumed more than a quarter of energy and emitted more than a quarter of energy-related carbon dioxide in the US in 2014. Electrification of our transportation system will be an important component of future power systems because an electric vehicle (EV) is a huge load: an EV can add 50% energy consumption (4,000 kWh annually) to an average CA household and demand 2 to 20 times more power (3 – 20 kW) than an average CA household. It is however also an extremely flexible load hence invaluable for integrating renewable sources, such as wind and solar power, into our electric grid. We have worked on optimal scheduling of EV charging, and algorithms for EV battery swapping. We have also built an state-of-the-art EV charging system and transferred the technology through a startup.

<div style="text-align:center;">
  <figure>
    <img src="../assets/img/research-areas/ev/ev-tech-transfer.png" style="width: 82%; height: auto;">
    <figcaption>Figure 1: Power network evolution</figcaption>
  </figure>
</div>

Netlab's research focuses on some of the most fundamental challenges in this historic transformation.

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="grid">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="grid">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>

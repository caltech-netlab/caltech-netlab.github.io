---
layout: page
title: Research
permalink: /research/
description: 
nav: true
nav_order: 2
display_categories: # [work, fun]
horizontal: false
dropdown: true
children:
  - title: Overview
    permalink: /research/
  - title: divider
  - title: POWER SYSTEMS STEADY RATE
    permalink: /research/part_1/
  - title: divider
  - title: POWER SYSTEMS DYNAMICS
    permalink: /research/part_2/
  - title: divider
  - title: ELECTRIC VEHICLES
    permalink: /research/part_3/
  - title: divider
  - title: COMMUNICATION NETWORKS
    permalink: /research/part_4/
---
---


Electricity generation and transportation consume about two-third of energy in the US and emit more than half of greenhouse gases.

To drastically reduce greenhouse gases, we must generate more electricity from clean sources and electrify transportation. To this end, the power network, from generation to transmission and distribution to consumption, will undergo an architectural transformation in the following decades that the communication network has gone through in the last two. The traditional network has a small number of large generators that are actively controlled to meet the demand of a much larger number of passive loads. The control paradigm is to schedule supply to meet forecast demand. The future smart grid will have a large number of small distributed generation resources that are not dispatchable nor accurately predictable, as well as a large number active loads. Unlike most endpoints today that are merely passive loads, the future network of distributed energy resources (DERs) may generate, sense, compute, communicate, and actuate. These intelligent DERs will create a severe risk by introducing rapid, large, and random fluctuations in power supply and demand, voltage and frequency, as well as a tremendous opportunity for a clean energy future by drastically increasing our capability to coordinate and optimize their operation in real time.

<div style="text-align:center;">
  <figure>
    <img src="..\assets\img\research\evolution.png" style="width: 82%; height: auto;">
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
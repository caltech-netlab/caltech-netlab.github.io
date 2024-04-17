---
layout: page
title: Electric Vehicles
description: 
img: assets/img/research/part_3.png
importance: 3
category: 
---

(This page will be replaced by a new page (under construction) on our ACN-Portal project in the next few months. You can preview at: <a href = "https://ev.caltech.edu/"><b>EV Research @ Caltech</b></a>)

<div style="margin-bottom: 12px;"><font size='5.5' id = "conjestionControl">Electric Vehicles</font></div>

Vehicles consumed more than a quarter of energy and emitted more than a quarter of energy-related carbon dioxide in the US in 2014. Electrification of our transportation system will be an important component of future power systems because an electric vehicle (EV) is a huge load: an EV can add 50% energy consumption (4,000 kWh annually) to an average CA household and demand 2 to 20 times more power (3 – 20 kW) than an average CA household. It is however also an extremely flexible load hence invaluable for integrating renewable sources, such as wind and solar power, into our electric grid. We have worked on optimal scheduling of EV charging, and algorithms for EV battery swapping. We have also built an state-of-the-art EV charging system and transferred the technology through a startup.

1. <b><a href = "#algorithmDesign">Algorithm Design</a></b>
2. <b><a href = "#entrepreneurship">Entrepreneurship</a></b>

<div style="text-align:center;">
  <figure>
    <img src="../../assets/img/research/ev/timeline.png" 
    style="width: 100%; height: auto;">
  </figure>
</div>

<div style="margin-bottom: 12px;"><font size='5.5' id = "algorithmDesign">Algorithm Design</font></div>

<b>Optimal EV charging. We design a distributed iterative scheduling algorithm for EV charging in:

- L. Gan, U. Topcu and S. H. Low. <a href='http://netlab.caltech.edu/assets/publications/Gan-2012-EV.pdfhttps://caltech.powerflexsystems.com'><b>Optimal decentralized protocol for electric vehicle charging</b></a>, <em>IEEE Trans. on Power Systems</em>, 228(2):940–951, May 2013

where, in each iteration, EVs update their charging profiles according to the control signal broadcast by an aggregator, and the aggregator adjusts the control signal to guide their updates. The algorithm converges to optimal charging profiles even when EVs can plug in at different times, update their charging profiles at different times with different frequencies, and may use outdated control signals when they update.

<div style="text-align:center;">
  <figure>
    <img src="../../assets/img/research/ev/ev-cumulative-station-current.jpg" 
    style="width: 100%; height: auto;">
    <figcaption>Cumulative charging current (Jan 2018): each color represents the charging curve for an EV.</figcaption>
  </figure>
</div>

<div style="margin-bottom: 12px;"><font size='5.5' id = "entrepreneurship">Entrepreneurship</font></div>

California has committed to have 1.5 million zero- emission vehicles on the road by 2025. The Chinese city Shenzhen plans to have 100% of its taxi’s be electric by 2020. The growth of EV depends on, and will drive, the growth of charging infrastructure. Working with Netlab alumni and Caltech Facilities, we have built an Adaptive Charging Network (ACN), consisting of 63 level-2 chargers and 1 DC fast charger, served by two 150 kVA transformers, local controllers as well as communication equipment. ACN is capable of real-time measurement, communication, computing and control, and adapts EV charging rates to the driver needs as well as capacity limits of the electric system. It has been charging EVs since February 2016 and has delivered over 475 MWh, equivalent to 1.5 million miles and 500 metric tons of avoided greenhouse gases by July 2018 (<a href='https://caltech.powerflexsystems.com/d/qIkr4ibiv/caltech-home?orgId=1&refresh=1m'><b>https://caltech.powerflexsystems.com</b></a>). The Caltech ACN testbed is described in:

- G. Lee, T. Lee, Z. Low, S. H. Low and C. Ortega. <a href='https://ieeexplore.ieee.org/document/7905971'><b>Adaptive charging network for electric vehicles</b></a>, <em>Proc. of the IEEE Global Conference on Signal and Information Processing (GlobalSIP)</em>, Washington, DC, December 2016
- Z. Lee, D. Chang, C. Jin, G. S. Lee, R. Lee, T. Lee and S. H. Low. <a href='http://netlab.caltech.edu/assets/publications/Lee-2018-Practical-Considerations-LSHD-EV-charging.pdf'><b>Large-Scale Adaptive Electric Vehicle Charging</b></a>, <em>Proc. of the IEEE International Conference on Communications, Control, and Computing Technologies for Smart Grids (SmartGridComm)</em>, Aalborg, Denmark, October 2018
- LACI, December 2018: <a href='../../assets/pdf/Low-201707-CCbook.pdf' target="_blank"><b>Slides</b></a>

<div style="text-align:center;">
  <figure>
    <img src="../../assets/img/research/ev/Caltech-ACN-testbed-system-typology.png" 
    style="width: 100%; height: auto;">
  </figure>
</div>

ACN has been used for 16 projects between 2016 and 2018 for 22 undergraduates, including 4 female students: 4 SURF projects (4 students) in summer 2016, 1 class project (4 students) and 1 Directed Study (1 student) in Fall 2016, 1 class project (2 students) and 2 Directed Studies (5 students) in Winter 2017, 5 class projects (5 students) and 1 Directed Studies (1 student) in Winter 2018, and 1 SURF project (1 student) in Summer 2018.

In its simplest form, optimal charging can be formulated as a linear program (LP) or a quadratic program (QP). An offline LP assumes all future EV arrivals, departures, and energy demands are known and computes the charging profiles of all EVs as an optimal solution of a single LP. An online LP is an iterative algorithm in a model-predictive control fashion, and, in each iteration, computes the charging profiles of existing EVs assuming there will not be any future EV arrival. Offline LP is impractical but serves as a lower bound on the cost of online LP which can be implemented in ACN. Extensive simulations using datasets from Caltech ACN and Google’s charging facilities show that the performance of online LP is extremely close to that of offline LP. It is proved in:

- L. Guo, K. F. Erliksson and S. H. Low. <a href='http://netlab.caltech.edu/assets/publications/Guo-2017-OLP.pdf'><b>Optimal online adaptive electric vehicle charging</b></a>, <em>Proc. of the IEEE Power and Energy Society General Meeting</em>, Chicago, IL, July 2017

that, under appropriate assumptions, when online LP is feasible it indeed attains offline optimal.

A popular class of scheduling algorithms is the least-laxity first (LLF) algorithm that prioritizes EVs that have lower laxity. Laxity can be defined in various ways and all capture the slack in providing the requested energy over available time subject to maximum charging rate. We propose an LLF algorithm that turns out to match the performance of online LP in:

- Y. Nakahira, N. Chen, L. Chen and S. H. Low. <a href='http://netlab.caltech.edu/assets/publications/Nakahira-2017-llf.pdf'><b>Smoothed Least-laxity-first Algorithm for EV Charging</b></a>, <em>Proc. the Eighth International Conference on Future Energy Systems</em>, 2017

This is surprising because online LP matches well offline optimal by solving for entire charging profiles, taking into account of charging rates at future times, while LLF algorithms are myopic. It turns out that, under our laxity definition, the algorithm (of valley-filling type) equivalently solves a convex optimization problem that implicitly takes into account of charging behavior in the next iteration.

We are pursuing tech transfer through a startup <a href='https://www.powerflex.com/'><b>PowerFlex Systems</b></a> that can provide a target charging capacity at 30%-60% lower capital and operating costs. It may also provide energy services to utility companies or ISO markets in the future. <a href='https://caltech.powerflexsystems.com/dashboard/db/california-garage'><b>View live data from Caltech's California Garage.</b></a>

<div style="margin-bottom: 12px;"><a href='https://caltech.powerflexsystems.com/dashboard/db/california-garage'><b><font size='5.5' id = "conjestionControl">PowerFlex Deployments</font></b></a></div>

Until Aug 2018:
- 1.6M miles delivered
- 540 metric tons of CO2 equivalent avoided

<div style = "text-align:center">
  <img src="../../assets/img/research/ev/powerflex/powerflex-transformer-and-subpanels-300x200.jpg" width="32%" style="display:inline;">
  <img src="../../assets/img/research/ev/powerflex/powerflex-main-panel-300x200.jpg" width="32%" style="display:inline;">
  <img src="../../assets/img/research/ev/powerflex/powerflex-hardware.jpg" width="32%" style="display:inline;">
</div>
<br>

<div align="center">
  <img src="../../assets/img/research/ev/powerflex/powerflex-hardware-2-300x200.jpg" width="32%" style="display:inline;">
  <img src="../../assets/img/research/ev/powerflex/powerflex-phone-app-300x200.jpg" width="32%" style="display:inline;">
  <img src="../../assets/img/research/ev/powerflex/powerflex-california-garage-debugging-300x200.jpg" width="32%" style="display:inline;">
</div>
<br>
<div style="text-align:center;">
  <figure>
    <img src="../../assets/img/research/ev/powerflex/CaltechACN.png" 
    style="width: 96%; height: auto;">
  </figure>
</div>

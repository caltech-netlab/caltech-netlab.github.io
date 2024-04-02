---
layout: page
title: RESEARCH
description: Power Systems – Dynamics
img: assets/img/research/part_2.png
importance: 2
category: work
giscus_comments: false
---

The dynamics of a transmission network is mainly driven by that of the bulk generators. This can be modeled by a system of nonlinear differential algebraic equations. We often study linearized power flows for simplicity.

<!-- 1. <b><a href = "#frequencyRegulation">Frequency Regulation</a></b>
2. <b><a href = "#networkTopology">Impact of Network Topology</a></b> -->

<div style="margin-bottom: 12px;"><font size='5.5' id = "frequencyRegulation">Frequency Regulation</font></div>

Frequency control maintains the frequency of a power system tightly around its nominal value when demand or supply fluctuates. It is traditionally implemented on the generation side and consists of three mechanisms that work at different timescales in concert. The primary control restores power balance in about 30 seconds and is completely decentralized. The secondary control, called automatic generation control, operates at a timescale of several minutes and coordinates the setpoints of governors in a control area in a centralized fashion to drive the frequency back to its nominal value and the inter-area power flows to their scheduled values. The tertiary control, called economic dispatch, operates at a timescale of several minutes to an hour and schedules the output levels of generators that are online and the inter-area power flows, usually by solving centrally (N — 1) security-constrained OPF.

Ubiquitous continuous fast-acting distributed load-side participation in frequency control can greatly improve the dynamic and steady-state behavior. The idea of load-side participation dates back to Schweppe and his co-workers in the late 1970s. In:

- C. Zhao, U. Topcu, L. Li and S. H. Low. <a href='https://ieeexplore.ieee.org/document/6702462'><b>Design and stability of load-side primary frequency control in power systems</b></a>, <em>IEEE Trans. on Automatic Control</em>, 59(5): 1177–1189, 2014
- Additional slides: <a href='..\..\assets\pdf\Low-201506-OLC3-Skoltech.pdf'><b>Slides</b></a> (Skoltech Conf on Advanced Mathematical Methods For Energy Systems, June 2015)

we develop a new approach to the design of load-side primary frequency control. The key idea is to formalize the control goal as a constrained optimization problem (called OLC, optimal load control) and design completely decentralized controllers such that the dynamics of the closed-loop system carries out a primal-dual algorithm to solve OLC. We prove that the equilibrium of the closed-loop dynamics is an optimal solution of OLC and is globally asymptotically stable. In:

- E. Mallada, C. Zhao and S. H. Low. <a href='https://ieeexplore.ieee.org/document/7944568'><b>Optimal load-side control for frequency regulation in smart grids</b></a>, <em>IEEE Trans. on Automatic Control</em>, 62(12): 6294–6309, Dec 2017

<div style="text-align:center;">
  <figure>
    <img src="..\..\assets\img\research\power-systems-dynamics\ieee-68-bus-test-system.gif" style="width: 60%; height: auto;">
    <figcaption>Figure 1: Single line diagram of the IEEE 68-bus test system</figcaption>
  </figure>
</div>

we greatly extend this approach to include secondary frequency control that restores the frequency back to its nominal value, drives the inter-area power flows to their scheduled values, and enforces line limits in equilibrium. Unlike the traditional AGC, our control is distributed, requiring only neighborhood communication, and manages line congestion at fast timescale. This can provide reactive security at the secondary control timescale and relax the preventive approach of N — 1 security at the tertiary control timescale, yielding economic efficiency. These two papers use linearized power flows and ignore generator dynamics. In:

- C. Zhao, E. Mallada, S. H. Low and J. Bialek. <a href='https://www.sciencedirect.com/science/article/pii/S0142061517324171?via%3Dihub'><b>Distributed plug-and-play optimal generator and load control for power system frequency regulation</b></a>, <em>International Journal of Electrical Power & Energy Systems</em>, 101: 1–12, Oct 2018

we generalize our approach to nonlinear power flows and generic turbine-governor models, and propose distributed algorithms for both loads and generators.

Another design and stability proof using linear power flows are developed in:

- Z. Wang, F. Liu, S. H. Low, C. Zhao and S. Mei. <a href='https://ieeexplore.ieee.org/document/7990543'><b>Distributed frequency control with operational constraints, part I: per-node power balance</b></a>, <em>IEEE Trans. on Smart Grid</em>, 2017
- Z. Wang, F. Liu, S. H. Low, C. Zhao and S. Mei. <a href='https://ieeexplore.ieee.org/document/7990367'><b>Distributed frequency control with operational constraints, part II: network power balance</b></a>, <em>IEEE Trans. on Smart Grid</em>, 2017

<!-- <div style="margin-bottom: 12px;"><font size='5.5' id = "networkTopology">Impact of Network Topology</font></div> -->

<!-- Add later. -->

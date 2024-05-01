---
layout: page
permalink: /book/
title: Book
description: # Materials for courses you taught. Replace this text with your description.
nav: False
nav_order: 7
---
<style>
    .styled-button {
        display: block;
        width: 150px; /* Fixed width */
        padding: 10px 20px;
        background-color: #333; /* Dark gray background */
        color: white; /* White text */
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        border-radius: 5px;
        border: 2px solid white; /* White border */
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s; /* Smooth transition */
        margin-bottom: 20px; /* Margin between buttons */
    }

    /* Button hover effect */
    .styled-button:hover {
        background-color: white; /* White background on hover */
        color: black; /* Black text on hover */
    }
</style>
<div id="container" style="display: flex; justify-content: space-between; align-items: flex-start; text-align: left;">
    <div id="content" style="flex: 1;">
        <div id="jump1" style="margin-bottom: 12px;">
            <font size='5.5' id="OPF"><b>Power System Analysis - A Mathematical Approach</b></font>
        </div>
        <div id="jump2" style="margin-bottom: 12px;">
            <font size='5.5' id="OPF">Lecture Notes for EE/CS/EST 135</font>
        </div>
        <div id="jump3" style="margin-bottom: 12px;">
            <font size='5.5' id="OPF">Steven H. Low, Caltech</font>
        </div>
    </div>
    <div id="buttons" style="flex: 0; display: flex; flex-direction: column; align-items: center;">
        <a href="https://form.jotform.com/221144847455155" target="_blank">
        <button class="styled-button">Register</button>
        </a>
        <a href="https://form.jotform.com/220081838982159" target="_blank">
        <button class="styled-button">Feedback</button>
        </a>
    </div>
</div>
<hr>

This rough draft is based on lecture notes for the Power System Analysis course that I have been teaching at Caltech for the last decade or so. Any corrections, questions, comments, or pointers will be greatly appreciated!

<div id="jump1" style="margin-bottom: 12px;"><font size='5.5' id = "OPF"><a target = "_blank" href='../assets/pdf/Low-201909-ee135Notes-Ch1toCh17AppNoSol-20240430.pdf'><b>Current draft</b></a> (April 30, 2024)</font></div>

- Part I: Single-phase networks (Ch 1 - 5)
- Part II: Unbalanced multiphase networks (Ch 7 - 10)
- Part III: Power flow optimization (Ch 11 - 17)
- Part IV: Appendix: Mathematical preliminaries (Ch 25)

<div id="jump1" style="margin-bottom: 12px;"><font size='5.5' id = "OPF">Solution manual</font></div>

Solutions to most of the exercises are available to instructors for teaching or researchers for self study.  <a target = "_blank" href='https://form.jotform.com/230617373015146'><b>Request solution.</b></a>

<div id="jump1" style="margin-bottom: 12px;"><font size='5.5' id = "OPF">Slides</font></div>

The slides below are mostly for the Feb 16, 2023 version of the draft textbook (except for a few updated chapters).  The chapter numbers may not match with the re-organized current version above (will be updated in the future).

- Part I: Single-phase networks
    - Ch 1 Basic concepts: <a target = "_blank" download='../assets/keynotes/Low-Ch1-BasicConcepts-202109.key'><b>Keynote</b></a>  <a target = "_blank" href='../assets/book/Low-Ch1-BasicConcepts-202209.pdf'><b>PDF</b></a> 
    - Ch 2 Transmission line models: <a target = "_blank" download='../assets/keynotes/Low-Ch2-LineModels-202109.key'><b>Keynote</b></a>  <a target = "_blank" href='../assets/book/Low-Ch2-LineModels-202109.pdf'><b>PDF</b></a> 
    - Ch 3 Transformer models: <a target = "_blank" download='../assets/keynotes/Low-Ch3-Transformers-202109.key'><b>Keynote</b></a>  <a target = "_blank" href='../assets/book/Low-Ch3-Transformers-202307.pdf'><b>PDF</b></a>  (last update: July 5, 2023)
    - Ch 5 Bus injection models: <a target = "_blank" download='../assets/keynotes/Low-Ch5-BIM-202109.key'><b>Keynote</b></a>  <a target = "_blank" href='../assets/book/Low-Ch5-BIM-202210.pdf'><b>PDF</b></a> 
    - Ch 6 Branch flow models: <a target = "_blank" download='../assets/keynotes/Low-Ch6-BFM-202109.key'><b>Keynote</b></a>  <a target = "_blank" href='../assets/book/Low-Ch6-BFM-202211.pdf'><b>PDF</b></a> 
- Part II: Unbalanced multiphase networks
    - Ch 8 Component models: <a target = "_blank" download='../assets/keynotes/Low-Ch8-Unbalanced-Components-202208.key'><b>Keynote</b></a>  <a target = "_blank" href='../assets/book/Low-Ch8-Unbalanced-Components-202307.pdf'><b>PDF</b></a>  (last update: July 5, 2023)
    - Ch 9 Bus injection models: <a target = "_blank" download='../assets/keynotes/Low-Ch9-Unbalanced-BIM-202208.key'><b>Keynote</b></a>  <a target = "_blank" href='../assets/book/Low-Ch9-Unbalanced-BIM-202211.pdf'><b>PDF</b></a> 
    - Ch 10 Branch flow models: <a target = "_blank" download='../assets/keynotes/Low-Ch10-Unbalanced-BFM-202208.key'><b>Keynote</b></a>  <a target = "_blank" href='../assets/book/Low-Ch10-Unbalanced-BFM-202212.pdf'><b>PDF</b></a> 
- Part III: Power flow optimization
    - Ch 11 Power system operation: <a target = "_blank" download='../assets/keynotes/Low-Ch11-PSOperation-202109.key'><b>Keynote</b></a>  <a target = "_blank" href='../assets/book/Low-Ch11-PSOperation-202212.pdf'><b>PDF</b></a> 
    - Ch 12 Optimal power flow: <a target = "_blank" download='../assets/keynotes/Low-Ch12-OPF-202301.key'><b>Keynote</b></a>  <a target = "_blank" href='../assets/book/Low-Ch12-OPF-202301.pdf'><b>PDF</b></a> 
    - Ch 13 Semidefinite relaxations: BIM: <a target = "_blank" download='../assets/keynotes/Low-Ch13-BIMrelaxation-202301.key'><b>Keynote</b></a>  <a target = "_blank" href='../assets/book/Low-Ch13-BIMrelaxation-202302.pdf'><b>PDF</b></a> 
    - Ch 14 Semidefinite relaxations: BFM: <a target = "_blank" download='../assets/keynotes/Low-Ch14-BFMrelaxation-202302.key'><b>Keynote</b></a>  <a target = "_blank" href='../assets/book/Low-Ch14-BFMrelaxation-202302.pdf'><b>PDF</b></a> 

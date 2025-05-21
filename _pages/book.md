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
            <font size='5.5' id="OPF"><b>Power System Analysis - Analytical Tools and Structural Properties </b></font>
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

This rough draft is based on lecture notes for the Power System Analysis courses that I have been teaching at Caltech for the last decade or so. Any corrections, questions, comments, or pointers will be greatly appreciated!

<div id="jump1" style="margin-bottom: 12px;"><font size='5.5' id = "OPF"><a target = "_blank" href='../assets/book/PSA/Low-PSA-v20250521.pdf'><b>Current draft</b></a> (May 21, 2025)</font></div>

- Part I: Power network: models, operations, analysis (Ch 1 - 7)
- Part II: Power flow optimization (Ch 8 - 13)
- Part III: Unbalanced three-phase networks (Ch 14 - 18)
- Appendix: Linear algebra preliminaries (Ch 19)

<div id="jump1" style="margin-bottom: 12px;"><font size='5.5' id = "OPF">Solution manual</font></div>

Solutions to most of the exercises are available to instructors for teaching or researchers for self study.  <a target = "_blank" href='https://form.jotform.com/230617373015146'><b>Request solution.</b></a>

<div id="jump1" style="margin-bottom: 12px;"><font size='5.5' id = "OPF">Slides</font></div>

The slides below that are dated on or after Dec 13, 2024 match the chapters in the textbook.
(Slides dated before Dec 13, 2024 are for the dated versions of the draft and undated slides are for the Feb 16, 2023 version of the draft.)

- Part I: Power network: models, operation, analysis
    - Ch 1 Basic concepts: <a target = "_blank" download href='../assets/keynotes/Low-Ch1-BasicConcepts-202109.key'><b>Keynote</b></a>  <a target = "_blank" href='../assets/book/PSA-pre202410/Low-Ch1-BasicConcepts-202209.pdf'><b>PDF</b></a> 
    - Ch 2 Transmission line models: <a target = "_blank" download href='../assets/keynotes/Low-Ch2-LineModels-202109.key'><b>Keynote</b></a>  <a target = "_blank" href='../assets/book/PSA-pre202410/Low-Ch2-LineModels-202109.pdf'><b>PDF</b></a> 
    - Ch 3 Transformer models: <a target = "_blank" download href='../assets/keynotes/Low-Ch3-Transformers-202109.key'><b>Keynote</b></a>  <a target = "_blank" href='../assets/book/PSA-pre202410/Low-Ch3-Transformers-202307.pdf'><b>PDF</b></a>  (last update: July 5, 2023)
    - Ch 4 Bus injection models: <a target = "_blank" download href='../assets/book/slides-202410/Low-PSAslides-Ch4-BIM-v20241213.key'><b>Keynote</b></a>  <a target = "_blank" href='../assets/book/slides-202410/Low-PSAslides-Ch4-BIM-v20241213.pdf'><b>PDF</b></a> (last update: Dec 13, 2024)
    - Ch 5 Branch flow models: radial networks: <a target = "_blank" download href='../assets/book/slides-202410/Low-PSAslides-Ch5-BFM-v20241213.key'><b>Keynote</b></a>  <a target = "_blank" href='../assets/book/slides-202410/Low-PSAslides-Ch5-BFM-v20241213.pdf'><b>PDF</b></a> (last update: Dec 13, 2024)
  - Ch 6 System operation: power balance: <a target = "_blank" download href='../assets/book/slides-202410/Low-PSAslides-Ch6-opPowerBalance-v20250415.key'><b>Keynote</b></a>  <a target = "_blank" href='../assets/book/slides-202410/Low-PSAslides-Ch6-opPowerBalance-v20250415.pdf'><b>PDF</b></a> (last update: April 15, 2025)
  - Ch 7 System operation: estimation and control: <a target = "_blank" download href='../assets/book/slides-202410/Low-PSAslides-Ch7-opEstimationControl-v20250415.key'><b>Keynote</b></a>  <a target = "_blank" href='../assets/book/slides-202410/Low-PSAslides-Ch7-opEstimationControl-v20250415.pdf'><b>PDF</b></a> (last update: April 15, 2025)

- Part II: Power flow optimization
    - Ch 8 Smooth convex optimization: <a target = "_blank" download href='../assets/book/slides-202410/'><b> </b></a>  <a target = "_blank" href='../assets/book/slides-202410/'><b> </b></a> 
    - Ch 9 Optimal power flow: <a target = "_blank" download href='../assets/book/slides-202410/Low-PSAslides-Ch9-OPF-v20241213.key'><b>Keynote</b></a>  <a target = "_blank" href='../assets/book/slides-202410/Low-PSAslides-Ch9-OPF-v20241213.pdf'><b>PDF</b></a> (last update: Dec 13, 2024) 
    - Ch 10 Semidefinite relaxations: BIM: <a target = "_blank" download href='../assets/book/slides-202410/Low-PSAslides-Ch10-BIMrelaxation-v20241213.key'><b>Keynote</b></a>  <a target = "_blank" href='../assets/book/slides-202410/Low-PSAslides-Ch10-BIMrelaxation-v20241213.pdf'><b>PDF</b></a> (last update: Dec 13, 2024) 
    - Ch 11 Semidefinite relaxations: BFM: <a target = "_blank" download href='../assets/book/slides-202410/Low-PSAslides-Ch11-BFMrelaxation-v20241213.key'><b>Keynote</b></a>  <a target = "_blank" href='../assets/book/slides-202410/Low-PSAslides-Ch11-BFMrelaxation-v20241213.pdf'><b>PDF</b></a> (last update: Dec 13, 2024) 
    - Ch 12 Nonsmooth convex optimization: <a target = "_blank" download href='../assets/book/slides-202410/Low-PSAslides-Ch12-NonsmoothConvexOpt-v20250207.key'><b>Keynote</b></a>  <a target = "_blank" href='../assets/book/slides-202410/Low-PSAslides-Ch12-NonsmoothConvexOpt-v20250207.pdf'><b>PDF</b></a> (last update: Feb 7, 2025)
    - Ch 13 Stochastic OPF: <a target = "_blank" download href='../assets/book/slides-202410/Low-PSAslides-Ch13-SOPF-v20250415.key'><b>Keynote</b></a>  <a target = "_blank" href='../assets/book/slides-202410/Low-PSAslides-Ch13-SOPF-v20250415.pdf'><b>PDF</b></a> (last update: April 15, 2025)
 
- Part III: Unbalanced three-phase networks
    - Ch 14 & 15 Component models: <a target = "_blank" download href='../assets/keynotes/Low-Ch8-Unbalanced-Components-202208.key'><b>Keynote</b></a>  <a target = "_blank" href='../assets/book/PSA-pre202410/Low-Ch8-Unbalanced-Components-202307.pdf'><b>PDF</b></a>  (last update: July 5, 2023)
    - Ch 16 Bus injection models: <a target = "_blank" download href='../assets/keynotes/Low-Ch9-Unbalanced-BIM-202208.key'><b>Keynote</b></a>  <a target = "_blank" href='../assets/book/PSA-pre202410/Low-Ch9-Unbalanced-BIM-202211.pdf'><b>PDF</b></a> 
    - Ch 17 Branch flow models: radial networks <a target = "_blank" download href='../assets/keynotes/Low-Ch10-Unbalanced-BFM-202208.key'><b>Keynote</b></a>  <a target = "_blank" href='../assets/book/PSA-pre202410/Low-Ch10-Unbalanced-BFM-202212.pdf'><b>PDF</b></a> 
     - Ch 18 Power flow optimization: 




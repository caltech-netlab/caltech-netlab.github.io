---
layout: page
permalink: /workshop/
title: Reunion Workshop
description:
nav: True
nav_order: 7
---
<style>
    .styled-button {
        display: block;
        width: 120px; /* Fixed width */
        padding: 5px 15px;
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
        margin-left:10px;
    }

    /* Button hover effect */
    .styled-button:hover {
        background-color: white; /* White background on hover */
        color: black; /* Black text on hover */
    }
    .container1 {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    /* Box styling */
    .container1 {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    /* Box styling */
    .box {
        border: 1px solid lightgray; /* Light gray border */
        border-radius: 5px; /* Rounded corners */
        padding: 12px; /* Padding */
        width: 49%; /* 45% width for each box */
        transition: border-color 0.3s; /* Smooth transition for border color */
        margin-bottom: 0px; /* Margin between boxes */
    }

    /* Box hover effect */
    .box:hover {
        border-color: #f0f0f0; /* Very light gray border on hover */
    }

    /* Heading styling */
    .box h2 {
        font-size: 1.2em; /* Adjust font size */
        margin-bottom: 8px; /* Margin bottom for headings */
    }

    /* List styling */
    .box ul {
        padding-left: 20px; /* Add left padding to contain the bullet points */
    }

    /* List item styling */
    .box li {
        margin-bottom: 6px; /* Add margin between list items */
    }

    /* Anchor tag styling */
    .box a {
        text-decoration: none; /* Remove underline */
        color: inherit; /* Inherit text color */
        display: block; /* Make link fill entire box */
    }
    
</style>
<div id="container1" style="display: flex; justify-content: space-between; align-items: flex-start; text-align: left;">
    <div id="content" style="flex: 1;">
        <div id="jump1" style="margin-bottom: 12px;">
            <font size='5'><b>Optimization & Control of Networks: from Theory to Practice</b></font>
        </div>
        <div id="jump2" style="margin-bottom: 0px;">
            <font size='4'>May 24-25, 2024 - <i>celebrating Professor <a target = "_blank" href='https://www.ee.caltech.edu/people/slow'>Steven Low</a>
’s 60th Birthday</i></font>
        </div>
    </div>
    <div id="buttons" style="flex: 0; display: flex; flex-direction: column; align-items: center;">
        <a href="../assets/pdf/2024_reunion_workshop_program.pdf" target="_blank">
        <button class="styled-button">Program</button>
        </a>
        <a href="https://form.jotform.com/240938101419150" target="_blank">
        <button class="styled-button">Registration</button>
        </a>
    </div>
</div>
<hr>

<!-- <div id="jump1" style="margin-bottom: 12px;"><font size='5.5'>Venue</font></div> -->
#### **Venue**
California Institute of Technology  
1200 E California Blvd, Pasadena, CA 91125, USA  
Beckman Behavioral Biology Labs, Room B180  
<a target = "_blank" href='https://www.caltech.edu/map/campus/the-mabel-and-arnold-beckman-laboratories-of-behavioral-biology'>Campus map</a> | <a target = "_blank" href='https://www.google.com/maps/place/Mabel+and+Arnold+Beckman+Laboratories+of+Behavioral+Biology,+Pasadena,+CA+91125/@34.1383979,-118.1258571,16z/data=!3m1!4b1!4m6!3m5!1s0x80c2c3587658d5c1:0x6a13901338034d51!8m2!3d34.1383979!4d-118.1258571!16s%2Fg%2F1hhht1z8d?entry=ttu'>Google Maps</a>
<br>

*Breakfast and breaks are right outside Room B180  
*Lunch is in the Schlinger Patio next to Beckman Behavioral Biology Labs

#### **Speaker Highlight**
- [John Doyle](https://doyle.caltech.edu/Main_Page), California Institute of Technology
- [Harvey Newman](https://pma.caltech.edu/people/harvey-b-newman), California Institute of Technology
- [Fernando Paganini](https://fi.ort.edu.uy/la-facultad/fernando-paganini), Universidad ORT Uruguay
- [Rayadurgam Srikant](https://sites.google.com/a/illinois.edu/srikant/), University of Illinois at Urbana Champaign
- [Adam Wierman](https://adamwierman.com/), California Institute of Technology

#### **Talk Highlight**
**Learning and Control in Countable State Spaces**  
**Speaker**: R. Srikant, UIUC  
**Abstract**: We will consider policy optimization methods in reinforcement learning where the state space is countably infinite. The motivation arises from control problems in communication networks and matching markets. We consider an  algorithm called Natural Policy Gradient (NPG), which is perhaps the most popular algorithm for finite state spaces, and show three results in the context of countable state spaces: (i) in the case where perfect policy evaluation is possible, we show that standard NPG converges with a small modification; (ii) if the error is policy evaluation is within a factor of the true value function, we show that one can obtain bounds on the performance of the NPG algorithms; and (iii) we will discuss the ability of neural network-based function approximations to satisfy the condition in (ii) above.  

**Analyzing spatially distributed EV charging dynamics with optimization and duality (Steven’s way)**  
**Speaker**: F. Paganini, Universidad ORT Uruguay  
**Abstract**: Optimization and control have an old and fruitful interaction, across multiple application domains. For large distributed networks, convex optimization has provided the most powerful tools for designing local controllers with global guarantees; also, to reverse engineer existing control laws.  Steven Low has taught us how to do this, in the broad domains of the Internet and the power grid.  

In this talk we consider a spatially distributed infrastructure for electrical vehicle recharging, under continuous demand and selfish station assignment. The global dynamics are reverse engineered in terms of a suitable convex optimization problem, characterizing the equilibrium and its global convergence. Results differ from the classical literature on selfish routing, in the model for station sojourn times. The appropriate model uses (Steven´s way) a fluid queue, and proofs require extensive application of convex duality.  

**Global Networks for Data Intensive Sciences The Innovations and Key Roles of Steven Low**  
**Speaker**: Harvey Newman, Caltech  
**Abstract**: It has been a pleasure to collaborate with Steven starting in 2002, with the shared goal of addressing the challenges facing the largest data intensive science programs who rely on global networks, as well as benefiting society at-large through advances in network performance and reliability. Steven’s key understanding and innovations in network protocols and stability, the resulting ability to transfer data at unprecedented rates across national and transoceanic boundaries, and his optical network experience and advances in Netlab on campus, have since helped trigger two decades of further progress across several technology generations, up to the present.

The Global Network Advancement Group (GNA-G), a worldwide collaboration bringing together major science programs, research and education networks, and advanced network R&D projects spanning the U.S, Europe, Asia, Latin America and Oceania, was founded in 2019 to carry forward the work. I founded the GNA-G Data Intensive Sciences Working Group as its chair in 2020, working with many partners in academia and industry to develop a next generation network-integrated system to meet the challenges of exabyte data volumes and terabit/sec workflows supporting thousands of scientists located throughout the world, and to clear the path to the next round of discoveries in high energy and astrophysics, bioinformatics and many other fields of data intensive science. To reach these goals, the teams are developing a dynamic and adaptive programmable system which coordinates worldwide networks as a first class resource along with computing and storage, across multiple domains. We are following a systems design approach to create a global fabric that flexibly allocates, balances and conserves the available network resources, while negotiating and working with the site-resident systems that aim to accelerate science workflow. Reinforcement and other machine learning techniques are also being developed to optimize system operations, while taking priority, policy, network- and site-state changes, workflow objectives and other constraints into account.  

**A Decade of Sustainable Data Centers**
**Speaker**: Adam Wierman, Caltech  
**Abstract**: When I arrived at Caltech, Steven's mentorship played a huge role in shaping my research directions and style.  One consequence was an increasing desire to understand the societal impact of computation, which led to a focus on developing sustainable algorithms for data centers and distributed systems.   It was a long hard road in the early days, when industry was not open to the idea that energy and carbon were important measures, but a decade on, both integration renewable energy into data centers and integration of data centers into the grid to ease the challenges associated with renewable energy are beginning to happen.  It is essential that these techniques become mainstream given the massive growth of data centers projected in the coming years as a result of the AI training and deployment.  In this talk, I'll give a brief historical recollection of how our work at Caltech has helped to enable this transition, moving all the way from theory to production deployment.  


#### **Lodging**
<!-- <div id="jump1" style="margin-bottom: 12px;"><font size='3'>in alphabetical order</font></div> -->
<div class="container1">
    <a href="https://www.marriott.com/en-us/hotels/laxot-courtyard-los-angeles-pasadena-old-town/overview/" target="_blank" class="box">
        <h2>Courtyard Marriott Pasadena</h2>
        <ul>
            <li>180 North Fair Oaks Ave</li>
            <li>Pasadena, CA 91103</li>
            <li>(626) 403-7600</li>
        </ul>
    </a>

    <a href="https://www.hilton.com/en/hotels/pasphhf-hilton-pasadena/" target="_blank" class="box">
        <h2>Hilton - Pasadena</h2>
        <ul>
            <li>168 South Los Robles Ave</li>
            <li>Pasadena, CA 91101</li>
            <li>(626) 577-1000</li>
        </ul>
    </a>
</div>

<div class="container1">
    <a href="https://www.marriott.com/en-us/hotels/burpt-hotel-dena-pasadena-los-angeles-a-tribute-portfolio-hotel/overview/" target="_blank" class="box">
        <h2>Hotel Dena</h2>
        <ul>
            <li>303 East Cordova St</li>
            <li>Pasadena, CA 91101</li>
            <li>(626) 469-8100</li>
        </ul>
    </a>

    <a href="https://be.synxis.com/?adult=1&arrive=2024-03-18&chain=26561&child=0&currency=USD&depart=2024-03-19&hotel=39736&level=hotel&locale=en-US&promo=NEGCIT&rooms=1" target="_blank" class="box">
        <h2>Pasadena Hotel</h2>
        <ul>
            <li>928 E. Colorado Blvd</li>
            <li>Pasadena, CA 91106</li>
            <li>(626) 884-4150</li>
            <li>Group Code: NEGCIT</li>
        </ul>
    </a>
</div>

<div class="container1">
    <a href="https://www.langhamhotels.com/en/the-langham/los-angeles/" target="_blank" class="box">
        <h2>The Langham</h2>
        <ul>
            <li>1401 South Oak Knoll Ave</li>
            <li>Pasadena, CA 91106</li>
            <li>(626) 568-3900</li>
        </ul>
    </a>

    <a href="https://www.marriott.com/en-us/hotels/laxpw-the-westin-pasadena/overview/" target="_blank" class="box">
        <h2>The Westin Pasadena</h2>
        <ul>
            <li>191 N. Los Robles Ave</li>
            <li>Pasadena, CA 91101</li>
            <li>(626) 792-2727</li>
        </ul>
    </a>
</div>

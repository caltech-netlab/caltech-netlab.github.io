---
layout: page
title: Part I
description: Power Systems – Steady State
img: assets/img/research/part_1.png
importance: 1
category: work
related_publications: false
---

The behavior of power systems at timescales of minutes and up is described by a set of nonlinear power flow equations modeling the Kirchhoff’s laws.

Numerous power system operations and planning applications have at their core an optimization problem called an optimal power flow (OPF) problem, first formulated by Carpentier in 1962. The simplest version takes the form of minimizing a convex cost function, such as generation cost, power loss, or user disutility, subject to the set of nonlinear power flow equations and capacity, stability and security constraints. We have studied four issues on OPF: nonconvexity, scalability, real-time optimization, and applications.

1. <b>Semidefinite Relaxation of OPF</b>
2. <b>Distributed OPF</b>
3. <b>Real-Time OPF</b>
4. <b>Applications</b>

<div id="jump1" style="margin-bottom: 12px;"><font size='5.5'>Semidefinite Relaxation of OPF</font></div>

Due to the nonlinearity of the power flow equations, OPF has a nonconvex feasible set and is NP-hard. We have developed a theory of convex relaxations of OPF that lifts the OPF feasible set to the cone of positive semidefinite matrices or the second-order cone. A relaxation is exact when an optimal solution of the original nonconvex OPF can be recovered from an optimal solution of the relaxation. We have clarified the relationship between two OPF models (the bus injection model and the branch flow model) and their relaxations, and proved sufficient conditions for exact relaxation. A good summary of the literature is the two-part tutorial:

- S. H. Low. <a href='..\..\assets\pdf\Low-201501-OPFTutorial-2hr.pdf'><b><font color='#007bff'>Convex relaxation of optimal power flow, I: formulations and equivalence</font></b></a>, <em>IEEE Trans. on Control of Network Systems</em>, 1(1): 15–27, Mar 2014
- S. H. Low. <a href='..\..\assets\pdf\Low-201501-OPFTutorial-2hr.pdf'><b><font color='#007bff'>Convex relaxation of optimal power flow, II: exactness</font></b></a>, <em>IEEE Trans. on Control of Network Systems</em>, 1(2): 177–189, June 2014
- Additional slides: <a href='..\..\assets\pdf\Low-201501-OPFTutorial-2hr.pdf'><b><font color='#007bff'>Slides</font></b></a> (CNLS Grid Science Winter School, Santa Fe, NM, Jan 2015)

Our own contributions are highlighted below.

<b>Bus injection model</b>. The question of whether the semidefinite relaxation of OPF in the bus injection model is exact is first studied in:

- J. Lavaei and S. H. Low. <a href='..\..\assets\pdf\Low-201501-OPFTutorial-2hr.pdf'><b><font color='#007bff'>Zero duality gap in optimal power flow problem</font></b></a>, <em>IEEE Trans. on Power Systems</em>, 27(1): 92-107, Feb 2012

A sufficient condition that guarantees the exactness of second-order cone relaxation of OPF on radial networks (with tree topology) in the bus injection model is proved in:

- S. Bose, D. Gayme, K. M. Chandy and S. H. Low. <a href='..\..\assets\pdf\Low-201501-OPFTutorial-2hr.pdf'><b><font color='#007bff'>Quadratically constrained quadratic programs on acyclic graphs with application to power flow</font></b></a>, <em>IEEE Trans. on Control of Network Systems</em>, 2(3): 278–287, Sept 2015

<b>Branch flow model (BFM)</b>. Baran and Wu proposed in 1989 the DistFlow model for radial networks and its linearization. It turns out that DistFlow model is much more stable numerically than the bus injection model, and its linearization has simple analytical solutions that can be proved to bound the power flow solution of the nonlinear DistFlow model (see Low (2014) tutorial part-I above).

We have proposed second-order cone (SOC) relaxation of OPF defined on the DistFlow model and proved sufficient conditions for its exactness on radial networks in:

- M. Farivar and S. H. Low. <a href='..\..\assets\pdf\Low-201501-OPFTutorial-2hr.pdf'><b><font color='#007bff'>Branch flow model: relaxations and convexification (Parts I, II)</font></b></a>, <em>IEEE Trans. on Power Systems</em>, 28(3): 2554–2564, Aug 2013
- Additional resources: <a href='..\..\assets\pdf\Low-201205-BFM.pdf'><b><font color='#007bff'>Slides</font></b></a>, <a href='https://www.youtube.com/watch?v=WMDeIAXHAAw'><b><font color='#007bff'>Video</font></b></a> (Berkeley i4Energy Seminar, Apr 2012)
- L. Gan, N. Li, U. Topcu and S. H. Low. <a href='..\..\assets\pdf\Low-201501-OPFTutorial-2hr.pdf'><b><font color='#007bff'>Exact convex relaxation of optimal power flow in radial networks</font></b></a>, <em>IEEE Trans. Automatic Control</em>, 60(1): 72–87, Jan 2015

This SOC relaxation is used to develop distributed solution of OPF for radial networks; see below.

Farivar and Low (2013) above also generalizes the DistFlow model to a branch flow model (BFM) that is applicable to general mesh network. BFM reduces to the DistFlow model when the network is radial. For mesh network, the DistFlow model is a relaxation obtained from BFM by ignoring a nonconvex cycle condition. Both the DistFlow model and BFM are single-phased. Most distribution systems are however multiphase unbalanced. BFM and its SOC relaxation are generalized to multiphase unbalanced networks and SDP relaxation in:

- L. Gan and S. H. Low. <a href='..\..\assets\pdf\Low-201501-OPFTutorial-2hr.pdf'><b><font color='#007bff'>Convex relaxations and linear approximation for optimal power flow in multiphase radial networks</font></b></a>, <em>Proc. of the 18th Power Systems Computation Conference</em>, Wroclaw, Poland, Aug 2014

<b>Equivalence</b>. We have developed various characterizations of the OPF feasible set and designed different relaxations based on these characterizations. Their relationship is studied in:

- S. Bose, S. H. Low, T. Teeraratkul and B. Hassibi. <a href='..\..\assets\pdf\Low-201501-OPFTutorial-2hr.pdf'><b><font color='#007bff'>Equivalent relaxations of optimal power flow</font></b></a>, <em>IEEE Trans. on Automatic Control</em>, 60(3): 729–742, Mar 2015

There are three important implications. First BFM is equivalent to the bus injection model in the sense that there is a bijection mapping between the solution sets of these two models. Second any sufficient condition that guarantees exact semidefinite relaxation of OPF in one model will imply the exactness of the same relaxation in the other model. Finally SOC relaxation, though much simpler computationally, is equivalent to SDP relaxation in terms of exactness, and therefore one should always solve SOC relaxation and not SDP relaxation for radial networks.

<div style="margin-bottom: 12px;"><font size='5.5'>Distributed OPF</font></div>

SDP relaxation of OPF, though convex, is still computational intensive for large networks. To scale the computation, we propose distributed algorithms to solve OPF for radial networks, both single and multiphase, using three simple ideas. First we use BFM (DistFlow model for single-phase networks and the multiphase generalization in Gan and Low (2014) for multiphase networks) because it has superior numerical stability and solve the semidefinite relaxations of OPF in BFM. Second we decompose the computation to each individual bus (or group of buses) by introducing decoupling variables and consensus constraints. Third we apply ADMM (alternating direction method of multipliers) to obtain a distributed solution. Each iteration of a standard ADMM algorithm requires solving optimization subproblems, typically iteratively. For our problem, every subproblem can be solved in closed form or reduced to a 6 × 6 eigenvalue problem regardless of the size of the network. This greatly speeds up the ADMM computation. This is explained in:

- Q. Peng and S. H. Low. <a href='..\..\assets\pdf\Low-201501-OPFTutorial-2hr.pdf'><b><font color='#007bff'>Distributed optimal power flow algorithm for radial networks, I: balanced single phase case</font></b></a>, <em>IEEE Trans. on Smart Grid</em>, 9(1): 111–121, Jan 2018
- Q. Peng and S. H. Low. <a href='..\..\assets\pdf\Low-201501-OPFTutorial-2hr.pdf'><b><font color='#007bff'>Distributed algorithm for optimal power flow on an unbalanced radial network</font></b></a>, <em>Proc. of IEEE Conference on Decision and Control</em>, Osaka, Japan, Dec 2015

<div style="margin-bottom: 12px;"><font size='5.5'>Real-Time OPF</font></div>

Even though the algorithms above are distributed, they iterate on all variables in the cyberspace until they converge before their solutions are applied to the physical grid. In particular, the intermediate iterates typically do not satisfy the power flow equations nor operational constraints. While offline algorithms are suitable for traditional applications such as economic dispatch or state estimation, they may become inadequate for realtime optimization of DERs in the future, especially in the presence of fluctuating loads and volatile renewables.

We have developed real-time OPF algorithms that iterate only on variables corresponding to controllable devices (e.g., intelligent loads) in feedback interaction with the grid, modeled by power flow equations, as illustrated in <a href='..\..\assets\img\research\power-systems-steady-state\power-systems-steady-state-realtimeOPF1.svg'><b><font color='#007bff'>Figure 1</font></b></a>. The control objective is specified by an optimization problem and our goal is to design a real-time feedback controller so that the closed-loop system converges to an equilibrium that solves the optimization problem. The basic idea is to explicitly exploit power network as a power flow solver, update our control variables by taking a single first-order or second-order gradient direction and apply it to the network in each iteration, without waiting for the computation to converge. The network will solve the power flow equations in response of the control input and produce a new network state, which is then used to compute the next gradient iteration for the control variables, and the cycle repeats, as illustrated in <a href='..\..\assets\img\research\power-systems-steady-state\power-systems-steady-state-realtimeOPF2.svg'><b><font color='#007bff'>Figure 2</font></b></a>. An important advantage of this is that such algorithms naturally tracks the solution of timevarying OPF problems, when changes manifest themselves in the network state that is used to calculate the control. First-order real-time OPF algorithms are explained in:

- L. Gan and S. H. Low. <a href='..\..\assets\pdf\Low-201501-OPFTutorial-2hr.pdf'><b><font color='#007bff'>An online gradient algorithm for optimal power flow on radial networks</font></b></a>, <em>IEEE Journal on Selected Areas in Communications</em>, Special issue on Emerging technologies in communications, 34(3): 625–638, Mar 2016
- Additional slides: <a href='..\..\assets\pdf\Low-201603-OnlineAlg-CISS.pdf'><b><font color='#007bff'>Slides</font></b></a> (CISS Plenary, Princeton, Mar 2016)

and second-order algorithms in:

- Y. Tang, K. Dvijotham, and S. H. Low. <a href='..\..\assets\pdf\Low-201501-OPFTutorial-2hr.pdf'><b><font color='#007bff'>Real-time optimal power flow</font></b></a>, <em>IEEE Trans. on Smart Grid</em>, Special Issue on Distributed control and efficient optimization methods for smart grid, 8(6): 2963–2973, Nov 2017
- Y. Tang, E. Dall’Anese, A. Bernstein, and S. H. Low. <a href='..\..\assets\pdf\Low-201501-OPFTutorial-2hr.pdf'><b><font color='#007bff'>A Feedback-Based Regularized Primal-Dual Gradient Method for Time-Varying Nonconvex Optimization</font></b></a>, <em>Proc. IEEE Conference on Decision and Control</em>, Florida, US, Dec 2018

<div style="margin-bottom: 12px;"><font size='5.5'>Applications</font></div>

<b>Storage sizing and placement</b>. We have studied the problem of optimal placement and capacity of energy storage devices in a distribution network to minimize total energy loss, focusing on the structural properties of optimal strategies. A continuous tree with linearized Dist-Flow model is developed to model the distribution network. When all loads have the same shape, we prove that it is optimal to place storage devices near the leaves of the network away from the substation, and that the scaled storage capacity monotonically increases towards the leaves. Moreover, under optimal storage placement, the locational marginal value of storage is equalized wherever nonzero storage is deployed and increases from the substation towards any leaf node over places where there is zero storage deployment. We illustrate through simulations that these structural properties are robust in that they hold approximately when some of our modeling assumptions are relaxed. This is explained in:

- Y. Tang and S. H. Low. <a href='..\..\assets\pdf\Low-201501-OPFTutorial-2hr.pdf'><b><font color='#007bff'>Optimal placement of energy storage in distribution networks</font></b></a>, <em>IEEE Trans. on Smart Grid</em>, special issue on Distributed control and efficient optimization methods for smart grid, 8(6): 3094–3103, Nov 2017

<div style="text-align:center;">
  <figure>
    <img src="..\..\assets\img\research\power-systems-steady-state\injection_charging.png" style="width: 60%; height: auto;">
    <figcaption>Figure 3: An example of a typical charging and discharging curve</figcaption>
  </figure>
</div>

<b>Volt/var control</b>. Traditional voltage control in a distribution network is achieved by reconfiguring shunt capacitors or voltage regulators, at a slow timescale, mainly to adapt to the gradual changes of the aggregate load on a feeder. As wind and solar generations proliferate, voltage fluctuations will become rapid, large and random, necessitating faster controllers. Inverters can provide real-time voltage control by adapting its output reactive power in response to network state. This is formulated as an OPF problem, using DistFlow model, and solved through SOC relaxation in:

- M. Farivar, C. R. Clarke, S. H. Low and K. M. Chandy. <a href='..\..\assets\pdf\Low-201501-OPFTutorial-2hr.pdf'><b><font color='#007bff'>Inverter VAR control for distribution systems with renewables</font></b></a>, <em>Proc. IEEE SmartGridComm Conference</em>, Brussels, Belgium, Oct 2011

This paper is the first to propose SOC relaxation of OPF for radial networks using the DistFlow model and proves its exactness.

The solution above through OPF is centralized where optimal inverter decisions over the distribution system are coordinated using global information. A decentralized approach where each inverter adapts in real time its own reactive power output based only on its local bus voltage is developed in:

- M. Farivar, L. Chen and S. H. Low. <a href='..\..\assets\pdf\Low-201501-OPFTutorial-2hr.pdf'><b><font color='#007bff'>Equilibrium and dynamics of local voltage control in distribution systems</font></b></a>, <em>Proc. IEEE Conference on Decision and Control</em>, Florence, Italy, Dec 2013

The system consisting of the network modeled by a linearization of the DistFlow model and the inverter control forms a closed-loop dynamical system. We prove that this dynamical system has a unique equilibrium point, the equilibrium is an optimal solution of a certain convex optimization problem, and the cost function of the optimization problem is a Lyapunov function of the dynamics, certifying the global asymptotic stability of the equilibrium.

<b>PV adoption and infrastructure investment</b>. As the cost of photovoltaic (PV) generation continues to drop, more households will have an economic incentive to adopt rooftop PV systems and reduce their purchases of electricity from the grid. A significant portion of the costs incurred by utility companies are fixed costs, and therefore electricity rates must increase in order for utility companies to recover these fixed costs from shrinking sales bases, potentially driving more households to adopt PV systems. In:

- D.W.H. Cai, S. Adlakha, S. H. Low, P. De Martini and K. M. Chandy. <a href='..\..\assets\pdf\Low-201501-OPFTutorial-2hr.pdf'><b><font color='#007bff'>Impact of residential PV adoption on retail electricity rates</font></b></a>, <em>Energy Policy</em>, 62(C): 830–843, 2013

we model this feedback between PV adoption and electricity rates and study its impact on future PV penetration and net-metering costs using real data from the Southern California Edison. This motivates an infrastructure investment problem faced by a social planner who seeks to minimize the long-term discounted costs (associated with both the procurement and the usage of conventional and distributed generation resources), subject to meeting an inelastic demand for electricity. We fully characterize the optimal investment policy for the social planner in:

- D.W.H. Cai, Y. Xu and S. H. Low. <a href='..\..\assets\pdf\Low-201501-OPFTutorial-2hr.pdf'><b><font color='#007bff'>Optimal investment of conventional and renewable generation assets</font></b></a>, <em>Proc. 51st Annual Allerton Conference on Communication, Control, and Computing</em>, Monticello, IL, Oct 2013

<b>Demand response</b>. Demand-side management will be a key component of future smart grid that can help reduce peak load and adapt elastic demand to fluctuating supply. We propose in the following a scheduling approach based on utility maximization where an appliance provides a certain benefit depending on the pattern or volume of power it consumes and the goal is to schedule consumptions to maximize social welfare subject to various consumption and power constraints:

- N. Li, L. Chen and S. H. Low. <a href='..\..\assets\pdf\Low-201501-OPFTutorial-2hr.pdf'><b><font color='#007bff'>Optimal demand response based on utility maximization in power networks</font></b></a>, <em>Proceedings of the 2011 IEEE Power & Energy Society General Meeting</em>, Detroit, MI, July 2011
- L. Chen, N. Li, L. Jiang and S. H. Low. <a href='..\..\assets\pdf\Low-201501-OPFTutorial-2hr.pdf'><b><font color='#007bff'>Optimal demand response: problem formulation and deterministic case</font></b></a>, In <em>Control and Optimization Theory for Electric Smart Grids</em>, Aranya Chakrabortty and Marija Ilic, Editors, Springer 2012

Time-varying prices can be used to align individual optimality with social optimality.

Model predictive control is an effective approach for deferrable load control. Though the average-case performance of such control has been studied in the literature, the distribution of the performance has been elusive. In:

- N. Chen, L. Gan, S. H. Low and A. Wierman. <a href='..\..\assets\pdf\Low-201501-OPFTutorial-2hr.pdf'><b><font color='#007bff'>Distributional analysis for model predictive deferrable load control</font></b></a>, <em>Proc. of the 53rd IEEE Conference on Decision and Control</em>, Los Angeles, CA, Dec 2014

we prove strong concentration results on the load variation under model predictive deferrable load control. They suggest that the typical performance is tightly concentrated around the average-case performance.

Supply function equilibrium can be used to design pricing mechanisms to incentivice demand response. A simple uniform-price mechanism is proposed in:

- Yunjian Xu, Na Li, and S. H. Low. <a href='..\..\assets\pdf\Low-201501-OPFTutorial-2hr.pdf'><b><font color='#007bff'>Demand response with capacity constrained supply function bidding</font></b></a>, <em>IEEE Trans. Power Systems</em>, 31(2): 1377–1394, Mar 2016

that achieves approximate social optimality at a Nash equilibrium, provided the total capacity excluding the consumer with the largest capacity is much larger than the total amount of required load reduction.

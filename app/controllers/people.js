import Controller from '@ember/controller';

const people = {
  facultyCollaborators: [
    {
      name: "Adam Wierman",
      position: "Professor of Computing and Mathematical Sciences; Executive Officer for Computing and Mathematical Sciences; Director, Information Science and Technology",
      imageClass: "adam-wierman",
      link: "http://users.cms.caltech.edu/~adamw/"
    },
    {
      name: "John Doyle",
      position: "Jean-Lou Chameau Professor of Control and Dynamical Systems, Electrical Engineering, and Bioengineering",
      imageClass: "john-doyle",
      link: "http://www.cds.caltech.edu/~doyle/wiki/index.php?title=Main_Page"
    },
    {
      name: "Mani Chandy",
      position: "Simon Ramo Professor of Computer Science, Emeritus",
      imageClass: "mani-chandy",
      link: "http://www.cms.caltech.edu/people/mani"
    }
  ],
  admin: [
    {
      name: "Christine Ortega",
      position: "Laboratory Research Assistant",
      imageClass: "christine"
    }
  ],
  postdocs: [
    {
      name: "Guannan Qu",
      position: "Postdoctoral Scholar in Computing and Mathematical Sciences",
      imageClass: "guannan-qu",
      link: "http://guannanqu.com",
      research: [
        "Guannan obtained his B.S. degree from Tsinghua University in 2010, and his Ph.D. degree from Harvard University in 2019. He is broadly interested in optimization, control, and learning, particularly in networked systems like the electric power system, multi-agent systems and other cyber-physical networked systems. His research has involved developing distributed decision-making rules where each agent uses only local information but can achieve desirable global behavior. Examples include distributed optimization in multi-agent systems, distributed control in power systems, etc."
      ]
    }
  ],
  graduates: [
    {
      name: "Zach Lee",
      position: "PhD in Electrical Engineering",
      imageClass: "zach-lee",
      link: "http://www.its.caltech.edu/~zlee/",
      research: [
        "I am broadly interested in cyber-physical energy systems and the intersection of power systems, computer science, and software engineering. Specifically, I am currently working on systems for adaptive electric vehicle charging which uses software to allow users to install more EV charging stations at parking facilities without expensive infrastructure upgrades. I am also interested in microgrid design and control, distributed energy resources (DER), demand response, energy storage systems, and renewable energy integration."
      ]
    },
    {
      name: "Chen Liang",
      position: "PhD in Computing and Mathematical Sciences",
      imageClass: "chen-liang",
      research: [
        "My research interests include network science, graph theory, and power system analysis. Currently, I'm working on cascading failures in power systems."
      ]
    },
    {
      name: "Fengyu Zhou",
      position: "PhD in Electrical Engineering",
      imageClass: "fengyu-zhou",
      link: "https://scholar.google.com/citations?hl=en&user=i-oBMbYAAAAJ&view_op=list_works&gmla=AJsN-F750ajwJtiVfwwVEcPKbsi9QeYae3weVYD28AV8FCNsuryOGtodjf2dIA_nULOZCD5dMnjy_9jUqkO4CffF9yAkq6U7ts7Yd1RITjBfaggTor2Gf_8",
      research: [
        "I am interested in the control, optimization and signal processing in smart grid and cyber physical systems, as well as the mathematical optimization theory behind those problems. Currently, I am working on the load disaggregation in networked power systems."
      ]
    },
    {
      name: "Tongxin Li",
      position: "PhD in Computing and Mathematical Sciences",
      imageClass: "tongxin-li",
      link: "http://tongxin.me",
      research: [
        "Tongxin’s research interest focuses primarily on problems arising in electric grids and theoretical machine learning. He has been working on interdisciplinary research problems such as graph topology identification, causal inference and ACN (adaptive EV charging network) control using data-driven methods. Prior to joining Caltech in 2017 as a PhD, he worked on various topics in communication and information theory such as group testing, compressed sensing, deletion channels and adversarial channels, etc. He received two bachelor degrees in both mathematics and information engineering from CUHK."
      ]
    },
    {
      name: "Lucien Werner",
      position: "PhD in Computing and Mathematical Sciences",
      imageClass: "lucien-werner",
      research: [
        "I am a first-year graduate student interested in cyber-physical systems, in particular stability analysis and control of power networks. In the past I have researched pattern formation in dynamical systems. Outside of mathematics, I have a career as a cellist and continue to perform around the world--often with my three sisters who are all also musicians and mathematicians. Prior to joining Caltech, I received degrees in mathematics, music, and politics from Northwestern University, Harvard University, and Montana State University."
      ]
    },
    {
      name: "Sunash Sharma",
      position: "Schmidt Academy Software Engineer",
      imageClass: "sunash-sharma",
      research: [
        "At a high level, I'm interested in developing robust software that enables impactful research. My work focuses on developing a simulation platform and live testbed for adaptive electric vehicle charging. I'm part of the inaugural class of the Schmidt Academy at Caltech, the aim of which is to bring well-engineered software to research groups around campus. In the past, I've worked on software and research in developmental biophysics, computational fluid dynamics. and quantum computation."
      ]
    }
  ],
  // visitingPhDStudents: [{
  //   name: "Su Wang",
  //   position: "PhD in Electronic and Computer Engineering, Hong Kong University of Science and Technology",
  //   imageClass: "su-wang",
  //   research: [
  //     "My research interests are in the general area of optimization and game theory, with applications to power systems and electricity markets. I focus on the strategic behaviour analysis and market design in networked wholesale electricity markets."
  //   ]
  // },
  // {
  //   name: "Andreas Venzke",
  //   position: "PhD in Electrical Engineering, Technical University of Denmark",
  //   imageClass: "andreas-venzke",
  //   research: [
  //     "My research interests include the areas of optimization under uncertainty with applications to power systems, and machine learning tools for physical systems. Currently, I am working on verifiable and physics-aware machine learning tools with applications to power systems, addressing an obstacle toward their adoption in practice."
  //   ]
  // }
  // ],
  // visitingPostdocs: [{
  //   name: "Bo Sun",
  //   position: "Postdoc Scholar in Electronic and Computer Engineering, Hong Kong University of Science and Technology",
  //   imageClass: "bo-sun",
  //   research: [
  //     "My research focuses on stochastic modeling and optimization with applications to smart energy systems. Currently, I am working on energy and mobility management of electric vehicles with plug-in charging and battery swapping, and transactive control of distributed energy resources in smart grids."
  //   ]
  // }],
  pastPostdocs: [
    { name: "Ki-Baek Kim", duration: "2001 - 2003" },
    { name: "Cheng Jin",
      duration: "2002 - 2005",
      current: "Akamai",
      link: "https://www.linkedin.com/in/cheng-jin-8532141/" },
    { name: "Werner Almsberger", duration: "2002 - 2003" },
    { name: "Joon-Young Choi", duration: "2004 - 2005" },
    { name: "Bartek Wydrowski", duration: "2004 - 2005", current: "Google", link: "https://www.linkedin.com/in/bartek-wydrowski-2164a4b/" },
    { name: "Lachlan Andrew", duration: "2005 - 2008", current: "Monash University", link: "http://monash.edu/research/explore/en/persons/lachlan-andrew(fe94bb6c-9fab-4b23-ada5-d47c0d39729b).html" },
    { name: "Chee-Wei Tan", duration: "2008 - 2009", current: "City University of Hong Kong", link: "http://www.cs.cityu.edu.hk/~cheewtan/" },
    { name: "Sachin Adlakha",
      duration: "2010 - 2013",
      current: "NMLStream",
      link: "https://www.linkedin.com/in/sachin-adlakha-682aa061/" },
    { name: "Libin Jiang", duration: "2010 - 2012", current: "Qualcomm", link: "https://www.linkedin.com/in/libin-jiang-45176b14/" },
    { name: "Dennice Gayme",
      duration: "2011 - 2012",
      current: "Johns Hopkins",
      link: "https://engineering.jhu.edu/gayme/" },
    { name: "Eilyan Bitar", duration: "2011 - 2012", current: "Cornell", link: "https://bitar.engineering.cornell.edu/" },
    { name: "Yunjian Xu", duration: "2012 - 2013", current: "Singapore University of Technology and Design", link: "https://esd.sutd.edu.sg/people/faculty/yunjian-xu" },
    { name: "Enrique Mallada", duration: "2013 - 2015", current: "Johns Hopkins", link: "https://mallada.ece.jhu.edu/" },
    { name: "Krishnamurthy Dvijotham", duration: "2014 - 2016", current: "DeepMind (Google)", link: "https://dvij.github.io/" },
    { name: "James Anderson", duration: "2017 - 2019", current: "Columbia University", link: "https://www.ee.columbia.edu/james-anderson" }
  ],
  pastGraduateStudents: [

    { name: "David Lapsley", degree: "PhD 1999", degree_university: "Melbourne University", current: "Cisco", link: "https://www.linkedin.com/in/davidlapsley" },
    { name: "Jiantao Wang", shared: "Doyle", degree: "PhD 2005", current: "Goldman Sachs", link: "https://www.linkedin.com/in/jiantao-wang-2127333" },
    { name: "Lijun Chen", shared: "Doyle", degree: "PhD 2006", current: "U Colorado, Boulder", link: "http://spot.colorado.edu/~lich1539/" },
    { name: "Lun Li", shared: "Doyle", degree: "PhD 2006", current: "OpenX, Pasadena", link: "https://www.linkedin.com/in/lunli/" },
    { name: "Mortada Meyhar", degree: "PhD 2006", current: "Tesla", link: "https://www.linkedin.com/in/mortada" },
    { name: "Kevin Tang", degree: "PhD 2006", current: "Cornell ECE", link: "https://people.ece.cornell.edu/atang/" },
    { name: "David Wei", degree: "PhD 2006", current: "Facebook", link: "https://www.linkedin.com/in/davidwei79" },
    { name: "Jayakrishnan Nair", shared: "Wierman", degree: "PhD 2012", current: "Indian Institute of Sciences", link: "https://www.ee.iitb.ac.in/web/faculty/homepage/jayakrishnan.nair" },
    { name: "Subhonmesh Bose", degree: "PhD 2014", current: "UIUC ECE", link: "https://www.ece.illinois.edu/directory/profile/boses" },
    { name: "Na Li", shared: "Doyle", degree: "PhD 2014", current: "Harvard EAS", link: "https://nali.seas.harvard.edu/" },
    { name: "Zhenhua Liu", shared: "Wierman", degree: "PhD 2014", current: "SUNY Stony Brook", link: "http://www.ams.stonybrook.edu/~zhliu/" },
    { name: "Lingwen Gan", degree: "PhD 2015", current: "Facebook", link: "https://www.a-star.edu.sg/ihpc/People/tid/355/Desmond-Cai-Wuhan.aspx" },
    { name: "Desmond Cai", shared: "Wierman", degree: "PhD 2016", current: "Singapore A*STAR", link: "https://www.a-star.edu.sg/ihpc/People/tid/355/Desmond-Cai-Wuhan.aspx" },
    { name: "Qiuyu Peng", degree: "PhD 2016", current: "Nuro", link: "https://www.linkedin.com/in/qiuyu-gavin-peng-2815a427" },
    { name: "Changhong Zhao", degree: "PhD 2016", current: "NREL", link: "https://sites.google.com/site/changhongzhao19/" },
    { name: "Niangjun Chen", shared: "Wierman", degree: "Phd 2017", current: "Singapore A*STAR", link: "https://niangjunchen.github.io" },
    { name: "John Pang", shared: "Wierman", degree: "PhD 2019", current: "Schlumberger", link: "https://j-pang.github.io//#work" },
    { name: "Linqi (Daniel) Guo", degree: "PhD 2019", current: "Stealth Startup", link: "https://scholar.google.com/citations?user=QixlSO4AAAAJ&hl=en" },
    { name: "Yujie Tang", degree: "PhD 2019", current: "Harvard", link: "https://www.seas.harvard.edu/directory/ytang" },
    { name: "Youngmi Ohk", degree: "MS 1998", degree_university: "Melbourne University", current: "Dawson Consulting Pty Ltd", link: "https://www.linkedin.com/in/youngmi-ohk-08b56/" },
    { name: "Sanjeewa Athuraliya", degree: "MS 2000", current: "Ergon Energy", link: "https://www.linkedin.com/in/sanjeewa-athuraliya-71b31a5/" },
    { name: "Craig Cameron", degree: "MS 2002", current: "Finisa", link: "https://www.linkedin.com/in/craigcameron/" },
    { name: "John Pongsajapan", degree: "MS, 2006", current: "Square", link: "https://www.linkedin.com/in/johnpongsajapan/" },
    { name: "Cheng Hu", degree: "MS 2006" },
    { name: "Kevin Phan", degree: "MS 2009" },
    { name: "Masoud Farivar", degree: "MS 2010", current: "Google", link: "https://www.linkedin.com/in/mfarivar/" },
    { name: "George Lee", degree: "MS 2011", current: "Akamai", link: "https://www.linkedin.com/in/george-lee-17b3596/" }
  ],
  pastVisitingFaculty: [
    { name: "Jin S Lee", duration: "2012", department: "EE", university: "Postech, Korea" },
    { name: "Fernando Paganini", duration: "2013", department: '', university: "Universidad ORT, Uruguay" },
    { name: "Angela Zhang", duration: "2014", department: '', university: "Chinese University of Hong Kong" },
    { name: "Feng Liu", duration: "2015 - 2016", department: "Electrical Engineering", university: "Tsinghua University, Beijing, China" },
    { name: "Janusz Bialek", duration: "2017", department: "Skoltech", university: "Moscow, Russia" }
  ],
  pastVisitingPhDStudents: [
    { name: "Hyojeong (Dawn) Choe", duration: "2001 - 2003", department: "ECE", university: "Postech, Korea" },
    { name: "Kyungmo Koo", duration: "2004 - 2005", department: "ECE", university: "Postech, Korea" },
    { name: "Krister Jacobsson", duration: "2008 - 2009", university: "KTH, Sweden" },
    { name: "Jongkyoo Kim", duration: "2010 - 2011", department: "ECE", university: "Postech, Korea" },
    { name: "Kai Wang", duration: "2010 - 2011", department: "CS", university: "Tsinghua University, China" },
    { name: "Chengdi Lai", duration: "2012 - 2013", department: "Fulbright Scholar, EEE", university: "Hong Kong University" },
    { name: "Daniela Meola", duration: "2013 - 2014", department: "Control Department", university: "Università del Sannio, Italy" },
    { name: "Yongmin Zhang", duration: "2013 - 2014", department: "Control Department", university: "Zhejiang University, China" },
    { name: "Junhao Lin", duration: "2015 - 2016", department: "EEE", university: "Hong Kong University" },
    { name: "Zhaojian Wang", duration: "2016-2017", department: "EE", university: "Tsinghua University, China" },
    { name: "Pengcheng You", duration: "2016-2017", department: "ME & ECE", current: "Johns Hopkins University, USA", link: "https://sites.google.com/view/pengcheng-you" },
    { name: "Yue Chen", duration: "2018-2019", department: "EE", current: "Tsinghua University, China", link: "https://sites.google.com/view/academicyuechen/home" },
    { name: "Chenxi (Stephanie) Sun", duration: "2018-2019", department: "EEE", current: "Hong Kong University" },
    { name: "Bo Sun", duration: "2019-2020", department: "ECE", current: "Hong Kong University of Science and Technology", link: "http://c2e.ece.ust.hk/sunbo" },
    { name: "Andreas Venzke", duration: "2019-2020", department: "EE", current: "Technical University of Denmark" },
    { name: "Su Wang", duration: "2019-2020", department: "ECE", current: "Hong Kong University of Science and Technology", link: "http://c2e.ece.ust.hk/su"}
  ]
};

export default Controller.extend({
  people: people
});
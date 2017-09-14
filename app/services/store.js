import Ember from 'ember';
import Highlight from 'netlab/models/highlight'
import Publication from 'netlab/models/publication'

const highlights = [];

let highlight = Highlight.create({
  id: '1',
  title: 'A network of intelligent DER',
  content: Ember.String.htmlSafe('<ul><li>2014-09-18 - <a href="https://rigorandrelevance.wordpress.com/2014/09/18/a-network-of-intelligent-der/">rigor+relevance</a></li></ul>')
});
highlights.pushObject(highlight);

highlight = Highlight.create({
  id: '2',
  title: 'Communication and power networks: Architecture',
  content: Ember.String.htmlSafe('<ul><li>2013-11-26 - <a href="https://rigorandrelevance.wordpress.com/2013/11/26/power-network-and-internet-i-architecture/">Part I</a></li><li>2013-12-02 - <a href="https://rigorandrelevance.wordpress.com/2013/12/02/communication-and-power-networks-architecture-part-ii/">Part II</a></li></ul>')
});
highlights.pushObject(highlight);

highlight = Highlight.create({
  id: '3',
  title: 'Communication and power networks: Flow optimization',
  content: Ember.String.htmlSafe('<ul><li>2014-05-05 - <a href=""https://rigorandrelevance.wordpress.com/2014/05/05/communication-and-power-networks-flow-optimization-part-i/">Part I</a></li><li>2014-05-19 - <a href="https://rigorandrelevance.wordpress.com/2014/05/19/communication-and-power-networks-flow-optimization-part-ii/">Part II</a></li></ul>')
});
highlights.pushObject(highlight);

highlight = Highlight.create({
  id: '4',
  title: 'Communication and power networks: Forward engineering',
  content: Ember.String.htmlSafe('<ul><li>2014-07-08 - <a href="https://rigorandrelevance.wordpress.com/2014/07/08/communication-and-power-networks-reverse-and-forward-engineering-part-i/">Part I</a></li><li>2014-07-15 - <a href="https://rigorandrelevance.wordpress.com/2014/07/15/communication-and-power-networks-reverse-and-forward-engineering-part-ii/">Part II</a></li></ul>')
});
highlights.pushObject(highlight);

highlight = Highlight.create({
  id: '4',
  title: 'Business case of DER and utility',
  content: Ember.String.htmlSafe('<ul><li>2014-12-02 - <a href="https://rigorandrelevance.wordpress.com/2014/12/02/business-case-for-der-and-utility/">rigor+relevance</a></li></ul>')
});
highlights.pushObject(highlight);

const publications = [];
const recentPublications = [];

const people = {
  facultyCollaborators: [
    {
      name: "Adam Wierman",
      position: "Professor of Computing and Mathematical Sciences; Executive Officer for Computing and Mathematical Sciences; Director, Information Science and Technology",
      imageClass: "adam-wierman"
    },
    {
      name: "John Doyle",
      position: "Jean-Lou Chameau Professor of Control and Dynamical Systems, Electrical Engineering, and Bioengineering",
      imageClass: "john-doyle"
    },
    {
      name: "Mani Chandy",
      position: "Simon Ramo Professor of Computer Science, Emeritus",
      imageClass: "mani-chandy"
    }
  ],
  admin: [
    { name: "Christine Ortega" }
  ],
  staff: [
    { name: "Ted Lee", position: "Software Developer", imageClass: "ted-lee" },
    { name: "Rand Lee", position: "Software Developer" },
    { name: "Daniel Chang", position: "Software Developer"}
  ],
  postdocs: [
    {
      name: "James Anderson",
      position: "Senior Postdoctoral Scholar in Computing and Mathematical Sciences",
      imageClass: "james-anderson",
      link: "http://www.its.caltech.edu/~james/",
      research: [
        "James is interested in distributed robust control, computational analysis of nonlinear dynamical systems, and scalable convex optimization methods with applications in systems biology and power systems. In particular, with regards to power systems, his research looks at the problem of disaggregating network data with the goal of creating realistic models that can be used for optimal power flow problems. This project aims to protect the data that belongs to grid operators while providing meaningful models for researchers to work with."
      ]
    }
  ],
  graduates : [
    {
      name: "Niangjun Chen",
      shared: "Wierman",
      position: "Graduate student in Computer Science",
      imageClass: "niangjun-chen",
      link: "http://users.cms.caltech.edu/~ncchen/",
      research: [
        "My research interests lie in online algorithms, optimization and mechanism design and their applications to the future energy systems."
      ]
    },
    {
      name: "Yujie Tang",
      position: "Graduate Student in Electrical Engineering",
      imageClass: "yujie-tang",
      link: "https://www.researchgate.net/profile/Yujie_Tang3",
      research: [
        "Research interest: Optimization and control of power systems, with a particular focus on the planning and control of distributed energy resources in smart grids."
      ]
    },
    {
      name: "Daniel Guo",
      position: "Graduate Student in Computing and Mathematical Sciences",
      imageClass: "daniel-guo",
      research: [
        "Daniel’s research focuses on understanding the impact of network topology to dynamical systems, platform efficiency and online algorithms. His current projects involve cyber-physical network interaction and optimization, load-side frequency control and cascading failure analysis. He is generally interested in spectral graph theory, random matrix theory, matriod theory and how they can be applied to engineering systems."
      ]
    },
    {
      name: "John Pang",
      shared: "Wierman",
      position: "Graduate Student",
      imageClass: "john-pang",
      research: [
        "John works in the union of power systems and economics, and aims to learn more about electricity markets and how we can truthfully elicit participation from (controllable load, controllable generation and renewable generation) participants to promote a more efficient and robust power system. He has worked on platforms on networked markets and also implementing frequency control under a limited control coverage. Previously, John also worked on data analysis and machine learning while he was at A*STAR, Singapore."
      ]
    },
    {
      name: "Zach Lee",
      position: "Graduate Student in Electrical Engineering",
      imageClass: "zach-lee",
      link: "http://www.its.caltech.edu/~zlee/",
      research: [
        "I am broadly interested in cyber-physical energy systems and the intersection of power systems, computer science, and software engineering. Specifically, I am currently working on systems for adaptive electric vehicle charging which uses software to allow users to install more EV charging stations at parking facilities without expensive infrastructure upgrades. I am also interested in microgrid design and control, distributed energy resources (DER), demand response, energy storage systems, and renewable energy integration."
      ]
    },
    {
      name: "Fengyu Zhou",
      position: "Graduate Student",
      imageClass: "fengyu-zhou",
      link: "https://scholar.google.com/citations?hl=en&user=i-oBMbYAAAAJ&view_op=list_works&gmla=AJsN-F750ajwJtiVfwwVEcPKbsi9QeYae3weVYD28AV8FCNsuryOGtodjf2dIA_nULOZCD5dMnjy_9jUqkO4CffF9yAkq6U7ts7Yd1RITjBfaggTor2Gf_8",
      research: [
        "I am interested in the control, optimization and signal processing in smart grid and cyber physical systems, as well as the mathematical optimization theory behind those problems. Currently, I am working on the load disaggregation in networked power systems."
      ]
    },
    {
      name: "Lucien Werner",
      position: "Graduate Student",
      imageClass: "lucien-werner",
      link: "https://scholar.google.com/citations?hl=en&user=i-oBMbYAAAAJ&view_op=list_works&gmla=AJsN-F750ajwJtiVfwwVEcPKbsi9QeYae3weVYD28AV8FCNsuryOGtodjf2dIA_nULOZCD5dMnjy_9jUqkO4CffF9yAkq6U7ts7Yd1RITjBfaggTor2Gf_8",
      research: [
        "I am a first-year graduate student interested in cyber-physical systems, in particular stability analysis and control of power networks. In the past I have researched pattern formation in dynamical systems. Outside of mathematics, I have a career as a cellist and continue to perform around the world--often with my three sisters who are all also musicians and mathematicians. Prior to joining Caltech, I received degrees in mathematics, music, and politics from Northwestern University, Harvard University, and Montana State University."
      ]
    },
    {
      name: "Tongxin Li",
      position: "Graduate Student",
      imageClass: "tongxin-li",
      research: [
        "My research interests have been mainly focused on problems arising in applications of communication. I have been thinking about issues in various topics including group testing, compressed sensing, deletion channels and adversarial channels, etc. Most of the concerned issues are highly related to mathematical problems in combinatorics, probability theory and optimization.",
        "During my undergraduate time, I have studied probabilistic group testing and the communication complexity of a compressed sensing decoder. My master thesis is about finding the capacities of channels with quadratic constraints and causal adversaries. Apart from above, I have considered some open problems related to deletion channels.",
        "I will be a fresh doctoral student since September 2017. I am looking forward exploring more fields during my graduate study. In the future, my focuses will likely be changed. Solving problems in communication/power networks will be the central part of my research."
      ]
    },
  ],
  visitingPhDStudents: [
    {
      name: "Zhaojian Wang",
      position: "Electrical Engineering, Tsinghua University, China",
      imageClass: "zhaojian-wang",
      duration: "2016 - 2017",
      link: "https://scholar.google.com/citations?hl=en&user=4eq1UVYAAAAJ&view_op=list_works"
    },
    {
      name: "Pengcheng You",
      position: "Control Department, Zhejiang University, China",
      imageClass: "pengcheng-you",
      duration: "2016 - 2017",
      link: "http://www.sensornet.cn/pcyou/index.html",
      research: [
        "My research is directed towards the design and application of advanced optimization and machine learning algorithms in power and energy related fields, with the current emphasis on electric vehicles and power markets."
      ]
    }
  ],
  pastPostdocs: [
    { name: "Ki-Baek Kim", duration: "2001 - 2003" },
    { name: "Cheng Jin", duration: "2002 - 2005", current: "Akamai",
      link: "https://www.linkedin.com/in/cheng-jin-8532141/" },
    { name: "Werner Almsberger", duration: "2002 - 2003" },
    { name: "Joon-Young Choi", duration: "2004 - 2005" },
    { name: "Bartek Wydrowski", duration: "2004 - 2005", current: "Google", link: "https://www.linkedin.com/in/bartek-wydrowski-2164a4b/" },
    { name: "Lachlan Andrew", duration: "2005 - 2008", current: "Monash University", link: "http://monash.edu/research/explore/en/persons/lachlan-andrew(fe94bb6c-9fab-4b23-ada5-d47c0d39729b).html" },
    { name: "Chee-Wei Tan", duration: "2008 - 2009", current: "City University of Hong Kong", link: "http://www.cs.cityu.edu.hk/~cheewtan/" },
    { name: "Sachin Adlakha", duration: "2010 - 2013", current: "NMLStream",
link: "https://www.linkedin.com/in/sachin-adlakha-682aa061/" },
    { name: "Libin Jiang", duration: "2010 - 2012", current: "Qualcomm", link: "https://www.linkedin.com/in/libin-jiang-45176b14/" },
    { name: "Dennice Gayme", duration: "2011 - 2012", current: "Johns Hopkins",
      link: "https://engineering.jhu.edu/gayme/" },
    { name: "Eilyan Bitar", duration: "2011 - 2012", current: "Cornell", link: "https://bitar.engineering.cornell.edu/" },
    { name: "Yunjian Xu", duration: "2012 - 2013", current: "Singapore University of Technology and Design", link: "https://esd.sutd.edu.sg/people/faculty/yunjian-xu" },
    { name: "Enrique Mallada", duration: "2013 - 2015", current: "Johns Hopkins", link: "https://mallada.ece.jhu.edu/" },
    { name: "Krishnamurthy Dvijotham", duration: "2014 - 2016", current: "DeepMind (Google)", link: "https://dvij.github.io/" }
  ],
  pastGraduateStudents: [
    { name: "David Lapsley", degree: "PhD 1999", degree_university: "Melbourne University", current: "Cisco", link: "https://www.linkedin.com/in/davidlapsley" },
    { name: "Jiantao Wang", shared: "Doyle", degree: "PhD 2005", current: "Goldman Sachs", link: "https://www.linkedin.com/in/jiantao-wang-2127333"},
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
    { name: "Qiuyu Peng", degree: "PhD 2016", current: "DeepMind (Google)", link: "https://www.linkedin.com/in/qiuyu-gavin-peng-2815a427" },
    { name: "Changhong Zhao", degree: "PhD 2016", current: "NREL", link: "https://sites.google.com/site/changhongzhao19/" },
    { name: "Youngmi Ohk", degree: "MS 1998", degree_university: "Melbourne University", current: "Dawson Consulting Pty Ltd", link: "https://www.linkedin.com/in/youngmi-ohk-08b56/" },
    { name: "Sanjeewa Athuraliya", degree: "MS 2000", current: "Ergon Energy", link: "https://www.linkedin.com/in/sanjeewa-athuraliya-71b31a5/" },
    { name: "Craig Cameron", degree: "MS 2002", current: "Finisa", link: "https://www.linkedin.com/in/craigcameron/" },
    { name: "John Pongsajapan", degree: "MS, 2006", current: "Square", link: "https://www.linkedin.com/in/johnpongsajapan/" },
    { name: "Cheng Hu", degree: "MS 2006" },
    { name: "Kevin Phan", degree: "MS 2009" },
    { name: "Masoud Farivar", degree: "MS 2010", current: "Google", link: "https://www.linkedin.com/in/mfarivar/"},
    { name: "George Lee", degree: "MS 2011", current: "Akamai", link: "https://www.linkedin.com/in/george-lee-17b3596/"}
  ],
  pastVisitingFaculty: [
    { name: "Jin S Lee", duration: "2012", department: "EE", university: "Postech, Korea" },
    { name: "Fernando Paganini", duration: "2013", department: '', university: "Universidad ORT, Uruguay" },
    { name: "Angela Zhang", duration: "2014", department: '', university: "Chinese University of Hong Kong, Hong Kong" },
    { name: "Feng Liu", duration: "2015 - 2016", department: "Electrical Engineering", university: "Tsinghua University, Beijing, China" },
    { name: "Janusz Bialek", duration: "2017", department: "Skoltech", university: "Moscow, Russia" }
  ],
  pastPhDStudents: [
    { name: "Hyojeong (Dawn) Choe", duration: "2001 - 2003", department: "ECE", university: "Postech, Korea" },
    { name: "Kyungmo Koo", duration: "2004 - 2005", department: "ECE", university: "Postech, Korea" },
    { name: "Krister Jacobsson", duration: "2008 - 2009", university: "KTH, Sweden" },
    { name: "Jongkyoo Kim", duration: "2010 - 2011", department: "ECE", university: "Postech, Korea" },
    { name: "Kai Wang", duration: "2010 - 2011", department: "CS", university: "Tsinghua University, China" },
    { name: "Chengdi Lai", duration: "2012 - 2013", department: "Fulbright Scholar, EEE", university: "Hong Kong University, Hong Kong" },
    { name: "Daniela Meola", duration: "2013 - 2014", department: "Control Department", university: "Università del Sannio, Italy" },
    { name: "Yongmin Zhang", duration: "2013 - 2014", department: "Control Department", university: "Zhejiang University, China" },
    { name: "Junhao Lin", duration: "2015 - 2016", department: "EEE", university: "Hong Kong University, Hong Kong" }
  ]
};


export default Ember.Service.extend({

  getHighlights() {
    return highlights;
  },

  getPeople() {
    return people;
  },

  fetchPublicationsInLibrary() {
    return Ember.$.getJSON("http://authors.library.caltech.edu/cgi/exportview/person-az/Low-S-H/JSON/Low-S-H.js", function(data) {
      // let arr = data.slice(0, 10);
      publications.clear();
      let recentLimit = 5;
      let recentCount = 0;
      Ember.$(data).each(function() {
        // console.log(this);
        // publications.pushObject(this);
        let pub = Publication.create({
          id: this.eprintid,
          title: this.title,
          book_title: this.book_title,
          event_title: this.event_title,
          creators: this.creators,
          isbn: this.isbn,
          ispublished: this.ispublished,
          issn: this.issn,
          date: this.date,
          pagerange: this.pagerange,
          datestamp: this.datestamp,
          place_of_pub: this.place_of_pub,
          publication: this.publication,
          publisher: this.publisher,
          official_url: this.official_url,
          volume: this.volume,
          number: this.number
        });
        if (recentCount < recentLimit) {
          recentPublications.pushObject(pub);
          recentCount = recentCount + 1;
        }
        publications.pushObject(pub);
      });

      // console.log(publications);
    });
  },

  getPublications() {
    return publications;
  },

  getRecentPublications() {
    return recentPublications;
  }
});

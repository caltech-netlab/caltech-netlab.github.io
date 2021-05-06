import Controller from '@ember/controller';

const talks = [
  {
    title: "California’s Future Power Grid: Smart, Resilient & Reliable",
    locations: [
      {
        description: "Los Angeles World Affairs Council & Town Hall, April 2021",
        resources: [
          {
            text: "Video",
            link: "https://www.youtube.com/watch?v=4MlCMH-25F8"
          }
        ]
      }
    ]
  },
  {
    title: "Intro to Power Flows",
    locations: [
      {
        description: "Simons Institute Real-time Decision Making Bootcamp (Power Systems), University of California, Berkeley, Jan 2018",
        resources: [
          {
            text: "Slides",
            link: "/assets/slides/Low-201801-SimonsBootcamp.pptx"
          },
          {
            text: "Video (Part I)",
            link: "https://simons.berkeley.edu/talks/low-flow-1"
          },
          {
            text: "Video (Part II)",
            link: "https://simons.berkeley.edu/talks/low-flow-2"
          }
        ]
      }
    ]
  },
  {
    title: "Autonomous Energy Grid - Optimization",
    locations: [
      {
        description: "NREL Workshop on Autonomous Energy Grid, Golden CO, Sept 2017",
        resources: [
          {
            text: "Slides",
            link: "/assets/slides/Low-201709-AEGopt-NREL.pptx"
          },
          {
            text: "PDF",
            link: "https://www.nrel.gov/grid/assets/pdfs/aeg-low.pdf"
          }
        ]
      }
    ]
  },
  {
    title: "Adaptive Charging Network",
    locations: [
      {
        description: "Caltech Alumni College, Pasadena, CA, November 2016",
        resources: [
          {
            text: "Poster",
            link: "/assets/publications/ACN-201611.pdf"
          }
        ]
      },
      {
        description: "PFI:AIR-TT, NSF, DC, March 2017",
        resources: [
          {
            text: "Slides",
            link: "/assets/slides/Low-201703-AIR.pptx"
          }
        ]
      }
    ]
  },
  {
    title: "Optimal Storage Placement and Power Flow Solution",
    locations: [
      {
        description: "NREL Workshop on Autonomous Energy Grid, Golden CO, Sept 2017",
        resources: [
          {
            text: "Slides",
            link: "/assets/slides/Low-201611-OptimalStorage+PFsol.pptx"
          }
        ]
      }
    ]
  },
  {
    title: "Online Optimization of Power Networks",
    locations: [
      {
        description: "IPAM Workshop on Optimization and Equilibrium of Energy Economics, UCLA, CA, January 2016",
        resources: [
          {
            text: "Slides",
            link: "/assets/slides/Low-201601-OnlineAlg.pptx"
          }
        ]
      },
      {
        description: "Simons Institute Workshop, Berkeley, June 2016",
        resources: [
          {
            text: "Slides",
            link: "/assets/slides/Low-201606-OnlineAlg-SimonsBerkeley-short.pptx"
          }
        ]
      }
    ]
  },
  {
    title: "Load-Side Frequency Control",
    locations: [
      {
        description: "Expert Conf on Advanced Mathematical Methods For Energy Systems, Skoltech, Moscow, Russia, June 2015",
        resources: [
          {
            text: "Slides",
            link: "/assets/slides/Low-201506-OLC3-Skoltech.pptx"
          }
        ]
      }
    ]
  },
  {
    title: "Smart Grid Research",
    locations: [
      {
        description: "Cornell University, Ithaca, NY, March 2015",
        resources: [
          {
            text: "Slides",
            link: "/assets/slides/Low-201503-Cornell-Ithaca.pptx"
          }
        ]
      }
    ]
  },
  {
    title: "Optimal Power Flow and Demand Response",
    locations: [
      {
        description: "i4Energy Seminar, CITRIS, UC Berkeley, April 2012",
        resources: [
          {
            text: "Slides",
            link: "/assets/slides/Low-201203-DR+OPF.pptx"
          },
          {
            text: "Video",
            link: "http://youtu.be/WMDeIAXHAAw"
          }
        ]
      }
    ]
  },
  {
    title: "Tutorial: TCP Congestion Control",
    locations: [
      {
        description: "PURSUIT Summer School, Cambridge University, UK, Aug 2011",
        resources: [
          {
            text: "Slides",
            link: "/assets/slides/Low-201108-TCP-Cambridge.pptx"
          },
          {
            text: "Video Part I",
            link: "http://vimeo.com/39752673"
          },
          {
            text: "Video Part II",
            link: "http://vimeo.com/39758488"
          }
        ]
      }
    ]
  }
];

const blogPosts = [
  {
    title: "A Network of Intelligent DER",
    subjects: [
      {
        link: "https://rigorandrelevance.wordpress.com/2014/09/18/a-network-of-intelligent-der/"
      }
    ]
  },
  {
    title: "Communication and Power Networks",
    subjects: [
      {
        subject: "Architecture",
        posts: [
          {
            text: "Part I",
            link: "https://rigorandrelevance.wordpress.com/2013/11/26/power-network-and-internet-i-architecture/"
          },
          {
            text: "Part II",
            link: "https://rigorandrelevance.wordpress.com/2013/12/02/communication-and-power-networks-architecture-part-ii/"
          }
        ]
      },
      {
        subject: "Flow Optimization",
        posts: [
          {
            text: "Part I",
            link: "https://rigorandrelevance.wordpress.com/2014/05/05/communication-and-power-networks-flow-optimization-part-i/"
          },
          {
            text: "Part II",
            link: "https://rigorandrelevance.wordpress.com/2014/05/19/communication-and-power-networks-flow-optimization-part-ii/"
          }
        ]
      },
      {
        subject: "Forward engineering",
        posts: [
          {
            text: "Part I",
            link: "https://rigorandrelevance.wordpress.com/2014/07/08/communication-and-power-networks-reverse-and-forward-engineering-part-i/"
          },
          {
            text: "Part II",
            link: "https://rigorandrelevance.wordpress.com/2014/07/15/communication-and-power-networks-reverse-and-forward-engineering-part-ii/"
          }
        ]
      }
    ]
  },
  {
    title: "Business Case of DER and Utility",
    subjects: [
      {
        link: "https://rigorandrelevance.wordpress.com/2014/12/02/business-case-for-der-and-utility/"
      }
    ]
  }
];

export default Controller.extend({
  talks: talks,
  blogPosts: blogPosts
});

import Controller from '@ember/controller';

const sponsors = {
  recent: [
    {
      name: "PowerFlex Systems",
      year: "2018",
      imageFileName: "PowerFlex-Systems-Logo.svg",
      imageClass: "w-100",
      link: "http://powerflexsystems.com/"
    },
    {
      name: "National Science Foundation",
      year: "2020",
      imageFileName: "NSF-logo.svg",
      imageClass: "w-100",
      link: "https://www.nsf.gov/"
    },
    {
      name: "ARPA-E",
      year: "2018",
      imageFileName: "arpae-logo.jpg",
      imageClass: "w-100",
      link: "https://arpa-e.energy.gov/"
    },
    {
      name: "Skoltech",
      year: "2018",
      imageFileName: "skoltech-logo.png",
      imageClass: "w-100",
      link: "http://www.skoltech.ru/en/"
    },
    {
      name: "Defense Threat Reduction Agency (DTRA)",
      year: "2018",
      imageFileName: "DTRA-logo.png",
      imageClass: "w-100",
      link: "http://www.dtra.mil/"
    },
    {
      name: "National Renewable Energy Laboratory (NREL)",
      year: "2016",
      imageFileName: "NREL-logo-blue.png",
      imageClass: "w-100",
      link: "https://www.nrel.gov/"
    },
    {
      name: "FLOW",
      year: "2016",
      imageFileName: "FLOW-logo-color.png",
      imageClass: "w-100",
      link: "http://flow.caltech.edu/"
    },
    {
      name: "Los Alamos National Laboratory",
      year: "2016",
      imageFileName: "Los-Alamos-logo.png",
      imageClass: "w-100",
      link: "http://www.lanl.gov/index.php"
    },
    {
      name: "Taiwan National Science Council",
      year: "2015",
      imageFileName: "MOST-logo.png",
      imageClass: "w-100",
      link: "https://www.most.gov.tw/?l=en"
    },
    {
      name: "Southern California Edison (SCE)",
      year: "2014",
      imageFileName: "SCE-logo.jpg",
      imageClass: "w-100",
      link: "https://www.sce.com"
    },
    {
      name: "Army Research Office",
      year: "2014",
      imageFileName: "ARO-logo.png",
      imageClass: "w-100",
      link: "http://www.arl.army.mil/www/default.cfm?page=29"
    },
    {
      name: "Bell Labs",
      year: "2014",
      imageFileName: "NOKIA-Bell-Labs-logo.png",
      imageClass: "w-100",
      link: "https://www.bell-labs.com/"
    },
    {
      name: "Resnick",
      year: "2013",
      imageFileName: "resnick-logo.jpg",
      imageClass: "w-100",
      link: "http://resnick.caltech.edu/"
    },
    {
      name: "Alcatel-Lucent Enterprise",
      year: "2014",
      imageFileName: "Alcatel-Lucent-Enterprise-logo.svg",
      imageClass: "w-100",
      link: "https://www.al-enterprise.com/en"
    }
  ],
  past: [
    {
      name: "Cisco",
      year: "2011",
      imageFileName: "Cisco-logo.svg",
      imageClass: "w-100",
      link: "https://www.cisco.com/"
    },
    {
      name: "Department of Energy",
      year: "2011",
      imageFileName: "DOE-logo.png",
      imageClass: "w-100",
      link: "https://energy.gov/"
    },
    {
      name: "Okawa Foundation",
      year: "2011",
      imageFileName: "Okawa-Foundation-title.png",
      imageClass: "w-100",
      link: "http://www.okawa-foundation.or.jp/"
    },
    {
      name: "Air Force Office of Scientific Research",
      year: "2005",
      imageFileName: "AFOSR-logo.jpg",
      imageClass: "w-100",
      link: "http://www.wpafb.af.mil/afrl/afosr/"
    },
    {
      name: "Corning",
      year: "2003",
      imageFileName: "corning-logo.svg",
      imageClass: "w-100",
      link: "https://www.corning.com/worldwide/en.html"
    },
    {
      name: "Level(3)",
      year: "2003",
      imageFileName: "Level3-logo.svg",
      imageClass: "w-100",
      link: "http://www.level3.com/en/"
    },
    {
      name: "Juniper Networks",
      year: "2001",
      imageFileName: "juniper-networks-logo.svg",
      imageClass: "w-100",
      link: "https://www.juniper.net/us/en/"
    },
    {
      name: "SUN Microsystems",
      year: "2002",
      imageFileName: "Sun-logo.svg",
      imageClass: "w-100",
      link: "https://www.oracle.com/index.html"
    },
    {
      name: "Microsoft",
      year: "2001",
      imageFileName: "Microsoft-logo.svg",
      imageClass: "w-100",
      link: "https://www.microsoft.com/en-us/"
    },
    {
      name: "Intel",
      year: "2001",
      imageFileName: "Intel-logo.svg",
      imageClass: "w-100",
      link: "https://www.intel.com/content/www/us/en/homepage.html"
    }
  ]
};

export default Controller.extend({
  sponsors: sponsors
});

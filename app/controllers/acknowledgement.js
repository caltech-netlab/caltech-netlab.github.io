import Controller from '@ember/controller';

const sponsors = [
  {
    name: "ARPA-E",
    year: "2018",
    imageClass: "arpae-logo",
    link: "https://arpa-e.energy.gov/"
  },
  {
    name: "National Science Foundation",
    year: "2020",
    imageClass: "nsf-logo",
    link: "https://www.nsf.gov/"
  },
  {
    name: "Schmidt Academy",
    year: "2020",
    imageClass: "sase-logo",
    link: "https://www.sase.caltech.edu/"
  },
  {
    name: "Department of Energy",
    year: "2011",
    imageClass: "doe-logo",
    link: "https://energy.gov/"
  },
  {
    name: "Defense Threat Reduction Agency (DTRA)",
    year: "2018",
    imageClass: "dtra-logo",
    link: "http://www.dtra.mil/"
  },
  {
    name: "Southern California Edison (SCE)",
    year: "2014",
    imageClass: "sce-logo",
    link: "https://www.sce.com"
  },
  {
    name: "Army Research Office",
    year: "2014",
    imageClass: "aro-logo",
    link: "http://www.arl.army.mil/www/default.cfm?page=29"
  },
  {
    name: "Air Force Office of Scientific Research",
    year: "2005",
    imageClass: "afosr-logo",
    link: "http://www.wpafb.af.mil/afrl/afosr/"
  },
  {
    name: "Los Alamos National Laboratory",
    year: "2016",
    imageClass: "los-alamos-logo",
    link: "http://www.lanl.gov/index.php"
  },
  {
    name: "National Renewable Energy Laboratory (NREL)",
    year: "2016",
    imageClass: "nrel-logo",
    link: "https://www.nrel.gov/"
  },
  {
    name: "Taiwan National Science Council",
    year: "2015",
    imageClass: "most-logo",
    link: "https://www.most.gov.tw/?l=en"
  },
  {
    name: "Skoltech",
    year: "2018",
    imageClass: "skoltech-logo",
    link: "http://www.skoltech.ru/en/"
  },
  {
    name: "Resnick",
    year: "2013",
    imageClass: "resnick-logo",
    link: "http://resnick.caltech.edu/"
  },
  {
    name: "FLOW",
    year: "2016",
    imageClass: "flow-logo",
    link: "http://flow.caltech.edu/"
  },
  {
    name: "Okawa Foundation",
    year: "2011",
    imageClass: "okawa-logo",
    link: "http://www.okawa-foundation.or.jp/"
  },
  {
    name: "Nokia Bell Labs",
    year: "2014",
    imageClass: "bell-labs-logo",
    link: "https://www.bell-labs.com/"
  },
  {
    name: "Alcatel-Lucent Enterprise",
    year: "2014",
    imageClass: "lucent-logo",
    link: "https://www.al-enterprise.com/en"
  },
  {
    name: "Cisco",
    year: "2011",
    imageClass: "cisco-logo",
    link: "https://www.cisco.com/"
  },
  {
    name: "PowerFlex Systems",
    year: "2018",
    imageClass: "powerflex-logo",
    link: "http://powerflexsystems.com/"
  },
  {
    name: "Corning",
    year: "2003",
    imageClass: "corning-logo",
    link: "https://www.corning.com/worldwide/en.html"
  },
  {
    name: "Level(3)",
    year: "2003",
    imageClass: "level-3-logo",
    link: "http://www.level3.com/en/"
  },
  {
    name: "Juniper Networks",
    year: "2001",
    imageClass: "juniper-logo",
    link: "https://www.juniper.net/us/en/"
  },
  {
    name: "SUN Microsystems",
    year: "2002",
    imageClass: "sun-logo",
    link: "https://www.oracle.com/index.html"
  },
  {
    name: "Microsoft",
    year: "2001",
    imageClass: "microsoft-logo",
    link: "https://www.microsoft.com/en-us/"
  },
  {
    name: "Intel",
    year: "2001",
    imageClass: "intel-logo",
    link: "https://www.intel.com/content/www/us/en/homepage.html"
  }
];

export default Controller.extend({
  sponsors: sponsors
});

/* =====================================================================
   PROJECTS: the ONLY place you need to edit to add a project.
   To add one: copy a whole { ... } block, paste it after the last block
   (keep a comma between blocks) and change the text.

   id       : element-style code (Li-05, Li-06 ...)
   name     : project name
   type     : "app" | "website" | "extension" | "tool"
              (filter buttons are created automatically from the types you use)
   desc     : one-line summary shown on the card
   long     : longer description shown in the popup
   features : list of key features
   tags     : technologies used
   images   : screenshots. Put the image files in the "images" folder and list
              them here, e.g. images: ["images/li-01-home.png", "images/li-01-login.png"]
              The first image becomes the card cover. Use [] if you have none yet.
   demo     : live link ("" shows "Live demo soon")
   source   : GitHub link
   links    : optional extra buttons, e.g. [{ label: "Play Store", url: "https://..." }]
   Anything inside [square brackets] shows as a highlighted placeholder.
   ===================================================================== */
const GH = "https://github.com/lithium-logics";
const PROJECTS = [
  { id: "Li-01", name: "[App name]", type: "app",
    desc: "[One-line description of your app.]",
    long: "[What the app does, who it is for and what problem it solves. Mention the screens shown in the screenshots.]",
    features: ["[Key feature one]", "[Key feature two]", "[Key feature three]"],
    tags: ["[Tech]", "[Tech]"],
    images: [],   // e.g. ["images/li-01-home.png", "images/li-01-login.png", "images/li-01-profile.png"]
    demo: "", source: GH, links: [] },

  { id: "Li-02", name: "[Website name]", type: "website",
    desc: "[One-line description of this website.]",
    long: "[The goal of the site, the design approach and the result.]",
    features: ["[Key feature one]", "[Key feature two]", "[Key feature three]"],
    tags: ["HTML", "CSS", "JavaScript"],
    images: [], demo: "", source: GH, links: [] },

  { id: "Li-03", name: "[Extension name]", type: "extension",
    desc: "[One-line description of this browser extension.]",
    long: "[What the extension does and how people use it.]",
    features: ["[Key feature one]", "[Key feature two]", "[Key feature three]"],
    tags: ["[Tech]"],
    images: [], demo: "", source: GH, links: [] },

  { id: "Li-04", name: "[Tool name]", type: "tool",
    desc: "[One-line description of this tool or utility.]",
    long: "[What the tool does and why you made it.]",
    features: ["[Key feature one]", "[Key feature two]", "[Key feature three]"],
    tags: ["[Tech]"],
    images: [], demo: "", source: GH, links: [] }
];

/* 2) SKILLS: levels are 0 to 100. Replace with your honest levels. */
const SKILLS = {
  Frontend:[["HTML & CSS",85],["JavaScript",70],["[Framework]",50]],
  Backend:[["[Language]",50],["[Database]",45],["APIs",50]],
  Tools:[["Git & GitHub",70],["[Tool]",50],["[Tool]",40]],
  Design:[["UI design",60],["Responsive layout",75],["[Design tool]",40]]
};

/* 3) SERVICES */
const SERVICES = [
  ["code","Websites","Fast, clean websites for businesses, creators and personal brands, built to look good on every screen."],
  ["layers","Web apps","Interactive tools and dashboards that run in the browser and solve a specific problem."],
  ["phone","Mobile apps","Apps for phones, designed around how people really use them."],
  ["pen","UI design","Clear interfaces and layouts that are easy to understand and pleasant to use."]
];

/* 4) TIMELINE: edit titles, dates and text. */
const TIMELINE = [
  ["[Year]","Wrote my first lines of code","[What got you started and what you built first.]"],
  ["[Year]","Built my first website","[A short note about it.]"],
  ["[Year]","Started building apps","[What you learned.]"],
  ["[Year]","Launched Lithium Logics","The name comes from my love of chemistry: light, fast and powering things."],
  ["Now","[Currently learning]","[What you are studying or building right now.]"]
];

/* 5) QUICK FACTS */
const FACTS = [["[00]","Projects built"],["[0]","Years coding"],["[Topic]","Currently learning"]];

/* 6) CONTACT */
const CONTACTS = [
  ["github","GitHub","https://github.com/lithium-logics","github.com/lithium-logics"],
  ["facebook","Facebook","https://www.facebook.com/lithium.logic","facebook.com/lithium.logic"],
  ["mail","Email","mailto:lithiumlogic0@gmail.com","lithiumlogic0@gmail.com"],
  ["linkedin","LinkedIn","https://www.linkedin.com/in/lithiumlogic/","linkedin.com/in/lithiumlogic"]
];

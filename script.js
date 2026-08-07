const themes = [
  {
    title: "Regulatory & Policy Influence",
    summary: "Translates technical planning and interconnection issues into regulatory strategy, filings, advocacy, and stakeholder engagement.",
    bullets: ["Advocacy across CPUC and FERC proceedings", "Advice letters, comments, workshop materials, and GRC support", "Engagement with CPUC, CEC, IOUs, customers, and industry stakeholders"],
    tags: ["Policy", "Regulatory Strategy", "CPUC", "FERC"]
  },
  {
    title: "Strategy & Transformation",
    summary: "Turns ambiguous regulatory, business, and technology requirements into executable roadmaps, processes, and operational handoffs.",
    bullets: ["Regulatory compliance implementation", "Planning process modernization", "Technology vision and implementation strategy"],
    tags: ["Strategy", "Transformation", "Execution"]
  },
  {
    title: "Grid Modernization",
    summary: "Supports modern planning and operational capability through tools, platforms, pilots, procurement, and enterprise alignment.",
    bullets: ["Long-Term Planning Tool", "Grid Interconnection Processing Tool", "Grid Management System, DERMS, ADMS, adaptive protection"],
    tags: ["Modernization", "Technology", "Platforms"]
  },
  {
    title: "Analytics & Planning",
    summary: "Uses engineering analytics, time-series modeling, forecasting, and planning studies to inform investment and policy choices.",
    bullets: ["Integration Capacity Analysis", "Transportation Electrification Grid Readiness", "Forecasting, reliability, and distribution planning"],
    tags: ["Analytics", "Planning", "Forecasting"]
  },
  {
    title: "DER & Electrification",
    summary: "Builds capabilities for distributed energy resource integration, hosting capacity transparency, and electrification readiness.",
    bullets: ["DER interconnection and hosting capacity", "Distribution Resource Plan initiatives", "Electrification impact analysis"],
    tags: ["DER", "Electrification", "Hosting Capacity"]
  },
  {
    title: "Leadership & Team Development",
    summary: "Leads technical, analytical, and regulatory teams while developing talent, coaching performance, and building ownership.",
    bullets: ["Managed teams of engineers, advisors, and contractors", "Career coaching, mentoring, performance management", "Leadership through uncertainty and change"],
    tags: ["Leadership", "People", "Coaching"]
  },
  {
    title: "Cross-Functional Execution",
    summary: "Coordinates stakeholders across engineering, operations, IT, regulatory, HR, vendors, and external parties to deliver outcomes.",
    bullets: ["Large stakeholder teams across multiple business lines", "Vendor pilots, RFPs, evaluations, and implementation planning", "Operational handoff and change management"],
    tags: ["Execution", "Collaboration", "Change Management"]
  }
];

const roles = [
  {
    period: "January 2023 - Present",
    role: "Senior Manager, Grid Policy",
    organization: "Southern California Edison",
    summary: "Leads a team of senior advisors and engineers advocating for System Planning & Engineering interests in CPUC and FERC proceedings focused on system planning, interconnection, customer energization, and DER orchestration.",
    bullets: ["Directs implementation of compliance requirements for Limited Generation Profiles, Pending Loads, and Scenario Planning", "Manages lifecycle handoff of new processes and software capabilities to business operations"],
    themes: ["Regulatory & Policy Influence", "Strategy & Transformation", "Leadership & Team Development", "DER & Electrification", "Cross-Functional Execution"]
  },
  {
    period: "November 2021 - December 2022",
    role: "Engineering Manager, Scenario Planning Analytics",
    organization: "Southern California Edison",
    summary: "Supported development and execution of the Transportation Electrification Grid Readiness Study to inform SCE's 2025 General Rate Case.",
    bullets: ["Managed a hybrid team of SCE employees and contract resources", "Connected electrification analytics to regulatory and investment planning needs"],
    themes: ["Analytics & Planning", "DER & Electrification", "Leadership & Team Development", "Regulatory & Policy Influence"]
  },
  {
    period: "June 2019 - November 2021",
    role: "Engineering Manager, Integration Capacity Analysis",
    organization: "Southern California Edison",
    summary: "Managed the team responsible for Integration Capacity Analysis consistent with Distribution Resource Plan requirements.",
    bullets: ["Oversaw analysis producing billions of results through partially automated time-series power flow analysis", "Drove favorable regulatory outcomes through comments, workshop materials, IOU collaboration, and public presentations"],
    themes: ["Analytics & Planning", "DER & Electrification", "Regulatory & Policy Influence", "Leadership & Team Development"]
  },
  {
    period: "April 2018 - June 2019",
    role: "Engineer, Regulatory & Planning Process Modernization",
    organization: "Southern California Edison",
    summary: "Partnered with subject-matter experts to author and file advice letters related to the DRP External Portal, Grid Needs Assessment, and Distribution Deferral Opportunity Report.",
    bullets: ["Led internal data redaction and public data access strategy", "Represented SCE in Distribution Forecasting Working Group meetings"],
    themes: ["Regulatory & Policy Influence", "Strategy & Transformation", "Analytics & Planning", "Cross-Functional Execution"]
  },
  {
    period: "September 2015 - March 2018",
    role: "Engineering Workstream Lead, Grid Modernization Application Integration",
    organization: "Southern California Edison",
    summary: "Led strategic workstreams supporting SCE's Grid Modernization program, including planning tools, interconnection processing, and grid management systems.",
    bullets: ["Led stakeholder teams of more than 40 to 50 participants across business lines", "Managed pilots, RFPs, bidder conferences, scope, requirements, vendor evaluation, and GRC testimony support"],
    themes: ["Grid Modernization", "Strategy & Transformation", "Cross-Functional Execution", "Leadership & Team Development", "Regulatory & Policy Influence"]
  },
  {
    period: "January 2015 - September 2015",
    role: "Engineer, Distribution Field Engineering Special Projects",
    organization: "Southern California Edison",
    summary: "Established and managed cross-functional teams supporting DERiM, LoadSEER proof of concept, and SCE's initial Distribution Resource Plan filing.",
    bullets: ["Published early Integration Capacity Analysis through an external-facing GIS tool", "Represented SCE in Distribution Resource Plan working group meetings"],
    themes: ["DER & Electrification", "Analytics & Planning", "Grid Modernization", "Cross-Functional Execution"]
  },
  {
    period: "January 2014 - December 2014",
    role: "Engineering Workstream Lead, Distribution Grid Readiness Strategic Initiative",
    organization: "Southern California Edison",
    summary: "Developed recommendations to meet next-generation grid needs reflected in AB 327 and the Distribution Resource Plan.",
    bullets: ["Led multi-disciplinary review and deployment of criteria for optimal DER interconnection locations"],
    themes: ["Strategy & Transformation", "DER & Electrification", "Analytics & Planning", "Cross-Functional Execution"]
  },
  {
    period: "October 2011 - December 2013",
    role: "Engineer, Distribution Generation Interconnection",
    organization: "Southern California Edison",
    summary: "Reviewed and analyzed more than 200 generation interconnection requests across CREST, WDAT, and Rule 21 processes.",
    bullets: ["Coordinated scope and study results with transmission planning, substation engineering, protection engineering, and environmental teams", "Provided technical support to interconnection customers", "Streamlined and standardized interconnection study processes"],
    themes: ["DER & Electrification", "Analytics & Planning", "Cross-Functional Execution"]
  },
  {
    period: "July 2010 - October 2011",
    role: "Engineer, Metro East Field Engineering",
    organization: "Southern California Edison",
    summary: "Performed load growth forecasting, project planning, deficiency mitigation, and modeling for assigned systems.",
    bullets: ["Served as primary engineer for Walnut system and secondary engineer for Chino and Mira Loma systems"],
    themes: ["Analytics & Planning", "Grid Modernization"]
  },
  {
    period: "June 2009 - August 2009",
    role: "Summer Intern, Distribution Engineering",
    organization: "Pacific Gas & Electric Co.",
    summary: "Built foundational experience with distribution equipment, protection devices, circuit maps, and load growth concepts.",
    bullets: ["Performed a complete protection coordination study of a Morgan Hill distribution circuit", "Conducted a Method of Service Study to serve a new 10.22 MW load"],
    themes: ["Analytics & Planning", "DER & Electrification"]
  }
];

const projects = [
  ["01", "Grid Modernization Program", "Enterprise software and technology workstreams supporting long-term planning, interconnection processing, and operational grid capabilities."],
  ["02", "Integration Capacity Analysis", "Large-scale hosting capacity analytics supporting Distribution Resource Plan requirements and public transparency."],
  ["03", "DER Interconnection Map", "External-facing geospatial capability supporting DER siting and early hosting capacity publication."],
  ["04", "Transportation Electrification Grid Readiness", "Planning analysis supporting electrification readiness and future grid investment decisions."],
  ["05", "Planning Process Modernization", "Process, methodology, and data strategy improvements designed to strengthen distribution planning."],
  ["06", "DER Orchestration and Grid Policy", "Regulatory strategy and implementation leadership for emerging DER, energization, and grid flexibility requirements."]
];

function renderThemes(filter = "all") {
  const container = document.getElementById("theme-cards");
  const selected = filter === "all" ? themes : themes.filter(t => t.title === filter);
  container.innerHTML = selected.map(theme => `
    <article class="card">
      <h3>${theme.title}</h3>
      <p>${theme.summary}</p>
      <ul>${theme.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
      <div class="tag-row">${theme.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
    </article>
  `).join("");
}

function renderTimeline(query = "") {
  const container = document.getElementById("timeline-list");
  const q = query.toLowerCase();
  const filtered = roles.filter(r => [r.period, r.role, r.organization, r.summary, ...r.bullets, ...r.themes].join(" ").toLowerCase().includes(q));
  container.innerHTML = filtered.map(role => `
    <article class="timeline-item">
      <span class="timeline-dot" aria-hidden="true"></span>
      <div class="timeline-panel">
        <div class="timeline-meta">${role.period}</div>
        <h3>${role.role}</h3>
        <p><strong>${role.organization}</strong></p>
        <p>${role.summary}</p>
        <ul>${role.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
        <div class="tag-row">${role.themes.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
      </div>
    </article>
  `).join("") || `<p>No timeline entries match your search.</p>`;
}

function renderProjects() {
  const container = document.getElementById("project-grid");
  container.innerHTML = projects.map(([num, title, desc]) => `
    <article class="project">
      <p class="number">${num}</p>
      <h3>${title}</h3>
      <p>${desc}</p>
    </article>
  `).join("");
}

function bindEvents() {
  document.querySelectorAll(".chip").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".chip").forEach(b => b.classList.remove("active"));
      button.classList.add("active");
      renderThemes(button.dataset.theme);
    });
  });
  document.getElementById("search").addEventListener("input", event => renderTimeline(event.target.value));
  const menu = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  menu.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    menu.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
  document.getElementById("year").textContent = new Date().getFullYear();
}

renderThemes();
renderTimeline();
renderProjects();
bindEvents();

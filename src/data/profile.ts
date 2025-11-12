export const profile = {
  fullName: "Bala Vinayagam",
  role: "QA Automation Engineer",
  summary:
    "6 years of QA experience with 5+ years across automation and manual testing for mobile (Android/iOS) and web. Strong in Appium, Selenium, Robot Framework, ACCELQ, and Sauce Labs.",
  location: "India",
  email: "balavinayagam1258@gmail.com",
  phone: "+91-8870182145",
  links: {
    linkedin: "https://www.linkedin.com/in/bala-automationtester/",
    github: "https://github.com/Bala-Vk/"
  }
};

export const tools = ["Appium", "Selenium", "Robot Framework", "ACCELQ", "Sauce Labs"];
export const frameworks = ["Cucumber (BDD)", "WebdriverIO", "TestNG", "Java Hybrid Framework"];
export const languages = ["Java"];

export const experience = [
  {
    title: "QA Automation Engineer",
    company: "Your Company / Client",
    period: "2019 — Present",
    highlights: [
      "Designed and maintained automation suites for Android, iOS, and web.",
      "Built reusable framework modules for reporting, data, and drivers.",
      "Enabled parallel CI runs with stable artifacts and dashboards."
    ]
  }
];

export type Project = {
  name: string;
  description: string;
  tech: string[];
  repoUrl?: string;
  rawCodeUrl?: string;
};

export const projects: Project[] = [
  {
    name: "Mobile Test Automation Suite",
    description:
      "Modular Appium suite for Android & iOS with BDD features and cloud device coverage (Sauce Labs).",
    tech: ["Appium", "Cucumber", "Java", "Sauce Labs"],
    repoUrl: "https://github.com/",
    rawCodeUrl:
      "https://raw.githubusercontent.com/facebook/react/main/README.md"
  },
  {
    name: "Web UI Regression Pack",
    description:
      "Cross-browser Selenium/WebdriverIO pack with page objects, resilient flows, and CI-ready parallelism.",
    tech: ["Selenium", "WebdriverIO", "TestNG"],
    repoUrl: "https://github.com/"
  }
];




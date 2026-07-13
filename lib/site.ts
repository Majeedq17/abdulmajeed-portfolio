const emailAddress = "Abdulmajeed.17@outlook.com";
const linkedInUrl = "https://www.linkedin.com/in/abdulmajeed-alqithmi-594456382";
const resumeFileName = "Abdulmajeed_Alqithmi_CV.pdf";

export const siteConfig = {
  name: "Abdulmajeed Alqithmi",
  title: "Business Analyst | Systems Analyst",
  description:
    "Portfolio of Abdulmajeed Alqithmi, a Computing with Business graduate focused on business analysis, systems analysis, process improvement, and technology-enabled business value.",
  url: "https://abdulmajeed-alqithmi.com",
  contact: {
    email: emailAddress,
    linkedin: linkedInUrl,
    location: "Saudi Arabia"
  },
  links: {
    email: `mailto:${emailAddress}`,
    linkedin: linkedInUrl
  },
  resume: {
    fileName: resumeFileName,
    publicPath: `/${resumeFileName}`,
    downloadPath: "/resume/download"
  }
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" }
];

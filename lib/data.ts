import { BarChart3, Brain, BriefcaseBusiness, Linkedin, Mail, MapPin, ServerCog } from "lucide-react";
import type { Project, SkillGroup, TimelineItem } from "@/lib/types";
import { siteConfig } from "@/lib/site";

export const profile = {
  name: "Abdulmajeed Alqithmi",
  title: "Business Analyst | Systems Analyst",
  summary:
    "Recent Computing with Business graduate focused on solving business problems with technology, analyzing requirements, improving processes, and designing systems that create practical business value.",
  longSummary:
    "I combine business analysis, systems thinking, and technical awareness to understand how organizations work and how technology can improve them. My focus is on gathering clear requirements, mapping processes, documenting decisions, and helping teams move from business needs to reliable digital solutions."
};

export const aboutHighlights = [
  {
    title: "Business-first thinking",
    description:
      "I start by understanding the business problem, the people affected, and the operational context before moving into tools or implementation."
  },
  {
    title: "Systems perspective",
    description:
      "I enjoy breaking down workflows, data, roles, and dependencies so technical solutions are easier to design, explain, and maintain."
  },
  {
    title: "Clear documentation",
    description:
      "I value concise requirements, process maps, user stories, and structured notes that help stakeholders make decisions with confidence."
  },
  {
    title: "Continuous improvement",
    description:
      "I look for practical ways to reduce manual work, improve visibility, and align technology with measurable business outcomes."
  }
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Business",
    description: "Core analysis capabilities for understanding needs and shaping solutions.",
    icon: BriefcaseBusiness,
    skills: [
      "Business Analysis",
      "Systems Analysis",
      "Requirements Gathering",
      "Process Mapping",
      "Documentation"
    ]
  },
  {
    title: "Technical",
    description: "Technical fluency for working with data, applications, and development teams.",
    icon: ServerCog,
    skills: ["SQL", "Power BI", "Excel", "Java", "Spring Boot", "REST APIs", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "Soft Skills",
    description: "Communication and problem-solving habits for stakeholder-facing work.",
    icon: Brain,
    skills: ["Communication", "Problem Solving", "Critical Thinking", "Stakeholder Management"]
  }
];

export const experiences: TimelineItem[] = [
  {
    title: "Bachelor's Degree in Computing with Business",
    organization: "Information Technology",
    period: "Recently Graduated",
    description:
      "Completed a multidisciplinary program combining IT foundations, software concepts, business processes, systems thinking, and practical analysis work."
  },
  {
    title: "HR Management System Case Study",
    organization: "Academic / Portfolio Project",
    period: "Editable",
    description:
      "Analyzed an HR workflow, identified common administrative pain points, and structured a system solution covering employee records, leave requests, roles, reporting, and data organization."
  },
  {
    title: "Business Analysis Practice",
    organization: "Portfolio Development",
    period: "Editable",
    description:
      "Prepared documentation-style project pages that explain business problems, stakeholders, goals, features, architecture, and lessons learned for recruiter review."
  },
  {
    title: "Future Role",
    organization: "Add company name",
    period: "Add dates",
    description:
      "Replace this editable entry with internships, training programs, certificates, freelance work, or full-time professional experience."
  }
];

export const projects: Project[] = [
  {
    title: "HR Management System (HRMS)",
    slug: "hr-management-system",
    category: "Featured Case Study",
    summary:
      "A structured HRMS case study focused on employee records, leave management, approvals, reporting, and clearer HR operations.",
    technologies: ["Java", "Spring Boot", "REST APIs", "SQL", "HTML", "CSS", "JavaScript"],
    details: {
      caseStudy: {
        projectOverview:
          "This case study explores how a web-based HR Management System can support common HR operations, including employee records, leave requests, approval tracking, role access, and basic reporting. The focus is on translating business needs into a clear system structure that would be understandable to both business stakeholders and a technical team.",
        challenge:
          "HR teams often manage employee information, leave requests, and approval follow-ups across scattered files, messages, and manual updates. This makes it harder to know which requests are pending, who is responsible for the next action, and whether employee records are accurate and up to date.",
        objectives: [
          "Centralize employee and HR information in one structured system.",
          "Make leave requests, approvals, and status updates easier to track.",
          "Reduce repeated manual follow-ups between employees, managers, and HR staff.",
          "Clarify user roles so each stakeholder can access the right information.",
          "Create a system foundation that can support additional HR workflows later."
        ],
        myRole: [
          "Defined the business problem and translated it into system-focused requirements.",
          "Identified the main user groups: employees, department managers, HR staff, HR manager, and system administrator.",
          "Structured the case study around user needs, core workflows, key features, data entities, and future scope.",
          "Balanced business clarity with technical feasibility by describing the system as a layered web application with a relational database."
        ],
        solution:
          "The proposed solution is a role-based HRMS that gives employees a clear way to submit leave requests, helps managers review and approve requests, and gives HR staff a centralized view of employee records and HR activity. The system is designed around simple workflows, searchable records, and clear status visibility.",
        keyFeatures: [
          "Employee profile management for key personal and work details.",
          "Leave request submission, review, approval, and rejection workflow.",
          "Role-based access for employees, managers, HR staff, and administrators.",
          "Searchable HR records to reduce reliance on scattered documents.",
          "Dashboard views for pending actions and recent HR activity.",
          "Structured data model covering employees, departments, roles, leave requests, leave types, approval history, and user accounts."
        ],
        businessImpact: [
          "Improves visibility by making request status and ownership easier to understand.",
          "Reduces manual coordination by moving repeated HR follow-ups into a shared workflow.",
          "Supports more consistent HR records by keeping employee data in a centralized structure.",
          "Helps managers and HR staff make faster decisions through clearer access to pending actions and historical activity."
        ],
        challengesAndDecisions: [
          "Kept the leave workflow simple enough for a portfolio case study while still reflecting a realistic approval process.",
          "Separated user roles early because permissions influence features, data access, and page behavior.",
          "Used a relational database structure because HR records depend on clear relationships between employees, departments, roles, and requests.",
          "Avoided inventing fake performance metrics and focused instead on qualitative business value."
        ],
        lessonsLearned: [
          "A strong system proposal starts with the business workflow, not the technology stack.",
          "Stakeholder roles should be defined early because they shape requirements and permissions.",
          "A case study is more convincing when it explains why decisions were made, not only what the system includes."
        ],
        futureEnhancements: [
          "Add notifications for submitted, approved, rejected, or returned leave requests.",
          "Create reporting views for leave balances, HR activity, and approval workload.",
          "Add document upload support for employee records.",
          "Integrate authentication with an enterprise identity provider."
        ]
      },
      overview:
        "The HR Management System is a portfolio case study designed to show how business requirements can be translated into a practical system. It focuses on HR workflows such as employee information management, leave requests, approvals, role access, and operational reporting.",
      businessProblem:
        "Many HR processes rely on scattered documents, manual follow-ups, and unclear approval status. This creates duplicated work, slower responses, limited visibility, and a higher chance of errors when employee information changes.",
      businessGoals: [
        "Centralize employee information in one structured system.",
        "Make leave requests and approval status easier to track.",
        "Reduce manual coordination between employees, managers, and HR staff.",
        "Improve visibility into HR activity without inventing fake metrics.",
        "Create a system structure that can grow as new HR processes are added."
      ],
      stakeholders: ["HR Manager", "HR Staff", "Employees", "Department Managers", "System Administrator"],
      solution:
        "The proposed solution is a web-based HRMS with role-based access, employee profiles, leave request workflows, status tracking, and structured HR records. The design emphasizes clarity, maintainability, and alignment between business needs and system features.",
      features: [
        "Employee profile management with key personal and work details.",
        "Leave request creation, review, approval, and rejection workflow.",
        "Role-based access for employees, managers, HR staff, and administrators.",
        "Searchable HR records to reduce dependency on scattered files.",
        "Basic dashboard views for pending actions and recent HR activity.",
        "Structured documentation for requirements, features, and future scope."
      ],
      architecture:
        "The architecture can be implemented as a layered web application with a frontend interface, REST API endpoints, business logic services, and a relational database. This separation keeps user experience, business rules, and data persistence easier to maintain.",
      database:
        "The database can include entities such as Employee, Department, Role, LeaveRequest, LeaveType, ApprovalHistory, and UserAccount. Relationships should support employee-department assignment, manager approval paths, and historical status tracking.",
      screenshotPlaceholders: ["Dashboard screenshot placeholder", "Employee profile placeholder", "Leave request workflow placeholder"],
      challenges: [
        "Defining role permissions clearly enough for both business users and technical implementation.",
        "Keeping the leave approval workflow simple while still supporting real organizational needs.",
        "Designing database relationships that avoid duplicated employee and approval data."
      ],
      lessonsLearned: [
        "Good requirements are easier to write when the business process is mapped first.",
        "Stakeholder roles should be defined early because they influence features, permissions, and data access.",
        "A case study is stronger when it explains why decisions were made, not only what was built."
      ],
      futureImprovements: [
        "Add notification workflows for submitted and approved requests.",
        "Create reporting views for HR activity and leave balances.",
        "Add document upload support for employee records.",
        "Integrate authentication with an enterprise identity provider."
      ]
    }
  },
  {
    title: "Process Improvement Documentation",
    slug: "process-improvement-documentation",
    category: "Analysis Template",
    summary:
      "An editable project placeholder for documenting an as-is process, pain points, to-be process, requirements, and implementation recommendations.",
    technologies: ["Process Mapping", "Requirements", "Documentation", "Excel", "Power BI"],
    details: {
      overview:
        "This placeholder project is designed for a future business process improvement case study. It can be used to present an as-is workflow, identify pain points, and document a recommended to-be process.",
      businessProblem:
        "A business process may include repeated manual steps, unclear ownership, duplicated data entry, or limited reporting visibility. The project should explain the specific issue once real details are available.",
      businessGoals: [
        "Document the current process clearly.",
        "Identify bottlenecks and root causes.",
        "Recommend a practical future-state workflow.",
        "Translate improvement opportunities into requirements."
      ],
      stakeholders: ["Process Owner", "Operations Team", "Business Users", "IT Team"],
      solution:
        "The recommended solution should combine process redesign, clear requirements, and a practical implementation path that fits the organization's tools and constraints.",
      features: [
        "As-is process map placeholder.",
        "Pain point analysis placeholder.",
        "To-be process map placeholder.",
        "Requirements list placeholder.",
        "Implementation recommendations placeholder."
      ],
      architecture:
        "Architecture details can be added if the improvement includes a system, integration, dashboard, automation, or workflow platform.",
      database:
        "Database details can be added if the project involves structured data capture, reporting, or integration with an existing system.",
      screenshotPlaceholders: ["As-is process map placeholder", "To-be process map placeholder"],
      challenges: [
        "Capturing enough process detail without making the documentation too complex.",
        "Separating root causes from symptoms.",
        "Writing requirements that are clear and testable."
      ],
      lessonsLearned: [
        "Process improvement depends on both workflow design and stakeholder alignment.",
        "Simple documentation can be more useful than complicated diagrams if it helps decisions."
      ],
      futureImprovements: [
        "Add real process maps.",
        "Add stakeholder interview notes.",
        "Add before-and-after workflow comparison."
      ]
    }
  }
];

export const resumeSections = [
  {
    title: "Target Roles",
    items: [
      "Business Analyst",
      "Systems Analyst",
      "IT Business Analyst",
      "Digital Transformation",
      "Business Technology",
      "Operations Technology"
    ]
  },
  {
    title: "Core Strengths",
    items: [
      "Requirements gathering and documentation",
      "Process mapping and improvement",
      "Business and technical communication",
      "Systems thinking and solution design",
      "Data awareness using SQL, Excel, and Power BI"
    ]
  }
];

export const contactLinks = [
  {
    label: siteConfig.contact.email,
    href: siteConfig.links.email,
    icon: Mail,
    external: false
  },
  {
    label: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: Linkedin,
    external: true
  },
  {
    label: siteConfig.contact.location,
    icon: MapPin,
    external: false
  },
  {
    label: "Portfolio Projects",
    href: "/projects",
    icon: BarChart3,
    external: false
  }
];

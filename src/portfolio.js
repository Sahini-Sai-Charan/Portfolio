/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sai Charan Sahini",
  title: "Hello, I'm Sai Charan",
  subTitle: emoji(
    "A passionate DevOps and Cloud Engineer 🚀 with hands-on experience in automating infrastructure, orchestrating CI/CD pipelines, and integrating AI tools to optimize developer workflows. Skilled in Terraform, Kubernetes, and AI integrated DevOps workflows — I build scalable systems that think, adapt, and deliver."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1GXF2Sqg6d-vZ-PWyTNi0NvqPKVwDUUwK/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Sahini-Sai-Charan",
  linkedin: "https://www.linkedin.com/in/sai-charan-sahini/",
  gmail: "saicharan.sahini@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // // Instagram, Twitter and Kaggle are also supported in the links!
  // // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Design and implement scalable cloud infrastructure, automate devops workflows, and integrate AI-driven systems to enhance reliability, performance, and developer productivity.",
  skills: [
    emoji(
      "⚡ Automate and optimize CI/CD pipelines, enabling faster, more reliable software delivery across diverse environments"
    ),
    emoji("⚡ Design and manage scalable, secure cloud architectures using Infrastructure as Code and best-in-class provisioning strategies"),
    emoji(
      "⚡ Integrate AI tools into DevOps workflows to enhance observability, predict failures, and accelerate decision-making across the deployment lifecycle"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

// ...existing code...
// ...existing code...
softwareSkills: [
  {
    skillName: "AWS",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "Azure",
    fontAwesomeClassname: "fab fa-microsoft"
  },
  {
    skillName: "Google Cloud",
    fontAwesomeClassname: "fab fa-google"
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "Kubernetes",
    fontAwesomeClassname: "fas fa-server"
  },
  {
    skillName: "Helm",
    fontAwesomeClassname: "fas fa-ship"
  },
  {
    skillName: "Terraform",
    fontAwesomeClassname: "fas fa-cubes"
  },
  {
    skillName: "Ansible",
    fontAwesomeClassname: "fas fa-robot"
  },
  {
    skillName: "Jenkins",
    fontAwesomeClassname: "fas fa-stream"
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git-alt"
  },
  {
    skillName: "Linux",
    fontAwesomeClassname: "fab fa-linux"
  },
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "Java",
    fontAwesomeClassname: "fab fa-java"
  },
  {
    skillName: "Databases",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "Prometheus",
    fontAwesomeClassname: "fas fa-chart-line"
  },
  {
    skillName: "Grafana",
    fontAwesomeClassname: "fas fa-tachometer-alt"
  },
  {
    skillName: "SonarQube",
    fontAwesomeClassname: "fas fa-bug"
  },
  {
    skillName: "GitHub Copilot",
    fontAwesomeClassname: "fas fa-robot"
  },
  {
    skillName: "ELK Stack",
    fontAwesomeClassname: "fas fa-search"
  }
],
// ...existing code...
// ...existing code...
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Anil Neerukonda Institute of Technology and Sciences",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelors in Information Technology",
      duration: "September 2012 - April 2016",
      descBullets: [
        "Developed a scalable e-commerce platform using .NET, showcasing end-to-end architecture, secure transactions, and modular design",
        "Collaborated with our Head of Department on his PhD research by conducting a comprehensive analysis of the “Comparative Study of Shuffled Frog Leaping and Modified Shuffled Frog Leaping Algorithms with Data Clustering,” contributing to algorithmic evaluation, performance benchmarking, and clustering accuracy insights as our final year project"]
    },
    {
      schoolName: "Sri Chaitanya Junior College",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Specialized in Science and Mathematics",
      duration: "June 2010 - March 2012",
      desc: "Ranked top 10% in the program",
      descBullets: [
        "Completed higher secondary education with a strong foundation in Mathematics, Physics, and Chemistry, fostering analytical thinking and problem-solving skills",
        "Developed a deep understanding of scientific principles and quantitative reasoning, laying the groundwork for future pursuits in engineering and technology."]
  
    },
   {
      schoolName: "Geetanjali Public School",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "",
      duration: "June 2000 - March 2010",
      desc: "Completed foundational schooling from Kindergarten to 10th Standard with a consistent focus on academic excellence and holistic development",
      descBullets: [
        "Built a strong base in core subjects including mathematics, science, and language, fostering curiosity and critical thinking from an early age.",  
        "Actively participated in school activities and projects, developing teamwork, communication, and leadership skills.Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

// ...existing code...
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "CI/CD",
      progressPercentage: "100%"
    },
    {
      Stack: "Docker & Kubernetes",
      progressPercentage: "90%"
    },   
    {
      Stack: "Terraform",
      progressPercentage: "90%"
    }, 
    {
      Stack: "Helm",
      progressPercentage: "75%"
    },
    {
      Stack: "Ansible",
      progressPercentage: "70%"
    },  
    {
      Stack: "Git",
      progressPercentage: "95%"
    },  
    {
      Stack: "Azure",
      progressPercentage: "80%"
    },
    {
      Stack: "AWS",
      progressPercentage: "80%"
    },
    {
      Stack: "Google Cloud Platform",
      progressPercentage: "80%"
    },
    {
      Stack: "Linux",
      progressPercentage: "95%"
    },
    {
      Stack: "Python",
      progressPercentage: "80%"
    },
    {
      Stack: "Prometheus & Grafana",
      progressPercentage: "75%"
    },
    {
      Stack: "SonarQube",
      progressPercentage: "90%"
    },
    {
      Stack: "ELK Stack",
      progressPercentage: "70%"
    },
    {
      Stack: "Java",
      progressPercentage: "80%"
    },
    {
      Stack: "Databases",
      progressPercentage: "80%"
    },
    {
      Stack: "GitHub Copilot",
      progressPercentage: "85%"
    },
    {
      Stack: "AIDE",
      progressPercentage: "90%"
    },
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Technology Lead",
      company: "ValueLabs",
      companylogo: require("./assets/images/valuelabs-logo.png"),
      date: "December 2024 – Present",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Orchestrated containerized microservice deployments using Docker and Kubernetes, while automating legacy IIS workloads via Azure Pipelines for streamlined delivery.",  
        "Provisioned and managed scalable multi-cloud infrastructure using Terraform, with secure CI/CD integration powered by Azure Key Vault for secret management.",
        "Accelerated DevOps workflows by integrating AiDE and GitHub Copilot, embedding AI-driven automation into CI/CD, infrastructure provisioning, and container orchestration."]
    },
    {
      role: "Senior Software Engineer",
      company: "Excelra Knowledge Solutions Pvt Ltd",
      companylogo: require("./assets/images/excelra-logo.jpg"),
      date: "June 2021 – November 2024",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Built and maintained cloud-native CI/CD workflows using Azure DevOps, GCP Cloud Build, and Jenkins, enabling consistent and scalable delivery across multi-cloud environments.",
        "Led infrastructure automation using Terraform and Helm, while managing secure Kubernetes deployments and integrating SonarQube, Prometheus, and Grafana for observability.",
        "Adopted DevSecOps practices to secure microservices via Azure API Management and conducted vulnerability assessments to ensure compliance across cloud and on-prem systems."]
    },
    {
      role: "Technology Analyst",
      company: "Infosys Ltd",
      companylogo: require("./assets/images/infosys-logo.png"),
      date: "May 2016 – June 2021",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Served as SME for client reporting systems in the financial domain, ensuring high availability, compliance, and operational resilience.",
        "Automated microservice releases using Jenkins, Ansible, and GitOps workflows, while managing AWS IAM, Linux servers, and optimizing system performance through RCA.",
        "Led technical mentorship initiatives and implemented monitoring solutions with ELK and ServiceNow, integrating serverless patterns via AWS Lambda for scalable, event-driven deployments."]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Projects that I have worked on which has created an impact to the users and clients",
  projects: [
    {
      image: require("./assets/images/update-in-progress.jpg"),
      projectName: "Update in Progress",
      projectDesc: "Update in Progress",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
        //  you can add extra buttons here.
      //]
    },
    {
      image: require("./assets/images/update-in-progress.jpg"),
      projectName: "Update in Progress",
      projectDesc: "Update in Progress",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Java SE 8 Programmer 1",
      subtitle:
        "Certified as a Java SE 8 Programmer I, demonstrating proficiency in core Java programming and object-oriented design principles.",
      image: require("./assets/images/java-se8-logo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1go--R7Hq8rk4hy-tIZ4cf0uCFMNgs971/view?usp=share_link"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    // {
    //   title: "Google Assistant Action",
    //   subtitle:
    //     "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image: require("./assets/images/googleAssistantLogo.webp"),
    //   imageAlt: "Google Assistant Action Logo",
    //   footerLink: [
    //     {
    //       name: "View Google Assistant Action",
    //       url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
    //     }
    //   ]
    // },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 8985623108",
  email_address: "saicharan.sahini@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

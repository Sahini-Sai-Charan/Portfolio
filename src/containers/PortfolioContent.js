import React, { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Cloud,
  Code2,
  ExternalLink,
  GitBranch,
  GraduationCap,
  Link,
  Mail,
  Menu,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Sun,
  Moon,
  Terminal,
  X,
} from "lucide-react";
import DisplayLottie from "../components/displayLottie/DisplayLottie";
import {
  achievementSection,
  bigProjects,
  blogSection,
  contactInfo,
  educationInfo,
  greeting,
  illustration,
  isHireable,
  linkedinRecommendations,
  openSource,
  resumeSection,
  skillsSection,
  socialMediaLinks,
  techStack,
  twitterDetails,
  workExperiences,
} from "../data/portfolioData";
import landingPerson from "../assets/lottie/landingPerson";
import codingPerson from "../assets/lottie/codingPerson";
import buildAnimation from "../assets/lottie/build";
import emailAnimation from "../assets/lottie/email";
import Twitter from "./twitter-embed/twitter";
import "./PortfolioContent.scss";

const sectionClass = "scroll-mt-24 py-16 sm:py-20 lg:py-24";
const contentWidth = "mx-auto w-full max-w-7xl px-5 sm:px-8";

const socialLinks = [
  { key: "github", label: "GitHub", icon: GitBranch },
  { key: "linkedin", label: "LinkedIn", icon: Link },
  { key: "gmail", label: "Email", icon: Mail, email: true },
  { key: "gitlab", label: "GitLab" },
  { key: "facebook", label: "Facebook" },
  { key: "medium", label: "Medium" },
  { key: "stackoverflow", label: "Stack Overflow" },
  { key: "instagram", label: "Instagram" },
  { key: "twitter", label: "Twitter" },
  { key: "kaggle", label: "Kaggle" },
];

function SectionHeading({ eyebrow, title, description, icon: Icon }) {
  return (
    <div className="mb-10 max-w-3xl sm:mb-12">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-cyan-200">
        {Icon && <Icon aria-hidden="true" size={14} />}
        <span>{eyebrow}</span>
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function SocialLinks({ className = "" }) {
  if (!socialMediaLinks.display) {
    return null;
  }

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {socialLinks.map(({ key, label, icon: Icon, email }) => {
        const value = socialMediaLinks[key];
        if (!value) {
          return null;
        }
        const href = email ? `mailto:${value}` : value;

        return (
          <a
            key={key}
            href={href}
            aria-label={label}
            title={label}
            target={email ? undefined : "_blank"}
            rel={email ? undefined : "noopener noreferrer"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            {Icon ? (
              <Icon aria-hidden="true" size={18} />
            ) : (
              <ExternalLink aria-hidden="true" size={17} />
            )}
          </a>
        );
      })}
    </div>
  );
}

function Navbar({ isDark, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { label: "About", href: "#greeting" },
    { label: "Skills", href: "#skills", show: skillsSection.display },
    { label: "Experience", href: "#experience", show: workExperiences.display },
    { label: "Projects", href: "#projects", show: bigProjects.display },
    { label: "Education", href: "#education", show: educationInfo.display },
    {
      label: resumeSection.title,
      href: "#resume",
      show: resumeSection.display,
    },
    {
      label: "Open Source",
      href: "#opensource",
      show: openSource.display,
    },
    {
      label: "Achievements",
      href: "#achievements",
      show: achievementSection.display,
    },
    { label: "Blogs", href: "#blogs", show: blogSection.display },
    { label: "Contact", href: "#contact" },
  ].filter((link) => link.show !== false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#09090b]/80 backdrop-blur-xl">
      <div
        className={`${contentWidth} flex min-h-16 items-center justify-between gap-5 py-3`}
      >
        <a
          href="#greeting"
          onClick={closeMenu}
          className="shrink-0 text-sm font-semibold tracking-tight text-white sm:text-base"
        >
          <span className="text-cyan-300">&lt;</span>
          {greeting.username.replace(/\s+/g, "")}
          <span className="text-cyan-300">/&gt;</span>
        </a>

        <button
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-zinc-200 transition hover:bg-white/10 lg:hidden"
        >
          {menuOpen ? (
            <X aria-hidden="true" size={20} />
          ) : (
            <Menu aria-hidden="true" size={20} />
          )}
        </button>

        <nav
          id="primary-navigation"
          aria-label="Primary navigation"
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute left-0 right-0 top-full flex-col gap-1 border-b border-white/10 bg-[#09090b]/95 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl lg:static lg:flex lg:flex-row lg:items-center lg:justify-end lg:gap-5 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.05] hover:text-white lg:px-0 lg:py-1 lg:hover:bg-transparent"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            role="switch"
            aria-label="Light theme"
            aria-checked={!isDark}
            title={isDark ? "Switch to light theme" : "Switch to dark theme"}
            onClick={onToggleTheme}
            className="inline-flex items-center gap-2.5 rounded-full px-3 py-2 text-sm text-zinc-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 lg:px-0 lg:py-0"
          >
            <span
              className={`relative inline-flex h-7 w-12 items-center rounded-full transition ${
                isDark ? "bg-white/10" : "bg-cyan-600"
              }`}
            >
              <span
                className={`absolute flex h-5 w-5 items-center justify-center rounded-full bg-white text-zinc-900 shadow transition-transform ${
                  isDark ? "translate-x-1" : "translate-x-6"
                }`}
              >
                {isDark ? (
                  <Moon aria-hidden="true" size={12} />
                ) : (
                  <Sun aria-hidden="true" size={12} />
                )}
              </span>
            </span>
            <span>{isDark ? "Dark" : "Light"}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="greeting"
      className="relative scroll-mt-24 overflow-hidden border-b border-white/[0.06]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(34,211,238,0.10),transparent_38%)]" />
      <div
        className={`${contentWidth} relative grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-24`}
      >
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.06] px-3.5 py-2 text-sm text-emerald-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
            </span>
            {isHireable ? "Open for opportunities" : "Cloud · DevOps · AI"}
          </div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">
            Cloud · DevOps · AI
          </p>
          <div className="relative isolate">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-8 top-1/4 -z-10 h-24 w-72 rounded-full bg-cyan-300/10 blur-3xl"
            />
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              {greeting.title}
            </h1>
          </div>
          <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg sm:leading-9">
            {greeting.subTitle}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#experience"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]"
            >
              View experience
              <ArrowDownRight aria-hidden="true" size={17} />
            </a>
            {resumeSection.display && greeting.resumeLink && (
              <a
                id="resume"
                href={greeting.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
              >
                <span>Download my resume</span>
                <ArrowUpRight aria-hidden="true" size={17} />
              </a>
            )}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
              Find me online
            </span>
            <SocialLinks />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -inset-4 rounded-[2rem] bg-cyan-300/[0.05] blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/70 p-3 shadow-2xl shadow-black/40 sm:p-5">
            <div className="flex items-center justify-between border-b border-white/10 px-3 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
              </div>
              <span className="font-mono text-xs text-zinc-500">
                cloud-engineering
              </span>
              <Code2 aria-hidden="true" size={16} className="text-zinc-500" />
            </div>
            <div className="flex min-h-[280px] items-center justify-center overflow-hidden sm:min-h-[380px]">
              {illustration.animated ? (
                <DisplayLottie animationData={landingPerson} />
              ) : (
                <img
                  src={require("../assets/images/manOnTable.svg")}
                  alt="Developer working at a table"
                  className="max-h-[380px] w-full object-contain"
                />
              )}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-3 pt-4">
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <Cloud aria-hidden="true" size={16} className="text-cyan-300" />
                Multi-cloud infrastructure
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <ShieldCheck
                  aria-hidden="true"
                  size={16}
                  className="text-cyan-300"
                />
                Secure delivery
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  if (!skillsSection.display) {
    return null;
  }

  return (
    <section
      id="skills"
      className={`${sectionClass} border-b border-white/[0.06]`}
    >
      <div className={contentWidth}>
        <SectionHeading
          eyebrow="01 / Capabilities"
          title={skillsSection.title}
          description={skillsSection.subTitle}
          icon={Code2}
        />
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-7">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                <Sparkles aria-hidden="true" size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">How I work</h3>
            </div>
            <div className="space-y-5">
              {skillsSection.skills.map((skill, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle2
                    aria-hidden="true"
                    size={18}
                    className="mt-1 shrink-0 text-cyan-300"
                  />
                  <p className="text-sm leading-7 text-zinc-300 sm:text-base">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-7 overflow-hidden rounded-2xl border border-white/[0.06] bg-zinc-950/60 p-3">
              {illustration.animated ? (
                <DisplayLottie animationData={codingPerson} />
              ) : (
                <img
                  src={require("../assets/images/developerActivity.svg")}
                  alt="Developer working"
                  className="mx-auto max-h-56 w-full object-contain"
                />
              )}
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-zinc-300">
              <Terminal
                aria-hidden="true"
                size={17}
                className="text-cyan-300"
              />
              Tools and technologies
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {skillsSection.softwareSkills.map((skill, index) => (
                <div
                  key={`${skill.skillName}-${index}`}
                  className="group flex min-h-14 items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.025] px-3 py-3 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.05] sm:px-4"
                >
                  <Code2
                    aria-hidden="true"
                    size={16}
                    className="shrink-0 text-zinc-500 transition group-hover:text-cyan-200"
                  />
                  <span className="text-xs font-medium text-zinc-300 sm:text-sm">
                    {skill.skillName}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProficiencySection() {
  if (!techStack.viewSkillBars) {
    return null;
  }

  return (
    <section className={`${sectionClass} border-b border-white/[0.06]`}>
      <div
        className={`${contentWidth} grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]`}
      >
        <div>
          <SectionHeading
            eyebrow="02 / Focus areas"
            title="Proficiency"
            description="A snapshot of the technologies and workflows I work with."
            icon={Terminal}
          />
          <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {techStack.experience.map((item, index) => (
              <div key={`${item.Stack}-${index}`}>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="text-sm font-medium text-zinc-300">
                    {item.Stack}
                  </span>
                  <span className="font-mono text-xs text-zinc-500">
                    {item.progressPercentage}
                  </span>
                </div>
                <div
                  className="h-1.5 overflow-hidden rounded-full bg-white/10"
                  role="progressbar"
                  aria-label={item.Stack}
                  aria-valuenow={parseInt(item.progressPercentage, 10)}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-sky-300"
                    style={{ width: item.progressPercentage }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.025] p-5">
          {illustration.animated ? (
            <DisplayLottie animationData={buildAnimation} />
          ) : (
            <img
              src={require("../assets/images/skill.svg")}
              alt="Skills illustration"
              className="mx-auto max-h-80 w-full object-contain"
            />
          )}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  if (!workExperiences.display) {
    return null;
  }

  return (
    <section
      id="experience"
      className={`${sectionClass} border-b border-white/[0.06]`}
    >
      <div className={contentWidth}>
        <SectionHeading
          eyebrow="03 / Career"
          title="Experience"
          description="Selected roles and the work behind them."
          icon={BriefcaseBusiness}
        />
        <div className="space-y-4">
          {workExperiences.experience.map((experience, index) => (
            <article
              key={`${experience.company}-${index}`}
              className="grid gap-5 rounded-3xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-white/20 sm:p-7 md:grid-cols-[220px_1fr] md:gap-8"
            >
              <div className="flex items-start gap-4 md:flex-col">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white p-2">
                  {experience.companylogo ? (
                    <img
                      src={experience.companylogo}
                      alt={`${experience.company} logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <BriefcaseBusiness
                      aria-hidden="true"
                      size={24}
                      className="text-zinc-700"
                    />
                  )}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {experience.company}
                  </p>
                  {experience.team && (
                    <p className="mt-1 text-xs text-zinc-400">
                      {experience.team}
                    </p>
                  )}
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-zinc-500">
                    <CalendarDays aria-hidden="true" size={13} />
                    {experience.date}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {experience.role}
                </h3>
                {experience.desc && (
                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {experience.desc}
                  </p>
                )}
                {experience.descBullets && (
                  <ul className="mt-4 space-y-3">
                    {experience.descBullets.map((description, bulletIndex) => (
                      <li
                        key={bulletIndex}
                        className="flex gap-3 text-sm leading-7 text-zinc-400"
                      >
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                        {description}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  if (!educationInfo.display) {
    return null;
  }

  return (
    <section
      id="education"
      className={`${sectionClass} border-b border-white/[0.06]`}
    >
      <div className={contentWidth}>
        <SectionHeading
          eyebrow="04 / Education"
          title="Education"
          description="Academic foundations and selected work."
          icon={GraduationCap}
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {educationInfo.schools.map((school, index) => (
            <article
              key={`${school.schoolName}-${index}`}
              className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.025] p-5 sm:p-6"
            >
              <div className="mb-5 flex items-center gap-4">
                {school.logo && (
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-2">
                    <img
                      src={school.logo}
                      alt={`${school.schoolName} logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                )}
                <div>
                  <p className="text-xs text-zinc-500">{school.duration}</p>
                  {school.subHeader && (
                    <p className="mt-1 text-sm font-medium text-cyan-200">
                      {school.subHeader}
                    </p>
                  )}
                </div>
              </div>
              <h3 className="text-lg font-semibold leading-snug text-white">
                {school.schoolName}
              </h3>
              {school.desc && (
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {school.desc}
                </p>
              )}
              {school.descBullets && (
                <ul className="mt-4 space-y-3">
                  {school.descBullets.map((description, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="flex gap-2.5 text-sm leading-6 text-zinc-400"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/80" />
                      {description}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectSection() {
  const [githubUser, setGithubUser] = useState(null);

  useEffect(() => {
    if (!openSource.display || openSource.showGithubProfile !== "true") {
      return;
    }

    fetch("/profile.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`GitHub profile request failed: ${response.status}`);
        }
        return response.json();
      })
      .then((response) => {
        const user = response.data && response.data.user;
        if (!user) {
          throw new Error("GitHub profile response did not contain a user.");
        }
        setGithubUser(user);
      })
      .catch((error) => {
        console.error(
          `${error} (GitHub profile details could not be displayed.)`
        );
      });
  }, []);

  if (!bigProjects.display && !openSource.display) {
    return null;
  }

  const repositories =
    githubUser &&
    githubUser.pinnedItems &&
    Array.isArray(githubUser.pinnedItems.edges)
      ? githubUser.pinnedItems.edges
      : [];

  return (
    <section
      id="projects"
      className={`${sectionClass} border-b border-white/[0.06]`}
    >
      <div className={contentWidth}>
        {bigProjects.display && (
          <>
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <SectionHeading
                eyebrow="05 / Selected work"
                title={bigProjects.title}
                description={bigProjects.subtitle}
                icon={Code2}
              />
              {socialMediaLinks.github && (
                <a
                  href={socialMediaLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-mt-7 mb-10 inline-flex w-fit items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-cyan-100 sm:mb-12"
                >
                  More Projects
                  <ArrowUpRight aria-hidden="true" size={16} />
                </a>
              )}
            </div>

            <div className="grid grid-cols-1 gap-4 md:auto-rows-fr md:grid-cols-12">
              {bigProjects.projects.map((project, index) => {
                const projectLinks = [
                  ...(project.liveDemoUrl
                    ? [{ name: "Live Demo", url: project.liveDemoUrl }]
                    : []),
                  ...(project.githubUrl
                    ? [{ name: "GitHub", url: project.githubUrl }]
                    : []),
                  ...(project.footerLink || []),
                ];
                const stack = project.techStack || [];

                return (
                  <article
                    key={`${project.projectName}-${index}`}
                    className={`project-preview group relative h-full min-h-[340px] overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/70 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30 hover:shadow-2xl hover:shadow-cyan-950/20 sm:min-h-[390px] ${
                      index === 0 ? "md:col-span-7" : "md:col-span-5"
                    }`}
                  >
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="absolute inset-0 h-full w-full object-cover object-center opacity-65 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-75"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/70 to-[#09090b]/10" />
                    <div className="relative flex min-h-[340px] flex-col justify-end p-5 sm:min-h-[390px] sm:p-7">
                      <div className="mb-auto flex items-start justify-between gap-3">
                        <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur">
                          Featured project
                        </span>
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur transition group-hover:border-cyan-200/50 group-hover:text-cyan-100">
                          <ArrowUpRight aria-hidden="true" size={18} />
                        </span>
                      </div>
                      <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                        {project.projectName}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-300 sm:text-base sm:leading-7">
                        {project.projectDesc}
                      </p>
                      {stack.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {stack.map((technology, techIndex) => (
                            <span
                              key={`${technology}-${techIndex}`}
                              className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-zinc-200 backdrop-blur"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      )}
                      {projectLinks.length > 0 && (
                        <div className="mt-5 flex flex-wrap gap-3">
                          {projectLinks.map((link, linkIndex) => (
                            <a
                              key={`${link.url}-${linkIndex}`}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-semibold text-white backdrop-blur transition hover:border-cyan-200/50 hover:bg-black/50"
                            >
                              {link.name}
                              <ExternalLink aria-hidden="true" size={13} />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </>
        )}

        {openSource.display && (
          <div id="opensource" className={bigProjects.display ? "mt-20" : ""}>
            <SectionHeading
              eyebrow="Open source"
              title="Open Source Projects"
              description="Pinned repositories and recent work."
              icon={GitBranch}
            />
            {githubUser && (
              <div className="mb-6 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                {githubUser.avatarUrl && (
                  <img
                    src={githubUser.avatarUrl}
                    alt={`${
                      githubUser.name || greeting.username
                    } GitHub profile`}
                    className="h-12 w-12 rounded-full border border-white/10"
                  />
                )}
                <div>
                  <p className="font-medium text-white">
                    {githubUser.name || greeting.username}
                  </p>
                  {githubUser.bio && (
                    <p className="mt-1 text-sm text-zinc-400">
                      {githubUser.bio}
                    </p>
                  )}
                </div>
              </div>
            )}
            {repositories.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {repositories.map(({ node }) => (
                  <a
                    key={node.id}
                    href={node.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-3xl border border-white/10 bg-white/[0.025] p-5 transition hover:-translate-y-1 hover:border-cyan-200/30"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-semibold text-white">{node.name}</h3>
                      <ArrowUpRight
                        aria-hidden="true"
                        size={17}
                        className="shrink-0 text-zinc-500"
                      />
                    </div>
                    {node.description && (
                      <p className="mt-3 text-sm leading-6 text-zinc-400">
                        {node.description}
                      </p>
                    )}
                    <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-zinc-500">
                      {node.primaryLanguage && (
                        <span className="inline-flex items-center gap-2">
                          <span
                            className="h-2.5 w-2.5 rounded-full"
                            style={{
                              backgroundColor: node.primaryLanguage.color,
                            }}
                          />
                          {node.primaryLanguage.name}
                        </span>
                      )}
                      <span>{node.stargazers.totalCount} stars</span>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <p className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-sm text-zinc-400">
                GitHub repositories will appear here when profile data is
                available.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function RecommendationsSection() {
  if (!linkedinRecommendations.display) {
    return null;
  }

  return (
    <section
      id="recommendations"
      className={`${sectionClass} border-b border-white/[0.06]`}
    >
      <div className={contentWidth}>
        <SectionHeading
          eyebrow="05 / Recommendations"
          title={linkedinRecommendations.title}
          description={linkedinRecommendations.subtitle}
          icon={Quote}
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {linkedinRecommendations.recommendations.map((item, index) => (
            <article
              key={`${item.name}-${index}`}
              className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.025] p-5 sm:p-6"
            >
              <Quote aria-hidden="true" size={20} className="text-cyan-300" />
              <p className="mt-4 flex-1 text-sm leading-7 text-zinc-300">
                “{item.recommendation}”
              </p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="mt-1 text-sm text-zinc-400">{item.role}</p>
                <p className="mt-2 text-xs text-zinc-500">{item.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AchievementsSection() {
  if (!achievementSection.display) {
    return null;
  }

  return (
    <section
      id="achievements"
      className={`${sectionClass} border-b border-white/[0.06]`}
    >
      <div className={contentWidth}>
        <SectionHeading
          eyebrow="06 / Recognition"
          title={achievementSection.title}
          description={achievementSection.subtitle}
          icon={CheckCircle2}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievementSection.achievementsCards.map((achievement, index) => (
            <article
              key={`${achievement.title}-${index}`}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] transition hover:-translate-y-1 hover:border-white/20"
            >
              <div className="flex h-48 items-center justify-center border-b border-white/10 bg-white/[0.03] p-6">
                <img
                  src={achievement.image}
                  alt={achievement.imageAlt || achievement.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">
                  {achievement.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {achievement.subtitle}
                </p>
                {achievement.footerLink &&
                  achievement.footerLink.map((link, linkIndex) => (
                    <a
                      key={`${link.url}-${linkIndex}`}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-cyan-100"
                    >
                      {link.name}
                      <ArrowUpRight aria-hidden="true" size={15} />
                    </a>
                  ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function extractTextContent(html) {
  return typeof html === "string"
    ? html
        .split(/<\/p>/i)
        .map((part) => part.split(/<p[^>]*>/i).pop())
        .filter((part) => part.trim().length > 0)
        .map((part) => part.replace(/<\/?[^>]+(>|$)/g, "").trim())
        .join(" ")
    : "";
}

function BlogsSection() {
  const [mediumBlogs, setMediumBlogs] = useState(null);

  useEffect(() => {
    if (!blogSection.display || blogSection.displayMediumBlogs !== "true") {
      return;
    }

    fetch("/blogs.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Medium blog request failed: ${response.status}`);
        }
        if (!(response.headers.get("content-type") || "").includes("json")) {
          throw new Error("Medium blog data is not available.");
        }
        return response.json();
      })
      .then((response) => {
        if (!response.items || !Array.isArray(response.items)) {
          throw new Error("Medium response did not contain a blog list.");
        }
        setMediumBlogs(response.items);
      })
      .catch((error) => {
        console.error(
          `${error} (showing the configured portfolio blog links instead.)`
        );
      });
  }, []);

  if (!blogSection.display) {
    return null;
  }

  const posts =
    blogSection.displayMediumBlogs === "true" && mediumBlogs
      ? mediumBlogs.map((blog) => ({
          url: blog.link,
          title: blog.title,
          description: extractTextContent(blog.content),
        }))
      : blogSection.blogs;

  return (
    <section
      id="blogs"
      className={`${sectionClass} border-b border-white/[0.06]`}
    >
      <div className={contentWidth}>
        <SectionHeading
          eyebrow="08 / Writing"
          title={blogSection.title}
          description={blogSection.subtitle}
          icon={BookOpen}
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <a
              key={`${post.url}-${index}`}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-56 flex-col rounded-3xl border border-white/10 bg-white/[0.025] p-5 transition hover:-translate-y-1 hover:border-cyan-200/30 sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold leading-snug text-white">
                  {post.title}
                </h3>
                <ArrowUpRight
                  aria-hidden="true"
                  size={18}
                  className="mt-1 shrink-0 text-zinc-500 transition group-hover:text-cyan-200"
                />
              </div>
              <p className="mt-4 flex-1 text-sm leading-6 text-zinc-400">
                {post.description}
              </p>
              {post.image && (
                <img
                  src={post.image}
                  alt=""
                  className="mt-5 h-36 w-full rounded-2xl object-cover"
                />
              )}
              <span className="mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-cyan-200">
                Read article
                <ArrowRight aria-hidden="true" size={14} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className={`${sectionClass} relative overflow-hidden`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_60%,rgba(34,211,238,0.07),transparent_35%)]" />
      <div className={`${contentWidth} relative`}>
        <div className="grid items-center gap-8 rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 sm:p-10 lg:grid-cols-[1fr_0.7fr] lg:p-12">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-200">
              <Mail aria-hidden="true" size={17} />
              Get in touch
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {contactInfo.title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-zinc-400">
              {contactInfo.subtitle}
            </p>
            <div className="mt-7 flex flex-col items-start gap-3">
              {contactInfo.email_address && (
                <a
                  href={`mailto:${contactInfo.email_address}`}
                  className="inline-flex items-center gap-3 text-sm text-zinc-200 transition hover:text-cyan-200"
                >
                  <Mail
                    aria-hidden="true"
                    size={17}
                    className="text-cyan-300"
                  />
                  {contactInfo.email_address}
                </a>
              )}
              {contactInfo.number && (
                <a
                  href={`tel:${contactInfo.number}`}
                  className="inline-flex items-center gap-3 text-sm text-zinc-200 transition hover:text-cyan-200"
                >
                  <Phone
                    aria-hidden="true"
                    size={17}
                    className="text-cyan-300"
                  />
                  {contactInfo.number}
                </a>
              )}
            </div>
            <SocialLinks className="mt-7" />
            {resumeSection.display && greeting.resumeLink && (
              <a
                href={greeting.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-cyan-200/40 hover:text-cyan-100"
              >
                {resumeSection.subtitle}
                <ArrowUpRight aria-hidden="true" size={15} />
              </a>
            )}
          </div>
          <div className="mx-auto w-full max-w-sm">
            {illustration.animated ? (
              <DisplayLottie animationData={emailAnimation} />
            ) : (
              <img
                src={require("../assets/images/contactMailDark.svg")}
                alt="Contact illustration"
                className="mx-auto max-h-72 w-full object-contain"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PortfolioContent({ isDark, onToggleTheme }) {
  return (
    <div
      id="top"
      data-theme={isDark ? "dark" : "light"}
      className="portfolio-shell min-h-screen bg-[#09090b] text-zinc-100 antialiased transition-colors duration-300"
    >
      <Navbar isDark={isDark} onToggleTheme={onToggleTheme} />
      <main>
        <Hero />
        <SkillsSection />
        <ProficiencySection />
        <ExperienceSection />
        <EducationSection />
        <ProjectSection />
        <RecommendationsSection />
        <AchievementsSection />
        <BlogsSection />
        {twitterDetails.display && (
          <section className={`${sectionClass} border-b border-white/[0.06]`}>
            <div className={contentWidth}>
              <SectionHeading
                eyebrow="Social"
                title="Twitter"
                description={`Updates from @${twitterDetails.userName}`}
                icon={ExternalLink}
              />
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025]">
                <Twitter />
              </div>
            </div>
          </section>
        )}
        <ContactSection />
      </main>
      <footer className="border-t border-white/[0.08]">
        <div
          className={`${contentWidth} flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between`}
        >
          <p className="text-sm text-zinc-500">
            Made with <span className="text-rose-300">♥</span> by
            Sai-Charan-Sahini
          </p>
          <a
            href="#greeting"
            className="inline-flex w-fit items-center gap-2 text-sm text-zinc-400 transition hover:text-cyan-200"
          >
            Back to top
            <ArrowUp aria-hidden="true" size={15} />
          </a>
        </div>
      </footer>
      <a
        href="#top"
        aria-label="Back to top"
        className="fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-zinc-900/90 text-zinc-200 shadow-xl shadow-black/30 backdrop-blur transition hover:border-cyan-200/40 hover:text-cyan-100 sm:bottom-7 sm:right-7"
      >
        <ArrowUp aria-hidden="true" size={18} />
      </a>
    </div>
  );
}

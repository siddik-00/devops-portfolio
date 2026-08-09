import {
  ArrowUpRight,
  Cloud,
  Code2,
  Container,
  ExternalLink,
  Github,
  GitBranch,
  Layers3,
  Linkedin,
  Mail,
  Server,
  ShieldCheck,
  Terminal,
  Workflow,
} from "lucide-react";

const skills = [
  ["Cloud & Infrastructure", ["AWS", "EKS", "EC2", "S3", "RDS", "CloudFront", "Lambda", "VPC", "IAM"]],
  ["Containers & Orchestration", ["Docker", "Kubernetes", "EKS", "Helm", "Ingress", "Services"]],
  ["CI/CD & GitOps", ["GitHub Actions", "Argo CD", "GitOps", "Continuous Delivery"]],
  ["Infrastructure as Code", ["Terraform", "Infrastructure Automation", "Configuration Management"]],
  ["Observability", ["Prometheus", "Grafana", "Loki", "Promtail", "CloudWatch", "Alerting"]],
  ["Engineering", ["Linux", "Bash", "Git", "YAML", "Networking", "Troubleshooting"]],
];

const projects = [
  {
    number: "01",
    title: "Production AWS EKS Platform",
    description:
      "A production-oriented container platform demonstrating Kubernetes workloads, AWS networking, ingress, HTTPS, resource management and automated delivery.",
    tags: ["AWS", "EKS", "Kubernetes", "Docker", "ALB"],
    icon: Cloud,
  },
  {
    number: "02",
    title: "GitOps CI/CD Platform",
    description:
      "Automated application delivery using GitHub Actions, container image management and Argo CD-based GitOps workflows for Kubernetes.",
    tags: ["GitHub Actions", "Argo CD", "GitOps", "ECR"],
    icon: GitBranch,
  },
  {
    number: "03",
    title: "Terraform Cloud Infrastructure",
    description:
      "Infrastructure-as-Code patterns for repeatable cloud provisioning, environment consistency and maintainable infrastructure operations.",
    tags: ["Terraform", "AWS", "IaC", "Automation"],
    icon: Layers3,
  },
  {
    number: "04",
    title: "Kubernetes Observability",
    description:
      "Centralized metrics and log collection for container workloads using Prometheus, Grafana, Loki and Promtail.",
    tags: ["Prometheus", "Grafana", "Loki", "Promtail"],
    icon: Server,
  },
];

const principles = [
  ["Automation First", "Reduce manual operations through repeatable workflows and CI/CD."],
  ["Infrastructure as Code", "Build infrastructure that is versioned, reviewable and reproducible."],
  ["Reliability", "Design for availability, health, scalability and predictable deployments."],
  ["Security by Design", "Apply least privilege, secure access and safe secrets management."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a href="#top" className="brand">AS<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
        </div>
        <a className="nav-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
      </nav>

      <section id="top" className="hero section">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="dot" /> Available for DevOps & Cloud opportunities</div>
            <h1>Cloud &amp; DevOps<br /><span>Engineer.</span></h1>
            <p className="hero-text">
              I build reliable, scalable and automated cloud infrastructure,
              container platforms and software delivery pipelines.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn primary">View projects <ArrowUpRight size={17} /></a>
              <a href="https://github.com/siddik-00" target="_blank" rel="noreferrer" className="btn secondary"><Github size={17} /> GitHub</a>
            </div>
            <div className="hero-stack">
              <span>AWS</span><i>•</i><span>Kubernetes</span><i>•</i><span>Docker</span><i>•</i><span>CI/CD</span><i>•</i><span>Terraform</span>
            </div>
          </div>

          <div className="terminal-card">
            <div className="terminal-top"><span /><span /><span /><label>devops-engineer.sh</label></div>
            <div className="terminal-body">
              <p><b className="green">$</b> whoami</p>
              <p className="muted">cloud-devops-engineer</p>
              <p><b className="green">$</b> kubectl get platforms</p>
              <p className="muted">NAME &nbsp;&nbsp;&nbsp; STATUS &nbsp;&nbsp; SCALE</p>
              <p>production &nbsp; <em>Ready</em> &nbsp;&nbsp; 2-10 pods</p>
              <p>staging &nbsp;&nbsp;&nbsp; <em>Ready</em> &nbsp;&nbsp; 1-4 pods</p>
              <p><b className="green">$</b> terraform plan</p>
              <p className="cyan">Plan: infrastructure automated ✓</p>
              <p><b className="green">$</b> gitops sync</p>
              <p className="cyan">Application state: Synced ✓</p>
              <p><b className="green">$</b><span className="cursor">_</span></p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-label">01 / About</div>
        <div className="two-col">
          <h2>Engineering infrastructure<br /><span>that teams can trust.</span></h2>
          <div className="body-copy">
            <p>
              I&apos;m a Cloud &amp; DevOps Engineer focused on cloud infrastructure,
              Kubernetes orchestration, containerization, CI/CD automation,
              GitOps, infrastructure as code and production operations.
            </p>
            <p>
              I enjoy turning complex deployment and infrastructure challenges
              into reliable, repeatable and automated engineering solutions.
            </p>
            <p>
              My hands-on work spans AWS services, EKS, Docker, GitHub Actions,
              Argo CD, Terraform and observability stacks built around Prometheus,
              Grafana and Loki.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="section dark-section">
        <div className="section-label">02 / Technical expertise</div>
        <h2>Tools I use to <span>build & operate.</span></h2>
        <div className="skills-grid">
          {skills.map(([title, items]) => (
            <div key={Array.isArray(title) ? title.join("-") : title}>
              <h3>{title}</h3>
              <div className="chips">{(items as string[]).map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-label">03 / Selected projects</div>
        <div className="projects-head">
          <h2>Built in the real world.<br /><span>Documented with intent.</span></h2>
          <a href="https://github.com/siddik-00" target="_blank" rel="noreferrer" className="text-link">View GitHub <ArrowUpRight size={16} /></a>
        </div>
        <div className="projects">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-icon"><Icon size={22} /></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="chips">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a href="https://github.com/siddik-00" target="_blank" rel="noreferrer" className="project-link">Case study <ArrowUpRight size={15} /></a>
              </article>
            );
          })}
        </div>
      </section>

      <section id="experience" className="section experience-section">
        <div className="section-label">04 / Experience</div>
        <div className="experience">
          <div>
            <h2>DevOps Engineer</h2>
            <p className="muted">Cloud infrastructure · Kubernetes · CI/CD · Automation</p>
          </div>
          <div className="experience-copy">
            <p>Designed and maintained cloud infrastructure across multiple projects using AWS and Infrastructure as Code.</p>
            <p>Built CI/CD workflows, managed containerized workloads on EKS, implemented GitOps delivery with Argo CD, and improved observability using Prometheus, Grafana, Loki and Promtail.</p>
            <p>Focused on scalability, reliability, security, deployment automation and cloud cost optimization.</p>
          </div>
        </div>
      </section>

      <section className="section principles-section">
        <div className="section-label">05 / Engineering principles</div>
        <div className="principles">
          {principles.map(([title, desc], i) => (
            <div className="principle" key={title}>
              <span>0{i + 1}</span>
              <div><h3>{title}</h3><p>{desc}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact section">
        <div className="contact-inner">
          <div className="section-label">06 / Contact</div>
          <h2>Let&apos;s build something<br /><span>reliable.</span></h2>
          <p>Open to DevOps, Cloud, Kubernetes and infrastructure automation opportunities.</p>
          <a className="btn primary big" href="mailto:abubakar01534@gmail.com"><Mail size={18} /> Get in touch <ArrowUpRight size={17} /></a>
          <div className="socials">
            <a href="https://github.com/siddik-00" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
            <a href="https://www.linkedin.com/in/abubakar-siddik-11465b306/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
          </div>
        </div>
      </section>

      <footer>
        <span>© 2026 Abubakar Siddik</span>
        <span>Cloud &amp; DevOps Engineering</span>
      </footer>
    </main>
  );
}

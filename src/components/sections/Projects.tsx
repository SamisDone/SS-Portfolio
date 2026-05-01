import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Github } from 'lucide-react'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { Project } from '@/types/project'
import { SectionHeader } from '../ui/SectionHeader'
import { PERSONAL_INFO } from '@/lib/constants'

const projects: Project[] = [
  {
    title: 'RIPHours',
    subtitle: 'Chrome Extension',
    type: 'Published Extension',
    description: 'A privacy-first productivity extension for tracking screen time and enforcing digital discipline.',
    problem: 'Users lose hours to mindless browsing with no awareness of time spent per site.',
    solution: 'Engineered accurate time-tracking via Page Visibility API with auto-idle detection, per-site daily limits with hard-block enforcement, and a 7-day trend analytics dashboard.',
    impact: 'Zero-network-request architecture ensuring all user data remains local. Published on Chrome Web Store.',
    tech: ['JavaScript', 'Chrome APIs', 'Chrome Storage Sync', 'Page Visibility API'],
    github: 'https://github.com/SamisDone/RIPHours',
    live: 'https://chromewebstore.google.com/detail/riphours/iagjeekneaalapjnnofnifleaiondbbb',
    accent: 'cyan',
    featured: true,
    animation: 'elevate',
  },
  {
    title: 'TabSaver',
    subtitle: 'Chrome Extension',
    type: 'Published Extension',
    description: 'A productivity tool for managing browser sessions with military precision.',
    problem: 'Browser tab chaos destroying productivity and system memory.',
    solution: 'One-click session persistence with smart categorization and restoration.',
    impact: 'Significantly reduced browser memory usage and restored workflow sanity. Published on Chrome Web Store.',
    tech: ['JavaScript', 'Chrome Extension API', 'Local Storage'],
    github: 'https://github.com/SamisDone/TabSaver-2.0',
    live: 'https://chromewebstore.google.com/detail/tabsaver/emjeegpjecaljggipjdaofmlkoolikdk',
    accent: 'acid',
    featured: true,
    animation: 'focus',
  },
  {
    title: 'MediHub',
    subtitle: 'AI-Powered Healthcare Platform',
    type: 'Group Project',
    description: 'An AI-powered hospital management system for secure records and diagnostics.',
    problem: 'Inefficient patient record management and lack of AI-driven diagnostic tools.',
    solution: 'Integrated Gemini API to automate patient diagnostics and summarize medical histories. Implemented secure role-based access control (RBAC).',
    impact: 'Streamlined healthcare workflows and provided faster diagnostic insights with AI-driven analysis.',
    tech: ['React', 'Node.js', 'Gemini API', 'Firebase', 'Vercel'],
    github: 'https://github.com/SamisDone/AI-Powered-Hospital-Management-System',
    live: 'https://ai-powered-hospital-management-syst.vercel.app/',
    accent: 'blood',
    featured: true,
    animation: 'unfold',
  },
  {
    title: 'PIERRA',
    subtitle: 'Freelance Client Website',
    type: 'Freelance Project',
    description: 'A professional bilingual business website for a Montreal-based exterior design firm.',
    problem: 'Client needed a polished, bilingual (English/French) online presence to attract local customers.',
    solution: 'Built an interactive project gallery, client testimonial carousel, and consultation request form with responsive design and SEO optimization.',
    impact: 'Enhanced local search visibility and provided a premium digital storefront for the business.',
    tech: ['Next.js', 'Tailwind CSS', 'i18n', 'SEO'],
    github: '',
    live: 'https://pierrafinal.vercel.app/',
    accent: 'violet',
    featured: true,
    animation: 'glide',
  },
  {
    title: 'StockMaster',
    subtitle: 'Enterprise Inventory Tracker',
    type: 'Group Project',
    description: 'A full-stack inventory management platform with real-time dashboards and data-driven stock analytics.',
    problem: 'Businesses need reliable, real-time inventory tracking with intuitive data visualization.',
    solution: 'Built with Next.js 15 and React 19, featuring Zustand for global state management, Recharts for interactive stock analytics, and Radix UI for accessible component primitives.',
    impact: 'Delivers a responsive, theme-aware dashboard with form validation via Zod and toast notifications for real-time user feedback.',
    tech: ['Next.js', 'TypeScript', 'Zustand', 'Recharts', 'Tailwind CSS', 'Radix UI'],
    github: 'https://github.com/SamisDone/StockMaster',
    live: '',
    accent: 'cyan',
    featured: true,
    animation: 'elevate',
  },
  {
    title: 'ResumeForge',
    subtitle: 'Web Application',
    type: 'Personal Project',
    description: 'Dynamic resume builder with live preview and professional PDF export.',
    problem: 'Resume creation is tedious and formatting is painful for applicants.',
    solution: 'Real-time editing with instant visual feedback using React and Tailwind.',
    impact: 'Users generate professionally formatted resumes in minutes, not hours.',
    tech: ['React', 'Tailwind CSS', 'PDF Generation'],
    github: 'https://github.com/SamisDone/ResumeForge',
    live: 'https://resumeforge-sam.netlify.app/',
    accent: 'acid',
    featured: true,
    animation: 'focus',
  },
  {
    title: 'Adaptive Priority Round Robin',
    subtitle: 'OS Scheduling Simulator',
    type: 'Personal Project',
    description: 'A custom OS scheduling algorithm simulation to evaluate and optimize CPU performance.',
    problem: 'Understanding CPU scheduling algorithms requires visual, interactive experimentation.',
    solution: 'Developed a custom scheduling algorithm in C++ with a React frontend for real-time visualization of dynamic process queues.',
    impact: 'Improved understanding of turnaround and wait time optimizations through interactive simulation.',
    tech: ['C++', 'React', 'Algorithms', 'OS Concepts'],
    github: 'https://github.com/SamisDone/Adaptive-Priority-Round-Robin',
    live: '',
    accent: 'violet',
    featured: true,
    animation: 'unfold',
  },
  {
    title: 'SortnPlay',
    subtitle: 'Algorithm Visualizer',
    type: 'Personal Project',
    description: 'Interactive sorting algorithm simulator for visual learners.',
    problem: 'Abstract algorithms are hard to understand from code alone.',
    solution: 'Step-by-step visualization with adjustable speed and custom array sizes.',
    impact: 'Makes algorithmic complexity tangible and highly educational.',
    tech: ['React.js', 'Animation', 'DSA'],
    github: 'https://github.com/SamisDone/Sorting-Algorithm-Simulator',
    live: 'https://sortnplay.netlify.app/',
    accent: 'cyan',
    featured: true,
    animation: 'glide',
  },
  {
    title: 'FinPulse',
    subtitle: 'Personal Finance Manager',
    type: 'Personal Project',
    description: 'A comprehensive web application to manage personal finances, track income and expenses, set budgets, and achieve financial goals.',
    problem: 'Individuals need a structured way to track income, expenses, and savings goals with visual insights.',
    solution: 'Built a PHP/MySQL CRUD application with user authentication, budget management, savings goal tracking, and reporting dashboards with Chart.js visualizations.',
    impact: 'Provides multi-user financial record-keeping with categorized transactions, reminders, and clear visual reports.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Chart.js', 'HTML/CSS'],
    github: 'https://github.com/SamisDone/Finance-Tracker',
    live: 'http://finpulse.infinityfree.me/',
    accent: 'acid',
    featured: true,
    animation: 'elevate',
  },
  {
    title: 'PixelArt',
    subtitle: 'Creative Tool',
    type: 'Personal Project',
    description: 'A web-based pixel art editor for creating digital doodles on a customizable grid.',
    problem: 'Casual digital artists need a simple, zero-friction tool for quick pixel sketches.',
    solution: 'Built a responsive HTML5 Canvas grid with real-time color picking and toolsets.',
    impact: 'Provides a lightweight, accessible creative outlet for pixel art enthusiasts.',
    tech: ['JavaScript', 'HTML5 Canvas', 'CSS Grid'],
    github: 'https://github.com/SamisDone/Pixel-Art-App',
    live: 'https://pixelartweb.netlify.app/',
    accent: 'violet',
    featured: true,
    animation: 'glide',
  },
  {
    title: 'GlitchBreach',
    subtitle: 'Visual Experiment',
    type: 'Personal Project',
    description: 'An immersive digital experience exploring glitch aesthetics and terminal processing.',
    problem: 'Standard web interfaces often lack character and dynamic visual feedback.',
    solution: 'Implemented complex CSS filters and Framer Motion sequences to simulate a system breach.',
    impact: 'Demonstrates advanced UI/UX experimentation and custom animation orchestration.',
    tech: ['React', 'Framer Motion', 'Tailwind'],
    github: 'https://github.com/SamisDone/GLITCH-BREACH',
    live: 'https://glitch-breach-sam.netlify.app/',
    accent: 'cyan',
    featured: true,
    animation: 'elevate',
  },
  {
    title: 'Microops Hackathon',
    subtitle: 'Hackathon MVP',
    type: 'Hackathon',
    description: 'A full-stack solution rapidly prototyped during an intense 24-hour hackathon.',
    problem: 'Delivering a functional product under extreme time constraints.',
    solution: 'Handled both REST API design and UI implementation to deliver a functional MVP.',
    impact: 'Demonstrated ability to ship under pressure with clean architecture.',
    tech: ['React', 'REST API', 'Node.js', 'Rapid Prototyping'],
    github: 'https://github.com/SamisDone/Microops-Hackathon',
    live: '',
    accent: 'acid',
    featured: true,
    animation: 'focus',
  },
  {
    title: 'Hangman',
    subtitle: 'Classic Game',
    type: 'Personal Project',
    description: 'A browser-based implementation of the classic Hangman game with dynamic state tracking.',
    problem: 'Simple games are often over-engineered or lacks smooth interaction loops.',
    solution: 'Focused on lean state management and intuitive keyboard-based interactions.',
    impact: 'A polished, bug-free game experience with clean code and minimal overhead.',
    tech: ['JavaScript', 'DOM Manipulation', 'CSS3'],
    github: 'https://github.com/SamisDone/HangMan',
    live: 'https://hangman-sam.netlify.app/',
    accent: 'violet',
    featured: true,
    animation: 'elevate',
  },
]

export function Projects() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section id="projects" className="py-12 md:py-24 px-4 md:px-6 relative" ref={ref}>
      <motion.div style={{ y }} className="max-w-6xl mx-auto">
        <SectionHeader 
          number="02" 
          title="Selected Work" 
          subtitle="SCROLL_TO_DISCOVER_EXPERIMENTS"
          dividerWidth="w-48 md:w-96"
          isInView={isInView}
        />

        {/* Projects Grid */}
        <div className="space-y-12 md:space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Footer Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-12 text-center"
        >
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
          >
            <span>view_more_on_github</span>
            <Github className="w-4 h-4" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

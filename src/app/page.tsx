export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5]">
      {/* Nav */}
      <nav className="fixed top-0 w-full bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#262626] z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-lg">Alex Horton</span>
          <div className="flex gap-6 text-sm text-[#a3a3a3]">
            <a href="#agents" className="hover:text-white transition-colors">Agents</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col sm:flex-row items-start gap-10">
          <div className="flex-1">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-medium text-[#22c55e] bg-[#22c55e]/10 rounded-full border border-[#22c55e]/20">
              Open to new opportunities
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              I build production AI systems<br />
              <span className="text-[#a3a3a3]">from zero to one.</span>
            </h1>
            <p className="text-lg text-[#a3a3a3] max-w-2xl mb-8 leading-relaxed">
              Full-stack engineer with ML background. I design and operate autonomous agent infrastructure
              — persistent terminal workers coordinated over shared Obsidian context, managed via
              kanban across live products. Solo founder, 3 production platforms, Anthropic, MIT, and Stanford coursework in applied AI and Claude.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-white text-[#0a0a0a] font-medium rounded-lg hover:bg-[#e5e5e5] transition-colors"
              >
                Get in touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-[#333] text-[#e5e5e5] font-medium rounded-lg hover:border-[#555] transition-colors"
              >
                See my work
              </a>
            </div>
          </div>
          <div className="shrink-0">
            <img
              src="/alex.png"
              alt="Alex Horton"
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl object-cover object-top border border-[#262626]"
            />
          </div>
        </div>
      </section>

      {/* Agent Infrastructure */}
      <section id="agents" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-2">Agent Infrastructure</h2>
        <p className="text-[#a3a3a3] mb-10">A persistent multi-agent system running 24/7 across my products.</p>

        {/* Architecture diagram */}
        <div className="bg-[#0d0d0d] border border-[#262626] rounded-xl p-6 mb-8 font-mono text-sm overflow-x-auto">
          <p className="text-[#666] mb-3 font-sans text-xs uppercase tracking-widest">Architecture</p>
          <pre className="text-[#a3a3a3] leading-relaxed">{`Telegram
    │  Python bridge (routes messages → sessions)
    ▼
┌───────────────────────────────────────────────┐
│            Persistent Terminal Workers         │
│  tmux session: assistant                      │
│  tmux session: bml-ceo   ← bitcoinml          │
│  tmux session: scout-ceo ← energyscout        │
└─────────────────┬─────────────────────────────┘
                  │  read / write markdown
                  ▼
┌───────────────────────────────────────────────┐
│         Obsidian Vault  (shared memory)        │
│  inbox/  ← tasks arrive here                  │
│  outbox/ ← agent responses posted here        │
│  knowledge/ ← persistent cross-agent context  │
└─────────────────┬─────────────────────────────┘
                  │  task sync (5s poll)
                  ▼
            Cline Kanban
     backlog → in_progress → review`}</pre>
        </div>

        {/* How it works */}
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
            <h3 className="font-semibold mb-3 text-[#e5e5e5]">Telegram → Terminal Bridge</h3>
            <p className="text-[#a3a3a3] text-sm leading-relaxed">
              A Python bridge listens to Telegram and routes messages to the right persistent tmux session.
              Each session is a named worker tied to a specific product — Bitcoin ML, EnergyScout, or general assistant.
              Workers stay alive across reboots; conversations persist in context.
            </p>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
            <h3 className="font-semibold mb-3 text-[#e5e5e5]">Obsidian In / Out Methodology</h3>
            <p className="text-[#a3a3a3] text-sm leading-relaxed">
              Agents communicate through markdown files in an Obsidian vault. Tasks drop into{" "}
              <code className="text-[#22c55e] text-xs">inbox/</code>, agents process and write results to{" "}
              <code className="text-[#22c55e] text-xs">outbox/</code>.
              Shared <code className="text-[#22c55e] text-xs">knowledge/</code> gives every agent access to the same
              persistent context — no API calls between agents, just filesystem reads.
            </p>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
            <h3 className="font-semibold mb-3 text-[#e5e5e5]">Kanban Across Products</h3>
            <p className="text-[#a3a3a3] text-sm leading-relaxed">
              A Cline kanban board coordinates tasks across all three live sites —
              bitcoinmachinelearning.com, energyscout.org, and propfi.live.
              Tasks move backlog → in_progress → review as agents work them.
              Syncs bidirectionally every 5 seconds between kanban and vault.
            </p>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
            <h3 className="font-semibold mb-3 text-[#e5e5e5]">The End Goal</h3>
            <p className="text-[#a3a3a3] text-sm leading-relaxed">
              Each product eventually runs its own autonomous employee: a persistent agent with domain context,
              a task queue, and a communication channel. The loop is: task arrives → agent works it →
              result posted → human reviews or approves. The human stays in the loop at review,
              everything else runs on its own.
            </p>
          </div>
        </div>

        {/* Stack tags */}
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
          <p className="text-xs text-[#666] uppercase tracking-widest mb-3">Stack</p>
          <div className="flex flex-wrap gap-2">
            {["Python", "Telegram Bot API", "tmux", "Claude API", "Obsidian", "Markdown", "Cline Kanban", "OpenRouter", "Claude Code", "FastAPI"].map((t) => (
              <span key={t} className="text-xs px-2 py-1 bg-[#1a1a1a] text-[#a3a3a3] rounded border border-[#262626]">{t}</span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <a
            href="/agents"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] font-medium rounded-lg hover:bg-[#22c55e]/20 transition-colors"
          >
            See the full agent system demo →
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-2">Projects</h2>
        <p className="text-[#a3a3a3] mb-10">Production platforms I&apos;ve built end to end.</p>

        <div className="grid gap-6">
          {/* Energy Scout */}
          <div className="group bg-[#141414] border border-[#262626] rounded-xl p-6 hover:border-[#333] transition-colors">
            <div className="flex justify-between items-start mb-3">
              <a href="https://energyscout.org" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold hover:text-[#22c55e] transition-colors">Energy Scout ↗</a>
              <span className="text-xs text-[#22c55e] bg-[#22c55e]/10 px-2 py-1 rounded">Clean Energy</span>
            </div>
            <p className="text-[#a3a3a3] mb-4 leading-relaxed">
              Production solar energy platform that ingests real-world production and sensor
              data and delivers actionable insights to energy companies. Designed and built
              from scratch, used by real energy stakeholders.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Python", "FastAPI", "PostgreSQL", "GCP"].map((t) => (
                <span key={t} className="text-xs px-2 py-1 bg-[#1a1a1a] text-[#a3a3a3] rounded border border-[#262626]">{t}</span>
              ))}
            </div>
          </div>

          {/* Bitcoin ML */}
          <div className="group bg-[#141414] border border-[#262626] rounded-xl p-6 hover:border-[#333] transition-colors">
            <div className="flex justify-between items-start mb-3">
              <a href="https://bitcoinmachinelearning.com" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold hover:text-[#3b82f6] transition-colors">ML Trading System ↗</a>
              <span className="text-xs text-[#3b82f6] bg-[#3b82f6]/10 px-2 py-1 rounded">Fintech / ML</span>
            </div>
            <p className="text-[#a3a3a3] mb-4 leading-relaxed">
              Systematic trading platform built to extract real predictive signal from
              noisy financial data. Full pipeline: market data ingestion, feature engineering
              across hundreds of candidate signals, XGBoost model training with walk-forward
              validation, and a backtesting engine accounting for slippage and transaction costs.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Python", "XGBoost", "Pandas", "NumPy", "Feature Engineering"].map((t) => (
                <span key={t} className="text-xs px-2 py-1 bg-[#1a1a1a] text-[#a3a3a3] rounded border border-[#262626]">{t}</span>
              ))}
            </div>
          </div>

          {/* PropFi */}
          <div className="group bg-[#141414] border border-[#262626] rounded-xl p-6 hover:border-[#333] transition-colors">
            <div className="flex justify-between items-start mb-3">
              <a href="https://propfi.live" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold hover:text-[#a855f7] transition-colors">PropFi ↗</a>
              <span className="text-xs text-[#a855f7] bg-[#a855f7]/10 px-2 py-1 rounded">Real Estate Tech</span>
            </div>
            <p className="text-[#a3a3a3] mb-4 leading-relaxed">
              Real estate technology platform for property analysis and investment
              decisions. End-to-end product: design, frontend, backend, database,
              and deployment. Applied cohort analysis and data-driven financial
              modeling to real estate investment workflows.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Python", "PostgreSQL"].map((t) => (
                <span key={t} className="text-xs px-2 py-1 bg-[#1a1a1a] text-[#a3a3a3] rounded border border-[#262626]">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-2">Skills</h2>
        <p className="text-[#a3a3a3] mb-10">What I work with.</p>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
            <h3 className="font-semibold mb-4">Languages & Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "TypeScript", "JavaScript", "React", "Next.js", "FastAPI", "Node.js"].map((t) => (
                <span key={t} className="text-sm px-3 py-1.5 bg-[#1a1a1a] text-[#a3a3a3] rounded-lg border border-[#262626]">{t}</span>
              ))}
            </div>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
            <h3 className="font-semibold mb-4">ML & Data Science</h3>
            <div className="flex flex-wrap gap-2">
              {["XGBoost", "Scikit-learn", "Pandas", "NumPy", "Feature Engineering", "ETL Pipelines"].map((t) => (
                <span key={t} className="text-sm px-3 py-1.5 bg-[#1a1a1a] text-[#a3a3a3] rounded-lg border border-[#262626]">{t}</span>
              ))}
            </div>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
            <h3 className="font-semibold mb-4">Infrastructure</h3>
            <div className="flex flex-wrap gap-2">
              {["PostgreSQL", "Docker", "GCP", "Git", "CI/CD", "REST APIs"].map((t) => (
                <span key={t} className="text-sm px-3 py-1.5 bg-[#1a1a1a] text-[#a3a3a3] rounded-lg border border-[#262626]">{t}</span>
              ))}
            </div>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
            <h3 className="font-semibold mb-4">Product & Design</h3>
            <div className="flex flex-wrap gap-2">
              {["Product Design", "UI/UX", "User Research", "A/B Testing", "Go-to-Market"].map((t) => (
                <span key={t} className="text-sm px-3 py-1.5 bg-[#1a1a1a] text-[#a3a3a3] rounded-lg border border-[#262626]">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-6">About</h2>
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 text-[#a3a3a3] leading-relaxed space-y-4">
          <p>
            I studied engineering design and sustainability at Cal Poly San Luis Obispo (LAES program),
            where I learned to work across disciplines on team-based projects. I&apos;ve since built on
            that foundation with data science coursework through MIT and Stanford, and a Google UX certificate.
          </p>
          <p>
            I&apos;m drawn to problems where software meets the real world. Energy systems,
            agriculture, climate, food. I care about building things that have a tangible
            impact, and I bring both the technical depth and the domain curiosity to go deep fast.
          </p>
          <p>
            When I&apos;m not building software, I&apos;m usually thinking about farming,
            community, and how technology can serve both.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-2">Get in touch</h2>
        <p className="text-[#a3a3a3] mb-8">Open to founding engineer roles, freelance projects, and interesting conversations.</p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:horton.alexander@gmail.com"
            className="flex items-center gap-3 bg-[#141414] border border-[#262626] rounded-xl px-6 py-4 hover:border-[#333] transition-colors"
          >
            <svg className="w-5 h-5 text-[#a3a3a3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-[#a3a3a3]">horton.alexander@gmail.com</span>
          </a>

          <a
            href="https://linkedin.com/in/alex-horton-9b410977"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#141414] border border-[#262626] rounded-xl px-6 py-4 hover:border-[#333] transition-colors"
          >
            <svg className="w-5 h-5 text-[#a3a3a3]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="text-[#a3a3a3]">LinkedIn</span>
          </a>

          <a
            href="https://github.com/mobiusframeworks"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#141414] border border-[#262626] rounded-xl px-6 py-4 hover:border-[#333] transition-colors"
          >
            <svg className="w-5 h-5 text-[#a3a3a3]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="text-[#a3a3a3]">GitHub</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-[#262626]">
        <p className="text-sm text-[#666]">Alex Horton, 2026</p>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5]">
      {/* Nav */}
      <nav className="sticky top-0 w-full bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#262626] z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-lg">Alex Horton</span>
          <div className="flex gap-6 text-sm text-[#a3a3a3]">
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#how-i-work" className="hover:text-white transition-colors">How I work</a>
            <a href="#stack" className="hover:text-white transition-colors">Stack</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16">
        <div className="flex flex-col sm:flex-row items-start gap-10">
          <div className="flex-1">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-medium text-[#22c55e] bg-[#22c55e]/10 rounded-full border border-[#22c55e]/20">
              Open to new opportunities
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Product engineer.{" "}
              <span className="text-[#a3a3a3]">
                I ship full-stack products end-to-end — with AI agents as force multipliers.
              </span>
            </h1>
            <p className="text-lg text-[#a3a3a3] max-w-2xl mb-8 leading-relaxed">
              LAES at Cal Poly (interdisciplinary design thinking — Stanford d.school model) +
              applied AI coursework (MIT, Stanford, Anthropic via Skilljar). Comfortable
              across Python, TypeScript, FastAPI, Postgres, and React — building products
              where software meets the real world.
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

      {/* About / Bio */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">About</h2>
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 text-[#a3a3a3] leading-relaxed space-y-4">
          <p>
            I&apos;m a product engineer who builds end-to-end. I&apos;d rather ship something
            users can touch than optimize a single layer of the stack.
          </p>
          <p>
            My background is in the LAES program at Cal Poly San Luis Obispo —
            Liberal Arts and Engineering Studies, an interdisciplinary program modelled
            after the Stanford d.school. Group projects, a five-step design process
            (Empathize, Define, Ideate, Prototype, Test), and a focus on solving pressing
            global problems. Applied AI coursework since then from MIT, Stanford, and
            Anthropic (via Skilljar). I work across Python, TypeScript, FastAPI,
            Postgres/Supabase, and React/Next.js.
            I&apos;m strongest at the product and applied-ML layers, lighter on deep platform/ops
            specialization — I own infrastructure for what I ship, but I&apos;m not pitching
            myself as a senior platform engineer.
          </p>
          <p>
            I work alongside Claude and other AI agents in my daily dev loop. They handle
            scaffolding, boilerplate, and parallel exploration; I drive product decisions,
            system design, and the parts that need judgment. It&apos;s the closest thing
            I&apos;ve found to having a third hand.
          </p>
          <p>
            Looking for founding-engineer or applied-ML / product-engineer roles at
            early-stage teams where I&apos;d own meaningful surface area and ship things
            that make it out the door.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-2">Projects</h2>
        <p className="text-[#a3a3a3] mb-10">Live side projects I&apos;ve built solo, end to end.</p>

        <div className="grid gap-6">
          {/* Energy Scout */}
          <div className="group bg-[#141414] border border-[#262626] rounded-xl p-6 hover:border-[#333] transition-colors">
            <div className="flex justify-between items-start mb-3">
              <a
                href="https://energyscout.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold hover:text-[#22c55e] transition-colors"
              >
                Energy Scout ↗
              </a>
              <span className="text-xs text-[#22c55e] bg-[#22c55e]/10 px-2 py-1 rounded">
                Clean Energy
              </span>
            </div>
            <p className="text-[#a3a3a3] mb-4 leading-relaxed">
              A solo side project: a tool to ingest and visualize solar production and
              sensor data. Python/FastAPI backend, Postgres, web frontend.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Python", "FastAPI", "PostgreSQL", "GCP"].map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 bg-[#1a1a1a] text-[#a3a3a3] rounded border border-[#262626]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* BTC Quant Research */}
          <div className="group bg-[#141414] border border-[#262626] rounded-xl p-6 hover:border-[#333] transition-colors">
            <div className="flex justify-between items-start mb-3">
              <a
                href="https://bitcoinmachinelearning.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold hover:text-[#3b82f6] transition-colors"
              >
                BTC Quant Research ↗
              </a>
              <span className="text-xs text-[#3b82f6] bg-[#3b82f6]/10 px-2 py-1 rounded">
                Quant / ML Research
              </span>
            </div>
            <p className="text-[#a3a3a3] mb-4 leading-relaxed">
              Quantitative research on Bitcoin using historical price data, engineered
              features (SMA and others), XGBoost, and walk-forward validation. Pipelines
              update a Supabase/DuckDB store on a schedule. Research, not live trading —
              the goal is rigorous idea testing, not capital management.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Python", "XGBoost", "Pandas", "NumPy", "Supabase", "DuckDB", "Walk-forward validation"].map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 bg-[#1a1a1a] text-[#a3a3a3] rounded border border-[#262626]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* PropFi */}
          <div className="group bg-[#141414] border border-[#262626] rounded-xl p-6 hover:border-[#333] transition-colors">
            <div className="flex justify-between items-start mb-3">
              <a
                href="https://propfi.live"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold hover:text-[#a855f7] transition-colors"
              >
                PropFi ↗
              </a>
              <span className="text-xs text-[#a855f7] bg-[#a855f7]/10 px-2 py-1 rounded">
                Real Estate Tech
              </span>
            </div>
            <p className="text-[#a3a3a3] mb-4 leading-relaxed">
              Real estate investment analysis tool with cohort analysis and financial
              modeling. Built solo, full-stack.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Python", "PostgreSQL"].map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 bg-[#1a1a1a] text-[#a3a3a3] rounded border border-[#262626]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section id="how-i-work" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-2">How I work</h2>
        <p className="text-[#a3a3a3] mb-10">
          AI-augmented dev loop, framed as workflow — not infrastructure.
        </p>

        <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 text-[#a3a3a3] leading-relaxed space-y-4">
          <p>
            Claude Code in tmux, Obsidian for persistent context across sessions,
            kanban-driven task flow. I&apos;m not running production multi-agent
            infrastructure — I&apos;m using AI agents as a workflow, the same way a senior
            engineer uses good tooling, to ship more product per unit time than a typical
            solo dev.
          </p>
          <p>
            If you&apos;re hiring at an early-stage team and you want someone who can ship
            a v1 in days and iterate from there, this is the version of &quot;punching above
            your weight&quot; that I actually mean.
          </p>
        </div>

        <div className="mt-6 bg-[#0d0d0d] border border-[#262626] rounded-xl p-6">
          <p className="text-xs text-[#666] uppercase tracking-widest mb-3">Workflow tools</p>
          <div className="flex flex-wrap gap-2">
            {["Claude Code", "tmux", "Obsidian", "Cline Kanban", "OpenRouter"].map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 bg-[#1a1a1a] text-[#a3a3a3] rounded border border-[#262626]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-2">Stack</h2>
        <p className="text-[#a3a3a3] mb-10">What I work with.</p>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
            <h3 className="font-semibold mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "TypeScript", "JavaScript"].map((t) => (
                <span
                  key={t}
                  className="text-sm px-3 py-1.5 bg-[#1a1a1a] text-[#a3a3a3] rounded-lg border border-[#262626]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
            <h3 className="font-semibold mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js"].map((t) => (
                <span
                  key={t}
                  className="text-sm px-3 py-1.5 bg-[#1a1a1a] text-[#a3a3a3] rounded-lg border border-[#262626]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
            <h3 className="font-semibold mb-4">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {["FastAPI", "Node.js"].map((t) => (
                <span
                  key={t}
                  className="text-sm px-3 py-1.5 bg-[#1a1a1a] text-[#a3a3a3] rounded-lg border border-[#262626]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
            <h3 className="font-semibold mb-4">Data</h3>
            <div className="flex flex-wrap gap-2">
              {["PostgreSQL", "Supabase", "DuckDB", "Pandas", "NumPy"].map((t) => (
                <span
                  key={t}
                  className="text-sm px-3 py-1.5 bg-[#1a1a1a] text-[#a3a3a3] rounded-lg border border-[#262626]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
            <h3 className="font-semibold mb-4">ML / Quant</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "XGBoost",
                "scikit-learn",
                "Walk-forward validation",
                "Time-series feature engineering",
              ].map((t) => (
                <span
                  key={t}
                  className="text-sm px-3 py-1.5 bg-[#1a1a1a] text-[#a3a3a3] rounded-lg border border-[#262626]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
            <h3 className="font-semibold mb-4">Infra</h3>
            <div className="flex flex-wrap gap-2">
              {["Docker", "Git", "GitHub Actions", "GCP (working knowledge)"].map((t) => (
                <span
                  key={t}
                  className="text-sm px-3 py-1.5 bg-[#1a1a1a] text-[#a3a3a3] rounded-lg border border-[#262626]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-2">Get in touch</h2>
        <p className="text-[#a3a3a3] mb-8 leading-relaxed max-w-2xl">
          Open to: founding-engineer roles, applied-ML / product-engineer roles at
          early-stage startups, and advisor / consulting work where there&apos;s a real
          product question to chew on.
        </p>

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
        <p className="text-sm text-[#666]">
          Alex Horton, 2026 · also: Google UX certificate
        </p>
      </footer>
    </div>
  );
}

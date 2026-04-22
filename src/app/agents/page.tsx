export default function AgentsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5]">
      {/* Nav */}
      <nav className="fixed top-0 w-full bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#262626] z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="font-bold text-lg hover:text-[#22c55e] transition-colors">Alex Horton</a>
          <a href="/" className="text-sm text-[#a3a3a3] hover:text-white transition-colors">← Back</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-32 pb-12">
        <div className="inline-block px-3 py-1 mb-6 text-xs font-medium text-[#22c55e] bg-[#22c55e]/10 rounded-full border border-[#22c55e]/20">
          Running 24/7
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
          Agentic Infrastructure<br />
          <span className="text-[#a3a3a3]">persistent workers, shared context.</span>
        </h1>
        <p className="text-lg text-[#a3a3a3] max-w-2xl leading-relaxed mb-10">
          I run a fleet of autonomous AI workers on a Mac Mini. Each worker is a persistent terminal session
          with a domain role, a task queue, and a communication channel. They stay alive, accumulate context,
          and handle work while I sleep.
        </p>

        {/* Hero screenshot — OpenClaw Command Center Timeline */}
        <div className="rounded-xl overflow-hidden border border-[#262626] shadow-2xl">
          <div className="bg-[#141414] px-4 py-2 flex items-center gap-2 border-b border-[#262626]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
            <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
            <span className="ml-3 text-xs text-[#666]">OpenClaw Command Center — Agent Timeline</span>
          </div>
          <img
            src="/screenshots/openclaw-timeline.png"
            alt="OpenClaw Command Center showing all agents on a timeline"
            className="w-full"
          />
        </div>
        <p className="text-xs text-[#666] mt-2 text-center">All agents scheduled across a live timeline — BML CEO, EnergyScout, Real Estate, Analytics, Assistant</p>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-xl font-bold mb-8">How It Works</h2>

        <div className="grid sm:grid-cols-2 gap-6">

          {/* Telegram bridge */}
          <div className="flex flex-col gap-4">
            <div className="bg-[#141414] border border-[#262626] rounded-xl p-5">
              <h3 className="font-semibold mb-2">1. Telegram → Python Bridge</h3>
              <p className="text-[#a3a3a3] text-sm leading-relaxed">
                A Python bot listens to Telegram and routes messages to the right persistent tmux session
                by keyword or @mention. Responses arrive within seconds.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden border border-[#262626]">
              <div className="bg-[#141414] px-3 py-1.5 flex items-center gap-2 border-b border-[#262626]">
                <span className="text-xs text-[#666]">Telegram — live conversation with assistant agent</span>
              </div>
              <img
                src="/screenshots/telegram-bridge.png"
                alt="Telegram conversation with the assistant agent"
                className="w-full"
              />
            </div>
          </div>

          {/* Kanban */}
          <div className="flex flex-col gap-4">
            <div className="bg-[#141414] border border-[#262626] rounded-xl p-5">
              <h3 className="font-semibold mb-2">2. Kanban Task Coordination</h3>
              <p className="text-[#a3a3a3] text-sm leading-relaxed">
                A Cline kanban board syncs tasks across all products every 5 seconds.
                Workers pull tasks, update status, post results. I stay in the loop at review.
              </p>
            </div>
          </div>
        </div>

        {/* Cline kanban — full width for readability */}
        <div className="mt-6 rounded-xl overflow-hidden border border-[#262626]">
          <div className="bg-[#141414] px-3 py-1.5 flex items-center gap-2 border-b border-[#262626]">
            <span className="text-xs text-[#666]">Cline Kanban — backlog → in progress → review</span>
          </div>
          <img
            src="/screenshots/cline-kanban.png"
            alt="Cline kanban board with tasks across columns"
            className="w-full"
          />
        </div>
      </section>

      {/* System architecture */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-xl font-bold mb-4">Hub & Spoke Architecture</h2>
        <p className="text-[#a3a3a3] text-sm mb-6">One hub agent coordinates all domain specialists. Each spoke runs independently and reports up.</p>

        <div className="grid sm:grid-cols-2 gap-6 items-start">
          <div className="rounded-xl overflow-hidden border border-[#262626]">
            <div className="bg-[#141414] px-3 py-1.5 border-b border-[#262626]">
              <span className="text-xs text-[#666]">System architecture — as described by assistant agent</span>
            </div>
            <img
              src="/screenshots/system-architecture.png"
              alt="Hub and spoke architecture diagram"
              className="w-full"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-[#141414] border border-[#262626] rounded-xl p-5">
              <h3 className="font-semibold mb-3">3. Obsidian Shared Memory</h3>
              <p className="text-[#a3a3a3] text-sm leading-relaxed mb-3">
                Agents share context through markdown files in an Obsidian vault.
                Tasks land in <code className="text-[#22c55e] text-xs bg-[#1a1a1a] px-1 py-0.5 rounded">inbox/</code>,
                results go to <code className="text-[#22c55e] text-xs bg-[#1a1a1a] px-1 py-0.5 rounded">outbox/</code>.
                The <code className="text-[#22c55e] text-xs bg-[#1a1a1a] px-1 py-0.5 rounded">knowledge/</code> folder
                persists context across sessions — no API calls between agents, just filesystem reads.
              </p>
            </div>
            <div className="bg-[#141414] border border-[#262626] rounded-xl p-5">
              <h3 className="font-semibold mb-2">Active Agents</h3>
              <div className="space-y-2">
                {[
                  { name: "claude-assistant", role: "Hub — coordinates all workers", color: "#22c55e" },
                  { name: "claude-bitcoinml", role: "Bitcoin ML analysis & market commentary", color: "#3b82f6" },
                  { name: "claude-energyscout", role: "Solar ROI and energy analysis", color: "#f59e0b" },
                  { name: "claude-realestate", role: "Property analytics", color: "#a855f7" },
                  { name: "claude-seo", role: "SEO/GEO research and content", color: "#ec4899" },
                ].map(a => (
                  <div key={a.name} className="flex items-center gap-3">
                    <span className="inline-block w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: a.color }}></span>
                    <code className="text-xs" style={{ color: a.color }}>{a.name}</code>
                    <span className="text-xs text-[#666]">— {a.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kanban + status side by side */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-xl font-bold mb-6">Live System</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-3">
            <p className="text-sm text-[#a3a3a3]">Kanban board — all agent tasks in one view</p>
            <div className="rounded-xl overflow-hidden border border-[#262626]">
              <img
                src="/screenshots/openclaw-kanban.png"
                alt="OpenClaw kanban board"
                className="w-full min-h-[320px] object-cover object-top"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm text-[#a3a3a3]">Infrastructure status — all services monitored</p>
            <div className="rounded-xl overflow-hidden border border-[#262626]">
              <img
                src="/screenshots/system-status.png"
                alt="Full system status showing all running services"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The vision */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-xl font-bold mb-6">Where This Is Going</h2>
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-8">
          <p className="text-[#a3a3a3] leading-relaxed mb-4">
            The goal is a small company that runs itself. Each product has an agent employee with
            full domain context, a task queue, and a communication channel. The loop is:
          </p>
          <div className="bg-[#0d0d0d] rounded-lg p-4 font-mono text-sm text-[#a3a3a3] mb-4">
            task arrives → agent works it → result posted → human reviews → approve/redirect → repeat
          </div>
          <p className="text-[#a3a3a3] leading-relaxed">
            Each iteration makes the agent more capable — better context, more domain knowledge,
            faster execution. The human stays at the top of the loop for judgment calls.
            Everything else scales without headcount.
          </p>
        </div>
      </section>

      {/* Stack */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
          <p className="text-xs text-[#666] uppercase tracking-widest mb-3">Stack</p>
          <div className="flex flex-wrap gap-2">
            {["Python", "Telegram Bot API", "tmux", "Claude API", "Obsidian", "Markdown", "Cline Kanban", "OpenRouter", "Claude Code", "FastAPI", "Mac Mini (Apple M4)"].map((t) => (
              <span key={t} className="text-xs px-2 py-1 bg-[#1a1a1a] text-[#a3a3a3] rounded border border-[#262626]">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h3 className="font-bold mb-1">Want to build something like this?</h3>
            <p className="text-[#a3a3a3] text-sm">I&apos;m available to design and deploy agent infrastructure for early-stage teams.</p>
          </div>
          <a
            href="mailto:horton.alexander@gmail.com"
            className="shrink-0 px-6 py-3 bg-white text-[#0a0a0a] font-medium rounded-lg hover:bg-[#e5e5e5] transition-colors text-sm"
          >
            Get in touch
          </a>
        </div>
      </section>

      <footer className="max-w-5xl mx-auto px-6 py-8 border-t border-[#262626]">
        <p className="text-sm text-[#666]">Alex Horton, 2026</p>
      </footer>
    </div>
  );
}

export default function AgentsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5]">
      {/* Nav */}
      <nav className="fixed top-0 w-full bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#262626] z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="font-bold text-lg hover:text-[#22c55e] transition-colors">Alex Horton</a>
          <a href="/" className="text-sm text-[#a3a3a3] hover:text-white transition-colors">← Back</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-32 pb-12">
        <div className="inline-block px-3 py-1 mb-6 text-xs font-medium text-[#22c55e] bg-[#22c55e]/10 rounded-full border border-[#22c55e]/20">
          Running 24/7
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
          Agentic Infrastructure<br />
          <span className="text-[#a3a3a3]">persistent workers, shared context.</span>
        </h1>
        <p className="text-lg text-[#a3a3a3] max-w-2xl leading-relaxed">
          I run a small fleet of autonomous AI workers on a Mac Mini. Each worker is a persistent terminal session
          with a domain role, a task queue, and a communication channel. They don&apos;t spin up and tear down —
          they stay alive, accumulate context, and handle work while I sleep.
        </p>
      </section>

      {/* Live architecture diagram */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-xl font-bold mb-6">How It Works</h2>
        <div className="bg-[#0d0d0d] border border-[#262626] rounded-xl p-6 font-mono text-sm overflow-x-auto mb-4">
          <pre className="text-[#a3a3a3] leading-relaxed whitespace-pre">{`You → Telegram
          │
          ▼
    Python Bridge
    (routes by @mention or keyword)
          │
    ┌─────┴──────────────────────┐
    ▼             ▼              ▼
tmux: assistant  tmux: bml-ceo  tmux: scout-ceo
  general work   bitcoin/ML     solar/energy
    │             │              │
    └─────┬───────┘──────────────┘
          ▼
  Obsidian Vault  ~/Vaults/openclaw/
  ├── inbox/       ← tasks arrive here
  ├── outbox/      ← responses posted here
  └── knowledge/   ← persistent shared context
          │
          ▼
    Cline Kanban
  backlog → in_progress → review
  (synced across bitcoinmachinelearning.com,
   energyscout.org, propfi.live)`}</pre>
        </div>
        <p className="text-xs text-[#666]">Each tmux session survives reboots. Workers resume where they left off.</p>
      </section>

      {/* Three pillars */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-xl font-bold mb-8">The Three Pieces</h2>
        <div className="grid sm:grid-cols-3 gap-6">

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
            <div className="text-2xl mb-3">📡</div>
            <h3 className="font-semibold mb-2">Telegram Bridge</h3>
            <p className="text-[#a3a3a3] text-sm leading-relaxed">
              A Python bot listens to my Telegram. Messages route to the right persistent
              session by keyword or @mention. Inline keyboard buttons for quick actions.
              Responses come back within seconds.
            </p>
            <div className="mt-4 flex flex-wrap gap-1">
              {["Python", "Telegram Bot API", "python-telegram-bot"].map(t => (
                <span key={t} className="text-xs px-2 py-0.5 bg-[#1a1a1a] text-[#666] rounded border border-[#222]">{t}</span>
              ))}
            </div>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
            <div className="text-2xl mb-3">🗂️</div>
            <h3 className="font-semibold mb-2">Obsidian Memory</h3>
            <p className="text-[#a3a3a3] text-sm leading-relaxed">
              Agents share context through markdown files. Tasks land in <code className="text-[#22c55e] text-xs">inbox/</code>,
              results go to <code className="text-[#22c55e] text-xs">outbox/</code>.
              The <code className="text-[#22c55e] text-xs">knowledge/</code> folder persists context across sessions —
              no API calls between agents, just filesystem reads.
            </p>
            <div className="mt-4 flex flex-wrap gap-1">
              {["Obsidian", "Markdown", "File I/O"].map(t => (
                <span key={t} className="text-xs px-2 py-0.5 bg-[#1a1a1a] text-[#666] rounded border border-[#222]">{t}</span>
              ))}
            </div>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
            <div className="text-2xl mb-3">📋</div>
            <h3 className="font-semibold mb-2">Kanban Coordination</h3>
            <p className="text-[#a3a3a3] text-sm leading-relaxed">
              A kanban board syncs tasks across all active products every 5 seconds.
              Workers pull from the board, update status, and post results.
              I stay in the loop at the review column — everything else runs autonomously.
            </p>
            <div className="mt-4 flex flex-wrap gap-1">
              {["Cline", "Kanban", "Bidirectional Sync"].map(t => (
                <span key={t} className="text-xs px-2 py-0.5 bg-[#1a1a1a] text-[#666] rounded border border-[#222]">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workers */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-xl font-bold mb-4">Active Workers</h2>
        <p className="text-[#a3a3a3] mb-8 text-sm">Each session has a domain role, its own system prompt, and a direct Telegram interface.</p>

        <div className="space-y-4">
          {[
            {
              name: "assistant",
              role: "General Operator",
              desc: "Handles incoming tasks, coordinates across workers, manages the kanban board. First responder to any message.",
              color: "#22c55e",
              site: null,
            },
            {
              name: "bml-ceo",
              role: "Bitcoin ML — Market Intelligence",
              desc: "Monitors Bitcoin cycle data, generates market commentary validated against systematic ML models, posts to Twitter. Runs daily analysis loops.",
              color: "#3b82f6",
              site: "bitcoinmachinelearning.com",
            },
            {
              name: "scout-ceo",
              role: "EnergyScout — Solar & Storage",
              desc: "Handles solar ROI inquiries, processes utility rate data, generates homeowner recommendations via energyscout.org.",
              color: "#f59e0b",
              site: "energyscout.org",
            },
          ].map(w => (
            <div key={w.name} className="bg-[#141414] border border-[#262626] rounded-xl p-6 flex flex-col sm:flex-row gap-4">
              <div className="shrink-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></span>
                  <code className="text-sm font-mono" style={{ color: w.color }}>{w.name}</code>
                </div>
                <p className="text-xs text-[#666]">tmux session</p>
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm mb-1">{w.role}</p>
                <p className="text-[#a3a3a3] text-sm leading-relaxed">{w.desc}</p>
                {w.site && (
                  <a href={`https://${w.site}`} target="_blank" rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs text-[#a3a3a3] hover:text-white transition-colors">
                    {w.site} ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The vision */}
      <section className="max-w-4xl mx-auto px-6 py-12">
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
            faster execution. The human stays at the top of the loop to handle judgment calls
            and redirect when needed. Everything else scales without headcount.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-12">
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

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-[#262626]">
        <p className="text-sm text-[#666]">Alex Horton, 2026</p>
      </footer>
    </div>
  );
}

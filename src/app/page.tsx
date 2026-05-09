const STYLES = `
  :root {
    --bg: #0a0a0a;
    --panel: #141414;
    --panel-2: #0d0d0d;
    --chip: #1a1a1a;
    --border: #262626;
    --border-hover: #333;
    --text: #e5e5e5;
    --muted: #a3a3a3;
    --faint: #666;
    --green: #22c55e;
    --blue: #3b82f6;
    --purple: #a855f7;
    --amber: #f59e0b;
  }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    background: var(--bg);
    color: var(--text);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 1.5;
  }
  a { color: inherit; }
  .wrap { max-width: 880px; margin: 0 auto; padding: 0 24px; }
  nav {
    position: sticky; top: 0; z-index: 50;
    background: rgba(10, 10, 10, 0.85);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid var(--border);
  }
  nav .inner {
    display: flex; justify-content: space-between; align-items: center;
    padding: 16px 24px; max-width: 880px; margin: 0 auto;
  }
  nav .name { font-weight: 700; font-size: 18px; }
  nav .links { display: flex; gap: 24px; font-size: 14px; color: var(--muted); }
  nav .links a { text-decoration: none; }
  nav .links a:hover { color: var(--text); }
  section { padding: 64px 0; }
  section.hero { padding-top: 80px; padding-bottom: 64px; }
  .hero-row { display: flex; flex-direction: column; gap: 32px; }
  @media (min-width: 720px) { .hero-row { flex-direction: row; align-items: flex-start; } }
  .hero-text { flex: 1; }
  .pill {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 4px 12px;
    margin-bottom: 24px;
    font-size: 12px;
    font-weight: 500;
    color: var(--green);
    background: rgba(34, 197, 94, 0.10);
    border: 1px solid rgba(34, 197, 94, 0.20);
    border-radius: 9999px;
  }
  .pill .dot { width: 6px; height: 6px; border-radius: 9999px; background: var(--green); display: inline-block; }
  h1 {
    font-size: 40px; font-weight: 800;
    line-height: 1.1; margin: 0 0 24px;
    letter-spacing: -0.02em;
  }
  @media (min-width: 720px) { h1 { font-size: 52px; } }
  h1 .accent { color: var(--muted); font-weight: 800; }
  .lede {
    font-size: 18px; color: var(--muted);
    max-width: 640px; margin: 0 0 32px; line-height: 1.6;
  }
  .ctas { display: flex; gap: 16px; flex-wrap: wrap; }
  .btn {
    display: inline-block;
    padding: 12px 24px;
    border-radius: 10px;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.15s ease;
  }
  .btn.primary { background: white; color: var(--bg); }
  .btn.primary:hover { background: #e5e5e5; }
  .btn.secondary { border: 1px solid #333; color: var(--text); }
  .btn.secondary:hover { border-color: #555; }
  .avatar {
    width: 192px; height: 192px;
    border-radius: 16px;
    border: 1px solid var(--border);
    flex-shrink: 0;
    object-fit: cover;
    object-position: top;
    display: block;
    background: linear-gradient(135deg, #1f1f1f, #0f0f0f);
  }
  h2 {
    font-size: 24px; font-weight: 700;
    margin: 0 0 8px; letter-spacing: -0.01em;
  }
  .h2-row { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-bottom: 8px; }
  .h2-row h2 { margin: 0; }
  .badge {
    font-size: 11px; font-weight: 600;
    text-transform: uppercase; letter-spacing: 0.1em;
    color: var(--green);
    background: rgba(34, 197, 94, 0.10);
    border: 1px solid rgba(34, 197, 94, 0.25);
    padding: 4px 10px; border-radius: 9999px;
  }
  .section-sub { color: var(--muted); margin: 0 0 40px; font-size: 15px; }
  .card {
    background: var(--panel);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 24px;
  }
  .card.muted { background: var(--panel-2); }
  .card.hover:hover { border-color: var(--border-hover); }
  .stack-grid { display: grid; gap: 24px; grid-template-columns: 1fr; }
  @media (min-width: 720px) { .stack-grid { grid-template-columns: 1fr 1fr; } }
  .grid-projects { display: grid; gap: 24px; grid-template-columns: 1fr; }
  .project-head {
    display: flex; justify-content: space-between; align-items: flex-start;
    margin-bottom: 12px; gap: 12px;
  }
  .project-title { font-size: 20px; font-weight: 600; text-decoration: none; }
  .project-title.green:hover { color: var(--green); }
  .project-title.blue:hover { color: var(--blue); }
  .project-title.purple:hover { color: var(--purple); }
  .tag {
    font-size: 12px; padding: 4px 8px; border-radius: 4px;
    white-space: nowrap;
  }
  .tag.green { color: var(--green); background: rgba(34, 197, 94, 0.10); }
  .tag.blue { color: var(--blue); background: rgba(59, 130, 246, 0.10); }
  .tag.purple { color: var(--purple); background: rgba(168, 85, 247, 0.10); }
  .tag.amber { color: var(--amber); background: rgba(245, 158, 11, 0.10); }
  .project-body { color: var(--muted); margin: 0 0 16px; line-height: 1.6; }
  .chips { display: flex; flex-wrap: wrap; gap: 8px; }
  .chip {
    font-size: 12px; padding: 4px 8px; border-radius: 4px;
    background: var(--chip); color: var(--muted);
    border: 1px solid var(--border);
  }
  .chip.lg { font-size: 14px; padding: 6px 12px; border-radius: 8px; }
  .stack-card h3 { font-weight: 600; margin: 0 0 16px; font-size: 16px; }
  .pre {
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 20px;
    overflow-x: auto;
    color: var(--muted);
    font-family: "SF Mono", Menlo, Monaco, Consolas, "Courier New", monospace;
    font-size: 12.5px;
    line-height: 1.5;
    margin: 24px 0;
  }
  .pre .hl-green { color: var(--green); }
  .pre .hl-blue { color: var(--blue); }
  .pre .hl-purple { color: var(--purple); }
  .loop-grid {
    display: grid; gap: 12px; grid-template-columns: 1fr;
    margin-top: 24px;
  }
  @media (min-width: 720px) { .loop-grid { grid-template-columns: repeat(5, 1fr); gap: 12px; } }
  .loop-step {
    background: var(--panel-2);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 16px;
  }
  .loop-step .num {
    color: var(--green);
    font-size: 12px; font-weight: 600;
    text-transform: uppercase; letter-spacing: 0.1em;
    margin-bottom: 8px;
  }
  .loop-step .name { font-weight: 600; margin-bottom: 8px; font-size: 15px; }
  .loop-step .who { color: var(--muted); font-size: 13px; line-height: 1.5; }
  .callout-grid { display: grid; gap: 16px; grid-template-columns: 1fr; margin-top: 24px; }
  @media (min-width: 720px) { .callout-grid { grid-template-columns: 1fr 1fr 1fr; } }
  .callout {
    background: var(--panel-2);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 20px;
  }
  .callout .head { color: var(--green); font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px; }
  .callout .body { color: var(--muted); font-size: 14px; line-height: 1.6; }
  .about p { color: var(--muted); margin: 0 0 16px; line-height: 1.7; }
  .about p:last-child { margin: 0; }
  .label-eyebrow {
    font-size: 11px; color: var(--faint); text-transform: uppercase;
    letter-spacing: 0.15em; margin: 0 0 12px;
  }
  .contact-row { display: flex; flex-wrap: wrap; gap: 16px; }
  .contact-card {
    display: flex; align-items: center; gap: 12px;
    background: var(--panel); border: 1px solid var(--border);
    border-radius: 12px; padding: 16px 24px;
    color: var(--muted); text-decoration: none;
  }
  .contact-card:hover { border-color: var(--border-hover); }
  footer {
    border-top: 1px solid var(--border);
    padding: 32px 24px;
    color: var(--faint);
    font-size: 14px;
  }
  footer .inner { max-width: 880px; margin: 0 auto; }
  .diff-note {
    font-size: 12px; color: var(--faint);
    border-left: 2px solid var(--amber);
    padding-left: 12px; margin-top: 16px;
    font-style: italic;
  }
`;

const BODY = `
<nav>
  <div class="inner">
    <span class="name">Alex Horton</span>
    <div class="links">
      <a href="#projects">Projects</a>
      <a href="#harness">The Harness</a>
      <a href="#loop">The Loop</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
</nav>

<section class="hero">
  <div class="wrap">
    <div class="hero-row">
      <div class="hero-text">
        <div class="pill"><span class="dot"></span>AI-native product engineer · open to founding roles</div>
        <h1>Product builder. <br><span class="accent">Three live products and an AI-augmented dev loop that lets me run them solo.</span></h1>
        <p class="lede">Agents handle execution. Obsidian carries knowledge across sessions. Real user behavior (instrumented, not assumed) feeds the next iteration. The product compounds.</p>
        <div class="ctas">
          <a class="btn primary" href="#contact">Get in touch</a>
          <a class="btn secondary" href="#harness">See the harness</a>
        </div>
      </div>
      <img class="avatar" src="/alex.png" alt="Alex Horton">
    </div>
  </div>
</section>

<section>
  <div class="wrap">
    <h2>About</h2>
    <p class="section-sub">Background, focus, and what I'm building toward.</p>
    <div class="card about">
      <p>I'm a product builder. I ship full-stack products end to end and would rather make a product better with each user interaction than optimize a single layer of the stack.</p>
      <p>My training is in <strong>LAES at Cal Poly</strong>: Liberal Arts and Engineering Studies, an interdisciplinary program modeled on the Stanford d.school. Group projects, a five-step user-research loop (Empathize, Define, Ideate, Prototype, Test), focused on solving pressing global problems. Applied AI coursework since then from <strong>MIT, Stanford,</strong> and <strong>Anthropic via Skilljar</strong>.</p>
      <p>Three live products built solo, end to end. A multi-agent dev harness with a tiered Claude architecture (Opus orchestrator, Sonnet for product-specific work, Haiku for batch) and Obsidian as a persistent knowledge layer between sessions. I work across Python, TypeScript, FastAPI, Postgres/Supabase, and React/Next.js. Strongest at the product and applied-ML layers.</p>
      <p>What I'm best at: shipping full-stack products end to end and figuring out where AI adds real leverage in the build. Looking for founding-engineer or product-engineer roles at early-stage teams where I'd own meaningful surface area and ship things users actually use.</p>
    </div>
  </div>
</section>

<section id="projects">
  <div class="wrap">
    <h2>Projects</h2>
    <p class="section-sub">Three live products. Built solo. Each one a feedback loop, not a static feature.</p>
    <div class="grid-projects">

      <div class="card hover">
        <div class="project-head">
          <a href="https://energyscout.org" target="_blank" rel="noopener noreferrer" class="project-title green">Energy Scout ↗</a>
          <span class="tag green">Clean energy · UGC loop</span>
        </div>
        <p class="project-body">A solo-built tool to ingest and visualize solar production and sensor data, with a UGC-driven traffic loop. GA4 + Microsoft Clarity instrument every onboarding step; conversion changes feed the next iteration. Python/FastAPI backend, Postgres, web frontend.</p>
        <div class="chips">
          <span class="chip">React</span>
          <span class="chip">Python</span>
          <span class="chip">FastAPI</span>
          <span class="chip">PostgreSQL</span>
          <span class="chip">GA4 + Clarity</span>
          <span class="chip">GCP</span>
        </div>
      </div>

      <div class="card hover">
        <div class="project-head">
          <a href="https://bitcoinmachinelearning.com" target="_blank" rel="noopener noreferrer" class="project-title blue">BTC Quant Research ↗</a>
          <span class="tag blue">Quant · ML research</span>
        </div>
        <p class="project-body">Quantitative research on Bitcoin using historical price data, engineered features (SMA and others), XGBoost, and walk-forward validation. Pipelines update a Supabase/DuckDB store on schedule. Research, not live trading. The goal is rigorous idea testing, not capital management.</p>
        <div class="chips">
          <span class="chip">Python</span>
          <span class="chip">XGBoost</span>
          <span class="chip">Pandas</span>
          <span class="chip">NumPy</span>
          <span class="chip">Supabase</span>
          <span class="chip">DuckDB</span>
          <span class="chip">Walk-forward validation</span>
        </div>
      </div>

      <div class="card hover">
        <div class="project-head">
          <a href="https://propfi.live" target="_blank" rel="noopener noreferrer" class="project-title purple">PropFi ↗</a>
          <span class="tag purple">Real estate · cohort modeling</span>
        </div>
        <p class="project-body">Real estate investment analysis tool with cohort analysis and financial modeling. Built solo, full-stack. User interviews drove the cohort definition; the prototype went from notebook to working app inside the same design loop I use for everything else.</p>
        <div class="chips">
          <span class="chip">React</span>
          <span class="chip">Next.js</span>
          <span class="chip">TypeScript</span>
          <span class="chip">Python</span>
          <span class="chip">PostgreSQL</span>
        </div>
      </div>

    </div>
    <p class="diff-note">Also live: a job-search agentic pipeline (the loop you're inside if you found me through it), a 13F situational-awareness dashboard, and OpenClaw Command Center. Happy to walk through any of these.</p>
  </div>
</section>

<section id="harness">
  <div class="wrap">
    <div class="h2-row">
      <h2>The harness that ships my products</h2>
      <span class="badge">AI-native</span>
    </div>
    <p class="section-sub">Tiered Claude architecture with Obsidian as the persistent knowledge layer.</p>

    <div class="card">
      <p class="about" style="margin: 0 0 8px;"><strong>Opus picks targets and gates output.</strong> Sonnet runs product-specific work in named tmux sessions, one per product (Bitcoin ML, EnergyScout, the job-search loop). Haiku handles batch work. Obsidian's <code>inbox/</code>, <code>outbox/</code>, and <code>knowledge/</code> folders are the shared context that lets sessions resume across reboots.</p>
      <p class="about" style="margin-top: 16px;">The point isn't the plumbing. The point is that I can run three products solo because the agents carry forward what was learned yesterday.</p>

<pre class="pre">
<span class="hl-green">Telegram</span>
    │  Python bridge (routes messages → sessions)
    ▼
┌───────────────────────────────────────────────┐
│            Persistent terminal workers         │
│  tmux session: <span class="hl-blue">assistant</span>                       │
│  tmux session: <span class="hl-blue">bml-ceo</span>     ← bitcoinml          │
│  tmux session: <span class="hl-blue">scout-ceo</span>   ← energyscout        │
│  tmux session: <span class="hl-blue">propfi-ceo</span>  ← propfi             │
└─────────────────┬─────────────────────────────┘
                  │  read / write markdown
                  ▼
┌───────────────────────────────────────────────┐
│         <span class="hl-purple">Obsidian Vault</span>  (shared memory)        │
│  inbox/      ← tasks arrive here              │
│  outbox/     ← agent responses posted here    │
│  knowledge/  ← persistent cross-agent context │
└─────────────────┬─────────────────────────────┘
                  │  task sync (5s poll)
                  ▼
            <span class="hl-green">Cline Kanban</span>
     backlog → in_progress → review
</pre>

      <div class="callout-grid">
        <div class="callout">
          <div class="head">Telegram → terminal bridge</div>
          <div class="body">A Python bridge listens to Telegram and routes messages to the right persistent tmux session. Each session is a named worker tied to a specific product. Workers stay alive across reboots; conversation context persists.</div>
        </div>
        <div class="callout">
          <div class="head">Obsidian as shared memory</div>
          <div class="body">Agents communicate through markdown files in an Obsidian vault. Tasks drop into <code>inbox/</code>; agents process and write results to <code>outbox/</code>. Shared <code>knowledge/</code> gives every agent the same persistent context. No API calls between agents, just filesystem reads.</div>
        </div>
        <div class="callout">
          <div class="head">Kanban across products</div>
          <div class="body">A Cline kanban board coordinates tasks across all three live sites. Tasks move backlog → in_progress → review as agents work them. Bidirectional sync between kanban and vault every five seconds.</div>
        </div>
      </div>

      <p class="label-eyebrow" style="margin-top: 28px;">Tools in the loop</p>
      <div class="chips">
        <span class="chip lg">Claude Code</span>
        <span class="chip lg">Claude API (Opus / Sonnet / Haiku)</span>
        <span class="chip lg">tmux</span>
        <span class="chip lg">Obsidian</span>
        <span class="chip lg">Cline Kanban</span>
        <span class="chip lg">Telegram Bot API</span>
        <span class="chip lg">OpenRouter</span>
        <span class="chip lg">Python</span>
        <span class="chip lg">FastAPI</span>
      </div>
    </div>
  </div>
</section>

<section id="loop">
  <div class="wrap">
    <h2>The loop I run</h2>
    <p class="section-sub">LAES at Cal Poly was a five-step user-research loop modeled on Stanford's d.school. I run the same loop now with Claude in it.</p>

    <div class="loop-grid">
      <div class="loop-step">
        <div class="num">Step 1 · I lead</div>
        <div class="name">Empathize</div>
        <div class="who">User interviews, support tickets, GA4 and Clarity behavior. Judgment lives here, so I do it myself.</div>
      </div>
      <div class="loop-step">
        <div class="num">Step 2 · I lead</div>
        <div class="name">Define</div>
        <div class="who">Synthesize the actual problem worth solving. I drive this, with Claude as a sounding board.</div>
      </div>
      <div class="loop-step">
        <div class="num">Step 3 · Shared</div>
        <div class="name">Ideate</div>
        <div class="who">Generate options. I hand this to the agents, who explore branches in parallel and report back.</div>
      </div>
      <div class="loop-step">
        <div class="num">Step 4 · Agents</div>
        <div class="name">Prototype</div>
        <div class="who">Ship a v1 in days. Heavily delegated to Sonnet inside the dev loop.</div>
      </div>
      <div class="loop-step">
        <div class="num">Step 5 · I lead</div>
        <div class="name">Test</div>
        <div class="who">Instrument, measure, learn. I drive this, with Claude reading the data and proposing the next round.</div>
      </div>
    </div>

    <p class="diff-note">I lead Empathize, Define, and Test because that's where judgment lives. Ideate and Prototype go to the agents because that's where leverage lives. The loop closes when I review what came back.</p>
  </div>
</section>

<section id="stack">
  <div class="wrap">
    <h2>Stack</h2>
    <p class="section-sub">What I work with.</p>
    <div class="stack-grid">
      <div class="card stack-card">
        <h3>Languages</h3>
        <div class="chips"><span class="chip lg">Python</span><span class="chip lg">TypeScript</span><span class="chip lg">JavaScript</span></div>
      </div>
      <div class="card stack-card">
        <h3>Frontend</h3>
        <div class="chips"><span class="chip lg">React</span><span class="chip lg">Next.js</span></div>
      </div>
      <div class="card stack-card">
        <h3>Backend</h3>
        <div class="chips"><span class="chip lg">FastAPI</span><span class="chip lg">Node.js</span></div>
      </div>
      <div class="card stack-card">
        <h3>Data</h3>
        <div class="chips"><span class="chip lg">PostgreSQL</span><span class="chip lg">Supabase</span><span class="chip lg">DuckDB</span><span class="chip lg">Pandas</span><span class="chip lg">NumPy</span></div>
      </div>
      <div class="card stack-card">
        <h3>AI / ML / Quant</h3>
        <div class="chips"><span class="chip lg">Claude API</span><span class="chip lg">Agent infrastructure</span><span class="chip lg">XGBoost</span><span class="chip lg">scikit-learn</span><span class="chip lg">Walk-forward validation</span><span class="chip lg">Time-series feature engineering</span></div>
      </div>
      <div class="card stack-card">
        <h3>Instrumentation &amp; infra</h3>
        <div class="chips"><span class="chip lg">GA4</span><span class="chip lg">Microsoft Clarity</span><span class="chip lg">Docker</span><span class="chip lg">Git</span><span class="chip lg">GitHub Actions</span><span class="chip lg">GCP</span></div>
      </div>
    </div>
  </div>
</section>

<section id="contact">
  <div class="wrap">
    <h2>Get in touch</h2>
    <p class="section-sub">Open to: founding-engineer roles, product-engineer roles at early-stage startups, and advisor / consulting work where there's a real product question to chew on.</p>
    <div class="contact-row">
      <a class="contact-card" href="mailto:horton.alexander@gmail.com">horton.alexander@gmail.com</a>
      <a class="contact-card" href="https://linkedin.com/in/alex-horton-9b410977" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a class="contact-card" href="https://github.com/mobiusframeworks" target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
  </div>
</section>

<footer>
  <div class="inner">Alex Horton, 2026 · also: Google UX certificate</div>
</footer>
`;

export default function Home() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div dangerouslySetInnerHTML={{ __html: BODY }} />
    </>
  );
}

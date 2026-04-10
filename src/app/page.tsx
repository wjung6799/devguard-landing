import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Home() {
  const session = await getSession();
  if (session) redirect("/dashboard");

  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-white">
      {/* Header */}
      <header className="px-6 py-6 flex items-center justify-between max-w-5xl mx-auto w-full">
        <Link href="/" className="text-2xl font-bold hover:opacity-80 transition">
          devguard
        </Link>
        <div className="flex gap-4">
          <Link
            href="/register"
            className="px-5 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition text-sm"
          >
            Get Started
          </Link>
          <Link
            href="/login"
            className="px-5 py-2 border border-gray-600 rounded-lg hover:border-gray-400 transition text-sm"
          >
            Log In
          </Link>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-center leading-tight">
          Context that follows<br />your code
        </h1>
        <p className="text-gray-400 text-lg mb-16 max-w-2xl text-center leading-relaxed">
          devguard automatically preserves the context behind your AI-assisted development.
          Every decision, every change, every &ldquo;what was I doing?&rdquo; moment — captured and searchable.
        </p>

        {/* How it works */}
        <div className="max-w-3xl w-full mb-16">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8 text-center">
            How it works
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-600 mb-3">1</div>
              <h3 className="text-white font-semibold mb-2">Install the MCP server</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Add devguard to your AI coding assistant (Claude Code, Cursor, etc).
                It runs locally alongside your editor.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-600 mb-3">2</div>
              <h3 className="text-white font-semibold mb-2">Code like normal</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                As you work, devguard logs structured diary entries from your git activity —
                what changed, why, and what&apos;s next. No extra effort required.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-600 mb-3">3</div>
              <h3 className="text-white font-semibold mb-2">Pick up where you left off</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Next session, your AI assistant reads your diary and catches you up.
                Switch branches, switch machines — context is never lost.
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="max-w-3xl w-full mb-16">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8 text-center">
            What you get
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="p-5 bg-gray-900 border border-gray-800 rounded-lg">
              <h3 className="text-white font-semibold mb-2">Auto-diary from git</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your AI assistant logs structured entries as you work — changes, decisions,
                blockers, next steps. All tied to commits and branches.
              </p>
            </div>
            <div className="p-5 bg-gray-900 border border-gray-800 rounded-lg">
              <h3 className="text-white font-semibold mb-2">Cloud sync</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Entries sync to the platform so you can browse, search, and filter
                your dev history from any browser.
              </p>
            </div>
            <div className="p-5 bg-gray-900 border border-gray-800 rounded-lg">
              <h3 className="text-white font-semibold mb-2">Rules for AI</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Define coding standards and conventions that get loaded into your
                AI assistant&apos;s context automatically, every session.
              </p>
            </div>
            <div className="p-5 bg-gray-900 border border-gray-800 rounded-lg">
              <h3 className="text-white font-semibold mb-2">Wiki + notes per project</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Organize knowledge alongside your diary — architecture decisions,
                patterns, onboarding docs, all searchable.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4">
          <Link
            href="/register"
            className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition text-lg"
          >
            Get Started — Free
          </Link>
          <p className="text-gray-600 text-sm">
            No credit card. No trial. Just sign up and start using it.
          </p>
        </div>
      </main>
    </div>
  );
}

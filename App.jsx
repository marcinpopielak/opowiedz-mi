export default function App() {
  return (
    <main className="min-h-screen bg-black text-white p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-serif tracking-wide">OPOWIEDZ MI</h1>
        <nav className="text-sm space-x-4">
          <button>Sceny</button>
          <button>Nowe</button>
          <button>Dla Ciebie</button>
        </nav>
      </header>

      <section className="grid grid-cols-2 gap-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-zinc-900 p-2 rounded-xl shadow-xl">
            <div className="h-40 bg-zinc-700 rounded-lg mb-4"></div>
            <h2 className="text-base font-semibold">Tytuł serii {i + 1}</h2>
            <p className="text-xs text-zinc-400">5 odcinków</p>
          </div>
        ))}
      </section>

      <section className="mt-8">
        <h3 className="text-lg font-medium mb-2">Polecane sceny</h3>
        <div className="space-y-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-zinc-800 p-3 rounded-lg text-sm">
              Fragment sceny {i + 1}… <span className="text-pink-400">czytaj dalej</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
function Home() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-dashed border-slate-300 bg-white/80 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Future Hero Section
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Home
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Placeholder for the DJ company hero section. Add the main headline,
          call to action, and visual direction here later.
        </p>
      </section>

      <section className="rounded-3xl border border-dashed border-slate-300 bg-white/80 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Future Testimonials Section
        </p>
        <h2 className="mt-4 text-2xl font-semibold text-slate-950">
          Testimonial Cards Placeholder
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Reserve this area for future client quotes and testimonial cards.
        </p>
      </section>
    </div>
  )
}

export default Home

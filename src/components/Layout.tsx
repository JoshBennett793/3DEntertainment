import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'

type LayoutProps = {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 flex flex-col">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/" className="text-xl font-bold tracking-tight text-slate-950">
            3D Entertainment
          </Link>
          <Navigation />
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-12 flex-1">{children}</main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-6 text-sm text-slate-500">
          &copy; 3D Entertainment
        </div>
      </footer>
    </div>
  )
}

export default Layout

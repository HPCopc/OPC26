import Navigation from './Navigation'
import Logo from '@/components/ui/Logo'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Logo />
            <Navigation />
          </div>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
              Sign In
            </button>
            <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}


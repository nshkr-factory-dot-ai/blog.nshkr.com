import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="py-6 border-b dark:border-gray-800">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              NSHkr Blog
            </h1>
            <div className="flex gap-4">
              <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                About
              </Link>
              <a href="https://nshkr.com" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" target="_blank" rel="noopener noreferrer">
                NSHkr.com
              </a>
            </div>
          </nav>
        </div>
      </header>

      {children}

      <footer className="border-t dark:border-gray-800 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
          © 2025 NSHkr.com - North Shore Hackerspace. All rights reserved.
        </div>
      </footer>
    </div>
  );
} 
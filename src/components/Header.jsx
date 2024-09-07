import Link from "next/link";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-semibold">
          <span className="text-black">NEXIMUS</span>
          <span className="text-gray-500">AI</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-8">
          <Link href="/" className="text-gray-700 text-lg hover:text-black transition">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 text-lg hover:text-black transition">
            About
          </Link>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </nav>
      </div>
    </header>
  );
}

export default Header;

import Image from 'next/image';
import Link from 'next/link';
import { Menu, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <Image 
                src="/logo.png" 
                alt="Pizza Haven Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-white tracking-wide">Pizza<span className="text-pizza-yellow">Haven</span></h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#menu" className="text-gray-300 hover:text-pizza-yellow transition-colors font-medium">Menu</Link>
            <Link href="#about" className="text-gray-300 hover:text-pizza-yellow transition-colors font-medium">About</Link>
            <Link href="#contact" className="text-gray-300 hover:text-pizza-yellow transition-colors font-medium">Contact</Link>
          </div>

          {/* CTA & Icons */}
          <div className="flex items-center gap-4">
            <button className="text-gray-300 hover:text-pizza-yellow transition-colors">
              <ShoppingCart className="w-6 h-6" />
            </button>
            <Link href="#order" className="hidden md:flex bg-pizza-yellow text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-[0_0_15px_rgba(251,191,36,0.3)]">
              Order Now
            </Link>
            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-300 hover:text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}

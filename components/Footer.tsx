import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image 
                  src="/logo.png" 
                  alt="Pizza Haven Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <h2 className="text-xl font-bold text-white tracking-wide">Pizza<span className="text-pizza-yellow">Haven</span></h2>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              GOOD PIZZA • BETTER MOOD. Serving the best wood-fired, artisanal pizzas in town since 2026.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-pizza-yellow hover:text-black transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-pizza-yellow hover:text-black transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-pizza-yellow hover:text-black transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="#menu" className="text-gray-400 hover:text-pizza-yellow transition-colors">Our Menu</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-pizza-yellow transition-colors">About Us</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-pizza-yellow transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-pizza-yellow transition-colors">Catering</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-pizza-yellow shrink-0 mt-0.5" />
                <span className="text-gray-400">123 Pizza Street, Food District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-pizza-yellow shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-pizza-yellow shrink-0" />
                <span className="text-gray-400">hello@pizzahaven.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Opening Hours</h3>
            <ul className="space-y-4">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-400">Mon - Thu</span>
                <span className="text-white">11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-400">Fri - Sat</span>
                <span className="text-pizza-yellow font-bold">11:00 AM - 12:00 AM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-400">Sunday</span>
                <span className="text-white">12:00 PM - 9:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2026 Pizza Haven. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

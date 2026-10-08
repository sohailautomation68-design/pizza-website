import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
      {/* Background with a subtle gradient to make the pizza pop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-background to-background -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-pizza-yellow text-sm font-medium tracking-wide">
            <Leaf className="w-4 h-4 text-green-500" />
            <span>Fresh Ingredients, Daily</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            Good Pizza <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pizza-yellow to-yellow-200">
              Better Mood
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
            Experience the most authentic, cheesy, and mouth-watering pizzas in town. 
            Wood-fired to perfection and delivered hot to your door.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Link href="#menu" className="flex items-center gap-2 bg-pizza-yellow text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(251,191,36,0.4)]">
              Explore Menu
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#about" className="px-8 py-4 rounded-full font-bold text-lg text-white border border-white/20 hover:bg-white/10 transition-colors">
              Our Story
            </Link>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex-1 w-full max-w-lg lg:max-w-none relative z-10">
          {/* We use the logo as the main hero image for now, adding a subtle glow behind it */}
          <div className="relative w-full aspect-square animate-[float_6s_ease-in-out_infinite]">
            <div className="absolute inset-0 bg-pizza-yellow/20 blur-[100px] rounded-full"></div>
            <Image 
              src="/logo.png" 
              alt="Delicious Pizza Slice" 
              fill 
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}

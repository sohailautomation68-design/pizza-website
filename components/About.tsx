import Image from 'next/image';
import { Flame, Clock, ChefHat } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Collage/Featured Image */}
          <div className="flex-1 w-full relative">
            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=1000&q=80" 
                alt="Chef preparing pizza in a wood-fired oven" 
                fill 
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur-sm p-4 rounded-2xl border border-white/10 flex items-center gap-4 shadow-xl">
                <div className="bg-pizza-yellow text-black p-3 rounded-full">
                  <Flame className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Authentic</p>
                  <p className="text-pizza-yellow text-sm font-medium">Wood-Fired Oven</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                The Story Behind <br />
                <span className="text-pizza-yellow">Pizza Haven</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                It started with a simple belief: pizza shouldn't just be fast food, it should be an experience. 
                At Pizza Haven, we combine age-old Italian traditions with bold, modern flavors to create slices 
                that actually boost your mood. 
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mt-4">
                Every morning, our chefs prepare fresh dough from scratch, simmer our signature tomato sauce 
                using hand-picked San Marzano tomatoes, and source the finest local cheeses. 
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <div className="flex items-start gap-4">
                <div className="text-pizza-yellow mt-1">
                  <ChefHat className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Master Chefs</h4>
                  <p className="text-gray-500 text-sm">Crafted by passionate pizzaiolos with decades of combined experience.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-pizza-yellow mt-1">
                  <Clock className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Fresh Daily</h4>
                  <p className="text-gray-500 text-sm">Dough made fresh every single morning, never frozen.</p>
                </div>
              </div>
            </div>
            
            <button className="bg-white/5 hover:bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold transition-colors">
              Read Our Full Story
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

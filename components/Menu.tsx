import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';

const pizzas = [
  {
    id: 1,
    name: 'Classic Margherita',
    description: 'Tomato sauce, 100% real mozzarella cheese, and fresh basil.',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
    tag: 'Popular',
  },
  {
    id: 2,
    name: 'Pepperoni Feast',
    description: 'Double pepperoni, extra cheese, and our signature tomato sauce.',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Veggie Supreme',
    description: 'Black olives, green peppers, mushrooms, onions, and tomatoes.',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=800&q=80',
    tag: 'Vegetarian',
  },
  {
    id: 4,
    name: 'BBQ Chicken',
    description: 'Grilled chicken, BBQ sauce, red onions, and cilantro.',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Featured <span className="text-pizza-yellow">Pizzas</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Hand-tossed dough, fresh ingredients, and baked to perfection in our wood-fired oven.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="bg-neutral-900 rounded-3xl overflow-hidden border border-white/5 hover:border-pizza-yellow/50 transition-all group">
              
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src={pizza.image} 
                  alt={pizza.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {pizza.tag && (
                  <div className="absolute top-4 right-4 bg-pizza-yellow text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {pizza.tag}
                  </div>
                )}
              </div>

              {/* Content Container */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{pizza.name}</h3>
                </div>
                
                <p className="text-gray-400 text-sm mb-6 h-12">
                  {pizza.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-bold text-pizza-yellow">
                    ${pizza.price}
                  </span>
                  <button className="bg-white/10 hover:bg-pizza-yellow text-white hover:text-black p-3 rounded-full transition-colors">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-4 rounded-full font-bold text-lg text-white border border-white/20 hover:bg-white/10 transition-colors">
            View Full Menu
          </button>
        </div>

      </div>
    </section>
  );
}

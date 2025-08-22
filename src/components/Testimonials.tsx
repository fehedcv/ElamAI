import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "With Elam AI, we automated our support system and cut response times by 60%. It completely changed how we scale.",
      author: "Sarah Chen",
      role: "Startup Founder",
      company: "TechFlow",
      rating: 5
    },
    {
      quote: "The team at Elam AI understood our challenges and delivered solutions that exceeded our expectations. Our operations are now 3x more efficient.",
      author: "Michael Rodriguez",
      role: "Operations Director",
      company: "GrowthCorp",
      rating: 5
    },
    {
      quote: "What impressed us most was how quickly we saw results. Within weeks, we were saving hours of manual work daily.",
      author: "Emily Watson",
      role: "CEO",
      company: "InnovateLabs",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business leaders say about their experience with Elam AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-gray-800/60 backdrop-blur-sm hover:bg-gray-700/60 p-8 rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 hover:scale-105 border border-gray-700/50 hover:border-cyan-500/30 relative overflow-hidden"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-cyan-400 opacity-30" />
              
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
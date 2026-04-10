import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Ship, MapPin, Phone, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { services } from '../data/mock';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/backgroud.png"
            alt="Maritime vessel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Professional Marine <span className="text-blue-300">Surveying Services</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Trusted expertise in draught surveys, bunker surveys, P&I services, and marine consultancy worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-6">
                <Link to="/services">
                  Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-6">
                <Link to="/quote">
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive marine surveying and consultancy solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = require('lucide-react')[service.icon];
              return (
                <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-600">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-900 transition-colors duration-300">
                      <IconComponent className="w-7 h-7 text-blue-900 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {service.details.slice(0, 3).map((detail, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="ghost" className="text-blue-900 hover:text-blue-700 p-0">
                      <Link to={`/services/${service.slug}`}>
                        View {service.title}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-blue-900 hover:bg-blue-800 text-white px-8">
              <Link to="/services">
                View All Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose NH Marine Services?
              </h2>
              <p className="text-lg text-gray-600 mb-10 max-w-xl leading-8">
                We provide dependable marine surveying support across ports in South India, with a strong focus on responsive communication, careful survey work, and practical on-ground assistance as we continue expanding into other states.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: 'South India Port Coverage',
                    description: 'We are available to offer services across ports in South India and are steadily extending our reach to clients in other states.'
                  },
                  {
                    icon: Ship,
                    title: 'Practical Marine Support',
                    description: 'Our approach is straightforward: accurate reporting, clear coordination, and attention to operational detail.'
                  },
                  {
                    icon: Phone,
                    title: 'Direct Communication',
                    description: 'You work with a responsive team that values quick updates, clarity, and professional service from first contact onward.'
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button asChild size="lg" className="bg-blue-900 hover:bg-blue-800 text-white">
                  <Link to="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-blue-950 to-sky-900 p-8 md:p-10 text-white shadow-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.35),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.25),transparent_30%)]" />
                <div className="relative">
                  <h3 className="mt-6 text-3xl md:text-4xl font-bold leading-tight">
                    Building trust through reliable regional service.
                  </h3>

                  <p className="mt-4 max-w-lg text-base md:text-lg leading-8 text-blue-100">
                    We are focused on delivering dependable marine surveying support across South India ports with a hands-on, service-first approach, while gradually expanding into other states.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                      <p className="text-sm uppercase tracking-[0.2em] text-blue-200">Coverage</p>
                      <p className="mt-2 text-xl font-semibold text-white">South India Ports</p>
                      <p className="mt-2 text-sm leading-6 text-blue-100">We are available to support clients across South India ports and are gradually expanding our presence into other states.</p>
                    </div>

                    <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                      <p className="text-sm uppercase tracking-[0.2em] text-blue-200">Focus</p>
                      <p className="mt-2 text-xl font-semibold text-white">Responsive Service</p>
                      <p className="mt-2 text-sm leading-6 text-blue-100">Clear communication, timely coordination, and practical support for every assignment.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 h-24 w-24 rounded-3xl bg-sky-200/70 blur-2xl" />
              <div className="absolute -top-5 -right-5 h-24 w-24 rounded-3xl bg-blue-400/30 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for professional marine surveying services you can trust
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8">
              <Link to="/quote">
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8">
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

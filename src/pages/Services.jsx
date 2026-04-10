import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, MoveRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { services } from '../data/mock';

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-blue-100">
              Comprehensive marine surveying and consultancy solutions delivered by experienced professionals
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = require('lucide-react')[service.icon];
              return (
                <Card key={service.id} className="group overflow-hidden border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-2xl">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-900 transition-colors duration-300">
                        <IconComponent className="w-8 h-8 text-blue-900 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-900">
                        Service {index + 1}
                      </span>
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6 text-lg">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                        What's Included:
                      </h4>
                      <ul className="space-y-2">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                      <Link to={`/services/${service.slug}`}>
                        <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                          View {service.title}
                          <MoveRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                      <Link to="/quote" state={{ service: service.title }}>
                        <Button variant="outline" className="w-full border-blue-200 text-blue-900 hover:bg-blue-50">
                          Request Quote
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-blue-50/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach to delivering accurate and reliable survey results
            </p>
          </div>

          <div className="relative mx-auto max-w-6xl">
            <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-10 hidden h-0.5 bg-blue-200 md:block" />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {[
              {
                step: '01',
                title: 'Initial Contact',
                description: 'Reach out to us with your requirements and vessel details'
              },
              {
                step: '02',
                title: 'Survey Planning',
                description: 'We arrange surveyors and prepare necessary documentation'
              },
              {
                step: '03',
                title: 'On-Site Survey',
                description: 'Our certified surveyors conduct thorough inspections'
              },
              {
                step: '04',
                title: 'Detailed Report',
                description: 'Receive comprehensive reports within 24-48 hours'
              }
              ].map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="relative z-10 mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-900 shadow-lg">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need a Survey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get in touch with our team for professional marine surveying services
          </p>
          <Link to="/quote">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8">
              Request a Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;

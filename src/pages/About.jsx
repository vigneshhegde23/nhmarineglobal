import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Target, Globe } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { team } from '../data/mock';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl text-blue-100">
              Leading the industry with professional marine surveying services
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  NH Marine is a growing marine services company committed to delivering reliable and efficient solutions to the maritime industry. While we are new to the field, our approach is built on strong technical understanding, attention to detail, and a clear focus on client requirements.                </p>
                <p>
                  We specialize in supporting vessel operations through coordinated service execution, timely response, and practical problem-solving. Our team works closely with clients to ensure that every task—whether routine or urgent—is handled with professionalism and accountability.
                </p>
                <p>
                  At NH Marine, we prioritize clear communication, operational transparency, and consistent service quality. Our goal is to establish long-term relationships by delivering dependable support and continuously improving with every project we undertake.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/32520879/pexels-photo-32520879.jpeg"
                alt="Marine operations"
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              Principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Accuracy',
                description: 'Precision and attention to detail in every survey we conduct'
              },
              {
                icon: Users,
                title: 'Integrity',
                description: 'Honest and transparent reporting with no compromise'
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'Commitment to the highest professional standards'
              },
              {
                icon: Globe,
                title: 'Reliability',
                description: '24/7 availability and timely service delivery worldwide'
              }
            ].map((value, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-blue-900" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Meet the professionals behind NH Marine Services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.id} className="border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-6 h-48 w-48 overflow-hidden rounded-full border-4 border-blue-100 bg-slate-100 shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-blue-900 font-semibold text-lg">
                    {member.position}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust us for their marine surveying needs
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8">
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;

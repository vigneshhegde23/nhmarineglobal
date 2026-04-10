import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle, ChevronRight, MapPin, PhoneCall, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { services } from '../data/mock';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const IconComponent = require('lucide-react')[service.icon];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.heroImage}
            alt={service.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/85 via-blue-950/60 to-slate-950/50" />
        </div>
        <div className="container relative mx-auto px-4 py-24 text-white">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-2 text-sm text-blue-100/90">
              <Link to="/" className="hover:text-white">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/services" className="hover:text-white">Services</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">{service.title}</span>
            </div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <IconComponent className="h-4 w-4" />
              <span>Service Overview</span>
            </div>
            <h1 className="text-5xl font-bold md:text-6xl">{service.title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-50 md:text-xl">
              {service.overview}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <div className="overflow-hidden rounded-[2rem] shadow-2xl">
                <img
                  src={service.heroImage}
                  alt={`${service.title} operations`}
                  className="h-[420px] w-full object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                {service.title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                {service.intro}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {service.highlights.map((item) => (
                  <Card key={item} className="border-blue-100 bg-gradient-to-br from-white to-blue-50/60 shadow-sm">
                    <CardContent className="p-5">
                      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                        <ShieldCheck className="h-5 w-5 text-blue-800" />
                      </div>
                      <p className="text-sm font-medium leading-6 text-slate-700">
                        {item}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-semibold text-slate-900">What We Cover</h3>
                <ul className="mt-5 space-y-4">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 border-b border-slate-200 pb-4 text-slate-700">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-700" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-blue-700">Approach</p>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  A practical, response-focused survey approach built around clear coordination and dependable reporting.
                </p>
              </CardContent>
            </Card>
            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-blue-700">Location</p>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  Available across ports in South India with a service-first mindset, and steadily expanding support into other states.
                </p>
              </CardContent>
            </Card>
            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-blue-700">Outcome</p>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  Designed to help clients move forward with clearer information, organized observations, and timely support.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 rounded-[2rem] bg-gradient-to-r from-slate-950 via-blue-950 to-blue-900 p-8 text-white shadow-2xl md:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="flex flex-wrap gap-3 text-sm text-blue-100">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                    <MapPin className="h-4 w-4" />
                    South India port support
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                    <PhoneCall className="h-4 w-4" />
                    Direct response for inquiries
                  </span>
                </div>
                <h3 className="mt-5 text-3xl font-bold">Need support for {service.title.toLowerCase()}?</h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-blue-100">
                  Tell us your vessel, location, and service requirement, and we will get back to you with a suitable response.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <Link to="/quote" state={{ service: service.title }}>
                  <Button size="lg" className="w-full bg-white text-blue-900 hover:bg-blue-50">
                    Request a Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="w-full border-white text-white hover:bg-white hover:text-blue-900">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;

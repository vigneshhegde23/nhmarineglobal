import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Card, CardContent } from '../components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { toast } from 'sonner';
import { submitQuoteRequest, services } from '../data/mock';

const Quote = () => {
  const location = useLocation();
  const preselectedService = location.state?.service || '';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: preselectedService,
    vesselName: '',
    vesselType: '',
    location: '',
    date: '',
    additionalInfo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (value) => {
    setFormData({
      ...formData,
      service: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitQuoteRequest(formData);
      toast.success(result.message);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        vesselName: '',
        vesselType: '',
        location: '',
        date: '',
        additionalInfo: ''
      });
    } catch (error) {
      toast.error('Failed to submit quote request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Request a Quote
            </h1>
            <p className="text-xl text-blue-100">
              Fill out the form below and our team will get back to you with a detailed quotation
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Survey Request Details
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Contact Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-blue-900">
                      Contact Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div>
                        <Label htmlFor="name" className="text-gray-900 mb-2 block">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="h-12"
                        />
                      </div>

                      <div>
                        <Label htmlFor="company" className="text-gray-900 mb-2 block">
                          Company Name *
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="ABC Shipping Co."
                          className="h-12"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-gray-900 mb-2 block">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="h-12"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-gray-900 mb-2 block">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 234 567 8900"
                          className="h-12"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-blue-900">
                      Service Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div>
                        <Label htmlFor="service" className="text-gray-900 mb-2 block">
                          Service Type *
                        </Label>
                        <Select value={formData.service} onValueChange={handleSelectChange} required>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service.id} value={service.title}>
                                {service.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="date" className="text-gray-900 mb-2 block">
                          Preferred Date *
                        </Label>
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          className="h-12"
                        />
                      </div>

                      <div>
                        <Label htmlFor="vesselName" className="text-gray-900 mb-2 block">
                          Vessel Name *
                        </Label>
                        <Input
                          id="vesselName"
                          name="vesselName"
                          type="text"
                          required
                          value={formData.vesselName}
                          onChange={handleChange}
                          placeholder="MV Oceanic"
                          className="h-12"
                        />
                      </div>

                      <div>
                        <Label htmlFor="vesselType" className="text-gray-900 mb-2 block">
                          Vessel Type *
                        </Label>
                        <Input
                          id="vesselType"
                          name="vesselType"
                          type="text"
                          required
                          value={formData.vesselType}
                          onChange={handleChange}
                          placeholder="Bulk Carrier, Container, etc."
                          className="h-12"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <Label htmlFor="location" className="text-gray-900 mb-2 block">
                          Port/Location *
                        </Label>
                        <Input
                          id="location"
                          name="location"
                          type="text"
                          required
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="Port of Singapore"
                          className="h-12"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-blue-900">
                      Additional Information
                    </h3>
                    <div className="mt-4">
                      <Label htmlFor="additionalInfo" className="text-gray-900 mb-2 block">
                        Additional Details
                      </Label>
                      <Textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        placeholder="Please provide any additional information that might be relevant to your survey request..."
                        rows={6}
                        className="resize-none"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white h-14 text-lg font-semibold"
                  >
                    {isSubmitting ? 'Submitting Request...' : 'Submit Quote Request'}
                  </Button>
                </form>

                <p className="text-sm text-gray-600 mt-6 text-center">
                  * Our team will review your request and get back to you within 24 hours with a detailed quotation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;
export const services = [
  {
    id: 1,
    title: "Draught Survey",
    description: "Accurate measurement and calculation of cargo quantity loaded or discharged from vessels.",
    icon: "Ship",
    details: [
      "Pre-loading and post-loading surveys",
      "Cargo weight determination",
      "Vessel stability assessment",
      "Detailed survey reports"
    ]
  },
  {
    id: 2,
    title: "Bunker Survey",
    description: "Precise measurement and documentation of fuel quantities during bunkering operations.",
    icon: "Fuel",
    details: [
      "Bunker quantity verification",
      "Quality analysis",
      "Documentation and reporting",
      "Dispute resolution support"
    ]
  },
  {
    id: 3,
    title: "P&I Services",
    description: "Protection and Indemnity services including surveys and consultancy for maritime incidents.",
    icon: "Shield",
    details: [
      "Incident investigation",
      "Cargo damage assessment",
      "Hull damage surveys",
      "Expert witness services"
    ]
  },
  {
    id: 4,
    title: "Condition Survey",
    description: "Comprehensive vessel and cargo condition assessment for insurance and pre-purchase purposes.",
    icon: "ClipboardCheck",
    details: [
      "Pre-purchase surveys",
      "Vessel condition reports",
      "Cargo condition inspection",
      "Insurance surveys"
    ]
  },
  {
    id: 5,
    title: "On/Off Hire Survey",
    description: "Detailed vessel inspection at the start and end of charter periods.",
    icon: "FileText",
    details: [
      "Vessel condition documentation",
      "Bunker ROB verification",
      "Equipment inventory",
      "Charter party compliance"
    ]
  },
  {
    id: 6,
    title: "Marine Consultancy",
    description: "Expert advice and guidance on maritime operations, compliance, and best practices.",
    icon: "Users",
    details: [
      "Operational consultancy",
      "Compliance advisory",
      "Risk management",
      "Training and development"
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Captain James Anderson",
    position: "Fleet Manager, Global Shipping Co.",
    content: "N&H Marine Services has been our trusted partner for over 5 years. Their draught survey accuracy and professionalism are unmatched.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    position: "Operations Director, Maritime Logistics Ltd",
    content: "Excellent bunker survey services. Their detailed reports and quick turnaround times have helped us resolve disputes efficiently.",
    rating: 5
  },
  {
    id: 3,
    name: "David Chen",
    position: "Marine Superintendent, Ocean Carriers",
    content: "Professional, reliable, and thorough. N&H Marine Services consistently delivers high-quality surveys and consultancy.",
    rating: 5
  }
];

export const projects = [
  {
    id: 1,
    title: "Bulk Carrier Survey - Port of Singapore",
    description: "Comprehensive draught survey for 75,000 MT iron ore cargo",
    category: "Draught Survey",
    year: "2024"
  },
  {
    id: 2,
    title: "Bunker Dispute Resolution",
    description: "Bunker quantity verification leading to successful dispute resolution",
    category: "Bunker Survey",
    year: "2024"
  },
  {
    id: 3,
    title: "Container Vessel Damage Assessment",
    description: "P&I survey for cargo damage claim worth $2M",
    category: "P&I Services",
    year: "2023"
  },
  {
    id: 4,
    title: "Fleet On-Hire Survey Program",
    description: "Conducted on-hire surveys for fleet of 12 vessels",
    category: "On/Off Hire",
    year: "2023"
  },
  {
    id: 5,
    title: "Pre-Purchase Vessel Inspection",
    description: "Detailed condition survey for $50M vessel acquisition",
    category: "Condition Survey",
    year: "2023"
  },
  {
    id: 6,
    title: "Maritime Compliance Consultancy",
    description: "Assisted shipping company with IMO 2020 compliance",
    category: "Consultancy",
    year: "2023"
  }
];

export const certifications = [
  {
    id: 1,
    name: "ISO 9001:2015",
    description: "Quality Management System Certification"
  },
  {
    id: 2,
    name: "IFIA Member",
    description: "International Federation of Inspection Agencies"
  },
  {
    id: 3,
    name: "IIMS Accredited",
    description: "International Institute of Marine Surveying"
  },
  {
    id: 4,
    name: "ICS Certified",
    description: "International Chamber of Shipping"
  }
];

export const team = [
  {
    id: 1,
    name: "Captain Robert Harrison",
    position: "Chief Marine Surveyor",
    experience: "25+ years",
    qualifications: "Master Mariner, IIMS Certified"
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "Senior Marine Surveyor",
    experience: "15+ years",
    qualifications: "Naval Architect, IFIA Member"
  },
  {
    id: 3,
    name: "Michael Wong",
    position: "Marine Surveyor",
    experience: "12+ years",
    qualifications: "Chief Engineer, IIMS Certified"
  },
  {
    id: 4,
    name: "Lisa Martinez",
    position: "Operations Manager",
    experience: "10+ years",
    qualifications: "Maritime Business Management"
  }
];

// Mock email submission
export const submitContactForm = async (formData) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("Contact form submitted:", formData);
  return { success: true, message: "Thank you for contacting us. We'll get back to you within 24 hours." };
};

export const submitQuoteRequest = async (formData) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("Quote request submitted:", formData);
  return { success: true, message: "Quote request received. Our team will contact you shortly with a detailed quotation." };
};
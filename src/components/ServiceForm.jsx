import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Download, Share2 } from 'lucide-react';
import './ServiceForm.css';

const STEPS = [
  'Details',
  'Aghhori',
  'Damru',
  'Jogi',
  'Tandavs',
  'Panigrahna',
  'Kalyaanam',
  'Project Details'
];

// Subcompany data structure (you can fetch this from API)
const SUBCOMPANIES = [
  {
    _id: "68e3fd99782cb1e8a22b63e2",
    name: "Aghhori",
    prefix: "AGH",
    services: [
      {
        title: "Social Media Strategy & Management",
        offerings: [
          "Strategy & planning",
          "Content creation",
          "Scheduling & publishing",
          "Community management",
          "Performance analysis & reporting"
        ]
      },
      {
        title: "Paid Digital Advertising",
        offerings: [
          "Google Ads",
          "Social Media Ads",
          "Programmatic Advertising",
          "Audience Targeting",
          "Conversion Optimization",
          "A/B Testing"
        ]
      },
      {
        title: "Search Engine Optimization (SEO)",
        offerings: [
          "Keyword Research",
          "On-page SEO",
          "Off-page SEO",
          "Technical SEO",
          "Content Strategy",
          "Local SEO"
        ]
      },
      {
        title: "Website Design & Development",
        offerings: [
          "Custom Design (UI/UX)",
          "E-commerce/Portfolio Sites",
          "Responsive Development",
          "Landing Pages",
          "SEO-friendly Structure",
          "Maintenance"
        ]
      },
      {
        title: "Email Marketing",
        offerings: [
          "List Building",
          "Newsletter Design",
          "Automated Campaigns",
          "Promotional Campaigns",
          "A/B Testing",
          "Performance Tracking"
        ]
      },
      {
        title: "Logo Designing",
        offerings: [
          "Concept Development",
          "Multiple Concepts",
          "Typography & Color",
          "Logo Variations",
          "High-resolution Files",
          "Brand Guidelines",
          "Numerology/Astrology"
        ]
      },
      {
        title: "Video Marketing",
        offerings: [
          "Short-form Content",
          "Explainer Videos",
          "Product Videos & Testimonials",
          "YouTube Optimization",
          "Editing & Motion Graphics"
        ]
      },
      {
        title: "Brand Strategy & Identity",
        offerings: [
          "Positioning & Messaging",
          "Visual Identity",
          "Guidelines",
          "Collateral Design",
          "Rebranding"
        ]
      },
      {
        title: "PR Services",
        offerings: [
          "Press Release",
          "Media Outreach",
          "Crisis Communication",
          "Reputation Management",
          "Event PR",
          "Media Coverage Tracking"
        ]
      },
      {
        title: "Films & TV Ads",
        offerings: [
          "Scriptwriting",
          "Production",
          "Creative Direction",
          "Post-production",
          "Platform Ads"
        ]
      },
      {
        title: "Documentaries",
        offerings: [
          "Development",
          "Filming",
          "Direction & Cinematography",
          "Post-production",
          "Storytelling"
        ]
      },
      {
        title: "Podcasts",
        offerings: [
          "Development",
          "Recording",
          "Editing",
          "Distribution",
          "Promotion"
        ]
      }
    ]
  },
  {
    _id: "68e3fec9782cb1e8a22b63e5",
    name: "Damru",
    prefix: "DAM",
    services: [
      {
        title: "Artist Music Composition & Production",
        offerings: [
          "Songwriting & lyric development",
          "Music arrangement & composition",
          "Studio recording sessions",
          "Mixing & Mastering",
          "Creative collaboration with artists"
        ]
      },
      {
        title: "Label Rights Acquisition",
        offerings: [
          "Identifying valuable music works",
          "Negotiating & securing rights",
          "Commercial release preparation",
          "Legal compliance & rights management",
          "Distribution Planning"
        ]
      },
      {
        title: "Original Music & Music Videos",
        offerings: [
          "Concept development for songs",
          "Original music production",
          "Creative direction for music videos",
          "Professional filming & editing",
          "Enhancing artist branding & reach"
        ]
      },
      {
        title: "Music Distribution & Marketing",
        offerings: [
          "Release planning & scheduling",
          "Digital distribution (Spotify, etc.)",
          "Social media & digital marketing",
          "Audience targeting & promotion",
          "Tracking performance & growth"
        ]
      },
      {
        title: "Film & Short Film Scoring",
        offerings: [
          "Original soundtrack composition",
          "Background scoring for films",
          "Mood-based theme creation",
          "Syncing music with visuals",
          "High-quality mixing & mastering"
        ]
      },
      {
        title: "Brand Jingles & TV Ad Music",
        offerings: [
          "Original jingle composition",
          "Background scores for TV ads",
          "Brand-aligned sound design",
          "Catchy, recallable audio branding",
          "Multi-platform audio adaptations"
        ]
      },
      {
        title: "Sound Design & Post-Production",
        offerings: [
          "Audio editing & enhancement",
          "Sound effects & foley design",
          "Voiceover recording & integration",
          "Advanced sound mixing & mastering",
          "Final audio delivery"
        ]
      }
    ]
  },
  {
    _id: "68e3ff39782cb1e8a22b63e8",
    name: "Jogi",
    prefix: "JOG",
    services: [
      {
        title: "Career Strategy & Development",
        offerings: [
          "Personal branding & image building",
          "Repertoire development",
          "Career roadmap & goal setting",
          "Talent grooming & mentorship",
          "Identifying growth opportunities"
        ]
      },
      {
        title: "Contract Negotiation",
        offerings: [
          "Recording contracts",
          "Performance agreements",
          "Endorsement & sponsorship deals",
          "Licensing & publishing contracts",
          "Ensuring legal & financial protection"
        ]
      },
      {
        title: "Scheduling & Logistics",
        offerings: [
          "Tour & event scheduling",
          "Travel & accommodation planning",
          "Technical & stage requirements",
          "Coordination with event organizers",
          "Day-to-day management"
        ]
      },
      {
        title: "Public Relations & Media Management",
        offerings: [
          "Media outreach & interviews",
          "Press release distribution",
          "Managing public appearances",
          "Reputation & image management",
          "Strategic PR campaigns"
        ]
      },
      {
        title: "Brand Endorsements & Collaborations",
        offerings: [
          "Identifying aligned brands",
          "Negotiating endorsement deals",
          "Influencer collaborations",
          "Long-term brand associations",
          "Maximizing commercial visibility"
        ]
      },
      {
        title: "Wedding Market Opportunities",
        offerings: [
          "Artist bookings for weddings",
          "Singers, DJs, musicians, etc.",
          "Curating artist-wedding synergy",
          "Premium networking & exposure",
          "Expanding artist revenue streams"
        ]
      },
      {
        title: "Comprehensive Deal Management",
        offerings: [
          "Initial brand/organizer liaison",
          "Negotiation & finalization",
          "Event execution & delivery",
          "Post-event feedback & reporting",
          "Maximizing ROI"
        ]
      }
    ]

  },
  {
    _id: "68e3ff8f782cb1e8a22b63eb",
    name: "Tandavs",
    prefix: "TAN",
    services: [
      {
        title: "Live Concerts",
        offerings: [
          "Stage design & setup",
          "Sound engineering & acoustics",
          "Lighting & visual effects",
          "Artist coordination & hospitality",
          "Ticketing & crowd management",
          "Event security & safety"
        ]
      },
      {
        title: "Theater & Drama Productions",
        offerings: [
          "Set construction & stage design",
          "Sound & lighting cues",
          "Script & direction coordination",
          "Technical crew management",
          "Audience seating & logistics"
        ]
      },
      {
        title: "Fashion Shows",
        offerings: [
          "Ramp & stage design",
          "Sound & lighting setup",
          "Backstage coordination",
          "Model management & choreography",
          "Guest experience & hospitality"
        ]
      },
      {
        title: "Musical Nights & DJ Nights",
        offerings: [
          "Live bands & solo performances",
          "DJ nights with top-tier talent",
          "Themed entertainment concepts",
          "State-of-the-art sound & lighting",
          "Crowd engagement & flow"
        ]
      },
      {
        title: "Corporate Entertainment",
        offerings: [
          "Entertainment for product launches",
          "Annual gatherings & conferences",
          "Brand-themed performances",
          "Interactive activities & shows",
          "Guest experience management"
        ]
      },
      {
        title: "Wedding Entertainment",
        offerings: [
          "Celebrity artist bookings",
          "Traditional & cultural acts",
          "Folk & regional performances",
          "Interactive couple entries & shows",
          "Customized entertainment concepts"
        ]
      },
      {
        title: "Comprehensive Technical Management",
        offerings: [
          "Staging & structural setup",
          "Professional sound systems",
          "Advanced lighting rigs",
          "LED visual displays & projections",
          "Special effects (pyro, smoke, etc.)",
          "Event licensing & permits"
        ]
      }
    ]

  },
  {
    _id: "68e4019a782cb1e8a22b63f1",
    name: "Panigrahna",
    prefix: "PAN",
    services: [
      {
        title: "Candid Wedding Photography",
        offerings: [
          "Natural candid shots",
          "Emotional moments",
          "Spontaneous couple interactions",
          "Storytelling through expressions"
        ]
      },
      {
        title: "Traditional Wedding Photography",
        offerings: [
          "Key rituals & ceremonies",
          "Formal family portraits",
          "Group photography",
          "Ritual documentation"
        ]
      },
      {
        title: "Pre-Wedding Shoots",
        offerings: [
          "Concept ideation & theme",
          "Location scouting & styling",
          "Couple photoshoots with props",
          "Customized storytelling"
        ]
      },
      {
        title: "Post-Wedding Shoots",
        offerings: [
          "Destination & outdoor shoots",
          "Styled concepts",
          "Couple portraits in scenic backdrops",
          "Lifestyle-inspired storytelling"
        ]
      },
      {
        title: "Cinematic Wedding Films",
        offerings: [
          "High-definition cinematic filming",
          "Storyline-driven editing",
          "Emotional highlights & key moments",
          "Music & sound design"
        ]
      },
      {
        title: "Traditional Wedding Videography",
        offerings: [
          "Multi-camera event recording",
          "Full-length videos of ceremonies",
          "Ritual-focused documentation",
          "Family & guest interactions"
        ]
      },
      {
        title: "Teaser & Highlight Videos",
        offerings: [
          "Short cinematic trailers",
          "Highlight reels of key events",
          "Social media-optimized edits",
          "Fast delivery for sharing"
        ]
      },
      {
        title: "Album Design & Delivery",
        offerings: [
          "Professional photo editing",
          "Customized album design",
          "Premium print & binding",
          "Digital delivery of photos/videos"
        ]
      },
      {
        title: "Drone Photography & Videography",
        offerings: [
          "Venue aerial coverage",
          "Couple cinematic entries",
          "Crowd & celebration panoramas",
          "Unique perspectives"
        ]
      }
    ]

  },
  {
    _id: "68e4016a782cb1e8a22b63ee",
    name: "Kalyaanam",
    prefix: "KAL",
    services: [
      {
        title: "Wedding Designing",
        offerings: [
          "Customized theme & decor",
          "Stage, mandap & backdrop designs",
          "Floral arrangements & ambience",
          "Lighting & mood enhancement"
        ]
      },
      {
        title: "Wedding Planning",
        offerings: [
          "Complete event scheduling",
          "Vendor sourcing & management",
          "Guest coordination & hospitality",
          "Budgeting & expense tracking"
        ]
      },
      {
        title: "Wedding Concepts",
        offerings: [
          "Creative & personalized themes",
          "Fusion of traditions with modern ideas",
          "Cultural & destination wedding concepts",
          "Innovative entertainment ideas"
        ]
      },
      {
        title: "Pre-Wedding Setups",
        offerings: [
          "Engagement & ring ceremony setups",
          "Haldi & Mehendi décor design",
          "Sangeet stage & lighting concepts",
          "Cocktail & bachelor/bachelorette party setups"
        ]
      }
    ]

  }
];

export default function ServiceForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    business_name: '',
    business_category: '',
    other_business_category: '',
    birthDate: '',
    anniversaryDate: '',
    companyEstablishDate: '',
    project_details: '',
    services: [], // Array of { subCompanyId, title, selectedOfferings: [] }
    subCompanyIds: [] // Array of selected subcompany IDs
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [submissionToken, setSubmissionToken] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value || null
    }));
  };

  const handleServiceSelection = (subCompanyId, serviceTitle, offering, isChecked) => {
    setFormData(prev => {
      const existingServiceIndex = prev.services.findIndex(
        s => s.subCompanyId === subCompanyId && s.title === serviceTitle
      );

      if (isChecked) {
        // Add service or offering
        if (existingServiceIndex >= 0) {
          // Service exists, add offering
          const updatedServices = [...prev.services];
          if (!updatedServices[existingServiceIndex].selectedOfferings.includes(offering)) {
            updatedServices[existingServiceIndex].selectedOfferings.push(offering);
          }
          return {
            ...prev,
            services: updatedServices,
            subCompanyIds: prev.subCompanyIds.includes(subCompanyId)
              ? prev.subCompanyIds
              : [...prev.subCompanyIds, subCompanyId]
          };
        } else {
          // New service
          return {
            ...prev,
            services: [
              ...prev.services,
              {
                subCompanyId,
                title: serviceTitle,
                selectedOfferings: [offering]
              }
            ],
            subCompanyIds: prev.subCompanyIds.includes(subCompanyId)
              ? prev.subCompanyIds
              : [...prev.subCompanyIds, subCompanyId]
          };
        }
      } else {
        // Remove offering
        if (existingServiceIndex >= 0) {
          const updatedServices = [...prev.services];
          updatedServices[existingServiceIndex].selectedOfferings =
            updatedServices[existingServiceIndex].selectedOfferings.filter(o => o !== offering);

          // Remove service if no offerings left
          const finalServices = updatedServices[existingServiceIndex].selectedOfferings.length === 0
            ? updatedServices.filter((_, index) => index !== existingServiceIndex)
            : updatedServices;

          // Remove subCompanyId if no services left for that company
          const servicesForCompany = finalServices.filter(s => s.subCompanyId === subCompanyId);
          const finalSubCompanyIds = servicesForCompany.length === 0
            ? prev.subCompanyIds.filter(id => id !== subCompanyId)
            : prev.subCompanyIds;

          return {
            ...prev,
            services: finalServices,
            subCompanyIds: finalSubCompanyIds
          };
        }
        return prev;
      }
    });
  };

  const isOfferingSelected = (subCompanyId, serviceTitle, offering) => {
    return formData.services.some(
      s => s.subCompanyId === subCompanyId &&
        s.title === serviceTitle &&
        s.selectedOfferings.includes(offering)
    );
  };

  const validateStep = () => {
    if (currentStep === 0) {
      if (!formData.customer_name || !formData.customer_email || !formData.customer_phone) {
        setError('Please fill in all required fields: Name, Email, and Phone');
        return false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.customer_email)) {
        setError('Please enter a valid email address');
        return false;
      }

      const phoneRegex = /^\d{10,}$/;
      const cleanPhone = formData.customer_phone.replace(/\D/g, '');
      if (!phoneRegex.test(cleanPhone)) {
        setError('Please enter a valid phone number (at least 10 digits)');
        return false;
      }
    }
    setError('');
    return true;
  };

  const handleNext = () => {
    if (currentStep === STEPS.length - 1) {
      handleSubmit();
    } else if (validateStep()) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setError('');
    }
  };

  const handleTabClick = (stepIndex) => {
    if (stepIndex <= currentStep || validateStep()) {
      setCurrentStep(stepIndex);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setError('');
    }
  };

  const handleSubmit = async () => {
    if (!validateStep()) return;

    setIsSubmitting(true);
    setError('');

    try {
      const leadData = {
        source: 'website-form',
        rawForm: formData,
        name: formData.customer_name,
        email: formData.customer_email,
        phone: formData.customer_phone,
        businessName: formData.business_name || '',
        businessCategory: formData.business_category === 'Other'
          ? formData.other_business_category
          : formData.business_category,
        birthDate: formData.birthDate || null,
        anniversaryDate: formData.anniversaryDate || null,
        companyEstablishDate: formData.companyEstablishDate || null,
        subCompanyIds: formData.subCompanyIds,
        chosenServices: formData.services,
        project_details: formData.project_details,
        status: 'new'
      };

      console.log('Submitting lead data:', leadData);

      const response = await fetch('http://194.238.19.57:9000/api/v1/lead/addlead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        setSubmissionToken(result.data.token);
        setShowConfirmation(true);
      } else {
        setError(result.message || 'Failed to submit lead. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
        setError('Network error: Cannot connect to server. Please check if the backend is running.');
      } else {
        setError(error.message || 'Network error. Please check your connection and try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadPDF = () => {
    const pdfContent = `
      Rudhram Entertainment - Inquiry Confirmation
      
      Token: ${submissionToken}
      Name: ${formData.customer_name}
      Email: ${formData.customer_email}
      Phone: ${formData.customer_phone}
      Business: ${formData.business_name}
      Category: ${formData.business_category}
      Birth Date: ${formData.birthDate || 'Not provided'}
      Anniversary Date: ${formData.anniversaryDate || 'Not provided'}
      Company Establish Date: ${formData.companyEstablishDate || 'Not provided'}
      
      Selected Services:
      ${formData.services.map(service => {
      const subCompany = SUBCOMPANIES.find(sc => sc._id === service.subCompanyId);
      return `
        ${subCompany?.name} - ${service.title}:
          ${service.selectedOfferings.map(offering => `• ${offering}`).join('\n          ')}`;
    }).join('\n')}
      
      Project Details: ${formData.project_details}
      
      Submitted on: ${new Date().toLocaleString()}
    `;

    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Rudhram-Inquiry-${submissionToken}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Rudhram Entertainment Inquiry',
      text: `I've submitted an inquiry to Rudhram Entertainment. My inquiry token is ${submissionToken}.`,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(`Rudhram Entertainment Inquiry Token: ${submissionToken}`);
        alert('Token copied to clipboard!');
      }
    } catch (err) {
      console.error('Share failed:', err);
    }
  };

  return (
    <>
      <div className="container">
        <header className="mobile-header">
          <img style={{ height: '90px' }} src="https://via.placeholder.com/90x90/B4783A/ffffff?text=R" alt="Logo" />
          <h1 style={{ fontSize: '30px' }}>Rudhram Entertainment</h1>
        </header>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <div className="mobile-tab-container">
          {STEPS.map((step, index) => (
            <button
              key={index}
              type="button"
              className={`tab-btn ${currentStep === index ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {step}
            </button>
          ))}
        </div>

        <div className="form-wrapper">
          <aside className="form-sidebar">
            <div className="sidebar-header">
              <h1>Rudhram Entertainment</h1>
              <p>Select a category to begin your inquiry.</p>
            </div>
            <div className="desktop-tab-container">
              {STEPS.map((step, index) => (
                <button
                  key={index}
                  type="button"
                  className={`tab-btn ${currentStep === index ? 'active' : ''}`}
                  onClick={() => handleTabClick(index)}
                >
                  {step === 'Details' ? 'Client Details' : step}
                </button>
              ))}
            </div>
          </aside>

          <div className="form-content-wrapper">
            <main className="form-content">
              <form onSubmit={(e) => e.preventDefault()}>
                {currentStep === 0 && (
                  <div className="form-step active">
                    <h2>Your Details</h2>
                    <div className="form-group">
                      <label htmlFor="customer_name">Full Name *</label>
                      <input
                        type="text"
                        id="customer_name"
                        name="customer_name"
                        className="form-input"
                        value={formData.customer_name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="customer_email">Email Address *</label>
                      <input
                        type="email"
                        id="customer_email"
                        name="customer_email"
                        className="form-input"
                        value={formData.customer_email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="customer_phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="customer_phone"
                        name="customer_phone"
                        className="form-input"
                        value={formData.customer_phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="business_name">Business Name (Optional)</label>
                      <input
                        type="text"
                        id="business_name"
                        name="business_name"
                        className="form-input"
                        value={formData.business_name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="business_category">Business Category</label>
                      <select
                        id="business_category"
                        name="business_category"
                        className="form-input"
                        value={formData.business_category}
                        onChange={handleInputChange}
                      >
                        <option value="">Select a Category</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Fashion & Lifestyle">Fashion & Lifestyle</option>
                        <option value="Corporate">Corporate</option>
                        <option value="Food & Beverage">Food & Beverage</option>
                        <option value="Technology">Technology</option>
                        <option value="Wedding & Events">Wedding & Events</option>
                        <option value="Personal">Personal/Individual</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    {formData.business_category === 'Other' && (
                      <div className="form-group">
                        <label htmlFor="other_business_category">Please specify</label>
                        <input
                          type="text"
                          id="other_business_category"
                          name="other_business_category"
                          className="form-input"
                          value={formData.other_business_category}
                          onChange={handleInputChange}
                        />
                      </div>
                    )}

                    {/* New Date Fields */}
                    <div className="date-fields-grid">
                      <div className="form-group">
                        <label htmlFor="birthDate">Birth Date (Optional)</label>
                        <input
                          type="date"
                          id="birthDate"
                          name="birthDate"
                          className="form-input"
                          value={formData.birthDate}
                          onChange={handleDateChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="anniversaryDate">Anniversary Date (Optional)</label>
                        <input
                          type="date"
                          id="anniversaryDate"
                          name="anniversaryDate"
                          className="form-input"
                          value={formData.anniversaryDate}
                          onChange={handleDateChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="companyEstablishDate">Company Establish Date (Optional)</label>
                        <input
                          type="date"
                          id="companyEstablishDate"
                          name="companyEstablishDate"
                          className="form-input"
                          value={formData.companyEstablishDate}
                          onChange={handleDateChange}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 1 && (
                  <SubCompanyServices
                    subCompany={SUBCOMPANIES[0]}
                    selectedServices={formData.services}
                    onServiceChange={handleServiceSelection}
                    isOfferingSelected={isOfferingSelected}
                  />
                )}

                {currentStep === 2 && (
                  <SubCompanyServices
                    subCompany={SUBCOMPANIES[1]}
                    selectedServices={formData.services}
                    onServiceChange={handleServiceSelection}
                    isOfferingSelected={isOfferingSelected}
                  />
                )}

                {currentStep === 3 && (
                  <SubCompanyServices
                    subCompany={SUBCOMPANIES[2]}
                    selectedServices={formData.services}
                    onServiceChange={handleServiceSelection}
                    isOfferingSelected={isOfferingSelected}
                  />
                )}

                {currentStep === 4 && (
                  <SubCompanyServices
                    subCompany={SUBCOMPANIES[3]}
                    selectedServices={formData.services}
                    onServiceChange={handleServiceSelection}
                    isOfferingSelected={isOfferingSelected}
                  />
                )}

                {currentStep === 5 && (
                  <SubCompanyServices
                    subCompany={SUBCOMPANIES[4]}
                    selectedServices={formData.services}
                    onServiceChange={handleServiceSelection}
                    isOfferingSelected={isOfferingSelected}
                  />
                )}

                {currentStep === 6 && (
                  <SubCompanyServices
                    subCompany={SUBCOMPANIES[5]}
                    selectedServices={formData.services}
                    onServiceChange={handleServiceSelection}
                    isOfferingSelected={isOfferingSelected}
                  />
                )}

                {currentStep === 7 && (
                  <div className="form-step active">
                    <h2>Project Details & Submission</h2>
                    <div className="selected-services-summary">
                      <h4>Selected Services Summary:</h4>
                      {formData.services.length === 0 ? (
                        <p>No services selected yet.</p>
                      ) : (
                        formData.services.map((service, index) => {
                          const subCompany = SUBCOMPANIES.find(sc => sc._id === service.subCompanyId);
                          return (
                            <div key={index} className="service-summary-item">
                              <strong>{subCompany?.name} - {service.title}</strong>
                              <ul>
                                {service.selectedOfferings.map((offering, idx) => (
                                  <li key={idx}>{offering}</li>
                                ))}
                              </ul>
                            </div>
                          );
                        })
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="project_details">
                        Please describe your project, including any specific requirements or goals:
                      </label>
                      <textarea
                        id="project_details"
                        name="project_details"
                        rows={8}
                        className="form-input"
                        value={formData.project_details}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project vision, timeline, budget considerations, and any specific requirements..."
                      />
                    </div>
                  </div>
                )}
              </form>
            </main>

            <footer className="form-footer">
              <div className="form-navigation">
                {currentStep > 0 && (
                  <button type="button" id="prevBtn" className="nav-btn" onClick={handlePrev}>
                    <ChevronLeft size={20} />
                    Previous
                  </button>
                )}
                <button
                  type="button"
                  id="nextBtn"
                  className={`nav-btn ${isSubmitting ? 'loading' : ''}`}
                  onClick={handleNext}
                  disabled={isSubmitting}
                >
                  <span className="btn-text">
                    {currentStep === STEPS.length - 1 ? 'Submit' : 'Next'}
                    {currentStep < STEPS.length - 1 && <ChevronRight size={20} />}
                  </span>
                  <div className="loader"></div>
                </button>
              </div>
            </footer>
          </div>
        </div>
      </div>

      {showConfirmation && (
        <ConfirmationPopup
          token={submissionToken}
          onClose={() => setShowConfirmation(false)}
          onDownload={handleDownloadPDF}
          onShare={handleShare}
        />
      )}
    </>
  );
}

// Updated Service Component for SubCompanies
function SubCompanyServices({ subCompany, selectedServices, onServiceChange, isOfferingSelected }) {
  return (
    <div className="form-step active">
      <h2>{subCompany.name}: {getSubCompanyDescription(subCompany.name)}</h2>
      {subCompany.services.map((service, index) => (
        <ServiceBlock
          key={index}
          subCompany={subCompany}
          service={service}
          selectedServices={selectedServices}
          onServiceChange={onServiceChange}
          isOfferingSelected={isOfferingSelected}
        />
      ))}
    </div>
  );
}

function ServiceBlock({ subCompany, service, selectedServices, onServiceChange, isOfferingSelected }) {
  return (
    <div className="service-detail-block">
      <h4>{service.title}</h4>
      <div className="checkbox-group">
        {service.offerings.map((offering, index) => (
          <div key={index} className="checkbox-item">
            <input
              type="checkbox"
              id={`${subCompany._id}-${service.title}-${offering}`}
              checked={isOfferingSelected(subCompany._id, service.title, offering)}
              onChange={(e) => onServiceChange(subCompany._id, service.title, offering, e.target.checked)}
            />
            <label htmlFor={`${subCompany._id}-${service.title}-${offering}`}>
              {offering}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConfirmationPopup({ token, onClose, onDownload, onShare }) {
  return (
    <div className="confirmation-popup" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>Thank You!</h2>
        <p>Your inquiry has been successfully submitted.</p>
        <div className="token-info">
          <p>Your Inquiry Token:</p>
          <span>{token}</span>
        </div>
        <p style={{ marginTop: '1rem', color: '#777', fontSize: '0.9rem' }}>
          Please save this token for future reference. We will contact you shortly.
        </p>
        <div className="popup-actions">
          <button className="action-btn download-btn" onClick={onDownload}>
            <Download size={18} style={{ marginRight: '0.5rem' }} />
            Download PDF
          </button>
          <button className="action-btn share-btn" onClick={onShare}>
            <Share2 size={18} style={{ marginRight: '0.5rem' }} />
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

// Helper function to get subcompany descriptions
function getSubCompanyDescription(name) {
  const descriptions = {
    'Aghhori': 'Digital & Creative Partner',
    'Damru': 'The Sound of Success',
    'Jogi': 'Bridging Artists and Brands',
    'Tandavs': 'Unleashing Live Entertainment',
    'Panigrahna': 'Capturing Moments',
    'Kalyaanam': 'Crafting Dream Events'
  };
  return descriptions[name] || '';
}
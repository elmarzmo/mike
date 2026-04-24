import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.html',
  styleUrls: ['./services.css'],
})
export class Services {
  openFaqId: string | null = null;

  services = [
    {
      icon: '🏡',
      title: 'Home Buying Assistance',
      subtitle: 'First-time & repeat buyers',
      description:
        'We guide you through every step of the home buying process — from mortgage pre-approval and property search to inspections and closing day. No hidden steps, just clear guidance.',
      includes: [
        'Mortgage guidance & pre-approval support',
        'Neighborhood research & property reviews',
        'Inspection & appraisal coordination',
        'Closing preparation & document review',
        'Post-closing support & resources',
      ],
      pricing: 'Free Consultation + Service Fees Starting at $500',
      pricingClass: 'pricing-badge--premium',
      pricingNote: 'Fees vary based on property price and complexity',
      timeline: '3-6 months from consultation to closing',
      timelineShort: '3-6 months',
      bestFor: 'First-time buyers, property upgraders',
      consultation: 'Free',
    },
    {
      icon: '🔑',
      title: 'Rental Placement',
      subtitle: 'Find quality rentals fast',
      description:
        'We search for vetted, quality rentals that fit your budget and lifestyle. We negotiate lease terms on your behalf and ensure you understand every clause.',
      includes: [
        'Comprehensive rental property search',
        'Landlord & property verification',
        'Lease negotiation & review',
        'Application preparation & submission',
        'Move-in inspection & support',
      ],
      pricing: 'Free Consultation + $100-$300 Service Fee',
      pricingClass: 'pricing-badge--standard',
      pricingNote: 'Sometimes waived with landlord partners',
      timeline: '1-4 weeks from consultation to lease signing',
      timelineShort: '1-4 weeks',
      bestFor: 'Renters, families seeking rentals',
      consultation: 'Free',
    },
    {
      icon: '🤝',
      title: 'Housing Aid Programs',
      subtitle: 'Connect with assistance programs',
      description:
        'We help you find, qualify for, and apply to federal, state, and local housing assistance programs. Many families don\'t know these resources exist.',
      includes: [
        'Program eligibility assessment',
        'Application preparation & submission',
        'Document collection & organization',
        'Follow-up & status tracking',
        'Ongoing support & re-certification help',
      ],
      pricing: 'FREE',
      pricingClass: 'pricing-badge--free',
      pricingNote: 'Completely free. These programs exist for you.',
      timeline: '2-8 weeks depending on program',
      timelineShort: '2-8 weeks',
      bestFor: 'Low-income families, renters needing support',
      consultation: 'Free',
    },
    {
      icon: '📦',
      title: 'Relocation Support',
      subtitle: 'Moving to a new city?',
      description:
        'Moving somewhere new? We research neighborhoods, schools, local services, and housing markets in your destination city. We make relocation less stressful.',
      includes: [
        'Neighborhood & school research',
        'Cost of living analysis',
        'Housing market overview',
        'Local resource connections',
        'Virtual tours & remote property search',
      ],
      pricing: 'Free Consultation + $200-$400 Service Fee',
      pricingClass: 'pricing-badge--standard',
      pricingNote: 'Package pricing for multi-state moves',
      timeline: '4-12 weeks before move-in',
      timelineShort: '4-12 weeks',
      bestFor: 'Families relocating, job changers',
      consultation: 'Free',
    },
    {
      icon: '💼',
      title: 'Financial Counseling',
      subtitle: 'Build your housing foundation',
      description:
        'Budget planning, credit coaching, down payment strategies. We help you understand your finances and prepare for housing success, whether renting or buying.',
      includes: [
        'Budget & financial assessment',
        'Credit score improvement strategies',
        'Down payment planning & savings',
        'First-time homebuyer education',
        'Debt management guidance',
      ],
      pricing: 'Free Consultation + $50-$150 per Session',
      pricingClass: 'pricing-badge--standard',
      pricingNote: '3-5 sessions usually needed',
      timeline: 'Ongoing (3-12 months)',
      timelineShort: '3-12 months',
      bestFor: 'Anyone improving financial health',
      consultation: 'Free',
    },
    {
      icon: '📋',
      title: 'Application Assistance',
      subtitle: 'Paperwork made simple',
      description:
        'Housing paperwork is confusing. We help you fill out applications correctly and completely — rental applications, housing aid forms, loan documents, and more.',
      includes: [
        'Form review & explanation',
        'Information organization',
        'Document preparation',
        'Error checking & corrections',
        'Submission support',
      ],
      pricing: 'Free Consultation + $50-$150',
      pricingClass: 'pricing-badge--standard',
      pricingNote: 'Per application or bundled discount available',
      timeline: '1-2 weeks per application',
      timelineShort: '1-2 weeks',
      bestFor: 'Anyone with complex paperwork',
      consultation: 'Free',
    },
  ];

  processSteps = [
    {
      title: 'Free Consultation',
      desc: 'We listen to your situation, answer questions, and explain your options — no pressure, no sales pitch.',
    },
    {
      title: 'Custom Plan',
      desc: 'We create a personalized action plan with timelines, costs, and next steps tailored to your needs.',
    },
    {
      title: 'Expert Support',
      desc: 'We handle the complexity — paperwork, calls, applications — while keeping you informed every step.',
    },
    {
      title: 'Success & Beyond',
      desc: 'You achieve your housing goal. We continue supporting you after to ensure stability and success.',
    },
  ];

  faqItems = [
    {
      id: 'consultation-free',
      q: 'Are consultations really free?',
      a: 'Yes. Every initial consultation is completely free, no matter which service. We want to understand your situation before discussing investment.',
    },
    {
      id: 'service-fees',
      q: 'Do I have to pay for every service?',
      a: 'Housing Aid Programs are always FREE. Other services have transparent fees that we discuss upfront. You decide if it makes sense for you.',
    },
    {
      id: 'multiple-services',
      q: 'Can I use multiple services?',
      a: 'Absolutely! Many clients combine services. For example, relocation + financial counseling. We offer package discounts for multiple services.',
    },
    {
      id: 'timeline-flexible',
      q: 'What if my timeline is different than listed?',
      a: 'Timelines are estimates based on typical situations. Every case is different. We work at your pace and adjust as needed.',
    },
    {
      id: 'guarantee',
      q: 'Is there a guarantee my housing goal will happen?',
      a: 'We can\'t guarantee outcomes, but we commit to giving our full expertise and effort. We\'re invested in your success.',
    },
    {
      id: 'emergency',
      q: 'What if this is urgent?',
      a: 'Let us know. For evictions, homelessness, or emergencies, call (800) 555-HOME immediately and we prioritize your case.',
    },
  ];

  toggleFaq(id: string): void {
    this.openFaqId = this.openFaqId === id ? null : id;
  }
}
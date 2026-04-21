import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home implements OnInit {
  isScrolled = false;
  menuOpen = false;

  marqueeItems = [
    'Housing Assistance',
    'First-Time Buyers',
    'Rental Support',
    'Relocation Services',
    'Property Search',
    'Financial Guidance',
    'Family Housing',
    'Affordable Living',
  ];

  services = [
    {
      icon: '🏡',
      title: 'Home Buying Assistance',
      desc: 'Navigate the purchase process with expert guidance, from mortgage pre-approval to closing day — we\'re with you every step.',
    },
    {
      icon: '🔑',
      title: 'Rental Placement',
      desc: 'Find vetted, quality rentals that fit your budget and lifestyle. We negotiate on your behalf to secure the best terms.',
    },
    {
      icon: '🤝',
      title: 'Housing Aid Programs',
      desc: 'Access federal, state, and local assistance programs. We help you qualify, apply, and receive the support you deserve.',
    },
    {
      icon: '📦',
      title: 'Relocation Services',
      desc: 'Moving to a new city? We handle the logistics — school districts, neighborhood research, and local resource connections.',
    },
    {
      icon: '💼',
      title: 'Financial Counseling',
      desc: 'Understand your options with personalized budget planning, credit coaching, and down payment assistance strategies.',
    },
    {
      icon: '🏗️',
      title: 'New Construction',
      desc: 'Connect with top builders in your area. We review contracts, inspect builds, and ensure quality from foundation to roof.',
    },
  ];

  steps = [
    {
      title: 'Free Consultation',
      desc: 'Tell us your situation, goals, and budget. We listen first — no pressure, no sales pitch.',
    },
    {
      title: 'Personalized Plan',
      desc: 'We craft a tailored roadmap with programs, properties, and timelines designed around you.',
    },
    {
      title: 'Expert Guidance',
      desc: 'Our specialists handle the complexity — paperwork, negotiations, applications — so you don\'t have to.',
    },
    {
      title: 'Move In',
      desc: 'Celebrate the keys to your new home, backed by our continued post-move support network.',
    },
  ];

  testimonials = [
    {
      text: 'HomeHaven turned what felt impossible into reality. As a single mom, I didn\'t think I could afford a home. Their team found assistance programs I never knew existed. We moved in six weeks later.',
      name: 'Latasha R.',
      role: 'First-Time Homeowner, Memphis TN',
    },
    {
      text: 'The entire process from consultation to closing was handled with professionalism and genuine care. I\'ve never felt so supported during a major life decision. HomeHaven truly delivers on its name.',
      name: 'Marcus & Diana W.',
      role: 'Relocated from Atlanta, GA',
    },
    {
      text: 'When we were facing eviction, HomeHaven connected us to emergency rental assistance within 48 hours. They\'re not just a service — they\'re a lifeline.',
      name: 'Jerome T.',
      role: 'Housing Aid Client, Jackson MS',
    },
  ];

  ngOnInit(): void {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 60;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
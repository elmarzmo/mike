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
      desc: 'Celebrate the keys to your new home, backed by our continued post-move support.',
    },
  ];

  whyItems = [
    {
      icon: '🎯',
      title: 'Personal Attention',
      desc: 'As a new business, every client matters deeply to us. You won\'t get lost in a system — you\'ll work directly with our team.',
    },
    {
      icon: '💡',
      title: 'Fresh Approach',
      desc: 'We built HomeHaven from scratch with modern tools and a client-first mindset — no outdated processes or red tape.',
    },
    {
      icon: '🔍',
      title: 'Transparent Process',
      desc: 'We tell you exactly what\'s happening, what your options are, and what things cost. No surprises, ever.',
    },
    {
      icon: '❤️',
      title: 'Mission-Driven',
      desc: 'We started HomeHaven because we believe everyone deserves a safe place to call home — that mission drives every decision.',
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
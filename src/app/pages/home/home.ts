import { Component, OnInit } from '@angular/core';
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

  whoWeHelp = [
    { emoji: '👨‍👩‍👧', title: 'Families in Transition', desc: 'Going through a move, job change, or life event? We help you land on your feet with stable housing.' },
    { emoji: '🔑', title: 'First-Time Buyers', desc: 'Never bought a home before? We walk you through every step and explain everything in plain language.' },
    { emoji: '🏠', title: 'Renters Needing Help', desc: 'Struggling with rent, facing eviction, or looking for a better situation? We connect you to real resources.' },
    { emoji: '📦', title: 'People Relocating', desc: 'Moving to a new city or state? We take the stress out of finding housing in an unfamiliar place.' },
    { emoji: '💸', title: 'Those on a Tight Budget', desc: 'We know money is tight for many families. We specialize in finding options and aid programs that fit your budget.' },
    { emoji: '🤲', title: 'Anyone Who Needs Guidance', desc: 'Not sure where to start? That\'s okay. Come talk to us. No situation is too complicated or too simple.' },
  ];

  services = [
    {
      icon: '🏡',
      title: 'Home Buying Assistance',
      desc: 'From understanding mortgages to closing day, we guide first-time and repeat buyers through the entire process.',
    },
    {
      icon: '🔑',
      title: 'Rental Placement',
      desc: 'We search for quality rentals that match your needs and budget, and we negotiate terms on your behalf.',
    },
    {
      icon: '🤝',
      title: 'Housing Aid Programs',
      desc: 'We help you find, qualify for, and apply to federal, state, and local housing assistance programs.',
    },
    {
      icon: '📦',
      title: 'Relocation Support',
      desc: 'Research neighborhoods, schools, and local services in your new city — we handle the legwork.',
    },
    {
      icon: '💼',
      title: 'Financial Counseling',
      desc: 'Budgeting, credit coaching, and down payment strategies so you understand your options clearly.',
    },
    {
      icon: '📋',
      title: 'Application Assistance',
      desc: 'Housing paperwork is confusing. We help you fill out applications correctly and completely the first time.',
    },
  ];

  steps = [
    {
      title: 'Reach Out to Us',
      desc: 'Call, email, or fill out our contact form. Tell us a little about your situation — there\'s no wrong answer.',
    },
    {
      title: 'Free Consultation',
      desc: 'We sit down with you (in person or virtually) and listen. No sales pitch — just an honest conversation about your options.',
    },
    {
      title: 'Your Personal Plan',
      desc: 'We put together a clear, step-by-step plan tailored to your situation, budget, and timeline.',
    },
    {
      title: 'We Work Together',
      desc: 'We handle the hard parts — paperwork, calls, applications, negotiations — while keeping you informed throughout.',
    },
    {
      title: 'You Move In',
      desc: 'You get the keys to your new home, with our continued support even after move-in day.',
    },
  ];

  ngOnInit(): void {}
}
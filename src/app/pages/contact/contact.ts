import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  openFaqId: string | null = null;

  faqItems = [
    {
      id: 'response',
      q: 'How quickly will you respond to my message?',
      a: 'We aim to respond to emails within 24 hours during business days. Many inquiries get a response within 2 hours. For urgent situations, call us directly at (800) 555-HOME.',
    },
    {
      id: 'free',
      q: 'Is the consultation really free?',
      a: 'Yes, completely free. There\'s no obligation, no hidden fees, and no pressure. We want to understand your situation and help you explore options.',
    },
    {
      id: 'privacy',
      q: 'Is my information kept private?',
      a: 'Absolutely. We take your privacy seriously. Your information is only used to help you and will never be sold or shared without your permission.',
    },
    {
      id: 'availability',
      q: 'What are your office hours?',
      a: 'We\'re available Monday through Friday, 8am to 6pm EST. If you call or email outside these hours, leave a message and we\'ll get back to you first thing during business hours.',
    },
    {
      id: 'urgent',
      q: 'What if I need help urgently?',
      a: 'Call us immediately at (800) 555-HOME, even outside business hours. If it\'s after hours, leave a detailed voicemail and we\'ll prioritize your call first thing in the morning.',
    },
    {
      id: 'services',
      q: 'Do you work with everyone, or only certain situations?',
      a: 'We work with anyone seeking housing help — renters, buyers, people in transition, those with limited budgets, families, individuals. Everyone deserves a stable home.',
    },
  ];

  toggleFaq(id: string): void {
    this.openFaqId = this.openFaqId === id ? null : id;
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {
  reviews = [
    {
      name: 'K. Lowry',
      review: 'I\'ve been working with Dylan and his team for just over a month, and I\'ve been very impressed by their work so far. The changes they\'ve implemented to my website and social media presence have had a very positive impact on sales. They work to understand my vision for my business and are very responsive to my feedback. I would highly recommend Kyber Strategy Group.',
      rating: 5
    },
    {
      name: 'Mackenzie Tracey',
      review: 'I had the opportunity to have Kyber Strategy Group build my website, and honestly, it has been a complete game changer for my business.\nThey were quick, efficient, professional, and so easy to communicate with throughout the entire process. Everything was made simple, and they truly understood my vision and brought it to life.\nI’m so happy with how my website turned out and would absolutely recommend Kyber Strategy Group to anyone looking for a team that delivers quality work while making the process easy and stress-free! 🤍',
      rating: 5
    }
  ]
}

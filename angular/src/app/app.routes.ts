import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ContactUs } from './contact-us/contact-us';
import { Testimonials } from './testimonials/testimonials';
import { Privacy } from './privacy/privacy';
import { Terms } from './terms/terms';
import { Book } from './book/book';

export const routes: Routes = [

    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', component: Home, title: 'Kyber Strategy Group - Home',
    },
    {
        path: "testimonials", component: Testimonials, title: 'Kyber Strategy Group - Testimonials'
    },
    {
        path: 'contact-us', component: ContactUs, title: 'Kyber Strategy Group - Contact Us'
    },
    {
        path: 'privacy', component: Privacy, title: 'Kyber Strategy Group - Privacy Policy'
    },
    {
        path: 'terms', component: Terms, title: 'Kyber Strategy Group - Terms of Service'
    },
    {
        path: 'book-consultation', component: Book, title: 'Kyber Strategy Group - Book a Consultation'
    }
];

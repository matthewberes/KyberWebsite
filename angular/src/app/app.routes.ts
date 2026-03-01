import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ContactUs } from './contact-us/contact-us';
import { Testimonials } from './testimonials/testimonials';
import { Privacy } from './privacy/privacy';
import { Terms } from './terms/terms';
import { Book } from './book/book';
import { Services } from './services/services';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [

    {
        path: '', pathMatch: 'full', component: Home, title: 'Kyber Strategy Group - Building Businesses Better'
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
    },
    {
        path: 'services', component: Services, title: 'Kyber Strategy Group - Services'
    },
    {
        path: '**', component: NotFound, title: '404 - Page Not Found'
    }
];

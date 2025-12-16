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
        path: 'home', component: Home,
    },
    {
        path: "testimonials", component: Testimonials
    },
    {
        path: 'contact-us', component: ContactUs
    },
    {
        path: 'privacy', component: Privacy
    },
    {
        path: 'terms', component: Terms
    },
    {
        path: 'book-consultation', component: Book
    }
];

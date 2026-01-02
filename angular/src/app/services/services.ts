import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  sendToStripe(number: number) {
    window.location.href = `https://buy.stripe.com/4gM00j8dea2ecI5d0ngnK00`;
  }
}

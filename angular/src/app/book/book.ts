import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book {

  submitting = false;
  success = '';

  form: any;

  webhook = "https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/beA4dYmm#generic-webhook";

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^\+?[0-9\s()+-]{7,25}$/)]],
      businessType: ['', Validators.required],
    });
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting = true;

    //Send to Privyr
    const payload = {
      name: this.form.value.firstName + ' ' + this.form.value.lastName,
      email: this.form.value.email,
      phone: this.form.value.phone,
      business: this.form.value.businessType,
      source: 'Website'
    };

    this.http.post(this.webhook, payload).subscribe({
      next: () => {
        this.success = `Thanks, ${this.form.value.firstName}! We received your request.`;
        this.submitting = false;
        this.form.reset()
      },
      error: err => console.error('Privyr submission failed', err)
    });;
  }

}

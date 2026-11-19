import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [ReactiveFormsModule, RouterLink, TranslatePipe],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  private formBuilder = inject(FormBuilder);
  protected sendSuccess = signal(false);
  protected contactForm = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)]],
    message: ['', Validators.required],
    privacy: [false, Validators.requiredTrue],
  });

  protected hasError(fieldName: string) {
    const FORM_FIELD = this.contactForm.get(fieldName);
    return !!FORM_FIELD && FORM_FIELD.touched && FORM_FIELD.invalid;
  }

  protected isValid(fieldName: string) {
    const FORM_FIELD = this.contactForm.get(fieldName);
    return !!FORM_FIELD && FORM_FIELD.dirty && FORM_FIELD.valid;
  }

  protected submitForm() {
    if (this.contactForm.invalid) {
      return;
    }
    this.contactForm.reset();
    this.sendSuccess.set(true);
    setTimeout(() => this.sendSuccess.set(false), 3000);
  }

  protected scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

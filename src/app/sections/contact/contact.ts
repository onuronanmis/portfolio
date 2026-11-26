import { Component, inject, signal, WritableSignal } from '@angular/core';
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
  protected sendError = signal(false);
  protected isSending = signal(false);
  protected contactForm = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)]],
    message: ['', [Validators.required, Validators.pattern(/^\s*(\S\s*){10,}$/)]],
    privacy: [false, Validators.requiredTrue],
    website: [''],
  });

  protected hasError(fieldName: string) {
    const FORM_FIELD = this.contactForm.get(fieldName);
    return !!FORM_FIELD && FORM_FIELD.touched && FORM_FIELD.invalid;
  }

  protected isValid(fieldName: string) {
    const FORM_FIELD = this.contactForm.get(fieldName);
    return !!FORM_FIELD && FORM_FIELD.dirty && FORM_FIELD.valid;
  }

  protected async submitForm() {
    if (this.contactForm.invalid || this.isSending()) {
      return;
    }
    this.isSending.set(true);
    const IS_SENT = await this.sendMessage();
    this.isSending.set(false);
    if (IS_SENT) {
      this.contactForm.reset();
      this.showToast(this.sendSuccess);
    } else {
      this.showToast(this.sendError);
    }
  }

  private async sendMessage() {
    try {
      const RESPONSE = await fetch('sendMail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.contactForm.getRawValue()),
      });
      return RESPONSE.ok;
    } catch {
      return false;
    }
  }

  private showToast(toastSignal: WritableSignal<boolean>) {
    toastSignal.set(true);
    setTimeout(() => toastSignal.set(false), 3000);
  }

  protected scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-back',
  styleUrl: './back.scss',
  templateUrl: './back.html',
})
export class Back {
  private readonly location = inject(Location);
  private readonly router = inject(Router);

  protected goBack(): void {
    if (history.state?.navigationId > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/']);
    }
  }
}

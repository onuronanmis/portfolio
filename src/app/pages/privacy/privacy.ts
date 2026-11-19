import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [RouterLink, TranslatePipe],
  selector: 'app-privacy',
  styleUrl: './privacy.scss',
  templateUrl: './privacy.html',
})
export class Privacy {
  protected readonly sectionKeys = [
    'responsible',
    'general',
    'hosting',
    'contactForm',
    'localStorage',
    'fonts',
    'externalLinks',
    'encryption',
    'rights',
    'status',
  ];
}

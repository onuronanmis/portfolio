import { Component } from '@angular/core';
import { Back } from '../../shared/components/back/back';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [Back, TranslatePipe],
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

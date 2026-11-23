import { Component } from '@angular/core';
import { Back } from '../../shared/components/back/back';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [Back, TranslatePipe],
  selector: 'app-imprint',
  styleUrl: './imprint.scss',
  templateUrl: './imprint.html',
})
export class Imprint {
  protected readonly sectionKeys = ['provider', 'contact', 'responsible', 'links'];
}

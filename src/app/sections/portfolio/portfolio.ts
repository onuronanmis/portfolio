import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { PROJECT_ITEMS } from '../../data/projects';

@Component({
  imports: [TranslatePipe],
  selector: 'app-portfolio',
  styleUrl: './portfolio.scss',
  templateUrl: './portfolio.html',
})
export class Portfolio {
  protected readonly projectItems = PROJECT_ITEMS;
}

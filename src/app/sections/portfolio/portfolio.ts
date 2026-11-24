import { Component, signal } from '@angular/core';
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
  protected activeProject = signal<number | null>(null);

  protected toggleProject(projectIndex: number) {
    this.activeProject.update(currentIndex => currentIndex === projectIndex ? null : projectIndex);
  }
}

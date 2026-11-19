import { Component, computed, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { REFERENCE_ITEMS } from '../../data/references';

@Component({
  imports: [TranslatePipe],
  selector: 'app-references',
  styleUrl: './references.scss',
  templateUrl: './references.html',
})
export class References {
  protected readonly referenceItems = REFERENCE_ITEMS;
  protected activeIndex = signal(0);
  protected activeReference = computed(() => this.referenceItems[this.activeIndex()]);

  protected showPrevious() {
    this.activeIndex.update(currentIndex => (currentIndex - 1 + this.referenceItems.length) % this.referenceItems.length);
  }

  protected showNext() {
    this.activeIndex.update(currentIndex => (currentIndex + 1) % this.referenceItems.length);
  }

  protected showReference(referenceIndex: number) {
    this.activeIndex.set(referenceIndex);
  }
}

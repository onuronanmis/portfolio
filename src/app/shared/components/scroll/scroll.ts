import { Component, HostListener, inject, signal } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-scroll',
  styleUrl: './scroll.scss',
  templateUrl: './scroll.html',
})
export class Scroll {
  private viewportScroller = inject(ViewportScroller);
  private readonly sectionIds = ['about-section', 'skills-section', 'portfolio-section', 'references-section', 'contact-section'];
  protected isVisible = signal(true);

  @HostListener('window:scroll')
  updateVisibility() {
    const contactSection = document.getElementById('contact-section');
    const contactTop = contactSection?.getBoundingClientRect().top ?? Infinity;
    this.isVisible.set(contactTop > window.innerHeight);
  }

  protected scrollToNext() {
    const headerHeight = document.querySelector('app-header')?.clientHeight ?? 0;
    const nextId = this.sectionIds.find((sectionId) => {
      const section = document.getElementById(sectionId);
      return section && section.getBoundingClientRect().top > headerHeight + 1;
    });
    if (nextId) {
      this.viewportScroller.scrollToAnchor(nextId);
    }
  }
}

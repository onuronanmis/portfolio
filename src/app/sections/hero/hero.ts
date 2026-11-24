import { afterNextRender, Component, DestroyRef, ElementRef, inject, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Socials } from '../../shared/components/socials/socials';

@Component({
  imports: [RouterLink, TranslatePipe, Socials],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {
  private heroName = viewChild.required<ElementRef<HTMLElement>>('heroName');
  private heroJob = viewChild.required<ElementRef<HTMLElement>>('heroJob');
  private translateService = inject(TranslateService);
  private destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const RESIZE_OBSERVER = new ResizeObserver(() => this.fitJobWidth());
      RESIZE_OBSERVER.observe(this.heroName().nativeElement);
      const LANGUAGE_SUBSCRIPTION = this.translateService.onLangChange.subscribe(() => {
        requestAnimationFrame(() => this.fitJobWidth());
      });
      this.destroyRef.onDestroy(() => {
        RESIZE_OBSERVER.disconnect();
        LANGUAGE_SUBSCRIPTION.unsubscribe();
      });
    });
  }

  private fitJobWidth() {
    const JOB_ELEMENT = this.heroJob().nativeElement;
    JOB_ELEMENT.style.letterSpacing = '0px';
    JOB_ELEMENT.style.marginRight = '0px';
    const LETTER_COUNT = JOB_ELEMENT.textContent?.trim().length ?? 0;
    if (LETTER_COUNT < 2) {
      return;
    }
    const EXTRA_SPACE = this.heroName().nativeElement.offsetWidth - JOB_ELEMENT.offsetWidth;
    const LETTER_SPACING = EXTRA_SPACE / (LETTER_COUNT - 1);
    JOB_ELEMENT.style.letterSpacing = `${LETTER_SPACING}px`;
    JOB_ELEMENT.style.marginRight = `${-LETTER_SPACING}px`;
  }
}

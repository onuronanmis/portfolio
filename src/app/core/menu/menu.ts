import { Component, effect, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Language } from '../../shared/components/language/language';

@Component({
  imports: [RouterLink, TranslatePipe, Language],
  selector: 'app-menu',
  styleUrl: './menu.scss',
  templateUrl: './menu.html',
})
export class Menu {
  menuOpen = input(false);
  menuClosed = output<void>();

  constructor(){
    effect(() => {
      document.documentElement.style.overflow = this.menuOpen() ? 'hidden' : '';
    });
  }

  protected closeMenu(){
    this.menuClosed.emit();
  }
}

import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Language } from '../../shared/components/language/language';
import { Menu } from '../menu/menu';

@Component({
  imports: [RouterLink, TranslatePipe,Language, Menu],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  protected menuOpen = signal(false);

  protected toggleMenu() {
    this.menuOpen.update(isOpen => !isOpen);
  }

  protected closeMenu() {
    this.menuOpen.set(false);
  }
}


import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { SKILL_ITEMS } from '../../data/skills';

@Component({
  imports: [RouterLink, TranslatePipe],
  selector: 'app-skills',
  styleUrl: './skills.scss',
  templateUrl: './skills.html',
})
export class Skills {
  protected readonly skillItems = SKILL_ITEMS;
  protected readonly hoverAnimations = ['icon-knock', 'icon-wiggle'];

  protected getHoverAnimation(skillIndex: number) {
    return this.hoverAnimations[skillIndex % this.hoverAnimations.length];
  }
}

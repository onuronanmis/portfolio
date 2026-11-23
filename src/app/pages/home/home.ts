import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { About } from '../../sections/about/about';
import { Skills } from '../../sections/skills/skills';
import { Portfolio } from '../../sections/portfolio/portfolio';
import { References } from '../../sections/references/references';
import { Contact } from '../../sections/contact/contact';
import { Scroll } from '../../shared/components/scroll/scroll';

@Component({
  imports: [Hero, About, Skills, Portfolio, References, Contact, Scroll],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}

import { Component, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/header/header';
import { Footer } from './core/footer/footer';

@Component({
  imports: [RouterOutlet, Header, Footer],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  private viewportScroller = inject(ViewportScroller);

  constructor() {
    this.viewportScroller.setOffset(() => [0, this.getHeaderHeight()]);
  }

  private getHeaderHeight() {
    return document.querySelector('app-header')?.clientHeight ?? 0;
  }
}

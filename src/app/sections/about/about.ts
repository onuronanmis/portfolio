import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {
  protected readonly aboutPoints = [
    { icon: '/icons/about/Location-blue.png', key: 'aboutMe.location' },
    { icon: '/icons/about/bulb-desktop-blue.png', key: 'aboutMe.mindset' },
    { icon: '/icons/about/puzzle-desktop-blue.png', key: 'aboutMe.problemSolving' },
  ];
}

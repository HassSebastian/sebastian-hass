import { Component, HostListener } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-potfolio-el-pollo',
  templateUrl: './potfolio-el-pollo.component.html',
  styleUrls: [
    './potfolio-el-pollo.component.scss',
    '../portfolio.component.scss',
  ],
})
export class PotfolioElPolloComponent {
  slide: boolean = false;
  // @HostListener('window:resize', ['$event'])

  
  /**
   * Handles the "Window Resize" event and adjusts the behavior accordingly.
   * @param {Event} event - The Resize event object.
   *
   */
  // onWindowResize(event: Event) {
  //   const screenWidth = window.innerWidth;
  //   if (screenWidth < 880) {
  //     this.slide = true;
  //   } else {
  //     this.slide = false;
  //   }
  // }

  constructor(public service: ServiceService) {}


  /**
   * Activates the display of the description.
   *
   */
  showDescription() {
    this.slide = true;
  }

  
  /**
   * Disables the display of the description.
   *
   */
  hideDescription() {
    window.innerWidth < 880 ? (this.slide = true) : (this.slide = false);
  }
}

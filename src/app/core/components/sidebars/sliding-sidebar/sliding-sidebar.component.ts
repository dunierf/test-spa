import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

// Animation
import { ShowHideAnimation } from "./mobile-tablet-sidebar.animation";

@Component({
  selector: 'app-sliding-sidebar',
  templateUrl: './sliding-sidebar.component.html',
  styleUrl: './sliding-sidebar.component.css',
  animations: [ShowHideAnimation]
})
export class SlidingSidebarComponent implements OnChanges {

  @Input() showSideBar: boolean = false;

  @Input() show: boolean = false;

  @Output() showSideBarChange = new EventEmitter<boolean>();

  showHide: string = 'initial';

  sideBarAnimationDone() {
    if (this.showHide == 'hidden') {
      this.showSideBarChange.emit(false);
      this.show = false;
    }
  }

  showWithAnimation() {
    this.showHide = 'show';
  }

  hideWithAnimation() {
    this.showHide = 'hidden';
  }

  ngOnChanges(changes: SimpleChanges): void {
    const showSideBar = changes['showSideBar'].currentValue;

    if (showSideBar != this.show) {
      if (showSideBar && (this.showHide != 'show')) {
        this.show = true;
        setTimeout( () => { this.showWithAnimation(); }, 160);
      }
    }
  }
}

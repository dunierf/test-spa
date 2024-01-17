import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sliding-sidebar',
  templateUrl: './sliding-sidebar.component.html',
  styleUrl: './sliding-sidebar.component.css',
  animations: [
    trigger('showHide', [
      state('show', style({
        transform: 'translateX(0)'
      })),
      state('hidden', style({
        transform: 'translateX(-100%)'
      })),
      state('initial', style({
        transform: 'translateX(-100%)'
      })),
      transition('show => hidden', [
        animate('0.4s ease-in')
      ]),
      transition('hide => show', [
        animate('0.4s ease-out')
      ]),
      transition('initial => show', [
        animate('0.4s ease-out')
      ])
    ])
  ]
})
export class SlidingSidebarComponent implements OnInit {

  @Input() showSideBar: boolean = false;

  @Output() showSideBarChange = new EventEmitter<boolean>();

  showHide: string = 'initial';

  hideSidebar() {
    this.showHide = 'hidden';
  }

  sideBarAnimationDone() {
    if (this.showHide == 'hidden')
      setTimeout( () => { this.showSideBarChange.emit(false); }, 10);
  }

  ngOnInit(): void {
    setTimeout( () => { this.showHide = 'show'; }, 20);
  }
}

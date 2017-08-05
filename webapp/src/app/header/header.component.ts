import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0%, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
})
export class HeaderComponent implements OnInit {
  
  menuState:string = 'out';
  disable:any = 'out';
  
  constructor(private location: Location) { }

  ngOnInit() {
  }
  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
  CloseNav(){
    this.menuState = 'out';

    console.log('teste');
  }
  previousBtn(){
    this.location.back(); // <-- go back to previous location on cancel
  }

}

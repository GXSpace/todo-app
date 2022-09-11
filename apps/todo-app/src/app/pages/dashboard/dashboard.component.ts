import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  sequence,
  group,
  query,
} from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('menuOverlay', [
      transition(':enter', [
        style({
          opacity: 0,
          display: 'flex',
        }),
        group([
          animate(
            '0.3s',
            style({
              opacity: 1,
            })
          ),
          query('.offcanvas_menu', [
            style({ transform: 'translateX(100%)' }),
            animate(
              '0.3s ease-in-out',
              style({
                transform: 'translateX(0px)',
              })
            ),
          ]),
        ]),
      ]),
      transition(':leave', [
        sequence([
          group([
            animate(
              '0.3s',
              style({
                opacity: 0,
              })
            ),
            query('.offcanvas_menu', [
              style({ transform: 'translateX(0px)' }),
              animate(
                '0.5s ease-in-out',
                style({
                  transform: 'translateX(100%)',
                })
              ),
            ]),
          ]),
          style({
            display: 'none',
          }),
        ]),
      ]),
    ]),
  ],
})
export class DashboardComponent implements OnInit {
  menuOpen = false;

  constructor() {}

  ngOnInit() {}

  toggleMenu() {
    console.log('Ola');
    this.menuOpen = !this.menuOpen;
  }
}

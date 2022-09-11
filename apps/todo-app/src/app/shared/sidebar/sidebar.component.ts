import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  sequence,
  group,
  query,
} from '@angular/animations';
import { SidebarService } from './sidebar.service';
import { DomSanitizer } from '@angular/platform-browser';

interface Feature {
  name: string;
  svg_path: string;
  path: string;
}

@Component({
  selector: 'todo-app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
            style({ transform: 'translateX(-100%)' }),
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
                  transform: 'translateX(-100%)',
                })
              ),
            ]),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class SidebarComponent {
  @ViewChild('sidebar') sidebar!: ElementRef;

  features: Feature[] = [
    {
      name: 'Dashboard',
      svg_path:
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>',
      path: '/dashboard',
    },
    {
      name: 'Todos',
      svg_path:
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />',
      path: '/todos',
    },
    {
      name: 'Teams',
      svg_path:
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>',
      path: '/teams',
    },
  ];

  constructor(
    public sidebarService: SidebarService,
    readonly sanitizer: DomSanitizer
  ) {}

  onAnimationEnd() {
    if (this.sidebarService.$collapsed.getValue()) {
      this.sidebar.nativeElement.display = 'none';
    }
  }
}

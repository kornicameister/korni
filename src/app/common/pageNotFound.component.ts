import { Component } from '@angular/core';

@Component({
  templateUrl: './pageNotFound.component.html',
  styleUrls: [
    './pageNotFound.component.scss'
  ]
})
export class PageNotFoundComponent {
  readonly title:string = 'Page not found';
  readonly details:string = 'Requested page has not been located';
}

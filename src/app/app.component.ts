import { Component } from '@angular/core';
import { BioComponent } from "./bio/bio.component";

@Component({
  selector: 'km-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ]
})
export class AppComponent {
  readonly title: string = "kornicameister.github.io"
  readonly accounts: Account[] = [
    new Account(
      'StackOverflow',
      new URL('https://stackoverflow.com/users/1396508/kornicameister'),
      'account_box'
    )
  ]
}

class Account {
  constructor(public label:string, public href:URL, public icon:string){}
}

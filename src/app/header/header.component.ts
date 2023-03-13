import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private location: Location) { }

  shouldDisplaySignOut() {
    const url = this.location.path();
    return url !== '' && !url.startsWith('/login');
  }


}

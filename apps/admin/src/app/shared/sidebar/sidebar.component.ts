import { Component } from '@angular/core';
import { AuthService } from '@bluebitscourse/users';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private authService: AuthService) { }


  logOut(){
    this.authService.logout();

  }

}

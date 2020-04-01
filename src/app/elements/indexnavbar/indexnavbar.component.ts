import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from 'src/app/components/sidebar/sidebar.component';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-indexnavbar',
  templateUrl: './indexnavbar.component.html',
  styleUrls: ['./indexnavbar.component.scss']
})
export class IndexnavbarComponent implements OnInit {
  private listTitles: any[];
  location: Location;
  private toggleButton: any;
  private sidebarVisible: boolean;
  currentUser: User;
  admin: boolean;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.admin = false;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit(){
    this.authicationUser();
  }

  authicationUser(){
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    if(this.currentUser.user === 'admin'){
      this.admin = true;
    }
  }

}

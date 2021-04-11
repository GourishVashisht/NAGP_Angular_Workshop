import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedInUser: string = "";

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.isLoggedInUser = JSON.stringify(localStorage.getItem('isLoggedIn'));
  }

  logoutUser() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigateByUrl('/login');
  }

}

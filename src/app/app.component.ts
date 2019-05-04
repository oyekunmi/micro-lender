import { Component, OnInit } from '@angular/core';
import { UserService } from './core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor (
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.populate();

    // listen for auth changes
    this.userService.isAuthenticated.subscribe( x => {
      // x === false ? this.router.navigateByUrl('/') : console.log() ;
    });
  }


}


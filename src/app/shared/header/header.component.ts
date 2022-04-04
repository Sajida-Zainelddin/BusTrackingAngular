import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  isLoggedIn :any;

  ngOnInit(): void {
    this.isLoggedIn = localStorage.getItem('token') != null; 
  }

  logout(){
    localStorage.clear()
  }
}

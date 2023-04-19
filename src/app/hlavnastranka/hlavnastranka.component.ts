import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { IUser } from '../services/user.service';
@Component({
  selector: 'app-hlavnastranka',
  templateUrl: './hlavnastranka.component.html',
  styleUrls: ['./hlavnastranka.component.css']
})
export class HlavnastrankaComponent implements OnInit {
  loggedInUser = this.userservice.loggedInUser;
  loginTime ! : string;
  clickCounter = 0;
  incrementCounter() {
    this.clickCounter++;
  }
  
  constructor(private userservice: UserService) {}

  ngOnInit(): void {

    this.loginTime = localStorage.getItem('loginTime') || '';
    document.addEventListener('click', this.incrementCounter.bind(this));
  }
  
}
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}') as IUser;

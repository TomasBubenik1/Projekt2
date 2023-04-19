import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { IUser } from '../services/user.service';
import { Router } from '@angular/router';
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
  
  constructor(private userservice: UserService, private router:Router) {}

  ngOnInit(): void {

    this.loginTime = localStorage.getItem('loginTime') || '';
    document.addEventListener('click', this.incrementCounter.bind(this));
  }
  
  logOut(){this.router.navigate(['/login']);
  const loginTime = new Date();
  localStorage.removeItem('loginTime');
}

}
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}') as IUser;

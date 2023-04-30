import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hlavnastranka',
  templateUrl: './hlavnastranka.component.html',
  styleUrls: ['./hlavnastranka.component.css']
})
export class HlavnastrankaComponent implements OnInit {
  users: User[] = [];
  loggedInUser = this.userservice.loggedInUser;
  loginTime!: string;
  clickCounter = 0;
  selectedUser: User | undefined;
  

  incrementCounter() {
    this.clickCounter++;
  }
   
  constructor(private userservice: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userservice.users.subscribe((user) => {
      this.users.push(user);
    });
    this.loginTime = localStorage.getItem('loginTime') || '';
    document.addEventListener('click', this.incrementCounter.bind(this));
  }
  
  logOut() {
    this.router.navigate(['/login']);
    const loginTime = new Date();
    localStorage.removeItem('loginTime');
  }

  viewDetails(user: User) {
    this.selectedUser = user;
    this.selectedUser.showDetails = true;
  }

}

const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}') as User;

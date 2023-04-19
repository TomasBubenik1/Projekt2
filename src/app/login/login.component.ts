import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUsata, UserService } from 'src/app/services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  firstName: string = '';
  lastName: string = '';

  constructor(private router: Router, private userservice: UserService) { }

  LoginUser() {
    // Check if firstName and lastName match the corresponding properties in data
    this.userservice.data.subscribe((data: IUsata) => {
      const foundUser = data.users.find(user => user.firstName === this.firstName && user.lastName === this.lastName);
      if (foundUser) {
        // Navigate to homepage if user is found
        this.router.navigate(['/hlavnastranka']);
        
      } else {
        // Display error message if user is not found
        console.log('User not found!');
      }
    });
  }

  fetchData(): void {
    const url = 'https://dummyjson.com/users';
    const observable = new Observable(observer => {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(error => observer.error(error));
    });

    observable.pipe(
      map((data: any) => {
        return data;
      })
    ).subscribe();
  }

  ngOnInit() {
    this.fetchData();
    this.userservice.data.subscribe((data: IUsata) => console.log(data))
  }
}
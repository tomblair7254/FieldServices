import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Field Services';
  inventories: any;
  constructor(private http : HttpClient, private accountservice: AccountService) {}

  ngOnInit(): void {
    // this.getUrsers();
    this.setCurrentUser(); 
  }

  // getUrsers() {
  //   this.http.get('https://localhost:5001/FieldService/inventory').subscribe({
  //     next: respose => this.inventories = respose,
  //     error: error => console.log(error),
  //     complete: () => console.log('Request has completed')
  //   })
  // }

  setCurrentUser() {
  const userString = localStorage.getItem('user');
  if(!userString) return;
  const user: User = JSON.parse(userString);
  this.accountservice.setCurrentUser(user);
}
  
}
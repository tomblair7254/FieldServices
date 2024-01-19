import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  registerMode = false;
  users: any;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getUrsers();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  getUrsers() {
    this.http.get('https://localhost:5001/FieldService/users').subscribe({
      next: respose => this.users = respose,
      error: error => console.log(error),
      complete: () => console.log('Request has completed')
    })
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

}


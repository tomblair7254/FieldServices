import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, identity, of } from 'rxjs';
import { User } from '../_models/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent  implements OnInit{
  @Output() cancelRegister = new EventEmitter ()
  model: any = {}


  constructor(public accountService: AccountService, private router: Router,
    private toastr: ToastrService){
   
  }
    baseUrl = 'https://localhost:5001/api/';
    ngOnInit(): void {

    }

    login() {         
      this.accountService.login(this.model).subscribe({
        next: response => {
          // if(!this.model.HasLogin)
          // {this.model.HasLogin = true}
          // console.log(this.model.HasLogin);        
          this.cancel();  
        },
        error: error => this.toastr.error(error.error)     
      })
      
      
    }

    logout() {
      this.accountService.logout();
      this.router.navigateByUrl('/');
    }

    cancel() {
      this.cancelRegister.emit(false);
    }

}
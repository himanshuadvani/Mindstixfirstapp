import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
users=[];

  constructor(private _serv:UserService,private _form:FormBuilder) {
    this._serv.getUsers().subscribe(data=>this.users=data)
   }

  ngOnInit() {
  }

  loginForm=this._form.group({
    username:[],
    password:[]

    }
  )

  checkUser()
  {
    var i=0;
    for(i=0;i<this.users.length;i++)
    {
      if(this.loginForm.value.username==this.users[i].username)
      {
        if(this.loginForm.value.password==this.users[i].password)
        {
          alert("Welcome, "+this.users[i].name);
          break;
        }
        
      }
    }
    if(i==this.users.length)
    {
      alert("Invalid username/password...");
    }

    this.loginForm.reset();
    
  }

}

import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserRequest} from "../model/user-request.model";
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private readonly service: AuthService,
    private readonly router: Router
  ) {
  }

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  onLogin(data: UserRequest) {
    console.log('LOGIN REQUEST: ', data)
    this.service.login(data).subscribe({
      next: (res) => {
        console.log('RESPONSE: ', res)
        let token = res.data.token
        if (token) {
          sessionStorage.setItem("token", token)
          this.router.navigateByUrl('/pages/list')
        }
      },
      error: (err) => {
        console.log('ERROR: ', err)

        Swal.fire('Invalid Username or Password!')
      }
    })
  }
}

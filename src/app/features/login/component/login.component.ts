import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from 'src/app/core/models/login/login.models';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginFormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initLoginForm();
  }

  public getControl(key: string) {
    return (this.loginFormGroup.get(key) as FormControl);
  }

  public login() {
    if(this.loginFormGroup.valid) {
      const loginReq: LoginModel = this.loginFormGroup.getRawValue();
      console.log('LOGIN REQUEST', loginReq);
      this.authService.login(loginReq).subscribe(
        res => {
          console.log('RES', res);
        }
      )
    }
  }

  public getAccountArrayControl() {
    return this.loginFormGroup.get('accounts') as FormArray;
  }

  private initControl(value: any = null) {
    const formState = {
      value: value,
      disabled: false
    };

    const validators = [Validators.required];

    const control: FormControl = this.formBuilder.control(formState, validators);
    return control;
  }

  private initLoginForm() {
    this.loginFormGroup = this.formBuilder.group(
     {
        username: this.initControl(), 
        password: this.initControl(),
        accounts: this.formBuilder.array([
          this.formBuilder.group({ 
            accountId: this.initControl(39994994),
            username: this.initControl('pippo')
          }),
          this.formBuilder.group(
            { 
              accountId: this.initControl(84848488484),
              username: this.initControl('pluto')
            }
          )
        ])

     }
    )
  }

  //

}

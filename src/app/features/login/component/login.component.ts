import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from 'src/app/core/auth/models/login/login.models';
import { AuthService } from 'src/app/core/auth/service/auth.service';
@Component({
  selector: 'm2b-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginFormGroup = new FormGroup({});
  public accountIdError;

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

  public checkFormError(path: string, errorCode: string) {
    return this.loginFormGroup.get(path).invalid && 
           this.loginFormGroup.get(path).errors &&
           (this.loginFormGroup.get(path).dirty || this.loginFormGroup.get(path).touched) &&
           this.loginFormGroup.get(path).hasError(errorCode);
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

  private subscribeToFormStatusChanges() {
    this.loginFormGroup
      .statusChanges
      .subscribe({ 
        next: (res)=> console.log(res),
        error: (error) => console.error(error),
        complete: () => console.log('COMPLETE')
      })
  }

  private initLoginForm() {
    this.loginFormGroup = this.formBuilder.group(
     {
        username: this.initControl(), 
        password: this.initControl(),
        obj: this.formBuilder.group({
          key1: this.formBuilder.control(''),
          key2: this.formBuilder.control('')
        }),
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
    this.subscribeToFormStatusChanges();
  
  }

  //

}

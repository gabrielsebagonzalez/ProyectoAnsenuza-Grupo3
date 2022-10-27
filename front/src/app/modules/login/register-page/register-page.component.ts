import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {
  MAX_USERNAME_LENGTH,
  MIN_USERNAME_LENGTH,
  PASSWORD_PATTERN,
} from 'src/app/core/interfaces/users/users.interface';
import { ToastService } from 'src/app/core/services/toast/toast.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  public registerForm = this.formBuilder.group({});

  constructor(private formBuilder: UntypedFormBuilder,
    public userService:UserService,
    public toastService:ToastService,
    public router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: new UntypedFormControl(
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(MIN_USERNAME_LENGTH),
          Validators.maxLength(MAX_USERNAME_LENGTH),
        ])
      ),
      password: new UntypedFormControl(
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(PASSWORD_PATTERN),
        ])
      ),
    });
  }

  register() {
    if (this.registerForm.valid) {
      this.userService.register(this.registerForm.getRawValue())
    .subscribe(
      (res: any) => {
        this.toastService.presentToast("Creado correctamente");
        this.router.navigateByUrl('auth');
      },
      (err) => {
        console.log(err)
        this.toastService.presentToast("Ocurrio un error");
      }
    )
      // TOOD llamar a la API y en caso de haber un error capturarlo y mostrarselo al usuario con un toastr como en el login
    }
  }
}

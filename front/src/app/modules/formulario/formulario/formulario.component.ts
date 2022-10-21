import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlojamientoService } from 'src/app/core/services/alojamiento/alojamiento.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  form: FormGroup;

  constructor(
    public alojamientoService: AlojamientoService,
    private formBuilder: FormBuilder,
    private router: Router

  ) {

    this.form = formBuilder.group({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      web: new FormControl(''),
      typeAlojamientoId: new FormControl('', Validators.required),
      imageURL: new FormControl(''),
      description: new FormControl('', Validators.required)
    })
  }


  get emailControl(): FormControl {
    return this.form.get('email') as FormControl
  }

  ngOnInit(): void {
  }

  log():void {
    console.log(this.form.getRawValue())
  }

  onSave():void {
    if(this.form.invalid) {
      return;
    }
    this.alojamientoService.saveAlojamiento(this.form.getRawValue()).subscribe({
      next:(value) => {
        this.router.navigate(['alojamientos'])
      },
      error: err => {
        alert("Ha ocurrido un error")
      }
    })
  }


}

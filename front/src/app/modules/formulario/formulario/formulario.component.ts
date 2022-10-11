import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  form: FormGroup;

  constructor(

    private formBuilder: FormBuilder,

  ) {

    this.form = formBuilder.group({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      web: new FormControl(''),
      type: new FormControl('', Validators.required),
      image: new FormControl(''),
      description: new FormControl('', Validators.required)
    })

  }

  ngOnInit(): void {
  }

  log():void {
    console.log(this.form.getRawValue())
  }

}

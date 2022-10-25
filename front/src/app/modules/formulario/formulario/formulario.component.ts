import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlojamientoService} from 'src/app/core/services/alojamiento/alojamiento.service';
import { ToastService } from 'src/app/core/services/toast/toast.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  form: FormGroup;
  typesAlojamiento:any;
  fileToUpload: File | null = null;
  constructor(
    public alojamientoService: AlojamientoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastService:ToastService,

  ) {
    this.typesAlojamiento = [
      {id:1,name:"Hotel"},
      {id:2,name:"Apartamento"},
      {id:3,name:"Casa"},
      {id:4,name:"Cabaña"},
      {id:5,name:"Hostal"},
      {id:6,name:"Camping"},
    ];

    this.form = formBuilder.group({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      web: new FormControl(''),
      typeAlojamientoId: new FormControl(1, Validators.required),
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

  processFile(files: any[]) {
}

  onSave():void {
    if(this.form.invalid) {
      return;
    }
    this.alojamientoService.saveAlojamiento(this.form.getRawValue())
    .subscribe(
      (res: any) => {
        this.toastService.presentToast("Creado correctamente");
        this.router.navigateByUrl('alojamientos');
      },
      (err) => {
        console.log(err)
        this.toastService.presentToast("Ocurrio un error");
      }
    )
  }
}

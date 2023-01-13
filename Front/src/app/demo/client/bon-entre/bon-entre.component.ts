import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { AuthService } from 'src/app/services/auth.service';
import { BonEntreeService } from 'src/app/services/bon-entree.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FormGroup,  FormControl , FormArray , FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-bon-entre',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule, ReactiveFormsModule],
  templateUrl: './bon-entre.component.html',
  styleUrls: ['./bon-entre.component.scss']
})
export default class BonEntreComponent {
  imageSrc: String = '../../../../assets/images/add-icon.svg';

  form = new FormGroup({
    id_user: new FormControl(sessionStorage.getItem('id')),
    image: new FormControl(null, [Validators.required]),
    marque:  new FormControl(null, [ Validators.required]),
    type:  new FormControl(null, [ Validators.required]),
    moteur: new FormControl(null, [ Validators.required]),
    immatricule : new FormControl(null, [Validators.required])
  });

  constructor(private authService: AuthService, private bonService: BonEntreeService){
    this.authService.isClient();
  }

  get image(){return this.form.get('image')}
  get marque(){return this.form.get('marque'); }
  get type(){return this.form.get('type'); }
  get moteur(){return this.form.get('moteur'); }
  get immatricule(){return this.form.get('immatricule'); }

onChange(event){
  const reader = new FileReader();

  const [file] = event.target.files;
  reader.readAsDataURL(file);
  reader.onload = () => {

    this.imageSrc = reader.result as string;

    this.form.patchValue({
      image: reader.result
    });
  };
}

onSubmit(){
  const onSuccess = (response: any) => {
    if (response.status === 200){

    }else{
      this.form.reset();
    }
  };
  const onError = (response: any) => {
    this.form.reset();
  };
  const data = {
    image: this.form.value.image,
    marque: this.form.value.marque,
    type: this.form.value.type,
    moteur: this.form.value.moteur,
    immatricule: this.form.value.immatricule,
    User: sessionStorage.getItem('id')
  };
  this.bonService.create(data).subscribe(onSuccess,onError);
}
}

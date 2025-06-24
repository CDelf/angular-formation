import {Component} from '@angular/core';
import {ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-form-builder',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form-builder.html',
  styleUrl: './contact-form-builder.css'
})
export class ContactFormBuilder {
  formulaire: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulaire = this.fb.group(
      {
        nom: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        message: ['', [Validators.required, Validators.minLength(10)]],
        langue: ['', Validators.required]
      });
  }

  onSubmit() {
    if (this.formulaire.valid) {
      alert(`Formulaire envoyé :
      - ${this.formulaire.value.nom}
      - ${this.formulaire.value.email}
      - ${this.formulaire.value.message}
      - ${this.formulaire.value.langue}`);
    } else {
      alert('Formulaire invalide');
    }
  }
}

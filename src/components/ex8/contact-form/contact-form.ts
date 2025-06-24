import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [
    FormsModule
  ],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css'
})
export class ContactForm {

  nom: string ='';
  email : string ='';
  message : string='';
  langue: string = '';

  onSubmit() {
      alert(`Formulaire soumis! Voici les données:
      nom : ${this.nom}, email: ${this.email}, message: ${this.message}, langue: ${this.langue}`);
  }
}

import { Component } from '@angular/core';
import {ContactForm} from '../components/ex8/contact-form/contact-form';
import {ContactFormBuilder} from '../components/ex8/contact-form-builder/contact-form-builder';



@Component({
  selector: 'app-root',
  imports: [
    ContactForm,
    ContactFormBuilder
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


}

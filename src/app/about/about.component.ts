import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  profileForm: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: ['', [
        Validators.required,
        Validators.email]],
    });
  }

  onSubmit(profileForm: FormGroup) {
    console.log('Valid?', profileForm.valid);
    console.warn(this.profileForm.value);
}

}

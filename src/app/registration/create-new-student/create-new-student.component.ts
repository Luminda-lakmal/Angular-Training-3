import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-new-student',
  templateUrl: './create-new-student.component.html',
  styleUrls: ['./create-new-student.component.scss']
})
export class CreateNewStudentComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });

  }
  submit() {
    console.log(this.userForm.value);
    this.router.navigate(['reg/show-all-students']);
  }

}

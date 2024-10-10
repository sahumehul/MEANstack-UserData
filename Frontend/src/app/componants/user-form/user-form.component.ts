import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { UserService } from '../../services/user.service';
import User from '../../types/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userform: FormGroup; // Declare userform without initializing it immediately

  constructor(private formBuilder: FormBuilder, private userService: UserService,private router : Router,private route : ActivatedRoute) {
    // Initialize userform inside the constructor
    this.userform = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      age: ['', [Validators.required]],
      address: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  editUserId:string;
  ngOnInit(){
      this.editUserId = this.route.snapshot.params['id']
      if(this.editUserId){
        this.userService.getUser(this.editUserId).subscribe((result)=>{
          this.userform.patchValue(result.data)
          console.log(result.data);
          
        })
      }
      
  }
  addUser(){
    if(this.userform.invalid){
      alert("please provide all the details")
      return;
    }
    
    const model :User = this.userform.value;
    this.userService.addusers(model).subscribe((result)=>{
      alert("User added successfully")
      this.router.navigateByUrl("/")
    })
  }

  updateUser(){
    if(this.userform.invalid){
      alert("provide all the details")
      return
    }
    const model = this.userform.value;
    this.userService.updateUser(this.editUserId,model).subscribe((result)=>{
      alert("User updated  successfully")
      this.router.navigateByUrl("/")
    })
  }
}

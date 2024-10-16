import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import User from '../../types/user'
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatButtonModule,RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  users: User[] = []
  constructor(private userService :UserService){}

  ngOnInit() {
      this.userService.getusers().subscribe((result)=>{
        this.users = result.data;
        console.log(this.users);
        
      })
  }

  deleteuser(id:string){
    this.userService.deleteUser(id).subscribe((result) => {
      console.log(result);  // Check if the result shows a successful deletion response
      alert("User deleted successfully");
    
      this.users = this.users.filter((u) => u._id !== id);  // Note the !== operator
    });
  }
}

import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [MatInputModule,MatButtonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {

}

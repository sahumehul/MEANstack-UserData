import { Routes } from '@angular/router';
import { UsersComponent } from './componants/users/users.component';
import { UserFormComponent } from './componants/user-form/user-form.component';

export const routes: Routes = [
    {path: "users", component: UsersComponent},
    {path: "", component: UsersComponent},
    {path: "users/add", component: UserFormComponent}
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditListComponent } from './edit-list/edit-list.component';
import { LoginComponent } from './login/login.component';
import { NewListComponent } from './new-list/new-list.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { RegisterComponent } from './register/register.component';
import { TaskViewComponent } from './task-view/task-view.component';

const routes: Routes = [

  //login - http:localhost:4200/
  {
    path:'',component:LoginComponent
  },

  //register http://localhost:4200/register
  {
    path:'register',component:RegisterComponent
  },

  //http://localhost:4200/:userlists
  {

    path:':userId/lists',component:TaskViewComponent
  }
  ,
  {
    path:':userId/lists/new-list',component:NewListComponent ,pathMatch: 'full', 
  }
  ,{
    path:':userId/lists/:listId' , component:TaskViewComponent
  }
  ,
 
  {
    path: ':userId/lists/:listId/new-task', component: NewTaskComponent 
  }
  ,
  {
    path:':userId/lists/:listId/edit-list' , component:EditListComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

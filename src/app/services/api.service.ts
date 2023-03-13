import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  // register 
  register(name:any,email:any,pswd:any){
    const body={
      name,
      email,
      pswd
    }


    return this.http.post('http://localhost:3000/register',body)

  }

  //1. login
  login(email:any,pswd:any){
    const body ={
      email,
      pswd
    }
    // server call to login an account and return response to login 
    return this.http.post('http://localhost:3000/login',body)
  }

  // 2. create a list

  createList(title: string, userId: string){
    const body = {
      title,
       userId // use _userId instead of user_id
    }
    
    return this.http.post('http://localhost:3000/createlist', body)
  }

  // 3. view list 
  viewList(userId:string){
    
    return this.http.get(`http://localhost:3000/lists/${userId}`).pipe(
      map(response => response['lists'])
    );
    
  }

  //4. create task 

  createTask(title:string, listId:string){
    const body={
      title,
      listId
    }
    return this.http.post('http://localhost:3000/createtask', body)
  }

  viewTask(listId:string){
    
    return this.http.get(`http://localhost:3000/lists/${listId}/tasks`).pipe(
      map(response => response['tasks'])
    );
    
  }

  // complete(task:any){
  //   return this.http.patch(`http://localhost:3000/lists/${task._listId}/tasks/${task._id}`,{
  //     completed: !task.completed
  //   })

  // }

  deleteList(listId:string){
    

    return this.http.delete(`http://localhost:3000/deletelist/${listId}`)
    .pipe(
        tap(() => {
          console.log('List deleted successfully');
          // Display a success message to the user
        }),
        catchError((error) => {
          console.log('Error deleting list:', error);
          // Display an error message to the user
          return throwError(error);
        })
      );
    

  }

  updateList(listId:string,title:string){

    const body ={
      listId,
      title
    }
    return this.http.post('http://localhost:3000/editlist',body)
    

  }


}
``
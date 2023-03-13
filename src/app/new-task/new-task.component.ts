import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit { 



  listId:string;
  taskId:string;


  constructor(private route:ActivatedRoute,private api:ApiService, private router:Router){

  }

  ngOnInit(): void {
    this.listId = this.route.snapshot.paramMap.get('listId');
    console.log(this.listId); // or do anything else with the userId
      
  }




  createTask(title:string){
   
    this.api.createTask(title, this.listId).subscribe((task: any) => {
      console.log(task);
      console.log(task._id);
      this.taskId=task._id;
      console.log(this.taskId)
       this.router.navigate([`../`], { relativeTo: this.route });
    });
  }
  
 
  

}

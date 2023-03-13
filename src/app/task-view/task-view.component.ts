import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {

  constructor(private api:ApiService,private route:ActivatedRoute,private router:Router){

  }

  listId:string;
  userId:string;
  lists: any[] = [];
  tasks:any[] =[];

  selectedListId:string;

  ngOnInit(): void {

    
   //userId 
  this.userId = this.route.snapshot.paramMap.get('userId');
  console.log(this.userId); // or do anything else with the userId


  //listId
  this.listId = this.route.snapshot.paramMap.get('listId');
  console.log(this.listId); 

// view task
  if(this.listId){
    this.api.viewTask(this.listId).subscribe((tasks: any[]) => {
      this.tasks = tasks;
      console.log(this.tasks);
    })

  }
  else{
    this.tasks =undefined;
  }

  // this.api.viewTask(this.listId).subscribe((tasks: any[]) => {
  //   this.tasks = tasks;
  //   console.log(this.tasks);
  // })


  
  // view lists 
  this.api.viewList(this.userId).subscribe((lists: any[]) => {
    this.lists = lists;
    console.log(this.lists); // log the type and contents of the lists variable
 
  
    
  })
      
  }

  deleteListClick(){

    this.api.deleteList(this.listId).subscribe((result:any)=>{

      this.router.navigate(['/', this.route.snapshot.paramMap.get('userId'), 'lists']);
      // setTimeout(() => {
      //   this.router.navigateByUrl('../')
      // }, 1000);
    })
  }
  


  

}

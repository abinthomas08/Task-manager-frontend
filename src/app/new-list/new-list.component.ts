import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import {NgModel} from '@angular/forms'

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent  implements OnInit{


  constructor(private route:ActivatedRoute  ,private api:ApiService, private router:Router){

  }


  userId:string;
  listId:string;
 
  

  ngOnInit(): void {
   
    this.userId = this.route.snapshot.paramMap.get('userId');
  console.log(this.userId); // or do anything else with the userId
 
    

      
  }





  createNewList(title:string){
   
    this.api.createList(title, this.userId).subscribe((list: any) => {
      console.log(list);
      console.log(list._id);
      this.listId=list._id;
      console.log(this.listId)
       this.router.navigate([`../`], { relativeTo: this.route });
    });
  }
  














  // createNewList(title:string){

  //   this.api.createList(title,this._userId).subscribe((list:any)=>{
  //     console.log(list);

  //     //Now we are navigateing to 
  //     this.router.navigate(['./',list._id])
  //   })




  // }
  

}

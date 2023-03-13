import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {

  constructor (private route:ActivatedRoute, private api:ApiService,private router:Router){

  }

  listId:string;
  userId:string

  ngOnInit(): void {

    this.userId= this.route.snapshot.paramMap.get('userId')
    this.listId = this.route.snapshot.paramMap.get('listId');
  console.log(this.listId); 



      
  }




  UpdateList(title:string){

    this.api.updateList(this.listId,title).subscribe(()=>{
      this.router.navigateByUrl(`/${this.userId}/lists/${this.listId}`);

    })
    
  }

}

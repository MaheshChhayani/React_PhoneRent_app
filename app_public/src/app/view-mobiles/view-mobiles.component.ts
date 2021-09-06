import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mobiles } from '../mobiles';
import { MobilesService } from '../mobiles.service';

@Component({
  selector: 'app-view-mobiles',
  templateUrl: './view-mobiles.component.html',
  styleUrls: ['./view-mobiles.component.css']
})
export class ViewMobilesComponent implements OnInit {

  mobiles : Mobiles[] = []; 

  constructor(private service:MobilesService,private router:Router){

  }

  ngOnInit(){
    this.service
      .getAllMobiles()
      .then((mobiles:Mobiles[]) => {
        this.mobiles = mobiles.map( mobile => {
          return mobile;
        });
      });      
  }

  viewDetails(mobileid:string){
    this.router.navigateByUrl("mobile/" + mobileid);
  }
}

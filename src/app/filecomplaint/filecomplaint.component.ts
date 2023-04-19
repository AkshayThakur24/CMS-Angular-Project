import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-filecomplaint',
  templateUrl: './filecomplaint.component.html',
  styleUrls: ['./filecomplaint.component.css']
})
export class FilecomplaintComponent {
  constructor(private myservice:MyserviceService){}
  name:any;
  title:any;
  description:any;
  

  
  addData() {
    
    
    this.myservice.addData(this.name,this.title,this.description);
    
    
  }





}

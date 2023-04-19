import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-deletecomplaint',
  templateUrl: './deletecomplaint.component.html',
  styleUrls: ['./deletecomplaint.component.css']
})
export class DeletecomplaintComponent {
  value:any;
  data:any[]=[]
  constructor( private Myservice:MyserviceService){}
  ngOnInit() {  
    this.data = this.Myservice.getData();
  }

  deleteval(){
    for(let d of this.data){
      if(this.value==d.no){
        this.data.splice(this.data.indexOf(d),1)
      }

    }
  }


}

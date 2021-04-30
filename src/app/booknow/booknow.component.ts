import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import {List} from '../list';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
//import {FormGroup,FormControl} from '@angular/forms';
import{Dates} from'../dates';
@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css'],
  providers:[DataService]
})
export class BooknowComponent implements OnInit {
     DataList:List;
   
    //form:FormGroup;//form groupinstance for tracking forms
     dates:Dates[]=[];//array of type dates ie used for holding the start date and end date
         
     addDate(form)
     {
      /*console.log(form.value); 
      this.dataservice. getEdate()
       .subscribe(list=>{
         this.DataList=list;
         console.log(this.DataList);
         console.log(form.value.Sdate);      
      })
       */
        
      this.dataservice. getEdate().subscribe(list=>{
        console.log(list)
        // console.log('dates in database:'+this.DataList.Edate);
        // console.log('Date u entered:'+form.Sdate)
       } )
      
     }
  constructor(private dataservice:DataService) { }

  ngOnInit() {
  /*this.form = new FormGroup({
     Sdate:new FormControl(''),
     Edate:new FormControl(''),
    
   })*/ 

  }

}

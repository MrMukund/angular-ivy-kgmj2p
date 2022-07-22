import {Component} from '@angular/core';
@Component({
  selector: 'tablecontent',
  templateUrl: './tablecontent.component.html',
  styleUrls: ['./tablecontent.component.css'],



})

export class tablecontentComponent{

  public headers=['Name', 'rollno']; 

public rows =[
{

  Name:'Mukund',
  rollno:'10',
}
,
{

  Name:'Mukund',
  rollno:'10',
},
{

  Name:'Mukund',
  rollno:'10',
},
];

}
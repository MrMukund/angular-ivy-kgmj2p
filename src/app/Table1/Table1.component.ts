import { Component } from '@angular/core';
@Component({
  selector: 'tablecontent',
  templateUrl: './Table1.component.html',
  styleUrls: ['./Table1.component.css'],
})
export class tablecontentComponent {
  public headers = ['Name', 'rollno'];

  public rows = [
    {
      Name: 'Mukund',
      rollno: '10',
    },
    {
      Name: 'Mukund',
      rollno: '10',
    },
    {
      Name: 'Mukund',
      rollno: '10',
    },
  ];
}

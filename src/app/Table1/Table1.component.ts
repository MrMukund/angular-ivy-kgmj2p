import { Component } from '@angular/core';
@Component({
  selector: 'Table1',
  templateUrl: './Table1.component.html',
  styleUrls: ['./Table1.component.css'],
})
export class Table1Component {
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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week-check-list',
  templateUrl: './week-check-list.component.html',
  styleUrls: ['./week-check-list.component.scss']
})
export class WeekCheckListComponent implements OnInit {
  checks = [
    {id: 1, label: 'Pare-brises avant et arrière'},
    {id: 2, label: 'Rétroviseurs externes et internes'},
    {id: 3, label: 'Essuie-glaces avants et arrières'},
    {id: 4, label: 'Liquide lave-glace'},
    {id: 5, label: 'Slide me!'},
    {id: 6, label: 'Slide me!'},
    {id: 7, label: 'Slide me!'},
    {id: 8, label: 'Slide me!'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

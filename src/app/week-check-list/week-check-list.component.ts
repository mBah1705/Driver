import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week-check-list',
  templateUrl: './week-check-list.component.html',
  styleUrls: ['./week-check-list.component.scss']
})
export class WeekCheckListComponent implements OnInit {
  checks = [
    {label: 'Pare-brises avant et arrière'},
    {label: 'Rétroviseurs externes et internes'},
    {label: 'Essuie-glaces avants et arrières'},
    {label: 'Liquide lave-glace'},
    {label: 'Slide me!'},
    {label: 'Slide me!'},
    {label: 'Slide me!'},
    {label: 'Slide me!'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

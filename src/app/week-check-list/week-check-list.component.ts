import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week-check-list',
  templateUrl: './week-check-list.component.html',
  styleUrls: ['./week-check-list.component.scss']
})
export class WeekCheckListComponent implements OnInit {
  visibilityChecks = [
    {label: 'Pare-brises avant et arrière'},
    {label: 'Rétroviseurs externes et internes'},
    {label: 'Essuie-glaces avants et arrières'},
    {label: 'Liquide lave-glace'},
  ];

  lightingChecks = [
    {label: 'Feux de croisement'},
    {label: 'Feux de route'},
    {label: 'Feux de position'},
    {label: 'Clignotants'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

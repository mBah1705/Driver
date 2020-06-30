import { Component, OnInit } from '@angular/core';
import {
  faCar,
  faBinoculars,
  faLeaf,
  faShower,
  faEye,
  faSmileBeam,
  faMeh,
  faFrown
} from '@fortawesome/free-solid-svg-icons';
import {TooltipPosition} from '@angular/material/tooltip';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-week-check-list',
  templateUrl: './week-check-list.component.html',
  styleUrls: ['./week-check-list.component.scss']
})
export class WeekCheckListComponent implements OnInit {
  faEye = faEye;
  faCar = faCar;
  faBinoculars = faBinoculars;
  faLeaf = faLeaf;
  faShower = faShower;

  faSmileBeam = faSmileBeam;
  faMeh = faMeh;
  faFrown = faFrown;

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  visibilityChecks = [
    {
      label: 'Pare-brises avant et arrière',
      icon: this.faCar,
      description: `Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Eum quae tenetur quis rerum expedita
      velit blanditiis corrupti similique, quas ex exercitationem
      quisquam unde dignissimos consectetur impedit dolor
      voluptatem maiores veniam!`
    },
    {
      label: 'Rétroviseurs externes et internes',
      icon: this.faBinoculars,
      description: `Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Numquam voluptates dolorem molestiae amet,
      asperiores, provident enim quidem tenetur itaque pariatur
      atque deleniti ratione ipsum aut nesciunt eius.
      Nam, possimus quod.`
    },
    {
      label: 'Essuie-glaces avants et arrières',
      icon: this.faLeaf,
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Dignissimos mollitia officia laborum vero dolorum quaerat explicabo.
      Assumenda repudiandae impedit consectetur quasi ad perferendis!
      Hic iste, eos ea harum veniam deserunt.`
    },
    {
      label: 'Liquide lave-glace',
      icon: this.faShower,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Nihil soluta quas eos minus eligendi culpa ex.
      Quos corrupti earum aliquid culpa mollitia.
      Animi non recusandae officia perspiciatis laborum odio facilis.`
    },
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

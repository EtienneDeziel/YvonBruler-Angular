import { Component, OnInit } from '@angular/core';
import { Membre } from './membre';
import { MEMBRES } from './membre-mock';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

  membre = MEMBRES;

  constructor() { }

  ngOnInit(): void {
  }

}

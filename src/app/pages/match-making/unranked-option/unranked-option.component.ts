import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-unranked-option',
  templateUrl: './unranked-option.component.html',
  styleUrl: './unranked-option.component.scss'
})
export class UnrankedOptionComponent {
 constructor(private router: Router) { }
}

import {Component, OnInit} from '@angular/core';
import {ClansService} from '../../services/clans.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-clan-list',
  templateUrl: './clan-list.component.html',
  styleUrl: './clan-list.component.scss'
})
export class ClanListComponent implements OnInit {


  constructor(private clansService: ClansService, private router: Router) {}

  clans!: any[];

  reloadData():void{
    this.clansService.getAllClans().subscribe({
      next:(data) => this.clans = data,
      error:(err)=>console.error('erreur lier au recuperage de tout les clans',err)
    })
    console.log(this.clans)
  }

  ngOnInit(): void{
    this.reloadData();
  }

  getStatus(value:boolean):string{
    if(value){
      return "ouvert"
    }else{
      return "fermé"
    }
  }

  goToClanProfile(clanId:number):void{
    this.router.navigate(['/clan-profile',clanId])
  }

}

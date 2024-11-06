import {Component, OnInit} from '@angular/core';
import {ClansService} from '../../services/clans.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-clan-profile',
  templateUrl: './clan-profile.component.html',
  styleUrl: './clan-profile.component.scss'
})
export class ClanProfileComponent implements OnInit {

  constructor(private clansService: ClansService, private route: ActivatedRoute) {}

  id!: number;
  clan!: any;


  reloadData():void{
    this.id=this.route.snapshot.params['id'];
    this.clansService.getClan(this.id).subscribe({
      next:(data) => this.clan = data,
      error:(err)=>console.error('erreur lier au recuperage du clan',err)
    })
  }

  ngOnInit(): void{
    this.reloadData();

  }
}

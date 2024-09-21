import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  public heroes:Hero[] = [];

  constructor(private heroesService: HeroService){}

  ngOnInit(): void {
    this.heroesService.getHeroes()
    .subscribe(heroes =>this.heroes = heroes);
  }


}

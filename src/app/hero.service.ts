import { Injectable } from '@angular/core';
import { Hero } from './hero';
// import { HEROES } from './mock-heroes';
import { Observable} from 'rxjs/Observable'
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';


import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    // this.messageService.add('Request heroes');
    // return of(HEROES);
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  getHero(myId : number): Observable<Hero>{
    console.log('HeroController: fetched hero id = ${myId}');
    this.messageService.add('HeroController: fetched hero id= ' + myId);
    return of(HEROES.find(hero => hero.id == myId))

  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {}

  private log(message:string){
    this.messageService.add('HeroService: ' + message);
  }

  private heroesUrl = 'api/heroes'

}

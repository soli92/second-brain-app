import { Component, OnInit } from '@angular/core';
import { ChuckNorrisJokesService } from 'src/app/shared/services/chuck-norris-jokes.service';

@Component({
  selector: 'm2b-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {
  public resJokes;
  constructor(
    private jokesService: ChuckNorrisJokesService
  ) { }

  ngOnInit(): void {
  }

  public getJokes() {
    this.jokesService
    .getRandomJokes()
    .subscribe(
      (res) => {
        console.log('RES', res);
        this.resJokes = res['value'];
      }
    )
  }

}

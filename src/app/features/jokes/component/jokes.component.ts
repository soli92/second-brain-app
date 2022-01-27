import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChuckNorrisJokesService } from 'src/app/shared/services/chuck-norris-jokes.service';

@Component({
  selector: 'm2b-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {
  public resJokes;
  public jokesCategory = new FormControl('');

  public jokesCategories: any;

  constructor(
    private jokesService: ChuckNorrisJokesService
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  public getJokes() {
    this.jokesService
    .getRandomJokes(this.jokesCategory.value)
    .subscribe(
      (res) => {
        console.log('RES', res);
        this.resJokes = res['value'];
      }
    )
  }

  private getCategories() {
    this.jokesService
    .getJokesCategories()
    .subscribe(
      (res) => {
        console.log('CATEGORIES', res);
        if(res) this.jokesCategories = res;
      }
    )
  }

}



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisJokesService {
  private jokesApiEndpoint = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random';

  constructor(
    private httpclient: HttpClient
  ) { }

  public getRandomJokes() {
    return this.httpclient.get(
      this.jokesApiEndpoint,
      {
        headers: {
          "accept": "application/json",
          "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
          "x-rapidapi-key": "54652f8a13msh8ab1079554f5d96p159c86jsn42f12f84d527"
        }
      }
    )
  }
}



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisJokesService {
  private jokesApiPrefix = '/jokes' ;

  constructor(
    private httpclient: HttpClient
  ) { }

  public getRandomJokes(category?:string) {

    const randomJokesEndpoint = this.jokesApiPrefix + '/random';
    const params = category ? {'category': category} : null;

    return this.httpclient.get(
      randomJokesEndpoint,
      {
        params
      }
    )
  }

  public getJokesCategories() {
    const randomJokesEndpoint = this.jokesApiPrefix + '/categories';

    return this.httpclient.get(
      randomJokesEndpoint,
      {
        headers: {
          "accept": "application/json",
          "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
          "x-rapidapi-key": environment.chuckNorrisJokesApiKey
        }
      }
    )

  }
}

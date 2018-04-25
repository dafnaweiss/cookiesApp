import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const outposts = [
      { id: 11, name: 'main-outpost', city: 'Tel-Aviv', country: 'Israel', numberOfCookiesLeft: 4, numberOfCoffeeLeft: 6 },
      { id: 12, name: 'north-outpost', city: 'Haifa', country: 'Israel', numberOfCookiesLeft: 2, numberOfCoffeeLeft: 5 },
      { id: 13, name: 'south-outpost', city: 'Eilat', country: 'Israel', numberOfCookiesLeft: 1, numberOfCoffeeLeft: 4 },
      { id: 14, name: 'east-outpost', city: 'Modiin', country: 'Israel', numberOfCookiesLeft: 0, numberOfCoffeeLeft: 3 },
      { id: 15, name: 'west-europe-outpost', city: 'Paris', country: 'France', numberOfCookiesLeft: 3, numberOfCoffeeLeft: 2 },
      { id: 16, name: 'east-europe-outpost', city: 'Moscow', country: 'Russia', numberOfCockiesLeft: 0, numberOfCoffeeLeft: 1 },
      { id: 17, name: 'usa-outpost', city: 'New-York', country: 'U.S.A', numberOfCookiesLeft: 4, numberOfCoffeeLeft: 0 },
    ];

   return {outposts};
  }
}

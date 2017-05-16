import {Injectable} from 'angular2/core';

@Injectable()
export default class DataTypeService {

    constructor() {

    }

    getRandomApology() {
        var apology = [
            'We apologize that the',
            'We care a great deal that',
            'We have no idea why the',
            'We are deeply sorry that the'
        ];

        return apology[Math.round(Math.random() * 3)];
    }

    getRandomOperator() {
        var operators = [
            'London Pigland',
            'Vermin Drains',
            'London Overandunderground',
            'California Sleeper'
        ];

        return operators[Math.round(Math.random() * 3)];
    }

    getRandomDestination() {
        var destinations = [
            'Milton Keynes',
            'Northampton',
            'Adderley Park',
            'Alsager',
            'Clapham Junction',
            'Vauxhall',
            'Berkhamsted',
            'Wolverton',
            'Wolverhampton',
            'Stone',
            'Tamworth',
            'Trump Tower',
            'The Whitehouse',
            'Tile Hill',
            'Tring',
            'Watford Junction',
            'Wembley Central'
        ];

        var randomIndex = Math.round(Math.random() * destinations.length - 1) === -1 ? 1 : Math.round(Math.random() * destinations.length - 1);
        return destinations[randomIndex];
    }

    getRandomMainExcuse() {

        var timeSpan = ['days', 'hours', 'months', 'years', 'decades'];
        var timeSpanString = timeSpan[Math.round(Math.random() * 4)];

        var mainExcuses = [
            'is delayed by ' + Math.round(Math.random() * 60) + ' ' + timeSpanString,
            'has been cancelled'
        ];

        return mainExcuses[Math.round(Math.random() * 1)];
    }

    getRandomFakeExcuse() {
        var fakeExcuses = [
            'due to the wrong type of leaves on the line.',
            'due to a broken down train.',
            'because of a cow on the line.',
            'due to a single snow flake on the line.',
            'due to a UFO in the area.'
        ];

        return fakeExcuses[Math.round(Math.random() * 4)];
    }
}

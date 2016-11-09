import {Injectable} from 'angular2/core';

@Injectable()
export default class DataTypeService {

    constructor() {

    }

    getRandomApology() {
        var apology = [
            'We could not give a fig',
            'We really, really care',
            'We do not apologize at all',
            'We are sooooo lame'
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
            'Tile Hill',
            'Tring',
            'Watford Junction',
            'Wembley Central'
        ];

        var randomIndex = Math.round(Math.random() * destinations.length - 1) === -1 ? 1 : Math.round(Math.random() * destinations.length - 1);
        console.log(randomIndex);
        return destinations[randomIndex];
    }

    getRandomMainExcuse() {

        var timeSpan = ['days', 'hours', 'months', 'years', 'decades'];
        var timeSpanString = timeSpan[Math.round(Math.random() * 1];

        var destinations = [
            'is delayed by ' + Math.round(Math.random() * 60) + ' ' + timeSpanString,
            'has been destroyed',
            'has been cancelled'
        ];

        var randomIndex = Math.round(Math.random() * destinations.length - 1) === -1 ? 1 : Math.round(Math.random() * destinations.length - 1);
        console.log(randomIndex);
        return destinations[Math.round(Math.random() * 2)];
    }

    getRandomFakeExcuse() {
        var fakeExcuses = [
            'due to a large slurry of pig dung',
            'because of Brexit',
            'while we all sleep',
            'due to a single snow flake on the line'
        ];

        return fakeExcuses[Math.round(Math.random() * 3)];
    }
}

/*
Adderley Park
 Alsage
 Apsley
 Atherstone
 Berkhamsted
 Berkswell
 Birmingham International
 Birmingham New Street
 Bletchley
 Bushey
 Canley
 Cheddington
 Coventry
 Crewe
 Hampton-in-Arden
 Harrow & Wealdstone
 Hemel Hempstead
 Kidsgrove
 Kings Langley
 Lea Hall
 Leighton Buzzard
 Lichfield Trent Valley
 London Euston
 Long Buckby
 Marston Green
 Milton Keynes Central
 Northampton
 Nuneaton
 Polesworth
 Rugby
 Rugeley Trent Valley
 Stafford
 Stechford
 Stoke-on-Trent
 Stone
 Tamworth
 Tile Hill
 Tring
 Watford Junction
 Wembley Central
 Wolverton
Watford Junction
*/
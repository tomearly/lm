import {Injectable} from 'angular2/core';

@Injectable()
export default class DataTypeService {

    constructor() {

    }

    getRandowString(length) {
        return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
    }

    getRandomDestination() {
        var destinations = [
            'Milton Keynes',
            'Northampton'
        ];

        var randomIndex = Math.round(Math.random() * 100);
        return destinations[randomIndex];
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
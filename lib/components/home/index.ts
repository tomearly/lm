import {Component, View} from 'angular2/core';
import DataTypeService from './service';

@Component({
    selector: "home",
    providers: [DataTypeService],
    styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./index.scss')],
    template: require('./index.html')
})
export class Home {

    apology: string;
    date: Date;
    operator: string;
    mainReason: string;
    destination: string;
    fakeReason: string;

    constructor(public service:DataTypeService) {
        this.apology = this.service.getRandomApology();
        this.date = new Date();
        this.operator = this.service.getRandomOperator();
        this.mainReason = this.service.getRandomMainExcuse();
        this.destination = this.service.getRandomDestination();
        this.fakeReason = this.service.getRandomFakeExcuse();
    }

    refresh() {
        this.apology = this.service.getRandomApology();
        this.date = new Date();
        this.operator = this.service.getRandomOperator();
        this.mainReason = this.service.getRandomMainExcuse();
        this.destination = this.service.getRandomDestination();
        this.fakeReason = this.service.getRandomFakeExcuse();
    }

    ngOnInit() {
        console.log('[Component] home ngOnInit');
    }

    ngOnDestroy() {
        console.log('[Component] home onDestroy');
    }

    ngOnChanges() {
        console.log('[Component] home onChanges');
    }

    ngDoCheck() {
        console.log('[Component] home doCheck');
    }

    ngAfterContentInit() {
        console.log('[Component] home afterContentInit');
    }

    ngAfterContentChecked() {
        console.log('[Component] home afterContentChecked');
    }

    ngAfterViewInit() {
        console.log('[Component] home afterViewInit');
    }

    ngAfterViewChecked() {
        console.log('[Component] home afterViewChecked');
    }
}

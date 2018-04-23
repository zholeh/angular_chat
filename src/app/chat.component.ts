import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
    selector: 'chat',
    template: `
        <h1>Привет {{userName}}</h1>
        `

})

export class Chat {
    private userName = this.dataService.user.name;
    constructor(private dataService: DataService) {}
 }
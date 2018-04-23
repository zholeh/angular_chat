import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';
import { debug } from 'util';

@Component({
    selector: 'my-app',
    template: `
        <div>
            <nav>
                <a routerLink="">Главная</a>
                <a routerLink="/login">Логин</a>
            </nav>
            <router-outlet></router-outlet>
        </div>
        `
})

export class AppComponent {

    constructor(private router: Router, private dataService: DataService) {

        debug;
        //debug('1');
        console.log(debug, typeof(debug));
        debugger;
        if (this.dataService.user.id == '') {
            this.router.navigate(['login']);
        } else this.router.navigate(['chat']);
    }

    ngAfterViewInit() {

    }
}
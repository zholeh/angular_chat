import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

    private activeUser = {
        userId: ''
    }
    constructor(private router: Router) {
        if (this.activeUser.userId == '') {
            this.router.navigate(['login']);
        }
    }
}
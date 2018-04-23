import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

import { ShowUsers } from './show-users.component';
import { AppComponent } from './app.component';
import { DataService } from './data.service';

@Component({
    selector: 'chat',
    styles: [
        `
        .btn {
            color: #fff;
            background-color: #337ab7;
            border-color: #2e6da4;
            padding: 5px 10px;
            font-size: 12px;
            line-height: 1.5;
            border-radius: 3px;
            display: inline-block;
            padding: 6px 12px;
            margin-bottom: 0;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.42857143;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            -ms-touch-action: manipulation;
            touch-action: manipulation;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            background-image: none;
            border: 1px solid transparent;
            border-radius: 4px;
        }
        `
    ],
    template: `
        <h1>Для входа в чат, давайте представимся. Меня зовут Чат! {{name}}</h1>
        <label>А Вас?</label>
        <input [(ngModel)]="name" placeholder="name">
        <input [(ngModel)]="password" placeholder="password">
        <input class="btn" type="button" value="Login" (click)="checkUser(name, password)">
        <input class="btn" type="button" value="Register" (click)="remindPassword()">
        <input class="btn" type="button" value="Remind password" (click)="remindPassword()">    
        `

})

export class Login {

    //private dataService = new DataService();
    constructor(private router: Router,
        private http: HttpClient,
        private dataService: DataService) { 

            console.log(dataService);
        }
        
    checkUser(name: string, password: string): void {
        const user = {
            name: name,
            password: password
        }

        this.http.get(`http://localhost:3000/api/checkuser/${JSON.stringify(user)}`).subscribe((data: any) => {
            this.dataService.user.id = data;
            this.dataService.user.name = user.name;
            this.router.navigate(['']);
        });
    }
    remindPassword(): void {
        this.router.navigate(['showusers']);
    };
    usr = {
        name: '',
        password: ''
    };

}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShowUsers }        from './show-users.component';

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
        <h1>Для входа в чат, давайте представимся. Меня зовут Чат! {{name}}!</h1>
        <label>А Вас?</label>
        <input [(ngModel)]="name" placeholder="name">
        <input [(ngModel)]="password" placeholder="password">
        <input class="btn" type="button" value="Login">
        <input class="btn" type="button" value="Register">
        <input class="btn" type="button" value="Remind password" (click)="remindPassword()">    
        `

})

export class Login { 
    constructor(private router: Router){}
    remindPassword(): void {
        this.router.navigate(['showusers']);
    };
    usr = {
        name: '',
        password: ''};
    
}
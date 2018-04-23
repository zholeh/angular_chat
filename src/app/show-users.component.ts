import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'show-users',
    styles: [
        `
        form {
            display: block;
            box-sizing: border-box;
        }
        .form-group {
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
            font-size: 14px;
            line-height: 1.42857143;
            color: #333;
            background-color: #fff;
            box-sizing: border-box;
            margin-bottom: 15px;
        }
        .form-control {
            display: block;
            width: 100%;
            height: 34px;
            padding: 6px 12px;
            font-size: 14px;
            line-height: 1.42857143;
            color: #555;
            background-color: #fff;
            background-image: none;
            border: 1px solid #ccc;
            border-radius: 4px;
            transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
            font-family: inherit;
        }
        .form-group label {
            display: inline-block;
            max-width: 100%;
            margin-bottom: 5px;
            font-weight: 700;
        }
        .panel-body {
            padding: 15px;
            box-sizing: border-box;
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
            font-size: 14px;
            line-height: 1.42857143;
            color: #333;
        }
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
        .table {
            border: 1px solid #ddd;
                border-top-color: rgb(221, 221, 221);
                border-top-style: solid;
                border-top-width: 1px;
                border-right-color: rgb(221, 221, 221);
                border-right-style: solid;
                border-right-width: 1px;
                border-bottom-color: rgb(221, 221, 221);
                border-bottom-style: solid;
                border-bottom-width: 1px;
                border-left-color: rgb(221, 221, 221);
                border-left-style: solid;
                border-left-width: 1px;
                border-image-source: initial;
                border-image-slice: initial;
                border-image-width: initial;
                border-image-outset: initial;
                border-image-repeat: initial;
            width: 100%;
            max-width: 100%;
            margin-bottom: 20px;
            background-color: transparent;
            border-spacing: 0;
                -webkit-border-horizontal-spacing: 0px;
                -webkit-border-vertical-spacing: 0px;
            border-collapse: collapse;
            box-sizing: border-box;
            display: table;
            
        }
        .table tbody tr:nth-of-type(odd) {
            background-color: #f9f9f9;
            display: table-row;
            vertical-align: inherit;
            border-color: inherit;
        } 
        .table tbody tr {
            display: table-row;
            vertical-align: inherit;
            border-color: inherit;
        }
        .table>tbody>tr>td, .table>thead>tr>th {
            border: 1px solid #ddd;
        }
        a.editLink {
            color: #337ab7;
            text-decoration: none;
            background-color: transparent;
            cursor:pointer;
        }
        a.editLink:focus {
            outline: 5px auto -webkit-focus-ring-color;
            outline-offset: -2px;
        }
        
        a.editLink:focus, a.editLink:hover {
            color: #23527c;
            text-decoration: underline;
        }
        a.editLink:active, a.editLink:hover {
            outline: 0;
        }
        `
    ],
    template:
        `
        <h2>Список пользователей</h2>
        <form name="userForm">
            <input type="hidden" name="id" value="0" />
            <div class="form-group">
                <label for="name">Имя:</label>
                <input class="form-control" name="name" [(ngModel)]="userName"/>
            </div>
            <div class="form-group">
                <label for="age">Возраст:</label>
                <input class="form-control" name="age"  [(ngModel)]="userAge"/>
            </div>
            <div class="form-group">
                <label for="password">Пароль:</label>
                <input class="form-control" name="password" [(ngModel)]="userPassword" />
            </div>
            <div class="panel-body">
                <button (click)="editUser()" type="submit" class="btn">Сохранить</button>
                <a (click)="resetUser()" id="reset" class="btn">Сбросить</a>
            </div>
        </form>
        <table class="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Имя</th>
                    <th>возраст</th>
                    <th>Пароль</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let user of users">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.age }}</td>
                    <td>{{ user.password }}</td>
                    <td>
                        <a (click)="getUser(user)" class='editLink' data-id='{{user.id}}'>Изменить</a> | <a (click)="deleteUser(user)" class='editLink' data-id='{{user.id}}'>Удалить</a>
                    </td>
                </tr>
            </tbody>
        </table>
        `
})
export class ShowUsers {

    private users: any;
    private userId: string;
    private userName: string;
    private userAge: string;
    private userPassword: string;
    getUser(user: any): void {
        this.http.get(`http://localhost:3000/api/users/${user.id}`).subscribe((data: any) => {
            this.userId = data.id;
            this.userName = data.name;
            this.userAge = data.age;
            this.userPassword = data.password;
        });
    }

    deleteUser(user: any): void {
        this.http.delete(`http://localhost:3000/api/users/${user.id}`).subscribe((data: any) => {
            this.getUsers();
            console.log(data);
        });
    }

    resetUser(): void {

        this.userId = '';
        this.userName = '';
        this.userAge = '';
        this.userPassword = '';
    }

    editUser() {

        let user = {
            id: '' + this.userId,
            name: this.userName,
            password: this.userPassword,
            age: this.userAge
        };

        console.log(user);
        if (!user.id) {
            this.http.put('http://localhost:3000/api/users', user).subscribe((data: any) => {
                this.resetUser();
                this.getUsers();
                //console.log(data);

            });
        } else {
            this.http.post('http://localhost:3000/api/users', user).subscribe((data: any) => {
                this.resetUser();
                this.getUsers();
                console.log(data);
            });
        }
    }
    getUsers(): void {
        this.http.get('http://localhost:3000/api/users').subscribe((data: any) => {
            var rows = "";
            this.users = data;
            console.log(data);
        });
    }
    constructor(private http: HttpClient) { }
    ngOnInit() {
        this.getUsers();
    }
}
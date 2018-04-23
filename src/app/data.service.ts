import {User} from './user.module';
import {Injectable} from '@angular/core';
 
Injectable()
export class DataService{
 
    //public user: User = { id:"", name: "", age: 0};
    public user: User = new User("", "", 0);
}
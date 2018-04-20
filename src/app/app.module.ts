import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule }   from '@angular/common/http';

import { AppComponent }     from './app.component';
import { Chat }             from './chat.component';
import { ShowUsers }        from './show-users.component';
import { Login }            from './login.component';
import { NotFoundComponent }from './not-found.component';

// определение маршрутов
const appRoutes: Routes =[
    { path: '', component: AppComponent},
    { path: 'chat', component: Chat},
    { path: 'showusers', component: ShowUsers },
    { path: 'login', component: Login },
    { path: '**', component: NotFoundComponent  }
    
];

@NgModule({
    imports:      [ HttpClientModule, BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
    //exports:      [HttpClient],
    declarations: [ AppComponent , Chat, ShowUsers, NotFoundComponent, Login],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
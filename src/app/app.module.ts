import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Chat } from './chat.component';
import { ShowUsers } from './show-users.component';
import { Login } from './login.component';
import { NotFoundComponent } from './not-found.component';
import { DataService } from './data.service';

// определение маршрутов
const appRoutes: Routes = [
    { path: '', component: AppComponent },
    { path: 'chat', component: Chat },
    { path: 'showusers', component: ShowUsers },
    { path: 'login', component: Login },
    { path: '**', component: NotFoundComponent }

];

@NgModule({
    imports: [HttpClientModule, BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, Chat, ShowUsers, NotFoundComponent, Login],
    bootstrap: [AppComponent],
    providers: [DataService]
})

export class AppModule { 
    public dataService = new DataService();
}

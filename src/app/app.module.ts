import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { TodosPage } from '../pages/todos/todos';
import { AddTaskModalPage } from '../pages/add-task-modal/add-task-modal';
import { TodoServiceProvider } from '../providers/todo-service/todo-service';

import { PrioritizedTodosPipe } from '../pipes/prioritized-todos/prioritized-todos';
import { DoneTodosPipe } from '../pipes/done-todos/done-todos';

@NgModule({
  declarations: [
    MyApp,
    TodosPage,
    AddTaskModalPage,
    PrioritizedTodosPipe,
    DoneTodosPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TodosPage,
    AddTaskModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    TodoServiceProvider
  ]
})
export class AppModule { }

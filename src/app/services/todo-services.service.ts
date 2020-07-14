import { Injectable } from '@angular/core';
import { Todo } from '../interface/todo';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoServicesService {

  todos: Array<Todo> = [
    { id: 1, desc: 'First Todo', checked: false },
    { id: 2, desc: 'Todo 22222', checked: true },
    { id: 3, desc: ' Todo 345', checked: false },
    { id: 4, desc: ' Todo3', checked: false }
  ];
  constructor(private readonly afs: AngularFirestore,
    private http : HttpClient) { }

  getMyEnvironmentValue() {
    return environment.myValue;
  }

  getAllTodos() {
    return this.todos;
  }

  getAllTodoFromFirebase() {
    return this.afs.collection('/todos').get();
    // return this.afs.firestore.collection('/todos').get();
    // return null;
  }

  getTodosfromHttp(){
    this.http.get('//stubonweb.herokuapp.com/todos')
      .subscribe((a) => console.log(a));
  }

}

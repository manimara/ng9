import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Todo } from '../interface/todo';
import { TodoServicesService } from '../services/todo-services.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, FormControl , NgForm } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Array<any> = [];
  todosAsync$ : Observable<Todo[]>;
  itemsRef: any;
  items: any;
  todoForm: NgForm;
  addTodoInitiated = false;
  addTodoFormSubmitted = false;
  @ViewChild('tForm') todoFormRef : NgForm;
  constructor(private todoservice: TodoServicesService,
    private readonly afs: AngularFirestore) {
    // fdb.list('/todos').query;
    console.log(afs);
  }

  ngOnInit(): void {
    // this.todos = this.todoservice.getAllTodos();
    this.readData();
    // this.todos = new FormGroup();
  }

  setData() {
    this.todos.forEach(a => {

    })
  }

  getAllTodos() {
    return this.todoservice.getAllTodos();
  }

  initiateAddtodo(flag:boolean=true){
    this.addTodoInitiated = flag;
  }

  submitAddtodo(flag:boolean=false){
    this.addTodoFormSubmitted = flag;
  }

  showTodoForm(){
    this.submitAddtodo(false);
    this.initiateAddtodo(true);
  }

  todoAddSubmit(tForm: NgForm){
    // console.log(this)
    let data = {desc:'',checked:false};
    data.desc = tForm.value.desc;
    data.checked = tForm.value.checked;
    this.addTodo(data);
    this.submitAddtodo(true);
    this.initiateAddtodo(false);
    tForm.reset();
  }
  readData() {
    this.afs.firestore.collection('todos').get().then(aa =>{
       console.log(aa);
       var i = 1;
      aa.forEach((doc: any) =>  {
        console.log(doc)
        setTimeout(() => {
          this.todos.push(doc.data());
          // this.todosAsync$.
          // console.log(doc.id, "is the id and the data is ", doc.data());
        },500 * i);
        i++;
      });
    });
  }

  addTodo(f) {
    this.afs.firestore.collection('todos').add(f).then(a => {
      console.log(a);
    }).catch(e => {
      console.log(e);
    })
  }

  updateTodo() {
    // this.afs.firestore.collection('todos/171ysJlncEnowVjSjNbb')
    // this.afs.firestore.collection('todos').where('id', '==','171ysJlncEnowVjSjNbb')
    let docid = '171ysJlncEnowVjSjNbb';
    this.afs.firestore.collection('todos').doc(docid)
    .get()
      .then(a => {
        console.log(a.data());
      })
      .catch(e => {
        debugger;
        console.log(e);
      })
    // where('id','==','')

  }

  getAllTodosFromSirestore() {
    this.itemsRef = this.afs.collection('todos', ref => ref.where('desc', '==', 'davideast').limit(10));
    // this.items = this.itemsRef.valueChanges().map(snap => snap.docs.map(data => doc.data()));
    // this.items = from(this.itemsRef); // you can also do this with no mapping

    // this.profileRef = this.afs.doc('todos/davideast');
    // this.profile = this.profileRef.valueChanges();

    return this.todoservice.getAllTodoFromFirebase().subscribe((a) => {
      console.log(a);
      console.log(123);
    });
  }

  getTodobyID(id: number): Todo {
    return null;
  }
}


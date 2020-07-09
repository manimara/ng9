import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Todo } from '../interface/todo';
import { TodoServicesService } from '../services/todo-services.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, FormControl, NgForm } from '@angular/forms';
import { Observable, interval } from 'rxjs';
import { Timestamp } from 'rxjs/internal/operators/timestamp';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Array<any> = [];
  // todosAsync$ : Observable<Todo[]>;

  itemsRef: any;
  items: any;
  todoForm: NgForm;
  addTodoInitiated = false;
  addTodoFormSubmitted = false;
  count: number = 0;
  @ViewChild('tForm') todoFormRef: NgForm;
  editable: boolean = false;
  myEnvironemntValue: string;
  constructor(private todoservice: TodoServicesService,
    private readonly afs: AngularFirestore,
    ) {
    console.log(afs);
  }


  ngOnInit(): void {
    this.readData();
    this.myEnvironemntValue = this.todoservice.getMyEnvironmentValue()
  }

  setData() {
    this.todos.forEach(a => {

    })
  }

  getAllTodos() {
    return this.todoservice.getAllTodos();
  }

  initiateAddtodo(flag: boolean = true) {
    this.addTodoInitiated = flag;
  }

  submitAddtodo(flag: boolean = false) {
    this.addTodoFormSubmitted = flag;
  }

  showTodoForm() {
    this.submitAddtodo(false);
    this.initiateAddtodo(true);
  }

  todoAddSubmit(tForm: NgForm) {
    // console.log(this)
    let data = { desc: '', checked: false , time:Date.now()};
    data.desc = tForm.value.desc;
    data.checked = tForm.value.checked;
    // data.time = ;
    this.addTodo(data);
    this.todos.push(data);
    this.submitAddtodo(true);
    this.initiateAddtodo(false);
    tForm.reset();
  }
  readData() {
    this.afs.firestore.collection('todos').orderBy('time').get().then(aa => {
      console.log(aa);
      //  var i = 1;
      aa.forEach((doc: any) => {

        let docWithId = {
          id: doc.id,
          desc: doc.data().desc,
          checked: doc.data().checked
        }
        this.todos.push(docWithId);
      });
    });
  }

  onClick() {
    this.editable = true;
  }
  onFocusin() {

  }

  onFocusout() {

  }
  focusoutParent(t) {
    console.log(t);
    let docWithId = {
      id: t.id,
      checked: t.children[0].checked,
      desc: t.children[1].value
    }
    // this.addTodo(docWithId);
    this.updateTodo(docWithId);
  }

  onMouseOver(){

  }
  onDeleteClick(t){
      this.deleteTodo(t.id, t.getAttribute('data-index'))
  }

  deleteTodo(id: string, index?:number) {
    this.afs.firestore.collection('todos').doc(id).delete();
    this.todos.splice(index, 1);
  }

  addTodo(f) {
    this.afs.firestore.collection('todos').add(f).then(a => {
      console.log(a);
    }).catch(e => {
      console.log(e);
    })
  }

  updateTodo(data) {
    // this.afs.firestore.collection('todos/171ysJlncEnowVjSjNbb')
    // this.afs.firestore.collection('todos').where('id', '==','171ysJlncEnowVjSjNbb')
    let docid = '171ysJlncEnowVjSjNbb';
    this.afs.firestore.collection('todos').doc(data.id)
      .set({
        checked: data.checked,
        desc: data.desc
      },
        { merge: true });
    // .get().then(a => {console.log(a.data());})
    // .catch(e => {console.log(e);})
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

  onKeyDown(event){
    if(event.keyCode == 40){
      console.log(event.target.parentElement.nextElementSibling.firstElementChild.nextElementSibling);
      event.target.parentElement.nextElementSibling?.firstElementChild?.nextElementSibling?.focus();
    }else if(event.keyCode == 38){
      // console.log(event.target.parentElement.previousElementSibling.firstElementChild.nextElementSibling);
      event.target.parentElement.previousElementSibling?.firstElementChild?.nextElementSibling?.focus();
    }


  }
  onKeyUp(event){
    console.log(event);
    if(event.keyCode == 40){
      // console.log(event).target.parentElement.previousElementSibling.firstElementChild.nextElementSibling);
      // event.target.parentElement.previousElementSibling?.firstElementChild?.nextElementSibling?.focus();
    }
  }
}


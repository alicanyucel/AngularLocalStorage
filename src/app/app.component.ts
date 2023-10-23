import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <h1>Local Storage Example</h1>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularLocalStorage';
  //konfigursayon ,authorization tokeni saklama, yedekleme için key value şeklinde veri saklamak işçin kullanılır.
  constructor(
   
  ){
    // localStorage.setItem("token","askajkajkajdkadkajdkjakjdkaufi");
    //console.log(localStorage.getItem("token")); // key değeri ile valueye erişebiliriz.
localStorage.removeItem("token"); // key ini verip siliyoruz.
//localstorage deki herşeyi temizlemek için ise
localStorage.clear();
  }
}

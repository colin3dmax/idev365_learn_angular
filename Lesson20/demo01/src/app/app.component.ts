import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo01';
  isShowPeekABoo=true;
  
  constructor(){

    setTimeout(()=>{
      this.title = "123"
    },2000)
  }
}

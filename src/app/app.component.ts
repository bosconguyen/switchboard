import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';
  switches = [false,true,false,true,true,true,true,true,true,true]

 buttonSwitch(idx) {
     if(this.switches[idx] === true) {
         this.switches[idx] = false;
     } else {
         this.switches[idx] = true;
     }

 }

}

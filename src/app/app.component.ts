import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  share1: boolean;
  share2: boolean;
  share3: boolean;
  share4: boolean;
  share5: boolean;
  share6: boolean;
  share7: boolean;
  share8: boolean;
  share9: boolean;
  share10: boolean;


  constructor() {
    console.log('constructor running');
    this.share1=false;
    this.share2=false;
    this.share3=false;
    this.share4=false;
    this.share5=false;
    this.share6=false;
    this.share7=false;
    this.share8=false;
    this.share9=false;
    this.share10=false;

  }

  btnShare1() {
    this.share1 = !this.share1;
  }
  btnShare2() {
    this.share2 = !this.share2;
  }
  btnShare3() {
    this.share3 = !this.share3;
  }
  btnShare4() {
    this.share4 = !this.share4;
  }
  btnShare5() {
    this.share5 = !this.share5;
  }
  btnShare6() {
    this.share6 = !this.share6;
  }
  btnShare7() {
    this.share7 = !this.share7;
  }
  btnShare8() {
    this.share8 = !this.share8;
  }
  btnShare9() {
    this.share9 = !this.share9;
  }
  btnShare10() {
    this.share10 = !this.share10;
  }

}

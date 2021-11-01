import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pro';

  totalCount = 0;


  data1 = [{
    firstname : 'Sam',
    lastname : 'Jhonson',
    email : 'sam@gmail.com',
    dob: '26/09/1991'

  },{
    firstname : 'Royce',
    lastname : 'Thomas',
    email : 'royree@yahoo.com',
    dob: '12/02/1989'
  },{
    firstname : 'Jim',
    lastname : 'Lasker',
    email : 'jlask@eim.ae',
    dob: '15/11/1999'
  }];

  data2 = [{
    firstname : 'Reenu',
    lastname : 'Thomas',
    email : 'reenu@gmail.com'

  },{
    firstname : 'Sarath',
    lastname : 'Babu',
    email : 'sb12@hto.io'
  },{
    firstname : 'Sunila',
    lastname : 'Thomas',
    email : 'sl@hotmail.com'
  }];

  data3 = [{
    firstname : 'Silpa',
    lastname : 'TS',
    dob: '26/10/1999'

  },{
    firstname : 'Jisna',
    lastname : 'Jose',
    dob : '16/09/1999'
  },{
    firstname : 'Aleesha',
    lastname : 'KB',
    dob : '06/07/1999'
  }];

}

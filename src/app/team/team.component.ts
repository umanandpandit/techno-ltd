import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  s:string ;
  /**
* any: It is a built-in data type in TypeScript
which helps in describing the type of variable which we are unsure of while writing the code. *
**/
users: any;
  // users:object;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.s = this.data.helloService();

    this.data.getUsers().subscribe(data => {
      this.users = data
      console.log(this.users);
      }
      );
  }


}

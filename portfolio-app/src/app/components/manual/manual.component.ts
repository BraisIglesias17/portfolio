import { Component, OnInit } from '@angular/core';
import { Command, CommandDescription } from 'src/app/model/command.list';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss']
})
export class ManualComponent implements OnInit {

  commands: Command[]=CommandDescription;
  constructor() { }

  ngOnInit(): void {
  }

}

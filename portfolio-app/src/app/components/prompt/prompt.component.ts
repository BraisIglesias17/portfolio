import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommandService } from 'src/app/services/commant.service';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.scss']
})
export class PromptComponent implements OnInit {
  @ViewChild('terminalBody')
  terminalBody!: ElementRef;
  messages: string[] = [];
  prompt: string = '/home/brais/tool$';
  command: string = '';

  constructor(private commandService: CommandService) { }

  ngOnInit(): void {
  }

  public executeCommand():void{
    this.messages.push(`${this.prompt}${this.command}`);
    if(this.command.replace(/\s/g, "")==='clear'){
      this.command='';
      this.messages=[];
    }else{
      const command=this.commandService.getCommand(this.command);
      this.messages.push(`${command}`);
      this.command = '';
      this.scrollToBottom();
    }
  }

  public scrollToBottom(): void {
    
    setTimeout(() => {
      this.terminalBody.nativeElement.scrollTop = this.terminalBody.nativeElement.scrollHeight;
    }, 0);
  }

}

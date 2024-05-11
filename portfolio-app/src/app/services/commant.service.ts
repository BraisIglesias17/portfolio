import { Injectable } from "@angular/core";
import { Commands, ExtendedCommands } from "../model/command.list";

@Injectable({
    providedIn:'root'
})
export class CommandService{
    

    constructor(){}

    public getCommand(code: string): string{
        const com=code.trim().replace(/\s/g, "");
        
        if(com.includes('-l')){
            const key=com.replace('-l','');
            return ExtendedCommands[key] ? ExtendedCommands[key] : ' Command not found';
        }
        
        return Commands[com] ? Commands[com] : ' Command not found';
    }
}
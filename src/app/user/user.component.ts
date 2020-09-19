import {Component} from "@angular/core";

@Component({
    selector: "app-user",
    templateUrl: "./user.component.html",
})
export class UserComponent {

    username: String = "";
    savedUsername: String = "";
    isResetDisabled = true;

    onSaveUsername(): void{
        this.savedUsername = this.username;
        this.username = "";
    }

    onResetUsername(): void{
        this.username="";
        this.savedUsername="";
    }


}
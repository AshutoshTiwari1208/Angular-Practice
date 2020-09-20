import {Component} from "@angular/core";

@Component({
    selector: 'app-secret-pass',
    templateUrl: './secret-password.component.html',
    styleUrls: ['./secret-password.component.css']
})
export class SecretPasswordComponent {

    secretKey="@sh0To$*";
    secretKeyShow = false;

    clickLog = [];

    onDetailsShow(){
        this.secretKeyShow = !this.secretKeyShow;
        if(this.secretKeyShow){
            this.clickLog.push(new Date());
        }
    }
}
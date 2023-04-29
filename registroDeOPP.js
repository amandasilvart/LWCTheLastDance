import { LightningElement, wire } from 'lwc';
import findopps from '@salesforce/apex/classOppQuerry.OppQuerry'
import OppQuerry from '@salesforce/apex/classOppQuerry.OppQuerry';

export default class registrodeOPP extends LightningElement {
    opportunities;
    
    @wire(OppQuerry)
    puxaropp({error, data}){
        if(data){
            this.opportunities = data;
            this.error = undefined;
        } else if(error){
            this.error = error;
            this.opportunities = undefined;
        }
    }
}
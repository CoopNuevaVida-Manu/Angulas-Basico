import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    
            
        <h1>{{titulo}}</h1>
        <h3>La base es de: <strong>{{base}}</strong></h3>

        <button (click)="acomular(base)" >+ {{base}}</button>

        <samp> {{numero}} </samp>

        <button (click)="acomular(-base)" >- {{base}}</button>
    
    
    `
})
export class ContadorComponent{
    titulo: string = 'Contador app';
    numero: number = 10;

    base: number = 5;
    acomular( valor: number){
        this.numero += valor
    }
}
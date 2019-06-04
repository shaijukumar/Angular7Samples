import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'summary'})

export class SummaryPipe implements PipeTransform {
    transform(value: string, limit?:number, endsWith?:string): string {        
        if(!value){
            return null;
        }        
        if(!limit){
            limit=50;
        }
        if(!endsWith){
            endsWith = "...";
        }
        return value.substring(0, limit) + " " + endsWith;
    }
}
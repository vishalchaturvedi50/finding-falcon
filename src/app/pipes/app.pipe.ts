import { PipeTransform, Pipe } from '@angular/core';
import { IVehicles } from '../models/vehicles';

@Pipe({
    name: 'filtervehicle',
    pure: false
})
export class FilterVehicles implements PipeTransform {
    transform(value: Array<IVehicles>, ...args: any[]) {
        let currentSelectedVehicle = args[0];
        return value.filter(x => {
            return x.total_no > 0 || x.name == currentSelectedVehicle
        });
    }

}
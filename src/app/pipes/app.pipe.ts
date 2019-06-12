import { PipeTransform, Pipe } from '@angular/core';
import { IVehicles } from '../models/vehicles';

@Pipe({
    name: 'filtervehicle',
    pure: false
})
export class FilterVehicles implements PipeTransform {
    transform(value: Array<IVehicles>, ...args: any[]) {
        return value.filter(x => x.total_no > 0);
    }

}
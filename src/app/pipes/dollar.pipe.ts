import { Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name: 'dollarPipe'
})

// this pipe appends revenue value with $ at the beginning and replaces increase with '↑' and decrease with '↓'
export class DollarPipe implements PipeTransform {
    public revenue;
    transform(value: string): string {
        if (value.toLowerCase().indexOf('increase') !== -1) {
            this.revenue = value.toLowerCase().replace('increase', '↑');
            return '$' + this.revenue;
        }
        if (value.toLowerCase().indexOf('decrease') !== -1) {
            this.revenue = value.toLowerCase().replace('decrease', '↓');
            return '$' + this.revenue;
        } else {
            return '$' + value;
        }
    }
}

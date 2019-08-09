// Integration tests - testing the template of ViewTargetsComponent
import { ViewTargetsComponent } from './view-targets.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { DollarPipe } from '../../pipes/dollar.pipe';
import { Pipe, PipeTransform } from '@angular/core';
import { TargetsService } from '../../targets.service';

describe('Testing View-Targets component', () => {
    let fixture: ComponentFixture<ViewTargetsComponent>;
    let mockRouter;
    let mockTargetsService;
    // creating mockPipe
    @Pipe({
        name: 'dollarPipe'
       })
    class MockDolarPipe implements PipeTransform {
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
    beforeEach (() => {
        TestBed.configureTestingModule({
            declarations: [ViewTargetsComponent, MockDolarPipe],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
               { provide: Router, useValue: mockRouter},
               { provide: TargetsService, useValue: mockTargetsService },
               { provide: DollarPipe, useValue: MockDolarPipe }]
        });
        mockRouter = jasmine.createSpyObj(['navigate']);
        fixture = TestBed.createComponent(ViewTargetsComponent);
        fixture.componentInstance.targetData  = [{ id: 2, name: 'Target Corporation', status: '1', description: 'Target Corporation is the eighth-largest retailer in the United States, and is a component of the S&P 500 Index.', keyContact: 'Max', phoneNumber: '1234567891', email: 'max@target.com', revenue: '75.356 billion(INCREASE)' },
           { id: 3, name: 'Walmart', status: '1', description: 'Walmart is the largest retailer in the United States, and is a component of the S&P 500 Index.', keyContact: 'Max', phoneNumber: '1234567891', email: 'max@target.com', revenue: '75.356 billion(INCREASE)' }];
    });
    it('Should create one h3 element for each Target data', () => {
        fixture.detectChanges();
        const viewTargetsDomElements = fixture.debugElement.queryAll(By.css('h3'));
        expect(viewTargetsDomElements.length).toBe(2);
    });
    it('Should render the company name of first target in the list as TARGET CORPORATION', () => {
        fixture.detectChanges();
        const viewTargetsDomElements = fixture.debugElement.queryAll(By.css('h3'));
        expect(viewTargetsDomElements[0].nativeElement.textContent).toContain('TARGET CORPORATION');
    });
    it('Should render the company name of second target in the list as WALMART', () => {
        fixture.detectChanges();
        const viewTargetsDomElements = fixture.debugElement.queryAll(By.css('h3'));
        expect(viewTargetsDomElements[1].nativeElement.textContent).toContain('WALMART');
    });
});

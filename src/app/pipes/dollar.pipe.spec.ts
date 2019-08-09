import { DollarPipe } from './dollar.pipe';

describe('Testing DollarPipe', () => {
  //creating an instance of pipe
  const dollarPipe = new DollarPipe();
  it('Dollar should be appended at the begining of the value' , () => {
    const revenue = '12.35 billion';
    expect((dollarPipe.transform(revenue))).toBe('$12.35 billion');
  });
  it('Dollar should be appended at the begining of the value and increase should be replaced by ↑' , () => {
    const revenue = '12.35 billion increase';
    expect((dollarPipe.transform(revenue))).toBe('$12.35 billion ↑');
  });
  it('Dollar should be appended at the begining of the value and DECREASE should be replaced by ↓' , () => {
    const revenue = '12.35 billion DECREASE';
    expect((dollarPipe.transform(revenue))).toBe('$12.35 billion ↓');
  });
});

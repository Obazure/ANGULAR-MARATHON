import { DateWithUtcPipe } from './date-with-utc.pipe';

describe('DateWithUtcPipe', () => {
  it('create an instance', () => {
    const pipe = new DateWithUtcPipe();
    expect(pipe).toBeTruthy();
  });
});

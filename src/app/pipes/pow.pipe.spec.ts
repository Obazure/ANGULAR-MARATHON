import {PowPipe} from './pow.pipe';


describe('PowPipe', () => {
    let pipe: PowPipe;

    beforeEach(() => {
        pipe = new PowPipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
        expect(pipe.transform).toBeDefined();
    });
    it(`should return 8`, () => {
        const result = pipe.transform(2, 3);
        expect(result).toBe(8);
    })
});

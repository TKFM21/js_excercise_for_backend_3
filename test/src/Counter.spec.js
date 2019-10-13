const assert = require('power-assert');
const Counter = require('../../src/Counter');

describe('Counter Class Test', () => {
    it('`_count`プロパティを持つ', () => {
        const ctr = new Counter();
        assert.equal('_count' in ctr, true);
    });
    
    it('`_count`プロパティの初期値は0である', () => {
        const ctr = new Counter();
        assert.equal(ctr._count, 0);
    });
    
    it('`increment`メソッドを持つ', () => {
        const ctr = new Counter();
        assert.equal(typeof ctr.increment === 'function', true);
    });
    
    it('`increment`メソッドを実行すると`_count`プロパティの値は1増える', () => {
        const ctr = new Counter();
        ctr.increment();
        assert.equal(ctr._count, 1);
    });
    
    it('`decrement`メソッドを持つ', () => {
        const ctr = new Counter();
        assert.equal(typeof ctr.decrement === 'function', true);
    });
    
    it('`decrement`メソッドを実行すると`_count`プロパティの値は1減る', () => {
        const ctr = new Counter();
        ctr.decrement();
        assert.equal(ctr._count, -1);
    });
});
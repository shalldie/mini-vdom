/**
 * 测试 h 函数
 */
import { h } from '../src';

describe('function h', () => {

    test('h(type: string, text?: string)', () => {
        const vnode = h('span', 'hello');
        expect(vnode.type).toBe('span');
        expect(vnode.children[0].text).toBe('hello');
    });

    test('h(type: string, children?: VNode[])', () => {
        const vnode = h('div#id.class1', [
            h('span[name=tom]')
        ]);

        expect(vnode.type).toBe('div');
        expect(vnode.data.attrs.class).toBe('class1');
        expect(vnode.children).toHaveLength(1);
        expect(vnode.children[0].data.attrs.name).toBe('tom');
    });

});

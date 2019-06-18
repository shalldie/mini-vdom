/**
 * 用于生成 vnode 的工厂函数
 */

import VNode, { IVNodeData } from "./VNode";
import { getType } from '../utils';


/**
 * 生成 VNode
 *
 * @export
 * @param {string} type 标签类型 '' - TextNode '!' - 注释节点 'string' - 标签类型
 * @param {string} [text] TextContent
 * @returns {VNode}
 */
export default function h(type: string, text?: string): VNode;

/**
 * 生成 VNode
 *
 * @export
 * @param {string} type 标签类型 '' - TextNode '!' - 注释节点 'string' - 标签类型
 * @param {VNode[]} [children] 子 VNode 数组
 * @returns {VNode}
 */
export default function h(type: string, children?: VNode[]): VNode;

/**
 * 生成 VNode
 *
 * @export
 * @param {string} type type 标签类型 '' - TextNode '!' - 注释节点 'string' - 标签类型
 * @param {IVNodeData} [data] vnode 需要包含的数据
 * @param {string} [text] TextContent
 * @returns {VNode}
 */
export default function h(type: string, data?: IVNodeData, text?: string): VNode;

/**
 * 生成 VNode
 *
 * @export
 * @param {string} type type 标签类型 '' - TextNode '!' - 注释节点 'string' - 标签类型
 * @param {IVNodeData} [data] vnode 需要包含的数据
 * @param {VNode[]} [children] 子 VNode 数组
 * @returns {VNode}
 */
export default function h(type: string, data?: IVNodeData, children?: VNode[]): VNode;

export default function h(type: string, b?: any, c?: any): VNode {
    let data: IVNodeData;
    let text: string;
    let children: VNode[];

    const bType = getType(b);
    const cType = getType(c);

    if (bType === 'object') {
        data = b;
        if (cType === 'array') {
            children = c;
        }
        else if (cType === 'string') {
            text = c;
        }
    }
    else if (bType === 'array') {
        children = b;
    }
    else if (bType === 'string') {
        text = b;
    }

    // 针对 h('div','content') 的简写形式
    if (type && text != null) {
        children = [h('', text)];
        text = undefined;
    }

    return new VNode(type, data, children, text);
}

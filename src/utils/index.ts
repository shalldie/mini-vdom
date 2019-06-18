/**
 * 工具库
 */


/**
 * 获取数据类型
 *
 * @export
 * @param {*} sender 要判断的数据
 * @returns {string}
 */
export function getType(sender: any): string {
    return Object.prototype.toString.call(sender).toLowerCase().match(/\s(\S+?)\]/)[1];
}

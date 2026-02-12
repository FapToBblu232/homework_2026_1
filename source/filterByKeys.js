/**
 * Функция filterByKeys, которая принимает объект obj и массив ключей keys,
 * и возвращает новый объект, содержащий только те ключи из исходного объекта,
 * которые указаны в массиве keys.
 *
 * @param {Object} obj - исходный объект
 * @param {Array<string>} keys - массив ключей, которые нужно оставить
 *
 * @example
 * // returns { a: 1, c: 3 }
 * filterByKeys({ a: 1, b: 2, c: 3 }, ['a', 'c']);
 *
 * @returns {Object}
 */
const filterObjectByKeys = (obj, keys) => {
    const result = {};
    for (const key of keys) {
        if (key in obj) {
            result[key] = obj[key];
        }
    }
    return result;
};

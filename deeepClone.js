
/**
 * 实现深拷贝
 */
function deepClone(o1, o2) {
    for (const key in o2) {
        if ( typeof o2[key] === 'object') {
            o1[key] = {};
            deepClone(o1[k], o2[k]);
        }
        o1[key] = o2[key]; 
    }
    return o1;
}
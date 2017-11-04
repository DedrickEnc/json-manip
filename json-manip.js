
class JSONManipulator {

    /**
     * @method getAllKeyString
     * 
     * @description
     * 
     * Takes an object as first parameter and return back an array of key
     * contained in this Object.
     * 
     * @param {Object} obj The object to scan 
     * @param {string} path empty string by default (optionnal) used to show the chain of keys 
     * @param {Array} res empty array by default (optionnal) used to store the result
     * 
     * @returns {Array} res a list of key string
     */

    getAllKeyString(obj, path = '', res = []) {
        const keys = Object.keys(obj).sort();

        keys.forEach((key) => {
            res.push(path.length > 0 ? path + '.' + key : key);

            if (typeof obj[key] === 'object' && Object.keys(obj[key]).length > 0) {
                if (path.length > 0) {
                    return res.concat(this.getAllKeyString(obj[key], path + '.' + key, res));
                } else {
                    return res.concat(this.getAllKeyString(obj[key], key, res));
                }
            }
        });

        return res;
    }
}

exports.JSONManipulator = JSONManipulator;
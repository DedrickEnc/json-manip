
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

    // removeLastKey(keyString, baseObejct) {
    //     let keys;
    //     keys = keyString.split('.');

    //     return keys.reduce((current, next) => {
    //         if (baseObejct[next]) {
    //             return current[next] = baseObejct[next];
    //         } else {
    //             if (typeof current[next] === 'string') {
    //                 delete current[next];
    //                 return current;
    //             } else {
    //                 return current;
    //             }
    //         }

    //     }, {});
    // }

    /**
     * @method isPresent
     * 
     * @description
     * 
     * Takes an object as first parameter, a key string as a second parameter
     *  and return back a boolean true if the key string exist in the object
     * and false if the key string does not exist
     * 
     * @param {Object} obj The object to scan 
     * @param {string} keyString The key string to search into the object 
     * 
     * @returns {Boolean} found The result of the search
     */
    isPresent(obj, keyString) {
        let found = true;
        let keys = keyString.split('.');
        let currentObj = obj;

        for (var i = 0; i < keys.length; i++) {
            currentObj = currentObj[keys[i]];
            if (!currentObj) {
                found = false;
                break;
            }
        }

        return found;
    }
}

exports.JSONManipulator = JSONManipulator;
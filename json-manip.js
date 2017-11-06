
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

    /**
     * @method removeLastKey
     * 
     * @description
     * 
     * Takes an object as first parameter, a key string as a second parameter
     *  and return back an object without the the provided last key
     * 
     * @param {Object} obj The object form which the last key wil be removed 
     * @param {string} path The key string containing the last key to remove 
     * 
     * @returns {Object} obj an object without the last key
     */
    removeLastKey(obj, keyString) {

        if (!this.isPresent(obj, keyString)) {
            return obj;
        }

        let keys = keyString.split('.');

        // if not a single key, delete directely
        if (keys.length === 1) {
            delete obj[keys.pop()];
            return obj;
        }

        const last = keys[keys.length - 1];
        const processedList = [];

        // This counter is important to make sure that we reached the last key
        let i = 0;
        keys.reduce((current, next) => {
            i++;

            if (typeof current[next] === 'object' && next !== last) {
                return current[next];
            } else if (next === last && i === keys.length) {
                delete current[next];
            } else {
                return current[next];
            }
        }, obj);

        return obj;
    }

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

    /**
     * @method getValue
     * 
     * @description
     * 
     * Takes an object as first parameter, a key string as a second parameter
     *  and return back a value of this object property represented by the key string
     * it return undefined if the key does not match 
     * 
     * @param {Object} obj The object to scan 
     * @param {string} keyString The key string to search into the object 
     * 
     * @returns {Object} currentValue the value of the key string in the object, could be any time of data
     */

    getValue(obj, keyString) {
        let keys = keyString.split('.');
        let currentValue;

        if (this.isPresent(obj, keyString)) {
            currentValue = obj;
            keys.forEach((key) => {
                currentValue = currentValue[key];
            });
        }

        return currentValue;
    }
}

exports.JSONManipulator = JSONManipulator;
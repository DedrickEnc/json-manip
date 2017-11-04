const JSONManipulator = require('../json-manip').JSONManipulator;

const jsonManipulator = new JSONManipulator();
const obj = {
    name: 'JSON Manipulator',
    preferences: {
    },
    food: {
        legume: 'Feuille'
    },
    references: {
        workMates: {
            "1": "Dupont",
            "2": "Du bois"
        }
    }
}

const keyStrings = jsonManipulator.getAllKeyString(obj);
const falseResult = jsonManipulator.isPresent(obj, 'name.food.meal'); // false
const trueResult1 = jsonManipulator.isPresent(obj, 'references.workMates.2'); //true
const trueResult2 = jsonManipulator.isPresent(obj, 'name'); //true

const res = jsonManipulator.removeLastKey(obj, 'food.legume');

console.log(res);
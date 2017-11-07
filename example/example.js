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

//getAllKeyString

const keyStrings = jsonManipulator.getAllKeyString(obj);

//isPresent

const falseResult = jsonManipulator.isPresent(obj, 'name.food.meal'); // false
const trueResult1 = jsonManipulator.isPresent(obj, 'references.workMates.2'); //true
const trueResult2 = jsonManipulator.isPresent(obj, 'name'); //true

//removeLastKey

const res = jsonManipulator.removeLastKey(obj, 'food.legume');

//getValue

const valueNo = jsonManipulator.getValue(obj, 'NOT.EXIST'); // undefined
const valueYes = jsonManipulator.getValue(obj, 'references.workMates.2'); // Du bois

//setValue
const setOK1 = jsonManipulator.setValue(obj, 'references.PREM', 'Premier');
const setOK2 = jsonManipulator.setValue(obj, 'preferences.UN.DEUX.TROIS', 3);
const setOK3 = jsonManipulator.setValue(obj, 'name', 'Kitamuka');
const setOK4 = jsonManipulator.setValue(obj, 'ID', '50');
const setOK5 = jsonManipulator.setValue(obj, 'food.meal', 'chocolate');
const setKO1 = jsonManipulator.setValue(obj, 'food.meal.name', 'something');

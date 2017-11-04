const JSONManipulator = require('../json-manip').JSONManipulator;

const jsonManipulator = new JSONManipulator();

const keyStrings = jsonManipulator.getAllKeyString({
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
});

console.log(keyStrings);

//should print : 
// [ 'food',
//   'food.legume',
//   'name',
//   'preferences',
//   'references',
//   'references.workMates',
//   'references.workMates.1',
//   'references.workMates.2' ]

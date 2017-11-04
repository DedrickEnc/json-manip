const expect = require('chai').expect;
const JSONManipulator = require('../json-manip').JSONManipulator;
const jsonManip = new JSONManipulator();

describe('JSON Manipulation test', function () {
    it('should return an empty list', function () {
        const list = jsonManip.getAllKeyString({});
        expect(list.length).to.equal(0);
    });

    it('should return a list of 8 keys', function () {
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
        };        
        const list = jsonManip.getAllKeyString(obj);
        expect(list.length).to.equal(8);
    });
});
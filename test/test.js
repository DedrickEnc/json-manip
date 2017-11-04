const expect = require('chai').expect;
const JSONManipulator = require('../json-manip').JSONManipulator;
const jsonManip = new JSONManipulator();

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

describe('JSON Manipulation test', function () {
    it('should return an empty list', function () {
        const list = jsonManip.getAllKeyString({});
        expect(list.length).to.equal(0);
    });

    it('should return a list of 8 keys', function () {
        const list = jsonManip.getAllKeyString(obj);
        expect(list.length).to.equal(8);
    });

    it('should return false for the key string name.food.meal', function () {
        const res = jsonManip.isPresent(obj, 'name.food.meal');
        expect(res).to.equal(false);
    });

    it('should return true for the key string references.workMates.2', function () {
        const res = jsonManip.isPresent(obj, 'references.workMates.2');
        expect(res).to.equal(true);
    });
});
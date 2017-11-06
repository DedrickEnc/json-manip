const expect = require('chai').expect;
const JSONManipulator = require('../json-manip').JSONManipulator;
const jsonManip = new JSONManipulator ();

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

const resObj = {
    name: 'JSON Manipulator',
    preferences: {
    },
    food: {
        legume: 'Feuille'
    },
    references: {
        workMates: {
            "2": "Du bois"
        }
    }
};

describe('JSON Manipulation test',   () => {
    it('should return an empty list',   () => {
        const list = jsonManip.getAllKeyString({});
        expect(list.length).to.equal(0);
    });

    it('should return a list of 8 keys',   () => {
        const list = jsonManip.getAllKeyString(obj);
        expect(list.length).to.equal(8);
    });

    it('should return false for the key string name.food.meal',   () => {
        const res = jsonManip.isPresent(obj, 'name.food.meal');
        expect(res).to.equal(false);
    });

    it('should return true for the key string references.workMates.2',   () => {
        const res = jsonManip.isPresent(obj, 'references.workMates.2');
        expect(res).to.equal(true);
    });

    it('should return the original objet if the key does not exist',   () => {
        const res = jsonManip.removeLastKey(obj, 'references.workMates.3');
        expect(res).to.equal(obj);
    });

    it('should suppress the last key successfully',   () => {
        const res = jsonManip.removeLastKey(obj, 'references.workMates.1');
        expect(res).to.not.be.equal(resObj);
    });

    it('should return undefined when trying to get a no existing key string', () => {
        const res = jsonManip.getValue(obj, 'NOT.EXIST');
        expect(res).to.equal(undefined);
    });

    it('should return a value when trying to get an existing key string value', () => {
        const res = jsonManip.getValue(obj, 'references.workMates.2');
        expect(res).to.equal("Du bois");
    });
});
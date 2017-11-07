# json-manip

This module manipulate a json object in many differents ways such as adding, removing, and read a property
Here is in detail the list of task you can perform with **json-manip**

* Listing all key of the object (`getAllKeyString`)
* Check if a keystring exist in the object (`isPresent`)
* Removing the last key of a key string (`removeLastKey`)
* Getting a key string value in the object (`getValue`)
* Setting a key string and its value in the object (`setValue`)

## Installation

  `npm install json-manip`

## Usage

### How to initialize ?
    `
      const JSONManipulator = require('json-manip').JSONManipulator;
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
    `

    **Every Example bellow will use the object above**

### getAllKeyString    

    ` 
      const list = jsonManip.getAllKeyString(obj);          

      // Should return : 
    
        [
          'food',
          'food.legume',
          'name',
          'preferences',
          'references',
          'references.workMates',
          'references.workMates.1',
          'references.workMates.2']
    `

### isPresent

    `
      const falseResult = jsonManipulator.isPresent(obj, 'name.food.meal'); // should return  false
      const trueResult = jsonManipulator.isPresent(obj, 'references.workMates.2'); // should return true
    `

### removeLastKey

    `
      JSONManipulator.removeLastKey(obj, 'references.workMates.1');

      // Should return : 

        {
          name: 'JSON Manipulator',
          preferences: {},
          food: { legume: 'Feuille' },
          references: { workMates: { "2": "Du bois" }}
        };
    `

### getValue

    `
      jsonManipulator.getValue(obj, 'references.workMates.2'); // Du bois
    `

### setValue

    `
      const res = jsonManipulator.setValue(obj, 'ID', '50'); // will add a property ```ID``` with the value ```50``` in the same level than ```name``` and return the edited object
      const res = jsonManipulator.setValue(obj, 'name', 'Manip'); // will edit the ```name``` property from ```JSON Manipulator``` to ```Manip```
      const res = jsonManipulator.setValue(obj, 'preferences.UN.DEUX.TROIS', 3); // will add a property ```TROIS``` into the sub object ```preferences``` every intermediate object will be created if they do not exist
      const res1 = jsonManipulator.setValue(obj, 'food.meal', 'chocolate'); // will add a property ```meal``` into sub object ```food```
      const res2 = jsonManipulator.setValue(obj, 'food.meal.name', 'something'); // will return te initial object if trying to set a confusing keystring (i.e trying to add a property ```name``` on ```meal``` which is a ```string```)
    `  

## Tests

  `npm test` or `npm run test`

## Contributing

Contribution are well come through pull request
Add unit tests for any new or changed functionality.

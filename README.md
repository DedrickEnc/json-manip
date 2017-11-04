# json-manip

This module manipulate a json object in many differents ways such as adding, removing, and read a property
Here is in detail the list of task you can perform with **json-manip**

* Listing all key of the object (`getAllKeyString`)
* Check if a keystring exist in the object (`isPresent`)
* Removing the last key of a key string (`removeLastKey`);

## Installation

  `npm install json-manip`

## Usage    

    ```    
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
          const list = jsonManip.getAllKeyString(obj);          
     ```

    Should return : 
    
    ``` 
      [
        'food',
        'food.legume',
        'name',
        'preferences',
        'references',
        'references.workMates',
        'references.workMates.1',
        'references.workMates.2']
      ```

      ```
        const falseResult = jsonManipulator.isPresent(obj, 'name.food.meal'); // should return  false
        const trueResult = jsonManipulator.isPresent(obj, 'references.workMates.2'); // should return true
      ```

      ```
        JSONManipulator.removeLastKey(obj, 'references.workMates.1');

        should return : 

        {
          name: 'JSON Manipulator',
          preferences: {},
          food: { legume: 'Feuille' },
          references: { workMates: { "2": "Du bois" }}
        };
      ```


## Tests

  `npm test` or `npm run test`

## Contributing

Contribution are well come through pull request
Add unit tests for any new or changed functionality.

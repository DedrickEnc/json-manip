# json-manip

This module manipulate a json object in many differents ways such as adding, removing, and read a property

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
        'references.workMates.2'
    ]
    ```

## Tests

  `npm test`

## Contributing

Contribution are well come through pull request
Add unit tests for any new or changed functionality.

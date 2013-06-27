var assert = require('chai').assert
var expect = require('chai').expect
var original = require("../jsonpath-0.8.0.js").jsonPath;
var newer = require("../jsonpath-caeost.js").jsonPath;

var jsonObject = {x: "cat", z: "dog", y: {x: "horse", cat: "pilaf", array: [1,2,3,4,5,6]}, arr: [{dog: "meow"},{dog:"meow"},{dog:"cough"}]};

var store = { "store": {
    "book": [ 
      { "category": "reference",
        "author": "Nigel Rees",
        "title": "Sayings of the Century",
        "price": 8.95
      },
      { "category": "fiction",
        "author": "Evelyn Waugh",
        "title": "Sword of Honour",
        "price": 12.99
      },
      { "category": "fiction",
        "author": "Herman Melville",
        "title": "Moby Dick",
        "isbn": "0-553-21311-3",
        "price": 8.99
      },
      { "category": "fiction",
        "author": "J. R. R. Tolkien",
        "title": "The Lord of the Rings",
        "isbn": "0-395-19395-8",
        "price": 22.99
      }
    ],
    "bicycle": {
      "color": "red",
      "price": 19.95
    }
  }
};

describe('old and new', function() {
	it("should have matching responses", function() {
		var expression = "$..author";
		expect(original(store, expression)).to.deep.equal(newer(store, expression));
	});
});

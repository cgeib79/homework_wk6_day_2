const assert = require('assert');
const Hero = require('../hero.js')

describe('Hero', function(){
  beforeEach(function(){
    hero = new Hero('Superman', 'super-healthy', 'soylent', 'Hi, I am Superman')
  });

  it('should have a name', function(){
    //arrange
    const hero = new Hero('Superman');
    //act
    const actual = hero.name;
    //assert
    assert.strictEqual(actual, 'Superman')
  });

xit('should have health status', function(){
  //arrange
  const hero = new Hero(1);
  //act
  const actual = hero.health;
  //assert
  assert.strictEqual(actual, 1)
});

xit('should have favourite_food', function(){
  //arrange
  const hero = new Hero('soylent');
  //act
  const actual = hero.favourite_food;
  //assert
  assert.strictEqual(actual, 'soylent')
});

xit('should be able to talk and say name', function(){
//arrange
const hero = new Hero('talk', 'Hi I am Superman');
//act
const actual = hero.talk;
//assert
assert.strictEqual(actual, 'Hi I am Superman');
});

xit('a collection of tasks to complete')
function(){
//arrange
const hero = new Hero('Fly');
//act
const actual = hero.task_fly;
//assert
assert.strictEqual(actual, 'Fly')
});

xit('a collection of tasks to complete')
function(){
//arrange
const hero = new Hero('Rescue');
//act
const actual = hero.task_rescue;
//assert
assert.strictEqual(actual, 'Rescue')
});

xit('a collection of tasks to complete')
function(){
//arrange
const hero = new Hero('task_fly_difficulty_level');
//act
const actual = hero.task_fly_difficulty_level;
//assert
assert.strictEqual(actual, 'Easy')
});

xit('a collection of tasks to complete')
function(){
//arrange
const hero = new Hero('task_rescue_difficulty_level');
//act
const actual = hero.task_rescue_difficulty_level;
//assert
assert.strictEqual(actual, 'Difficult')
});

xit('a collection of tasks to complete')
function(){
//arrange
const hero = new Hero('task_fly_reward');
//act
const actual = hero.task_fly_reward;
//assert
assert.strictEqual(actual, 10)
});

xit('a collection of tasks to complete')
function(){
//arrange
const hero = new Hero('task_rescue_reward');
//act
const actual = hero.task_rescue_reward;
//assert
assert.strictEqual(actual, 100)
});

describe('Health', function(){
  it('should start with original health value ', function(){
    const actual = hero.health;
    assert.deepStrictEqual(actual, 1)
});

it ('should add replenishment_value to health value', function(){
const actual = hero.eatFood();
assert.deepStrictEqual(actual, 2);
});

})

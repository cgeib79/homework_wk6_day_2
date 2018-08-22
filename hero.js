const Hero =
function(name, health, favourite_food, talk, task_fly, task_rescue, task_fly_difficulty_level,task_fly_reward, task_rescue_reward ){
  this.name = name;
  this.health = health;
  this.favourite_food = favourite_food;
  this.talk = talk;
  this.tasks = [];
}

const Task = function(task_fly, task_rescue, difficulty_level, urgency_level, task_reward ){
  this.task_fly = task_fly;
  this.task_rescue = task_rescue;
  this.difficulty_level = difficulty_level;
  this.urgency_level = urgency_level;
  this.task_reward = task_reward;
}

const Food =
function(food_name, replenishment_value ){
  this.food_name = food_name;
  this.replenishment_value = replenishment_value;
}

Hero.prototype.eatFood = function() {
  return this.health.value.to_i;
}

module.exports = Hero;

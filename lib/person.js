var Person = function(firstName, lastName, age, weight, height, friends){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age !== undefined ? age : 30;
  this.weight = weight !== undefined ? weight : 150;
  this.height = height !== undefined ? height : Math.floor(Math.random()*(19)+60);
  this.friends = friends !== undefined ? friends : [];
};


Person.prototype = {
  fullName: function(){
    return this.firstName + ' ' + this.lastName;
  },

  weightStone: function(){
    return this.weight * 0.0714286;
  },

  addFriend: function(person){
    this.friends.push(person);
    return this.friends;
  },

  removeFriend: function(person){
    index = this.friends.indexOf(person);
    return this.friends.splice(index, 1);
  },

  greetPeople: function(people, greeting){
    var hello = [];

    !people ? people = this.friends : people;
    !greeting ? greeting = 'Hi' : greeting;
    if (people.length >= 1){
      for(var i = 0; i < people.length; i++){
        hello.push(greeting + ' ' + people[i].firstName + ' ' + people[i].lastName);
      };
    } else {
      hello = 'You have no friends!';
    }
    return hello !== 'You have no friends!' ? hello.join(', ') : hello;
  }
};

var broc = new Person('Broc', 'Broccoli'),
    jimmy = new Person('Jimmy', 'Vulmer'),
    stan = new Person('Stan', 'Marsh'),
    kyle = new Person('Kyle', 'Broflovski'),
    cartman = new Person('Eric', 'Cartman'),
    marvin = new Person('Marvin', 'Marvindude'),
    ryan = new Person('Ryan', 'Smith'),
    alice = new Person('Alive', 'Ardvaark'),
    noah = new Person('Noah', 'Kurinsky'),
    bill = new Person('Bill', 'Bob');

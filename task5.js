const prompt = require('prompt-sync')();
 
// Type your code below this line!
function FriendsList() {
  this.friends = [];

  this.addFriend = function(name) {
    this.friends.push(name);
  };
}

const myfriends = new FriendsList();
 
const quantityNames = parseInt(prompt("How many names do you have?: "));
 
for (let i = 0; i < quantityNames; i++) {
  const name = prompt("Enter a name: ");
  myfriends.addFriend(name);
}
 
console.log(myfriends.friends);
// Type your code above this line!
 
 


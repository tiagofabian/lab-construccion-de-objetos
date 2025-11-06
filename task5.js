// import promptSync from "prompt-sync"

// // Type your code below this line!
// function FriendList(times) {
//   this.times = times;
//   this.list = [];
  
//   for(let i = 2; i < this.times; i++) {
//     let newValue = promptSync("Ingresa un amigo");
//     this.list.push(newValue);
//   }
// }

// const times = process.argv[2]

// const newFriendList = new FriendList(times);
// // Type your code above this line!

// console.log(newFriendList.list)

import PromptSync from "prompt-sync"
 
// Type your code below this line!
function FriendsList() {
this.friends = [];
 
this.addFriend = function(name) {
  this.friends.push(name);
};
}
 
const prompt = PromptSync();
const myfriends = new FriendsList();
 
const num = Number(prompt("How many names do you have?: "));
 
for (let i = 0; i < num; i++) {
  const name = prompt("Enter a name: ");
  myfriends.addFriend(name);
}
 
console.log(myfriends.friends);
// Type your code above this line!
 
 


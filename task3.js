process.argv[3]// Type your code below this line!
 
function Mail() {
  this.subject = process.argv[3];
  this.message = process.argv[4];
  
  this.printMail = function() {
      console.log(this.subject + ": " + this.message);
  };
}
 
// Type your code above this line!

const newMail = new Mail("hello", "world");

newMail.printMail();
 
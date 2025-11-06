process.argv[3]// Type your code below this line!
 
function Mail(subj, msg) {
    this.subject = process.argv[2];
    this.message = process.argv[3];
   
    this.printMail = function() {
        console.log(this.subject + ": " + this.message);
    };
}
 
// Type your code above this line!
 
const newMail = new Mail();
newMail.printMail();
 
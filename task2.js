import prompt from "prompt-sync"

function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
}
  
  // Type your code below this line!

  const subjUser = process.argv[2]
  const messageUser = process.argv[3]
  
  const newMail = new Mail(subjUser, messageUser)
  
  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message)
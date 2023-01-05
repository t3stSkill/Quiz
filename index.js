var readlineSync = require('readline-sync')

var score = 0
var questions = [
  {
    question: "PM of India",
    ans: "Modi"
  },
  {
    question: "Capital of India",
    ans: "Delhi"
  },
  {
    question: "Teach hub of India",
    ans: "Bangalore"
  },
  {
    question: "National game of India",
    ans: "Hocky"
  }
]

var userName = readlineSync.question('Enter your user name: ')

console.log(`Welcome ${userName}`)
console.log('----------------------------------')

function play() {

  for (var i = 0; i < questions.length; i++) {
    console.log(questions[i].question)
    var userAns = readlineSync.question("Enter your ans: ")
    if (userAns.toUpperCase() === questions[i].ans.toUpperCase()) {
      console.log('Correct Ans')
      console.log(`Your score is ${score += 1} / ${questions.length}`)
      console.log('----------------------------------')
    } else {
      console.log('----------------------------------')
      console.log('Wrong Ans')
      console.log(`Your score is ${score} / ${questions.length}`)
      console.log('----------------------------------')
      // break
    }
  }
}

play()

// console.log(Object.keys(question).length)
// console.log(question[0].ans)
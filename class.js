//Question 1
class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.isAvailable = true;
    }
    toggleAvailability() {
      this.isAvailable = !this.isAvailable;
    }
  }
  class Rental {
    constructor(car, renterName, rentalStartDate, rentalEndDate) {
      this.car = car;
      this.renterName = renterName;
      this.rentalStartDate = new Date(rentalStartDate);
      this.rentalEndDate = new Date(rentalEndDate);
    }
    calculateRentalDuration() {
      const oneDay = 24 * 60 * 60 * 1000;
      const diffDays = Math.round(Math.abs((this.rentalEndDate - this.rentalStartDate) / oneDay));
      return diffDays;
    }
  }
  let myCar = new Car("Toyota", "Camry", 2020);
  let myRental = new Rental(myCar, "John Doe", "2024-04-01", "2024-04-10");
  let rentalDuration = myRental.calculateRentalDuration();
  console.log(`The rental duration is ${rentalDuration} days.`);



  //Question 2
  class Question {
    constructor(text, options, correctAnswer) {
        this.text = text;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }
    checkAnswer(userAnswer) {
        return userAnswer === this.correctAnswer;
    }
}
const mySentence = new Question(
    "Hello my name is Jane",
    ["Ilhan", "Liz", "Rose", "Kim"],
    "Jane"
);
console.log(mySentence.checkAnswer("Jane"));
class Quiz {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
    }
    addQuestion(question) {
        this.questions.push(question);
    }
    nextQuestion() {
        this.currentQuestionIndex++;
    }
    submitAnswer(userAnswer) {
        const currentQuestion = this.questions[this.currentQuestionIndex];
        if (currentQuestion.checkAnswer(userAnswer)) {
            this.score++;
        }
        this.nextQuestion();
    }
}
const question = new question();
const question1 = new question("What is 2 + 2?","4");
const question2 = new question("I love coding", )
question.addQuestion(question1);
question.addQuestion(question2);
question.submitAnswer("4");
question.submitAnswer("Shakespeare");
console.log("Score:", question.score);






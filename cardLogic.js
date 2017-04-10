// constructor function used to create programmers objects
function BasicCard(front, back) {
  this.front = front;
  this.back = back;

}

// creates the frontoftheCard method and applies it to the front card object
BasicCard.prototype.frontoftheCard = function() {
  console.log("Front of the card asks: " + this.front);
};

// creates the backoftheCard method and applies it to the front card object
BasicCard.prototype.backoftheCard = function(){
  console.log("The answer on the back is: " + this.back);
};

//Simply testing the Basic Card constructor
var starTest = new BasicCard("What is Anakin's Last Name?", "Skywalker");

starTest.frontoftheCard();

starTest.backoftheCard();

// A variable to check whether the Cloze Card is valid or not
var cardCheck;

//Constructor function that only runs if the arguments are valid
function ClozeCard(text, cloze){
  if (text.includes(cloze)){
    cardCheck = true;
    console.log("Your card is valid!");
    this.cloze = cloze;
    this.partialText = text.replace(cloze, "__?__");
    this.fullText = text;
  } else{
    cardCheck = false;
    console.log("Your card doesn't work!")
  }
  
}

//Creates the Cloze printing function
ClozeCard.prototype.Cloze = function() {
  if (cardCheck){
  console.log("The Cloze-deleted answer is: " + this.cloze);
  } else {
    console.log("Your card was invalid sorry!");
  }
};

//Creates the Partial text printing function
ClozeCard.prototype.Partial = function() {
  if (cardCheck){
  console.log("The partial question is: " + this.partialText);
  } else {
    console.log("Your card was invalid sorry!");
  }
};

//Creates the Full text printing function
ClozeCard.prototype.Full = function() {
  if (cardCheck){
  console.log("The full answer is: " + this.fullText);
  } else {
    console.log("Your card was invalid sorry!");
  }
};

//Simply testing the Cloze Card function along with the other printing functions
var starTest2 = new ClozeCard("Darth Vader's real name is Anakin Skywalker.", "Anakin");

starTest2.Partial();
starTest2.Cloze();
starTest2.Full();
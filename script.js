const quotes = [
  {
    Name: "W.C.Fields",
    Quote: "It aint what they call you, its what you answer to.",
  },

  {
    Name: "William Shakespeare, Romeo and Juliet",
    Quote:
      "Whats in a name? that which we call a rose By any other name would smell as sweet.",
  },
  {
    Name: "Rick Riordan, The Lightning Thief",
    Quote: "Names have power.",
  },
  {
    Name: "Jerry Spinelli",
    Quote:
      "Im not my name.My name is something I wear, like a shirt.It gets worn.I outgrow it, I change it.",
  },
  {
    Name: "Jodi Picoult, Handle with Care",
    Quote:
      "Just because you didnt put a name to something did not mean it wasnt there.",
  },
  {
    Name: "George Washington Carver",

    Quote:
      "I wanted to know the name of every stone and flower and insect and bird and beast.I wanted to know where it got its color, where it got its life - but there was no one to tell me.",
  },
  {
    Name: "Michel Foucault",
    Quote:
      "Power is not an institution, and not a structure; neither is it a certain strength we are endowed with; it is the name that one attributes to a complex strategical situation in a particular society.",
  },
  {
    Name: "Abraham Lincoln",
    Quote:
      " There is another old poet whose name I do not now remember who said, Truth is the daughter of Time.",
  },
 {
    Name: " Winston Churchill ",
    Quote:
      "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.", 
  },
 {
    Name: "Will Rogers",
    Quote:
      " Don’t Let Yesterday Take Up Too Much Of Today.",
  },
 {
    Name: "Unknown",
    Quote:
      " You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.",
  },
 {
    Name: "Inspirational Quote By Vince Lombardi",
    Quote:
      " It’s Not Whether You Get Knocked Down, It’s Whether You Get Up. ",
  },
 {
    Name: "Steve Jobs ",
    Quote:
      " If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",
  },
 {
    Name: "Rob Siltanen ",
    Quote:
      " People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.",
  },
 {
    Name: "Og Mandino ",
    Quote:
      " Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.",
  },
 {
    Name: " Mohnish Pabrai ",
    Quote:
      " Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur. ",
  },
 {
    Name: "Maya Angelou  ",
    Quote:
      " We May Encounter Many Defeats But We Must Not Be Defeated.",
  },
 {
    Name: "Johann Wolfgang Von Goethe ",
    Quote:
      " Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do. ",
  },


];

const quoteBtn = document.querySelector("#quoteBtn");
const quoteAuthor = document.querySelector("#quoteAuthor");
const quote = document.querySelector("#quote");

quoteBtn.addEventListener("click", displayQuote);

function displayQuote() {
  let number = Math.floor(Math.random() * quotes.length);
  quoteAuthor.innerHTML = quotes[number].Name;
  quote.innerHTML = quotes[number].Quote;
}

/*
const simpleQuotes=[{
    Name:'Author Number 1',
    Quote:'Quote Number 1'
}
{
    Name:'Author Number 2',
    Quote:'Quote Number 2'
}
]*/

// Q1. Create a variable called `denzel` - that can't be redeclared - and assign it the string 'please denzel, help me'
const denzel = 'please denzel, help me';

// Q2. Use the variable `actor` to create a new variable called `inspirational` that is assigned the string "Is Denzel Washington an inspirational actor?"
const actor = 'Denzel Washington';
const inspirational = 'Is '+actor+' an inspirational actor?'

// Q3  Create an object called `family` and give it the following properties:
// family has been `married` on "1983" (Number)
// family is not `presidentOfTheUnitedStates` (boolean)
// family has `children` called "John David", "Katia", "Olivia" and "Malcolm" (array of strings)
const family = {
  'married': 1983,
  'presidentOfTheUnitedStates': false,
  'children': ['John David', 'Katia', 'Olivia', 'Malcolm']
};

// Q4. Change
// * the `name` stage to "A Raisin in the Sun"
// * the `year` stage to "2014"
// by using the dot notation
const stage = {
  'name': 'Fences',
  'year': '2010'
};

family.name = 'A Raisin in the Sun';
family.year = 2014;

// Q5. Change the `movie` "glory" to "Training Day" using square bracket notation
const awards = {
  'movie': 'glory'
};

awards['movie']= 'Training Day'

// Q6. Create an object called "earlywork"
// The key should be the movie name and the value the release year
// Movies are
// * Carbon Copy (1981)
// * A Soldier Story (1984)
// * Power (1986)
// * Cry Freedom (1987)
// * For Queen and Countryy (1988)

const earlywork = {
  'Carbon Copy' : 1981, 
  'A Soldier Story' : 1984, 
  'Power': 1986, 
  'Cry Freedom': 1987, 
  'For Queen and Country': 1988
};

// Q7. Return a new array from `debaters` with all item in uppercase
const debaters = ['we do', 'what we have to do', 'in order to do', 'what we want to do'];

const upper = debaters.map(element => {
  return element.toUpperCase();
});

// Q8. Using this array.
// Do the following 5 steps
const directors = ['spikelee', 'ridleyscott', 'zemeckis'];

// 1. add "tonyscott" value to the end of `directors` array
directors.push('tonyscott');

// 2. remove "spikelee" value and store it in a variable called firstDirector
const firstDirector= directors.splice(0,1);

// 3. add "himself" value to the start of `directors` array
directors.unshift('himself');

// 4. remove "ridleyscott" value from the array and store it in a variable called secondDirector
const secondDirector = directors.splice(1,1);

// 5. let 'zemeckis' in the array but put a copy of it on a variable called thirdDirector
const thirdDirector=directors[2];

// Q9. Write the function `duplicate` that return the expected result
console.log(duplicate(['Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child']));
// ❯ ['Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child', 'Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child']
function ducplicate(a){
  return a.push.apply(a, a)
}

// Q10. Refactor the current ES5-style function `police` in ES6-style.
const police = function (names) {
  const results = [];

  for (let i = 0; i < names.length; i++) {
    results.push(names[i] + 'I am the police');
  }
  return results;
};

const quotes = ['You will never see the light of... ', 'I run shit around here ', 'King Kong aint got shit on me '];

console.log(police(chorus));
 // ❯ ['You will never see the light of... I am the police', 'I run shit around here I am the police', 'King Kong aint got shit on me I am the police'];


// Q11. Related to the https://www.tvmaze.com/people/66167/denzel-washington link
// What's the query selector to get all Cast Credits titles (Live with Kelly & Ryan, The Late Show with Stephen Colbert...).

document.querySelector('#credits > div > article:nth-child(2) > div > div > strong > a')

// Q12. Related to the https://www.tvmaze.com/people/66167/denzel-washington link
// How many http requests are performed to render the page?

//32 requests are performed to render the page according to the Network tool in the inspector.

// Q13. Related to the following api call with "curl"
// ❯ curl "http://api.tvmaze.com/people/6616"
// Could you describe and explain the response?

// The response is a json object containing data about the actor Zach Shirey. Specifically, you can find an ID, the URL to the tvmaze profile, the name and the gender of the actor, an image in two different resolutions, an update ID and an other URL


// Q14. Refactor the following codebase with a promise notation
fs.readFile(filePath, function(err, data) {
  if (err) {
    // handle the error, the return is important here
    // so execution stops here
    return console.log(err)
  }
  // use the data object
  console.log(data)
})

// Q15. Refactor the following codebase with async/await notation

const refactor = async() => {
  try{
  fetch('http://api.tvmaze.com/search/people?q=denzel+washington')
  .then(response => {
    return await response.json();
  })
  .then(data => {
    const {person} = data[0];
    const {id} = person;

    return await fetch(`http://api.tvmaze.com/people/${id}/castcredits?embed=show`);
  })
  .then(response => {
    return await response.json();
  })
  .then(console.log);
  }
  catch(error){
    console.error(error);
  }
}
// Q16. Give me at least 3 memorable websites that engage to continue (because of nice UX/UI AND avoid to give me facebook, airbnb etc...)
//https://www.thomann.de/gb/index.html  https://www.w3schools.com/  https://www.vinted.fr/ 

// Q17. Describe an ESILV project that you worked on that you’re proud of?
// For our 2nd year, I had the chance to build a bouldering wall which could display different routes using LED lights underneath each hold. We added multiple difficulties in order for the project to be enjoyable by beginers and advanced climbers.

// Q18. Describe an ESILV project that you worked on that you’re not so proud of?
// I am not so proud of my Web Aplications' project because I could not find the motivation to put my all to it even if the project was much interesting and usefull for my professional life.

// Q19. What are some things you like about the developer tools you use?
// What I like about my developer tools are mostly the recommandations of functions while I am coding and the visual personalization depending on the light around me.

// Q20. Last question: could you explain me - in your terms - why the title of the course is "Web Application Architecture(s)" and not "Web Application Architecture"?
// To me, the s is explained by the multiple different solutions to a single problem.
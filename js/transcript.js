/****************************************
 * This is the set of JavaScript statements that we execute inside of the
 * console against the `index.html` file.
 ****************************************/

/*
 * Selecting elements.
 */

// Returns a single element. This is because we can't every have more than
// one element with the same id. Note that we don't include a '#' for the id
var article = document.getElementById('home-page');

// Returns a list of elements. This is because we can have a number
// of <section> elements on the page
var sections = article.getElementsByTagName('section');

// Also returns a list of elements that match the class name. This is because
// unlike the ids, we can have numerous instances of elements with the same
// class names. Note that we don't include a '.' for the class
var leads = document.getElementsByClassName('lead');

// Let's look at the text content of the .lead element
var lead = leads[0];
lead.textContent;

// Very flexible way of finding elements in the DOM. Returns first element found
var article = document.querySelector('#home-page');
var section = document.querySelector('section');
var lead = document.querySelector('.lead');

// Can get all matched results. This returns a list
var sections = document.querySelectorAll('section');

// Let's look at an individual node and see it's children and it's parent
var article = document.getElementById('home-page');

article.children;
article.parentElement;
article.nextElementSibling
article.firstElementChild;
article.lastElementChild;

let section = article.firstElementChild;

/*
 * Creating new elements
 */
 
// Create a new li to go in the nav
var li = document.createElement('li');

// Give it a class name
li.classList.add('last');

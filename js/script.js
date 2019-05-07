
// List of random quotes to be displayed.
const quotes = [
    {
        quote: "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
        source: "Helen Keller",
        citation: "We Bereaved",
        year: "1929",
        flag: false
    },
    {
        quote: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.",
        source: "Mark Twain",
        tag: "Humor",
        flag: false
    },
    {
        quote: "I'm a success today because I had a friend who believed in me and I didn't have the heart to let him down.",
        source: "Abraham Lincoln",
        tag: "Politics",
        flag: false
    },
    {
        quote: "Our greatest fear should not be of failure... but of succeeding at things in life that don't really matter.",
        source: "Francis Chan",
        flag: false
    },
    {
        quote: "It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things",
        source: "Leonardo Da Vinci",
        flag: false
    }
];

// number holds the index of the last quote to be randomly chosen from "quotes".
var number = -1;

// Chooses one of the quotes randomly and returns it.
function getRandomQuote(quotes) {

    // Get a random number.
    var randomNumer = Math.floor(Math.random() * quotes.length);

    // quotes are chosen one at a time until the list is exhausted.
    // this if statement is for when the list is exhausted to save the 
    // index of the last chosen quote so that when a random number is chosen
    // it is not the same as the previous quote.
    if (number === randomNumer) {
        if (randomNumer === quotes.length - 1) {
            randomNumer = 0;
        } else {
            randomNumer += 1;
        }
    }

    // if a quote has not been used yet set its flag to true.
    if (quotes[randomNumer].flag === false) {
        quotes[randomNumer].flag = true;

    // else ...
    } else {

        // start itterating over "quotes" till you find one with a false flag.
        var count = 0;

        // while flags are true.
        while (quotes[randomNumer].flag) {

            // increase the count.
            randomNumer += 1;
            count += 1;

            // randomNumer starts out at some point in the array of quotes
            // when it reaches the end set it to the beginning.
            if (randomNumer === quotes.length) {
                randomNumer = 0;
            }

            // when count reaches the size of the array of quotes
            // stop counting.
            if (count === quotes.length) {
                break;
            }
        }

        // if none of the quotes have flags set to false.
        // clear all the flags and set them to false.
        if (count === quotes.length) {
            for (var i = 0; i < quotes.length; i += 1) {
                quotes[i].flag = false;
            }

        }

        // set the current random quotes flag.
        quotes[randomNumer].flag = true;
        
    }

    // save the value of the randomNumer for
    // when the quotes array is exhausted and
    // return the random quote.
    number = randomNumer;
    return quotes[randomNumer];
}

// Gets random quote and prints it to the screen.
function printQuote() {

    // Get random quote.
    var quote = getRandomQuote(quotes);

    // add quote to varible.
    var HTMLstring = `<p class="quote">${quote.quote} </p><p class="source">${quote.source}`;

    // if citation exists add to varible.
    if (quote.citation != null) {
        HTMLstring += `<span class="citation">${quote.citation}</span>`;
    }

    // if year exists add to varible.
    if (quote.year != null) {
        HTMLstring += `<span class="year">${quote.year}</span>`
    }

    // if year exists add to varible.
    if (quote.tag != null) {
        HTMLstring += `<span class="tag">${quote.tag}</span>`;
    }
    // close paragraph on varible.
    HTMLstring += "</p>";

    // write varible to html.
    document.getElementById('quote-box').innerHTML = HTMLstring;

    // randomly change the background color.
    document.body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}

// On mouse click print a new qoute to the screen.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// After 20 seconds print a new quote to the screen.
//setInterval(printQuote, 20000);
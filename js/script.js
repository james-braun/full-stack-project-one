
// List of random quotes to be displayed.
const quotes = [
    {
        quote: "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
        source: "Helen Keller",
        citation: "We Bereaved",
        year: "1929"
    },
    {
        quote: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.",
        source: "Mark Twain",
        tag: "Humor"
    },
    {
        quote: "I'm a success today because I had a friend who believed in me and I didn't have the heart to let him down.",
        source: "Abraham Lincoln",
        tag: "Politics"
    },
    {
        quote: "Our greatest fear should not be of failure... but of succeeding at things in life that don't really matter.",
        source: "Francis Chan"
    },
    {
        quote: "It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things",
        source: "Leonardo Da Vinci"
    }
];

// Chooses one of the quotes randomly and returns it.
function getRandomQuote(quotes) {
    var randomNumer = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumer];
}

// Gets random quote and prints it to the screen.
function printQuote() {

    // Get random quote.
    var quote = getRandomQuote(quotes);

    // varible to build new quote.
    HTMLstring = "";

    // add quote to varible.
    HTMLstring = `<p class=\"quote\">${quote.quote} </p><p class=\"source\">${quote.source}`;

    // if citation exists add to varible.
    if (quote.citation != null) {
        HTMLstring += `<span class=\"citation\">${quote.citation}</span>`;
    }

    // if year exists add to varible.
    if (quote.year != null) {
        HTMLstring += `<span class=\"year">${quote.year}</span>`
    }

    // if year exists add to varible.
    if (quote.tag != null) {
        HTMLstring += `<span class=\"tag\">${quote.tag}</span>`;
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
setInterval(printQuote, 20000);
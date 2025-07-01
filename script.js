/**
 * An array of quote objects, each containing a 'text' and 'author' property.
 * Used to randomly display inspirational quotes in the application.
 */
const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
    { text: "That's one small step for man, one giant leap for mankind.", author: "Neil Armstrong" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
    { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" }
];

// function to get a random quote with animated transitions
function generateQuote() {
    const quoteElem = document.getElementById("quote");
    const authorElem = document.getElementById("author");

    // Add fade-out class
    quoteElem.classList.add("fade-out");
    authorElem.classList.add("fade-out");

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElem.innerText = quotes[randomIndex].text;
        authorElem.innerText = `- ${quotes[randomIndex].author}`;

        // Remove fade-out, add fade-in
        quoteElem.classList.remove("fade-out");
        authorElem.classList.remove("fade-out");
        quoteElem.classList.add("fade-in");
        authorElem.classList.add("fade-in");

        // Remove fade-in after animation completes
        setTimeout(() => {
            quoteElem.classList.remove("fade-in");
            authorElem.classList.remove("fade-in");
        }, 500);
    }, 500);
}
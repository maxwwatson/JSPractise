
// 17 Quotes
const QUOTES = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        name: "Nelson Mandela"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        name: "Walt Disney"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        name: "Steve Jobs"
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        name: "Eleanor Roosevelt",
    },
    {
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        name: "Oprah Winfrey",
    },
    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        name: "James Cameron",
    },
    {
        quote: "Life is what happens when you're busy making other plans." ,
        name: "John Lennon"
    },
    {
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        name: "Mother Teresa",
    },
    {
        quote: "When you reach the end of your rope, tie a knot in it and hang on.",
        name: "Franklin D. Roosevelt",
    },
    {
        quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        name: "Robert Louis Stevenson",
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        name: "Eleanor Roosevelt",
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        name: "Aristotle",
    },
    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        name: "Ralph Waldo Emerson",
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        name: 'Maya Angelou',
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        name: 'Nelson Mandela ',
    },
    {
        quote: "Never let the fear of striking out keep you from playing the game.",
        name: 'Babe Ruth',
    },
    {
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        name: 'Thomas A. Edison',
    }


]

function randomQuote() {
    let number1 = randomNumber();
    let quote1 = QUOTES[number1].quote;
    let author = QUOTES[number1].name;
    let elemQuote = document.getElementById("quote");
    let elemAuthor = document.getElementById("author");
    // elemQuote.innerHTML = quote1;
    $(document).on('click', '#quote-btn', function () {
        $("#quote").html(quote1);
        $("#author").html(author);
    });
}

function randomNumber() {
    let quotes = QUOTES.length;
    return (
        Math.floor(Math.random() * quotes)
    );
}
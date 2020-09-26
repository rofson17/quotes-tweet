const quotes = document.querySelector('.text');
const writter = document.querySelector('.author');
const btn = document.getElementById('btn');
const twitter = document.querySelector(".twitter");

// twitte data
const twitteNow = () => {
    let twitter = `https://twitter.com/intent/tweet?text=${quotesData.text}`;
    window.open(twitter);
}

// get data from api
let realData = '';
let quotesData = '';
const newQuotes = () => {
    let random = Math.floor(Math.random() * 1600);
    quotesData = realData[random];

    quotesData.author == null ? (writter.innerText = Unknown) : (writter.innerText = `By, ${quotesData.author}`);

    quotes.innerHTML = `${quotesData.text}`;

};

const getQuotes = async () => {

    const api = "https://type.fit/api/quotes";

    try {
        let data = await fetch(api);
        realData = await data.json();

        newQuotes();

        // console.log(realData[0]);
    } catch (error) { }

}
twitter.addEventListener('click', twitteNow);
btn.addEventListener('click', newQuotes);
getQuotes();

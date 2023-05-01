const quote = document.querySelector("#cont"),
auth = document.querySelector(".author"),

quoteBtn = document.querySelector(".extras button");
soundBtn = document.querySelector(".sound");
copyBtn = document.querySelector(".copy");
twitterBtn = document.querySelector(".twitter");

function randomQuote(){
    quoteBtn.innerHTML = "Loading Quote";
    fetch("https://api.quotable.io/random").then(res=> res.json()).then(result =>{
        console.log(result);

        quote.innerHTML = result.content;
        auth.innerHTML = result.author;
        quoteBtn.innerHTML = "New Quote";
    });
}

soundBtn.addEventListener("click",()=>{
    let utterance = new SpeechSynthesisUtterance(`${quote.innerHTML}`);
    let snauthor = new SpeechSynthesisUtterance(`by ${auth.innerHTML}`);
    speechSynthesis.speak(utterance);
    speechSynthesis.speak(snauthor);

});

copyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(quote.innerHTML);

});

twitterBtn.addEventListener("click",()=>{
    let tweet = `https://twitter.com/intent/tweet?url=${quote.innerHTML}`;
    window.open(tweet, "_blank");


});

quoteBtn.addEventListener("click",randomQuote);




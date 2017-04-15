var quotes = [
	"It's a bad day, not a bad life.",
	"Pain is inevitable. Suffering is optional.", 
	"No one is in control of your happiness but you, therefore, you have the power to change anything about yourself or your life that you want to change.",
	"When you don't see your life moving in right direction, don't worry take left :). Cheer up and keep walking.",
	"The best of healers is good cheer.",
	"Cheer up, the worst is yet to come.",
	"If you've got nothing to dance about, find a reason to sing.",
	"Instead of cursing the darkness, light a candle.",
];

function getQuote() {	
	return document.getElementById('quote').innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
} 
getQuote();

function tweet() {
	el = document.getElementById('twitter-share-button');
		el.setAttribute('href', '');
		el.setAttribute('href', 'https://twitter.com/intent/tweet/?text=' + getQuote());
}

tweet();
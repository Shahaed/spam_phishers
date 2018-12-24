# Spam People Phishing

This is a simple node program I use whenever I see a phishing email.

## **Disclaimer**: This is a VERY basic script and potentially exposes yourself. And traffic from a node.js server using axios can be filtered out. 
I doubt anyone will actually read this or use it, but if you do, feel free to make it better. 

## How to use:
- Have Node.js installed & do `npm install`
- Edit the index.js file and change `spamURL` to whatever the url is (find with Chrome network analyzer)
- Sometimes phishers try being clever by changing the post headers (also find with Chrome network analyzer). You can change those on `line 9 & 10`
- Then spam away using `npm start`
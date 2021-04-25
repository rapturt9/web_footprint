# Web Footprint

A way to track your carbon footprint from your web surfing

# How to use it

Download the chrome extension from https://chrome.google.com/webstore/detail/web-footprint/dimpnnnfelinjcklppppoggihlibphce?hl=en and then whenever you want to activate it, open developer tools. You can open it by pressing f12 or right clicking and then clicking inspect. You can keep the developer tools window as small as possible, but it needs to be opened for the extension to worked so that the extension has permissions to track the bytes transferred between your device and the servers. After you do some searching, to check your current footprint click the puzzle icon at the top right and then the leaf icon. This will show you your data transferred, electricity used, co2 released, and polar ice melted. The extension keeps track of the information throughout the wbsites you go to sijce it is stored in the session storage.

# How it works

It finds the bytes transferred over every network request and takes the sum of them every 5 second period and then adds it to the session total. It isn't able to directly add the bytes from each network request to the session total since then it will exceed the update limit that chrome set. The bytes are then converted to gigabytes, approximate kilowatt hours, co2 released, and polar ice melted using some calculations. You can learn more about the conversion on the website: https://rapturt9.github.io/web_footprint/.

# Why is this useful

It is estimated that powering digital devices (computers and smartphones) and the supporting infrastructures (communication networks and data centres) consumed about 5% of global electricity use in 2012.

And since then, internet use and the corresponding carbon footprint have been increasing. Most of this electricity isn't produced from clean energy, so there is a large environmental impact. So, by tracking your carbon footprint on the web, hopefully, it will make you more mindful of your web surfing!

# Code details

The chrome extension is made using vanilla javascript, html, and css with the chrome storage and devtools api. This was also my first time making a chrome extension, so it was a new experience!

The website is made with React.js along with the semantic UI library so it looks nicer. Though, it is a very simple and straightforward webpage.

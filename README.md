# week4-gmno-autocomplete

## Project - Autocomplete Website

## Installation 

To install the project, follow these simple steps:

1. Clone the project
2. Run `npm install` to setup package dependencies
3. Run `npm start` to access the local host
4. Run `npm test` to access the tape tests

#### Description

- A website that enables users to quickly find and select words from a list of suggestions, as they type.
- The list is dynamically generated from a pre-populated list of values (i.e. a dictionary file), leveraging searching and filtering.
- A large data file is required to search through - consider the best data structure for this.
- Consider how implementation affects user experience and web performance (e.g. time to load and search through the data file).

#### Task

Your task is to build a site which will update as you type (an autocompleter), as per the description above.

#### Goals

1. We expect **back-end testing using tape** (test as many components as you can) and basic **front-end testing**. Please note that we expect tests on _pure functions_ and _not_ on the router or the DOM.

2. Host your project on **heroku**, [see resource](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction).

3. Use **module.exports** and **require** to break a single large server file into smaller modules.

4. Consider what would be a good **server file structure** based on what we have discussed over the week.

#### What

The team created a website that has an autocompleter for browsing through the UNESCO World Heritage Sites in the UK and providing a link to wikipedia upon searching.

#### How

##### Step 1: Inspiration

The team had a dream of visiting the UNESCO World Heritage Sites across the world.

So... After a big brain-storm of ideas proposed, we decided to follow our dream of finding out what these **World's Heritage Sites** are...

But then when we found out it was 1000+ sites, so we changed our dream, and broke it down to searching for only the U.K's sites..

And it was a success.

##### Step 2: Architecture
We separated our public and our src folder that contained front-end and back-end files respectively.

![](https://i.imgur.com/X7e9RYm.png)

##### Step 3: Front-End Creation
Within public
* index.html
![](https://i.imgur.com/ziekw81.png)
auto complete = *off*
* js folder with call.js and script.js
* style.css
##### Step 3: Accessibility

Following the previous knowledge from week 1, we decided to keep focusing in running audits to make our app accessible for everyone. Hurray!  
![](https://i.imgur.com/fW8panM.png)

##### Step 4: Back-End Creation

##### server

![](https://i.imgur.com/OkIpv58.png)

##### router

![](https://i.imgur.com/REXr3BW.png)

##### handlers part 1: core modules and dependencies

![](https://i.imgur.com/2FIK2eI.png)


##### handlers part 2: connecting to files

![](https://i.imgur.com/kbwFGwQ.png)

##### handlers part 3: the search 

![](https://i.imgur.com/ip7uMXm.png)


##### data

connected to the DOM

##### tests

Tests creation through tape

##### Step 5: Testing Pure Functions

While Reggie and Pat were working in requesting the pseudo-API, Rosa and Renata made simple tests for our main search function. At the begining the process was a little daunting but we really enjoy watching our tests pass and we feel a little more confident with TDD (even though we only tested very simple features)

![](https://i.imgur.com/dahTgyp.png)

##### Step 6: DOM Manipulation

![](https://i.imgur.com/6FPtgyz.png)

##### Step 7: Database Call

![](https://i.imgur.com/owZB6ao.png)

##### Step 8: Front-End to Back-End Connection
handlers.js(back-end) with call.js (front-end)

##### input

![](https://i.imgur.com/Pn2hY9C.png)

##### call

![](https://i.imgur.com/coaPZxt.png)

##### function that calls on filtered info

![](https://i.imgur.com/xlmn4F6.png)

##### gets routed

![](https://i.imgur.com/UK6PWYF.png)

##### gets handled

![](https://i.imgur.com/zX1X5aR.png)

##### gets displayed

![](https://i.imgur.com/9a7SN9v.png)




##### Step 9: Front-End Design

![](https://i.imgur.com/KPrabi6.png)

![](https://i.imgur.com/qXbpnlD.png)



##### Step 10: Design Burst Stretch Goals

After the Design Burst hosted by Bobby on wednesday afternoon we've decided to follow his challenges and advice in our design by implementing the following: 

- ✅ Add a search (loupe) button
- ✅ Avoid scrollbars and have max 10 options showing (easy peasy as our data is not so long)
- ✅ Highlight the differences while typing input in the search box
- ✅ Add a pointer to inputs
- ✅ Highlight on hover the inputs
- ✅ Make the search bar well defined

#### Biggest Issues

1. the url for the call to the psuedo api had to be renamed to "endpoint" because it interfered with the url core module

2. we had to change indexOf to includes when checking for 'public' in the endpoint in the router file! 
 ![](https://i.imgur.com/cWavoXy.png)
 
 3. Took us a while to find this little gem (decodeURI()) (and when we say "us" we mean kin - thank you kin) to parse spaces in the urls

![](https://i.imgur.com/WQrehP3.png)

4. had to add an event listener inside the populatedropdown function in order to be able to select options from the list

![](https://i.imgur.com/AaBT0ud.png)


5. The Heroku app took ages to work! We would advise
    a) making sure you have admin access to fac18
    b) making sure you are a contributor on the repo 
    c) following thiswalk through: https://www.freecodecamp.org/news/how-to-deploy-a-nodejs-app-to-heroku-from-github-without-installing-heroku-on-your-machine-433bec770efe/

6. We  started to write a function to capitalise the first letter of every word except 'and 'of' and 'to' before realising it was completely uneccessary - a lesson in not making uneccessary work for yourself

#### Where Next

* Making one for all sites internationally (The true dream)
* Using env for more security

#### Thank you

🍻 😴


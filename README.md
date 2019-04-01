# MEOW MEOW MEOW

Meowkit was inspired by my childhood Casio keyboard, how much I like cats, and Wes Bos's [JavaScript 30](https://javascript30.com/) coursework.

## CODE
#### HTML/CSS
I hardcoded the HTML because the piano layout too complex for me to visualize otherwise. I would like to refactor it and redesign the elements to scale more beautifully in mobile.

The transition/active state effects on the keyboard are slightly modified from Wes Bos's browser-based drum kit tutorial.

#### JS
This is pretty messy. And there is much to refactor. The piano and beat elements have two different scripts. This is why:

 Firstly, again credit to Wes Bos: the keyboard trigger functionality is also modified from the the drum kit tutorial. It is developed with HTML5 audio functionality. However - HTML5 added gaps at the end of my drum loops. For gapless playback, the beat button functionality had to be written separately using the Web Audio API. I prototyped that code in a separate project and only merged it into the Meowkit file structure  (with some slight selectors refactoring).

 ### TO DO
 - Redesign for mobile
 - Merge audio playback clips
 - Scope recording functionality
 - Abstract to allow different audio sources for keyboard
 - Develop towards a progressive web app.

 ### ACKNOWLEDGEMENTS
 - [Wes Bos](https://javascript30.com/)
 - My cat, [Quilty St. Cloud](https://www.instagram.com/quiltystcloud)

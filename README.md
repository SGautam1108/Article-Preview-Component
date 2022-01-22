# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

My users should be able to:

- Change the layout when moving from laptop to tablet
- See social media icon tray on clicking share button

### Screenshot

![](images/Screenshot_1.jpg)
![](images/Screenshot_2.jpg)
![](images/Screenshot_3.jpg)


### Links

- Solution URL: [Solution URL](https://github.com/SGautam1108/Article-Preview-Component)
- Live Site URL: [Live site](https://sgautam1108.github.io/Article-Preview-Component/)

## My process

The basic process of structuring, styling and finalizing.
Started with HTML to structure my component, and used Bootstrap for basic card elements.
Next with CSS for styling and took a few hours to narrow down the exact styling as provided in the challenge's design images.
Since the card format had to be changed from laptop to mobile, media query was used.
The final task was adding social media icons and transitions with different behavior in different screen types!
This was achieved with CSS visibility, opacity, transition and JS toggle class property.

### Built with

- Semantic HTML5 markup
- CSS and Flexbox, Grid
- Javascript

### What I learned

This project was majorly concerned with CSS properties of flexbox and adjusting it with media queries. Altho the challenge was simple, I learnt the following-

1) It's better to apply grid to body or main outer element, while flexbox is better when used for layout of inner elements.

2) I spent a quite lot of time stuck with the following code-

```css

#main {
    position: relative;
    max-width: 750px;
    max-height: 300px;
    display: flex;
}

@media (max-width: 842px) {

    #main {
        width: 350px;
        height: 550px;
        flex-direction: column;
    }
}

```

Now, the problem arises because the max-height set was 300px and trying to set the height with 550px wasn't working. So, it's better to either override max-height or use height instead of max-height

3) Flexbox gives us method of flex-grow that decides how much of space the child element can take up compared to others. This helped me in setting image and text width in ratio of 4.5: 5.5


### Continued development

Some accessibility issues need to be handled, especially concerning screen readers and ARIA.

### Useful resources

- [Kevin Powell](https://www.youtube.com/channel/UCJZv4d5rbIKd4QHMPkcABCw) - Great CSS Ideas and frontend best practices tips


## Author

- LinkedIn - [Shaurya Gautam](https://www.linkedin.com/in/sgautam1108/)
- Frontend Mentor - [@SGautam1108](https://www.frontendmentor.io/profile/SGautam1108)
- CSSBattles.dev - [@SGautam1108](https://cssbattle.dev/player/sgautam1108)
- Github - [@SGautam1108](https://github.com/SGautam1108/)


## Acknowledgments

A Special thanks to Angela Yu, Course Instructor for "Full stack development" course at Udemy. Her course has been of a great help for me to start out with these projects on my own. Cheers to y'all!!

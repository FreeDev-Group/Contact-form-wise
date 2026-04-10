# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](../Screenshot.png)

### Links

- Solution URL: [Frontend Mentor Solution]()
- Live Site URL: [Live Demo]()

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

I learned how to use the `:has()` CSS selector to style radio button containers based on their checked state, which greatly simplifies the CSS logic compared to using JavaScript for UI state changes.

```css
.radio-card:has(input:checked) {
  background-color: var(--green-200);
  border-color: var(--green-600);
}
```

I also refined my form validation logic to ensure a smooth user experience with error messages appearing only when needed.

```javascript
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email.value)) { 
  email.parentElement.classList.add('error'); 
  isValid = false; 
}
```

### Continued development

In the future, I plan to focus more on accessibility and exploring how to handle complex forms with state management libraries in React.

### Useful resources

- [CSS :has() Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:has) - This helped me manage parent styling without extra JS.
- [Form Validation Guide](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - A solid reference for building custom validation.

## Author

- Website - [Guillain Wise](https://www.guillainwise.com)
- Frontend Mentor - [@GuillainWise](https://www.frontendmentor.io/profile/guillainwise-glitch)
- Twitter - [@GuillainWise](https://www.twitter.com/GuillainWise)

## Acknowledgments

Thanks to the Frontend Mentor community for the feedback and inspiration.

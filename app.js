// initialization of DOM variables
const ratingCard = document.querySelector('.rating-card');
const thankYouCard = document.querySelector('.thank-you-card');
const ratingValues = document.querySelectorAll('[data-rating-value]');
const ratingHtmlElement = document.querySelector('#rating');
const submitButton = document.querySelector('.submit');
let rating = 0;

// Use .forEach method to listen for clicks, change colors, get textContent, and update rating text in the thankYouCrd.
ratingValues.forEach(ratingValue => {
  // Selecting multiple rating values does not affect the final rating. The last value to be selected is the one that will be shown in the thankYouCard.
  ratingValue.addEventListener('click', function () {
    rating = Number.parseInt(ratingValue.textContent);
    ratingValue.style.backgroundColor = 'var(--medium-grey)';
    ratingValue.style.color = 'var(--white)';
    console.log(rating)
    ratingHtmlElement.textContent = `You selected ${rating} out of 5`;
  })
})

// toogle class to switch between the different cards
submitButton.addEventListener('click', () => {
  ratingCard.classList.toggle('disappear');
  thankYouCard.classList.toggle('disappear');
})

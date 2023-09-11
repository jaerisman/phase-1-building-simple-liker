// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const emptyHearts = document.getElementsByClassName("like-glyph");
Array.from(emptyHearts).forEach((emptyHeart) => {
  emptyHeart.addEventListener('click', clickHandler);
});

function clickHandler () {
  if (this.innerText === FULL_HEART){
    this.innerText = EMPTY_HEART;
    this.classList.remove('activated-heart');
  } else {
  mimicServerCall()
  .then(() => {
  this.innerText = FULL_HEART;
  this.classList.add('activated-heart');
  })
  .catch((error) => {
  const errorModal = document.getElementById('error-modal');
  const errorMessage = errorModal.querySelector('.modal-message');
  errorMessage.innerText = error;

  errorModal.classList.remove('hidden');
  setTimeout(() => {
    errorModal.classList.add('hidden');
  }, 3000)
})
}
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

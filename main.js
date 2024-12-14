// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Select all heart icons in the document
const articleHearts = document.querySelectorAll(".like-glyph");

function likeCallback(e) {
  const heart = e.target;
  mimicServerCall("bogusUrl")
    .then(function() {
      // Toggle the heart symbol between empty and full
      if (heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.className = "activated-heart";
      } else {
        heart.innerText = EMPTY_HEART;
        heart.className = "";
      }
    })
    .catch(function(error) {
      const modal = document.getElementById("modal");
      
      // Show the modal with the error message
      modal.className = "visible"; // Ensure modal is visible
      modal.innerText = error;
      
      // Hide the modal after 3 seconds
      setTimeout(() => {
        modal.className = "hidden"; // Hide the modal
      }, 3000);
    });
}

// Add event listeners to each heart icon
for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const isRandomFailure = Math.random() < .2; // Random failure for 20% of the time
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300); // Simulate a 300ms server response delay
  });
}


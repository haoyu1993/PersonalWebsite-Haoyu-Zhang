$(document).ready(function () {
  var $slideshow = $('#slideshow')
  var $images = $slideshow.find('img')
  var currentIndex = 0

  // Show the first image
  $($images[currentIndex]).show()

  // Change images at regular intervals
  setInterval(function () {
    // Hide the currently displayed image
    $($images[currentIndex]).fadeOut()

    // Increment the index, if it reaches the last image, go back to the first image
    currentIndex = (currentIndex + 1) % $images.length

    // Show the next image
    $($images[currentIndex]).fadeIn()
  }, 2000) // Change image every 2 seconds
})



var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab (tabname) {

  for (tablink of tablinks) {
    tablink.classList.remove("active-link")

  }

  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab")

  }

  event.currentTarget.classList.add("active-link")

  document.getElementById(tabname).classList.add("active-tab")
}

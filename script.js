//Go to Music
const buttons = document.querySelectorAll('.go-to-music');

// Attach the event listener to each button
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    window.location.href = 'music.html';
  });
});
// End 
const userAgent = navigator.userAgent.toLowerCase();
const pages = document.getElementsByClassName('website');
const errorMessage = document.getElementById('errorMessage');

if (userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('android')) {
    for (const page of pages) {
        page.style.display = 'none';
    }
    errorMessage.style.display = 'block'; // or 'initial'
}

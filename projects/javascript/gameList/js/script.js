//alert
alert("This list is ongoing and is not finalized.");

// slideshow 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

let currentGameList = 'completedGames';

function toggleGameList() {
    let completedGames = document.getElementById('completedGames');
    let queuedGames = document.getElementById('queuedGames');

    if (currentGameList === 'completedGames') {
        completedGames.style.display = 'none';
        queuedGames.style.display = 'block';
        currentGameList = 'queuedGames';
    } else {
        queuedGames.style.display = 'none';
        completedGames.style.display = 'block';
        currentGameList = 'completedGames';
    }
}

//modal
var modal = document.getElementById("gameModal");
var btn = document.getElementById("modalButton");
var span = document.getElementsByClassName("close")[0];

// when user clicks the button, open the modal
btn.onclick = function() {
	modal.style.display = "block";
}

//when user clicks on <span> (x), it closes the modal
span.onclick = function() {
	modal.style.display = "none";
}

//when user clicks anywhere outside of modal, it closes it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
const ratings = document.querySelectorAll('.rating');
const submitted = document.querySelector('.submit');
const thanksMessage = document.querySelector('.thanksMessage');
const kartu = document.querySelector('.card');
const selectedRatingDisplay = document.getElementById('selected-rating');
let selectedRating = 0;

//select setiap elemen individual

ratings.forEach((rating, index) => {
  rating.addEventListener('click', () => {
    ratings.forEach((r) => r.classList.remove('selected'));

    for (let i = 0; i <= index; i++) {
      ratings[i].classList.add('selected');
    }

    selectedRating = rating.getAttribute('data-value');
  });
});

//menambahkan tombol submit
submitted.addEventListener('click', () => {
  if (selectedRating > 0) {
    kartu.classList.add('hidden');
    thanksMessage.classList.remove('hidden');

    selectedRatingDisplay.textContent = selectedRating;
  } else {
    alert('Please rating the card');
  }
});

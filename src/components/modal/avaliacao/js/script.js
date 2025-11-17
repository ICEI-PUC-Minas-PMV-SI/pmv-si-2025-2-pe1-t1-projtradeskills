//Selecionar a parte "O que mais se destacou"
const chipContainer = document.getElementById("chipContainer");
const chips = chipContainer.getElementsByClassName("chip");

for(const chip of chips) {
    chip.addEventListener("click", function(){
        document.querySelectorAll(".chip.selected").forEach(c => {
            c.classList.remove("selected");
        })
        this.classList.add("selected");
        updateSelectedChips();
    })
}

function updateSelectedChips(){
    const selectedValues = getSelectedValues();
    console.log('selected values: ', selectedValues);
}

function getSelectedValues() {
    const selectedChips = chipContainer.getElementsByClassName("selected");
    return Array.from(selectedChips).map(chip=> chip.dataset.value);
}

// Selecionar estrelas
const stars = document.querySelectorAll('.star');
let currentRating = 0;

const updateStars = (rating) => {
  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.add('selected');
    } else {
      star.classList.remove('selected');
    }
  });
};

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    currentRating = index + 1;
    updateStars(currentRating);
  });
});
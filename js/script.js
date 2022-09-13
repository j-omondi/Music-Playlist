const epicMix = [
  "Time to say goodbye",
  "Three wise men",
  "Even if my heart would break",
  "Moyo wangu",
  "How could an angel break my heart",
  "Once upon a time",
  "Just when I needed you most",
  "Jolene",
  "Scars in heaven",
  "Chasing Cars",
  "Save the best for last",
  "Call the Man"
];

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");

button.addEventListener("click", function () {
  mixInfo(epicMix);
  mixList.classList.remove("hide");
  button.classList.add("hide");
});

total.innerText = `${epicMix.length} great songs!`;

const mixInfo = function (mix) {
  mix.forEach(function (song, index) {
    let li = document.createElement("li");
    li.classList.add("song");
    li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`;
    mixList.append(li);
  });
};

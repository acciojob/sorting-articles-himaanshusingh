const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];
function stripArticle(bandName) {
  return bandName.replace(/^(a|an|the)\s/i, "").trim();
}
const sortedBands = bands.sort((a, b) => {
  return stripArticle(a) > stripArticle(b) ? 1 : -1;
});
const bandList = document.getElementById("bands");
bandList.innerHTML = sortedBands.map((band) => `<li>${band}</li>`).join("");

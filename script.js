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

function stripBand(str) {
  return str.replace(/(a|an|the)\s/i, "").trim();
}
const sortedBands = bands.sort((a, b) => stripBand(a).localeCompare(stripBand(b)));
const bandsElem = document.querySelector("#bands");
bandsElem.innerHTML = sortedBands.map((val) => `<li>${val}</li>`).join("\n");
const listContainer = document.getElementById("bands");

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog']; 
bands.sort((a, b) => stripBand(a).localeCompare(stripBand(b)));

bands.forEach((band) => {
  const li = document.createElement("li");
  li.innerText = band;
  listContainer.append(li);
});

function stripBand(str) {
  return str.replace(/(a|an|the)\s/i, "").trim();
}

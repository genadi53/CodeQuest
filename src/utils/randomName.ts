const techWords1 = [
  "Tech",
  "Code",
  "Digital",
  "Web",
  "Net",
  "Byte",
  "Logic",
  "Cyber",
  "Data",
  "Smart",
];
const techWords2 = [
  "Solutions",
  "Systems",
  "Innovations",
  "Labs",
  "Techies",
  "Builders",
  "Hub",
];
const techWords3 = [
  "Inc.",
  "Co.",
  "Corp.",
  "Technologies",
  "Software",
  "Solutions",
  "Lab",
];

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function generateRandomCompanyName() {
  const word1 = techWords1[getRandomNumber(0, techWords1.length)];
  const word2 = techWords2[getRandomNumber(0, techWords2.length)];
  const word3 = techWords3[getRandomNumber(0, techWords3.length)];

  const companyName = `${word1} ${word2} ${word3}`;
  return companyName;
}

let multiplicationTable = [];

for (let i = 1; i < 11; i++) {
  for (let j = 1; j < 11; j++) {
    multiplicationTable.push(`${i} * ${j} = ${i * j}`);
  }
}

console.log(multiplicationTable);

let prefix = ["the", "boys", "girls", "they", "kids"];
let word = ["code", "tech", "stack", "geeks", "computing"];
let verb = ["worldwide", "global", "universal", "everywhere", "globalized"];

for (let i = 0; i < prefix.length; i++) {
  for (let j = 0; j < word.length; j++) {
    let div = document.createElement("div");
    div.innerText = `${prefix[i]}${word[j]}.com`;
    document.body.appendChild(div);
  }
}

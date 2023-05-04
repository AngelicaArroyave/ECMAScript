const list = [1, 2, 3, 4, 5, 6, 7]

console.log(list.includes(5)); // true
console.log(list.includes(8)); // false

const names = ['Camila', 'Andrea', 'Carlos', 'Santiago']

console.log(names.includes('Camilo')); // false
console.log(names.includes('andrea')); // false

let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(
	familyEmoji.includes("👨"),
	familyEmoji.includes("👩"),
	familyEmoji.includes("👦")
); // true true true
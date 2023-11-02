function filterNegativeNumbers(numbers){
    return numbers.filter (num => num >= 0)
}
const numbers = [1, -2, 3, -4, 5, 0];
const filteredNumbers = filterNegativeNumbers(numbers);
console.log(filteredNumbers);
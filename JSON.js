const simpleObject = {
    id: 2,
    name:"gun",
    color:"black",
    weight:"27 gm",
    length: "9mm"
}
const stingified = JSON.stringify(simpleObject)
// console.log(simpleObject);
console.log(stingified);
const converted = JSON.parse(stingified)
console.log(converted);
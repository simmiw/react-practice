//set is a set of values, where each value may occur once//
const SetMethods =()=>{
let  set1 = new Set();
 const addProperty = set1.add("hello");
console.log("addProperty",addProperty);


let set2 =new Set(["Simmi", "Walia", "Ayush", "Gullu"])
const hasProperty =set2.has("Simmi");
console.log("hasProperty", hasProperty);
set2.add("Hello")

const deleteProperty = set2.delete("Walia");
console.log("deleteProperty",deleteProperty, set2);

const entriesProperty =set2.entries();
console.log("keys", set2.keys());

console.log("size", set2.size)

}

export default SetMethods;
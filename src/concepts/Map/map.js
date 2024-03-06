//Map is a clooection of keyed values, just like objects however Map allows to have keys of any type//

const MapMethods = () => {

    //To create  a new Map & set Values//
    const map1 = new Map();
    map1.set("Name", "Simmi");
    map1.set("age", 30);
    map1.set("city", "Amsterdam");
    console.log(map1);

    //To get values by passing keys//
    console.log(map1.get("city"));

    //To check the size of Map//
    console.log(map1.size);

    //To delete an item of Map//
    map1.delete("age");

    //To clear the Map//
    map1.clear();




}

export default MapMethods;
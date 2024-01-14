const CallBindApply =()=>{

    function person(){
       console.log(this.name+" "+ "lives in"+ " "+ this.city);
    }

    const personDetails =[{name: "Simmi", city:"Amsterdam"}]

    const obj ={
        name:"Simmi",
        city: "Amsterdam"
    }

    const newPerson= person.call(obj);
    newPerson();
    const newPerson1= person.apply(person);
}
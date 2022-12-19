function cat_Dictionary() {
    var Animal = {  //defines an object "Animal" and assigns the properties below to it
        Species:"Cat",
        Color:"Grey",
        Breed:"Russian Blue",
        Age:11,
        Sound:"Meow"
    };
    delete Animal.Sound; //removes the sound property
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //prints the value assigned to the Sound property of the animal object (undefined since that property was deleted)
}
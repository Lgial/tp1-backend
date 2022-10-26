class Usuario {
    constructor (name, lastname, books, pets){
        this.name = name;
        this.lastname = lastname;
        this.books = books;
        this.pets = pets;
    }
    getFullName(){
        console.log (`Nombre completo:  ${this.name} ${this.lastname}`)
    }
    addPets = (pet) => {
        this.pets.push(pet)
    }
    countPets(){
        console.log(this.pets.length)
    }
    addBook = (book) => {
        this.books.push(book)
    }
    getBookNames(){

        const newArray = this.books.map((el) =>  el.name)
        return console.log(newArray)
             
         
    }
}

const usuario = new Usuario("Leandro","Giardelli",
                            [{name : "Kyra",
                              autor : "Anonimo"
                            },
                            {name : "Sultan",
                             autor : "Unknown"
                            },
                            {name : "Lowen",
                             autor : "Anonimo"
                            },
                            {name : "Sumo",
                             autor : "Unknown"
                            }],
                            ["Dog", "Cat", "Bear", "Shark"]
                            )

console.log(usuario)
usuario.getFullName()

usuario.addPets("Horse")
console.log(usuario)

usuario.countPets()

usuario.addBook({nombre : "Sami", autor : "Anonimo"})
console.log(usuario)

usuario.getBookNames()
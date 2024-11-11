class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.age = _age
    this.location = _location
  }
  ageComparison = function (user2) {
    if (this.age === user2.age) {
      return `${this.firstName} e ${user2.firstName} hanno la stessa età`
    } else if (this.age < user2.age) {
      return `${this.firstName} è più giovane di ${user2.firstName}`
    } else {
      return `${user2.firstName} è più giovane di ${this.firstName}`
    }
  }
}

const mario = new User('Mario', 'Rossi', 25, 'Japan')
const luigi = new User('Luigi', 'Verdi', 25, 'Japan')
const wario = new User('Wario', 'Gialli', 40, 'Japan')

console.log(mario.ageComparison(luigi))
console.log(wario.ageComparison(mario))

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName
    this.ownerName = _ownerName
    this.species = _species
    this.breed = _breed
  }
  isSameOwner = function (pet2) {
    return this.ownerName === pet2.ownerName
  }
}

const petNameInput = document.getElementById('name')
const ownerNameInput = document.getElementById('owner')
const speciesInput = document.getElementById('species')
const breedInput = document.getElementById('breed')

const form = document.querySelector('form')

const pets = []

form.addEventListener('submit', function (e) {
  e.preventDefault()
  pets.push(
    new Pet(
      petNameInput.value,
      ownerNameInput.value,
      speciesInput.value,
      breedInput.value
    )
  )
})

//verificare direttamente in console

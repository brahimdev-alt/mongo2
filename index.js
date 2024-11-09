

// Insérer les documents dans la collection contactlist
db.contactlist.insertMany([
  {
    nom: "Ben",
    prenom: "Moris",
    email: "ben@gmail.com",
    age: 26
  },
  {
    nom: "Kefi",
    prenom: "Seif",
    email: "kefi@gmail.com",
    age: 15
  },
  {
    nom: "Emilie",
    prenom: "brouge",
    email: "emilie.b@gmail.com",
    age: 40
  },
  {
    nom: "Alex",
    prenom: "brown",
    age: 4
  },
  {
    nom: "Denzel",
    prenom: "Washington",
    age: 3
  }
])
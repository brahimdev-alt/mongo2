// 1. Afficher toute la liste des contacts
db.contactlist.find()

// 2. Afficher les informations d'une personne par ID (remplacer l'ID)
db.contactlist.findOne({ _id: ObjectId("votre_id_ici") })

// 3. Afficher tous les contacts ayant un âge > 18
db.contactlist.find({ age: { $gt: 18 } })

// 4. Afficher tous les contacts ayant un âge > 18 et dont le nom contient "ah"
db.contactlist.find({
  $and: [
    { age: { $gt: 18 } },
    { nom: /ah/i }
  ]
})

// 5. Changer le prénom de "Kefi Seif" en "Kefi Anis"
db.contactlist.updateOne(
  { nom: "Kefi", prenom: "Seif" },
  { $set: { prenom: "Anis" } }
)

// 6. Supprimer les contacts qui ont moins de 5 ans
db.contactlist.deleteMany({ age: { $lt: 5 } })

// 7. Afficher à nouveau toute la liste des contacts
db.contactlist.find()
use zoo;

const id = ObjectId('65118f8b6f798a5bf5b3b17c')
db.animals.findOne({_id: id})


db.animals.updateOne(
    {_id: id},
    {$set: {name: "Gary"}}
);


db.animals.deleteOne({_id: id});
show dbs
use aaa //database name
show dbs
db.createcollection("Users")
show collections // show collections in database


db.users.insertOne({ name: "selena", age: 22, place: "mumbai" })
db.users.insert({ name: "shubham", age: 23, place: "mumbai" })
db.users.insertMany([
    { name: "selena", age: 22, place: "mumbai" },
    { name: "shubham", age: 23, place: "mumbai" },
    { name: "nakul", age: 23, place: "mumbai" },
    { name: "buddha", age: 28, place: "mumbai" },
    { name: "sim", age: 21, place: "mumbai" },
    { name: "raina", age: 20, place: "mumbai" },
    { name: "aarti", age: 20, place: "mumbai" },
    { name: "niru", age: 23, place: "mumbai" },
    { name: "lasi", age: 24, place: "mumbai" },
    { name: "vrushali", age: 25, place: "mumbai" },
    { name: "keshav", age: 30, place: "mumbai" },
    { name: "nega", age: 23, place: "mumbai" },
    { name: "megha", age: 50, place: "mumbai" },
    { name: "sega", age: 26, place: "mumbai" },
    { name: "sony", age: 25, place: "mumbai" },
    { name: "ninten", age: 30, place: "mumbai" },
    { name: "ds", age: 30, place: "mumbai" },
    { name: "xboxa", age: 20, place: "mumbai" },
    { name: "osas", age: 20, place: "mumbai" },
    { name: "owas", age: 55, place: "mumbai" },]
)

// find users named "selena" OR users who are 20 years old
db.users.find({ $or: [{ name: "selena" }, { age: 20 }] })
db.users.find({ $and: [{ place: "mumbai" }, { age: 20 }] })
db.users.find({ age: { $gt: 20 } })
db.users.find({ age: { $gte: 21 } })
db.users.find({ age: { $lte: 22 } })
db.users.find({ age: { $lt: 28 } })
db.users.find({ age: { $eq: 30 } })
db.users.find({ age: { $ne: 20 } })
db.users.find({ age: { $gt: 23 } })
db.users.remove({})
db.users.remove({ name: "xboxa" })
db.users.update({ age: 20 }, { $set: { place: "pakistan" } })
db.users.updateMany({ age: 20 }, { $set: { place: "pakistan" } })

read pi mongo




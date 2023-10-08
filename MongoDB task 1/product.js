From the below JSON, the queries are executed.

https://github.com/rvsp/database/blob/master/mongodb/product.json


1. Find all the information about each products

db.products.find({})


2. Find the product price which are between 400 to 

db.products.find({ "price": { $gte: 400, $lte: 800 } })

3. Find the product price which are not between 400 to 600

db.products.find({ "price": { $lt: 400, $gt: 600 } })

4. List the four product which are grater than 500 in price 

db.products.find({ "price": { $gt: 500 } }).limit(4)

5. Find the product name and product material of each products

db.products.find({}, { "name": 1, "material": 1, "_id": 0 })

6. Find the product with a row id of 10

db.products.find({ "id": 10 })

7. Find only the product name and product material

db.products.find({}, { "name": 1, "material": 1, "_id": 0 })

8. Find all products which contain the value of soft in product material 

db.products.find({ "material": { $regex: /soft/i } })

9. Find products which contain product color indigo  and product price 492.00

db.products.find({ "color": "indigo", "price": 492.00 })

10. Delete the products which product price value are same

db.products.remove({ "price": { $eq: db.products.distinct("price") } })



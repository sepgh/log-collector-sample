db.getSiblingDB('admin').auth(
    process.env.MONGO_INITDB_ROOT_USERNAME,
    process.env.MONGO_INITDB_ROOT_PASSWORD
);
db = db.getSiblingDB(process.env.DB_NAME);
db.createCollection("initial")
db.initial.insertOne( { x: 1 } )

db.getSiblingDB('admin').auth(
    process.env.MONGO_INITDB_ROOT_USERNAME,
    process.env.MONGO_INITDB_ROOT_PASSWORD
);
db.createUser({
    user: process.env.DB_USER,
    pwd: process.env.DB_PASSWORD,
    roles: [{"role": "readWrite", "db": process.env.DB_NAME}],
});

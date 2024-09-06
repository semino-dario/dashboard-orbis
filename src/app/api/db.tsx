import { MongoClient, Db, Collection } from 'mongodb';
const uri = process.env.DB_URI

const client = new MongoClient(uri!);
let clientPromise: Promise<MongoClient>;

if (!global._mongoClientPromise) {
   const client = new MongoClient(uri!);
    global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export interface Database {
    client: MongoClient;
    db: Db;
    collection: Collection;
}

export async function connectToDatabase(coll:string): Promise<Database> {
    try {
       const client = await clientPromise;
        console.log('Conexión exitosa a MongoDB Atlas');

        const db = client.db('orbis');
        const collection = db.collection(coll);

        return { client, db, collection };
    } catch (error) {
        console.error('Error al conectar a MongoDB Atlas:', error);
        throw error;
    }
}

export async function closeConnection(): Promise<void> {
    try {
        await client.close();
        console.log('Conexión a MongoDB cerrada');
    } catch (error) {
        console.error('Error al cerrar la conexión a MongoDB:', error);
        throw error;
    }
}
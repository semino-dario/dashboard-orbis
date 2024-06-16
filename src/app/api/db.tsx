import { MongoClient, Db, Collection } from 'mongodb';

const uri = process.env.DB_URI

//@ts-ignore
const client = new MongoClient(uri);

export interface Database {
    client: MongoClient;
    db: Db;
    collection: Collection;
}

export async function connectToDatabase(): Promise<Database> {
    try {
        await client.connect();
        console.log('Conexión exitosa a MongoDB Atlas');

        const db = client.db('orbis');
        const collection = db.collection('articles');

        return { client, db, collection };
    } catch (error) {
        console.error('Error al conectar a MongoDB Atlas:', error);
        throw error;
    }
}
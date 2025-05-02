import mongoose from "mongoose";
import dotenv from 'dotenv';


dotenv.config();
const connectionString = process.env.MONGO_URI;


async function connectDB() {
    try {
        await mongoose.connect(connectionString);
        console.log('Conncected to MongoDB!');
    }
    catch (e) {
        console.error(e);
    }
}

// Set validation for critic collection
export async function createAuthorValidation() {
    const db = mongoose.connection.db;
    const collections = await db.listCollections({ name: 'authors' }).toArray();
    if (collections.length === 0) {
        await db.createCollection('authors');
    }
    await db.command({
        collMod: "authors",
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["name", "bio", "novel", "birthDate"],
                properties: {
                    name: {
                        bsonType: "string",
                    },
                    bio: {
                        bsonType: "string",
                    },
                    novel: {
                        bsonType: "array",
                        items: {
                            bsonType: "string"
                        }
                    },
                    birthDate: {
                        bsonType: "string",
                        description: "BirthDate must be a valid date"
                    }
                }
            }
        },
        validationAction: "error"

    });
    console.log("Author collection validation set!");
}
export default connectDB;
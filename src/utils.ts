import { Client } from 'pg';

export async function getClient() {
    const connectionString = "postgresql://chaiaurcode:chaiaurcode@localhost:5432/chaiDB";
    
    const client = new Client({
        connectionString: connectionString
    });

    try {
        await client.connect();
        console.log("Connected successfully to the database");
        return client;
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
    }
}

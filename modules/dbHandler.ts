import * as mongo from "mongodb";

const uri= 'mongodb://0.0.0.0:27017/test';

const client = new mongo.MongoClient(uri);

export async function testConnection(){
    try{
        await client.connect();
        const databasesList = await client.db().admin().listDatabases();
        console.log("Databases:");
        databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
}

export async function addItem(itemId: number){
    const item = {
        item : `Item ${itemId}`,
        qty: 1,
        tags: ['tag1']
    }
    try{
        await client.connect();
        await client.db().collection('inventory').insertOne(item)
    }catch(e){
        console.error(e)
    }finally{
        await client.close()
    }
}

export async function readItem(itemId: number){
    try{
        await client.connect();
        const itemFound = await client.db().collection('inventory').findOne({item:`Item ${itemId}`});
        console.log(itemFound)
    }catch(e){
        console.error(e)
    }finally{
        await client.close()
    }
}


export async function deleteItem(itemId: number){
    try{
        await client.connect();
        const itemFound = await client.db().collection('inventory').deleteOne({item:`Item ${itemId}`});
        console.log('Document deleted')
    }catch(e){
        console.error(e)
    }finally{
        await client.close()
    }
}
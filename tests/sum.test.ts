import {sum} from '../modules/sum'
import {addItem, readItem, testConnection, deleteItem} from '../modules/dbHandler'

test('adds 1 + 2 to equal 3', () =>{
    expect(sum(1,2)).toBe(3)
})

test('test db connection', async () => {
    await testConnection();
})

test('test addItem', async () => {
    await addItem(1);
})

test('test readItem', async () => {
    const itemId = Math.floor(+new Date() / 1000);
    await addItem(itemId)
    await readItem(itemId);
})

test('test deleteItem', async () => {
    const itemId = Math.floor(+new Date() / 1000)+1;
    await addItem(itemId)
    await deleteItem(itemId);
})
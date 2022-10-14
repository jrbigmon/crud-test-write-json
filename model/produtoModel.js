const fs = require('fs');
const path = require('path');
const database = path.resolve('database.json');

const open = () => {
    const content = fs.readFileSync(database, 'utf8');
    const db = JSON.parse(content);
    return db;
}

const store = (db) => {
    const content = JSON.stringify(db, null, 4);
    fs.writeFileSync(database, content, 'utf8');
}

const Produto = {
    findAll: () => {
        const db = open();
        return db.produtos;
    },
    findByField: (field, fieldValue) => {
        const db = open();
        const produto = db.produtos.find(produto => produto[field] == fieldValue);
        return produto;
    },
    save: (produto) => {
        const db = open();
        db.produtos.push(produto);
        store(db);
    },
    update: (id, produto) => {
        const db = open();
        const index = db.produtos.findIndex(produto => { produto.id == id });
        index > -1 ? db.produtos[index] = produto : false;
        store(db);
    },
    delete: (id) => {
        const db = open();
        const index = db.produtos.findIndex(produtos => { produtos.id == id });
        index > -1 ? db.produtos.splice(index, 1) : false;
        store(db);
    }

}

module.exports = Produto;
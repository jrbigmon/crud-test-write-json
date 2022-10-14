const express = require('express');
const app = express();
const port = 3000;
const homeRouter = require('./router/homeRouter');
const produtoRouter = require('./router/produtoRouter');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(homeRouter);
app.use('/produto', produtoRouter);

app.listen(port, () => {
    console.log('listen on port ' + port);
}); 
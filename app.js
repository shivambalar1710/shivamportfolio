const express = require('express');
const app = express();
const port = process.env.PORT || 8500;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // Enable parsing of request body

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

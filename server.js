var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '119.29.112.115',
    user: 'root',
    password: '123',
    port: '3306',
    database: 'blog',
});
connection.connect();

app.get('/process_get', function(req, res) {

    // 输出 JSON 格式


    var sql = 'SELECT * FROM admin';

    connection.query(sql, function(err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }

        console.log('--------------------------SELECT----------------------------');
        console.log(result);
        res.end(JSON.stringify(result));
        // res.send(result);
        console.log('------------------------------------------------------------\n\n');
    });



    // var response = {
    //     "first_name": req.query.first_name,
    //     "last_name": req.query.last_name
    // };
    // console.log(response);
    // res.end(JSON.stringify(response));

})

app.get('/hello', function(req, res) {



    var response = {
        "first_name": "hello",
        "last_name": "react"
    };
    console.log(response);
    res.end(JSON.stringify(response));

})


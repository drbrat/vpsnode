
    var express = require('express');

    var app = express();

    var contacts = [
	{
	    id: 1,
	    desc: "desc1"
	},
	{
	    id: 2,
	    desc: "desc2"
	},
	{
	    id: 3,
	    desc: "desc3"
	}
    ];

    var about = 'aboutttt...';

    app.get('/', function (req, res) {
	res.send('Hello API');
    })

    app.get('/about', function (req, res) {
	res.send(about);
    })

    app.get('/contacts', function (req, res) {
	res.send(contacts);
    })

    app.get('/contacts/:id', function (req, res) {
	console.log(req.params);
	var contact = contacts.find(function(contact) {
	    return contact.id === Number(req.params.id);
	})
	res.send(contact);
    })

    app.listen(8089, function() {
	console.log('API app started.');
    })

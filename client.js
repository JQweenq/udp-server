const dgram = require('dgram');
const fs = require('fs');

const message = Buffer.from('Some bytes');

const client = dgram.createSocket('udp4');

vars = JSON.parse(fs.readFileSync('config.json'));

client.send(message, vars['port'], vars['address'], (err) => {
	client.close();
});
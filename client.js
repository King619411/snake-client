const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',// IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Event - logs the following output if a connection is established
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: Neo');
    // setTimeout(() => conn.write('Move: up'), 100);
    // setTimeout(() => conn.write('Move: right'), 300); 
    // setTimeout(() => conn.write('Move: down'), 500);
    // setTimeout (() => conn.write('Move: left'), 700);
  });
  return conn;
};


module.exports = connect;
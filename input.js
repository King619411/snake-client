let connection ;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = (input) => { 
    if (input ===  '\u0003') {
      process.exit();
    } 
    if ( input === 'w') {
      conn.write("Move: up");
    } 
    if ( input === 'a') {
      conn.write("Move: left");
    }  
    if ( input === 's') {
      conn.write("Move: down");
    } 
    if ( input === 'd') {
      conn.write("Move: right");
    }
    conn.write('Say: ssSSS');
};

module.exports = setupInput;
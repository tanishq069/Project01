const http = require ('http');
const fs = require ('fs');
const hostname = "127.0.0.1";
const port = 3000;
const home =  fs.readFileSync('index.html');
const design = fs.readFileSync('script.js');
const style = fs.readFileSync('style.css');
const apply = fs.readFileSync('apply_leave.html');
const chart = fs.readFileSync('chart.js');

const server = http.createServer((req,res)=>{ 
    console.log(req.url)

    server.listen( port,hostname, () => {
    console.log('Server running at http://$(hostname):${port}/');

    });
  };
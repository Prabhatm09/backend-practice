const http = require("http"); //require is a function which is used to store module

const server = http.createServer((req ,  res)=>{
    res.setHeader('Content-Type' , 'text/html');
    console.log(req.url);
    let url = req.url
    // if(url === '/'){
    //     res.write('home')
    // }else if( url === '/about'){
    //     res.write('about')
    // }else{
    //     res.write('page not found')
    // }
    res.write('<html>')
    res.write('<head><title>Website</title><head>')
    res.write(
        `<body><form action="/message" method="POST"><input type="text" name="email"><button type="submit">send</button></form>`)
    // res.write('<body><h1>Whatsup</h1><input></body>')
    res.write('</html>') 
    res.end()
});

server.listen(5500);
import http from 'http'
import fs from 'fs'

const fileReader = (path,res) => {
    fs.readFile(path, 'utf8', (err,data) => {
        if(err){
            res.writeHead(500)
            res.end()
            return
        }
        else{
            res.writeHead(200)
            res.write(data)
            res.end()
        }
    })
}

const requestHandler = (req,res) => {
    if(req.url === '/'){
        fileReader('./home.html',res)
    }
    else if(req.url === '/style.css'){
        fileReader('style.css',res)
    }
    else if(req.url === '/about'){
        fileReader('./about.html',res)
    }
    else if(req.url === '/faq'){
        fileReader('./faq.html',res)
    }
    else if(req.url === '/contact'){
        fileReader('./contact.html',res)
    }
    else{
        res.write("NOPEEEE")
        res.end()
    }
}

const server = http.createServer(requestHandler)

server.listen(9100 ,() => console.log("server running"))
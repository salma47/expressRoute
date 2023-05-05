const express = require("express")

const server=express()
const router = express.Router()
router.use((req, res, next) => {
    if (!req.headers['x-auth']) return next('router')
    next()
  })
var responseTime = require(`response-time`)
const logger = (req, res, next)=> {
   // console.table({method: req.method, url: req.url});
   //console.log(req.requestedAt = new Date().toISOString());
   console.log(req.query.Date);
    next();
}
server.use(logger);
const port = 5000
server.get(`/`,  (req,res) => {
    res.sendFile (__dirname+ "/public/index.html" );
})
server.get(`/contact`,  (req,res) => {
    res.sendFile (__dirname+ "/public/contact.html" );
})
server.get(`/services`, (req,res) => {
    res.sendFile (__dirname+ "/public/services.html" );
})
server.get(`/css/style.css`, (req,res) => {
    res.sendFile (__dirname+ "/public/css/style.css" );
})
server.listen (port, (err) => 
err ? console.log(err) : console.log(`server started on port ${port}`));

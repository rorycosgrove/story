const express = require('express')

const router = express.Router();
const Paragraph = require('./paragraph.js')
const Sentence = require('./sentence.js')
//const offerRoutes = require('./routes/offer.js')
//const productRoutes = require('./routes/product.js')
const bodyParser = require('body-parser')

const app = express();
const port = 3000;
const version = 1;


//app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug')

//app.use('/offers', offerRoutes)
//app.use('/products', productRoutes)
//res.status(200).send("<table border=1><tr><td>hello</td></tr><tr><td>hello</td></tr><tr><td>hello</td></tr><tr><td>hello</td></tr></table>");

let story = [new Paragraph(0, 0, "It was a dark and stormy night")]

app.get(`/`, async (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!', story: story, depth: 0 })
})

app.get(`/:depth`, async (req, res) => {
    let currentDepth = (req.params.depth == null ? 0 : req.params.depth)

    res.render('index', { title: 'Hey', message: 'Hello there!', story: story, depth: currentDepth })
})


app.post(`/:depth`, async (req, res) => {
    let currentDepth = (req.params.depth == null ? 0 : parseInt(req.params.depth))
    story[currentDepth] = req.body
    story.push(new Paragraph(story.length, currentDepth, req.body.sentence1))
    console.log(story)
    console.log(req.body.title)
    res.render('index', { title: 'Hey', message: 'Hello there!', story: story, depth: currentDepth })
})
app.listen(port, () => console.log("listening on port " + port))


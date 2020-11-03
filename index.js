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
    res.render('index', { title: 'Home', story: story, depth: 0 })
})

app.get(`/:depth`, async (req, res) => {
    let currentDepth = (req.params.depth == null ? 0 : req.params.depth)
    res.render('index', { title: 'Get Item', story: story, depth: currentDepth })
})


app.post(`/:depth`, async (req, res) => {
    let currentDepth = (req.params.depth == null ? 0 : parseInt(req.params.depth))
    story[currentDepth] = new Paragraph(req.body.depth, req.body.parent,req.body.root,new Sentence(req.body.sentence1,story.length))
    story.push(new Paragraph(story.length, currentDepth, new Sentence(req.body.sentence1)))
    console.log(story)
    console.log(req.body.title)
    res.render('index', { title: 'Post ', story: story, depth: currentDepth })
})
app.listen(port, () => console.log("listening on port " + port))


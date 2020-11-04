const express = require('express')
const bodyParser = require('body-parser')
const Paragraph = require('./paragraph.js')
const Sentence = require('./sentence.js')

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug')

let story = []
story.push(new Paragraph(story.length, new Sentence("It was a dark and stormy night")))

app.get(`/`, async (req, res) => {
    res.render('index', { title: 'Home', story: story, index: 0 })
})

app.get(`/:index`, async (req, res) => {
    let currentIndex = (req.params.index == null ? 0 : req.params.index)
    res.render('index', { title: 'Get Item', story: story, index: currentIndex })
})

app.post(`/:index/:sentence`, async (req, res) => {
    let currentIndex = (req.params.index == null ? 0 : parseInt(req.params.index))
    let currentSentence = (req.params.sentence == null ? 0 : parseInt(req.params.sentence))
    let update = 
    new Paragraph(
        req.body.index,
        new Sentence(JSON.parse(req.body.root).text),
        new Sentence(story[currentIndex].sentence1.text, story[currentIndex].sentence1.next),
        new Sentence(story[currentIndex].sentence2.text, story[currentIndex].sentence2.next),
        new Sentence(story[currentIndex].sentence3.text, story[currentIndex].sentence3.next),
        new Sentence(story[currentIndex].sentence4.text, story[currentIndex].sentence4.next))

    switch (currentSentence) {
        case 1:
            update.sentence1 = new Sentence(req.body.sentence1, story.length)
            story.push(new Paragraph(story.length, new Sentence(req.body.sentence1)))
            break
        case 2:
            update.sentence2 = new Sentence(req.body.sentence2, story.length)
            story.push(new Paragraph(story.length, new Sentence(req.body.sentence2)))
            break
        case 3:
            update.sentence3 = new Sentence(req.body.sentence3, story.length)
            story.push(new Paragraph(story.length, new Sentence(req.body.sentence3)))
            break
        case 4:
            update.sentence4 = new Sentence(req.body.sentence4, story.length)
            story.push(new Paragraph(story.length, new Sentence(req.body.sentence4)))
            break
    }
    story[currentIndex] = update
    console.log(story)
    res.render('index', { title: 'Post ', story: story, index: currentIndex })
})
app.listen(port, () => console.log("listening on port " + port))


const Sentence = require('./sentence.js')
class Paragraph {
    constructor(index,root, sentence1=new Sentence(''),sentence2=new Sentence(''),sentence3=new Sentence(''),sentence4=new Sentence('')){
        this.index= index
        this.root = root
        this.sentence1= sentence1
        this.sentence2= sentence2 
        this.sentence3= sentence3 
        this.sentence4= sentence4
        this.sentences = [sentence1,sentence2,sentence3,sentence4]
    } 
}

module.exports = Paragraph
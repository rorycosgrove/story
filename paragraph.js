class Paragraph {
    constructor(depth,parent,root,sentence1=null,sentence2=null,sentence3=null,sentence4=null){
        this.depth= depth
        this.parent= parent
        this.root = root
        this.sentence1= sentence1
        this.sentence2= sentence2 
        this.sentence3= sentence3 
        this.sentence4= sentence4
    }
}

module.exports = Paragraph
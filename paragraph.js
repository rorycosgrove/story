class Paragraph {
    constructor(depth,parent,root,sentence1='',sentence2='',sentence3='',sentence4='',next1=0){
        this.depth= depth
        this.parent= parent
        this.root = root
        this.sentence1= sentence1
        this.sentence2= sentence2 
        this.sentence3= sentence3 
        this.sentence4= sentence4
        this.next1 = next1;
    }
}

module.exports = Paragraph
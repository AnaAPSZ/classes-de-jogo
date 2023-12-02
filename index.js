
class Heros{
    constructor(name, age, type){
        this.name = name
        this.age  = age
        this.type = type
    }

    mensage(){
        if (this.type == "mago"){
            let atack = "magia"
            console.log(this.type, "atacou usando " + atack)
            
        }
        if (this.type == "guerreiro"){
            let atack = "espada"
        console.log(this.type, "atacou usando " + atack)
        }
        if (this.type == "monge" ){
            let atack = "artes marciais"
        console.log(this.type, "atacou usando " + atack)
        }
        if (this.type == "ninja" ){
            let atack = "shuriken"
            console.log(this.type, "atacou usando " + atack)
        }
    }
}

let player = new Heros("Armando", "34", "mago")

player.mensage()




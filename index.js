class Heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar(){
        let ataque;
        switch (this.tipo){
            case "Mago":
                ataque = "usou magia";
                break;
            case "Guerreiro":
                ataque = "usou espada";
                break;
            case "Monge":
                ataque = "usou artes marciais";  
                break;
            case "Ninja":
                ataque = "usou shuriken";    
                break;
                
            default:
                ataque = "ataque desconhecido";    
        }
        console.log(`O ${this.tipo}  atacou usando ${ataque}}`);
    }
}

const heroi1 = new Heroi("Artorius", 25, "guerreiro");
const heroi2 = new Heroi("Oligron", 100, "mago");
const heroi3 = new Heroi("Steeleye", 220, "ninja");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();

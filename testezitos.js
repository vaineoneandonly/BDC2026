class timeNoConfronto
{
    nome;
    gols;

    constructor(novoNome)
    {
        this.nome = novoNome;
        this.gols = 0;
    }
}

class confronto
{
    timeX;
    timeY;

    constructor(novoTimeX, novoTimeY)
    {
        this.timeX = novoTimeX;
        this.timeY = novoTimeY;
    }
}

let t1 = new timeNoConfronto("Brasil");
let t2 = new timeNoConfronto("Argentina");

let c1 = new confronto(t1, t2);


document.getElementById("timeX").innerHTML = "ccc";


console.log(t1.nome);

function aooga()
{
    return document.getElementById("timeX").innerHTML = c1.timeX.nome + " - " + "<span>" + c1.timeX.gols + "</span>"
}
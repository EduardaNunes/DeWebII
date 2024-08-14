// Esse código aqui é uma API
export default class StarRating extends HTMLElement{ // vamos criar um novo elemento HTML
    #stars
    constructor(){
        super() // vai chamar o construtor do html element só para garantir que
                // o trabalho de registrar o nosso novo elemento será feito
        console.log("Um StarRating foi criado!")
        this.stars = 1 // caso o atributo não seja definido no html ele vai setar esse como o base
    }
    get stars(){
        return this.#stars
    }
    set stars(novoValor){
        if(novoValor < 1 || novoValor > 5){ // não deixa setar um valor de estrelas menos que 1 ou maior que 5
            this.setAttribute("stars", this.#stars)
        }
        this.#stars = novoValor
        this.innerHTML = ""
        for(let i = 0; i < this.#stars; i++){
            this.textContent += "⭐"
        }
    }
    static get observedAttributes(){ // isso aqui diz o que deve ser observado para podermos alterar posteriormente
        return ["stars"]
    }
    connectedCallback(){
        console.log("Star Rating Connected") // não entendi :/
    }
    attributeChangedCallback(chave, antigo, novo){
        if(novo === antigo) return
        if(chave === "stars"){
            console.log(`atributo ${chave} alterado de ${antigo} para ${novo}`)
            this.stars = novo;
        }
    }
}

customElements.define("star-rating", StarRating) // aqui ele pede para registrar o novo elemento
// importante sempre definir o nome com um "-" pois identifica que é um elemento customizado Ex: my-element
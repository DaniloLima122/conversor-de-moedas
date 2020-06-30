import React from "react";

import "./conversao.css";

class Coversor extends React.Component{

    constructor(props){

        super(props);
        this.state = {

            moedaA: "",
            moedaB: 0
        }

        this.onchange = this.onchange.bind(this);
        this.converter = this.converter.bind(this);
    }
    
    onchange(event){
        this.setState({moedaA: event.target.value})
    }   

    converter(){
         
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;

        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=`;

        fetch(url)
        .then(result =>{

            return result.json();
        })
        .then(json =>{

            let cotacao = json[de_para];
            let moedaB_valor = (parseFloat(this.state.moedaA * cotacao).toFixed(2));
            this.setState({moedaB:moedaB_valor});
        }) 
    
    }
     
    render(){

        return(

        
            <div className="conversor">
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <input type="text" onChange={this.onchange} className="conversor__input"/>
                <input type="button" value="Coverter" onClick={this.converter} className="conversor__button"/>
                <h3>Valor convertido: {this.state.moedaB}</h3>
            </div>
        )
    }
}

export default Coversor;
import React from "react";

 class Counter extends React.Component {

    constructor(){
        super()
        // this.contador = 0;
        this.state = {contador: 0}
    }



    render (){
        return (
            <div style = {{margin: "20px"}}>

                <h1>{this.state.contador}</h1>


                <div>
                    <button onClick={() =>{
                        this.setState({contador: this.state.contador - 1}) 
                        }}>Diminuir</button>
                    <button onClick={() =>{
                        this.setState({contador: this.state.contador + 1}) 
                        }}>Aumentar</button>
                </div>




            </div>




        );
    }
}

export default Counter
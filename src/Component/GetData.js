import React, { Component } from 'react'

 class AsyncData extends Component {
    constructor(props) {
        super(props);
        this.state = {
          get: [],
          insert:"",
          content:""
         };
         this.InsertData = this.InsertData.bind(this);
        }  
        async componentDidMount() {
            const BASE_URL = "https://fakestoreapi.com/products?limit=5";
            const response = await fetch(BASE_URL);
            const data = await response.json();
            this.setState({get:data})
            
          }
       
          InsertData=(event)=>{
            this.setState({insertValue:event.target.value})
          }
          
  render() {
    

    
    return (
     
        <div>
        <input type='text' onChange={InsertData}/>       
         
       
        {this.state.get.map((item) => (
           <div className="post" key={item.id}>
          <h3>{item.title}</h3>
           <p></p>
           <img src={item.image} alt='product'/>
          </div>
           ))}
          
      </div>

    )
  }
}

export default AsyncData;
import React, { Component } from 'react'

 class AsyncData extends Component {
    constructor(props) {
        super(props);
        this.state = {
          posts: [],
         
         };
        //  this.getProductInformation = this.getProductInformation.bind(this);
        }  
        async componentDidMount() {
            const BASE_URL = "https://fakestoreapi.com/products?limit=5";
            const response = await fetch(BASE_URL);
            const data = await response.json();
            this.setState({posts:data})
            
          }
       
      
          
  render() {
    console.log(this.state.posts[0]);
    return (
        <div>
                
        {this.state.posts.map((post) => (
           <div className="post" key={post.id}>
          <h3>{post.title}</h3>
           <p></p>
           <img src={post.image} alt='product'/>
          </div>
           ))}
          
      </div>

    )
  }
}

export default AsyncData;
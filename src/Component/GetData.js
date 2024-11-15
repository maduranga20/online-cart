import React, { Component } from 'react'

class AsyncData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      get: [],
      insert: "",
      content: ""
    };
    this.InsertData = this.InsertData.bind(this);
  }
  async componentDidMount() {
    const BASE_URL = "https://fakestoreapi.com/products?limit=10";
    const response = await fetch(BASE_URL);
    const data = await response.json();
    this.setState({ get: data })

  }

  InsertData = (event) => {
    this.setState({ insert: event.target.value })
  }
  SubmitData = () => {
    this.setState({ content: this.state.insert });
  }


  render() {
    let parseContent = parseInt(this.state.content, 10);
    const selectPrice = this.state.get.filter(item => item.price > parseContent);
    // console.log(selectPrice);
    console.log(this.state.get);


    return (

      <div>
        <input type='text' onChange={this.InsertData} />
        <button onClick={this.SubmitData}>Search</button>


        {selectPrice.map((item) => (
          <div className="post" key={item.id}>
            <h3>{item.title}</h3>

            <img src={item.image} alt='product' />
          </div>
        ))}

      </div>

    )
  }
}

export default AsyncData;
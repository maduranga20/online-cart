import React, { Component } from 'react'

import './cart.css'


import 'bootstrap/dist/css/bootstrap.min.css'

import { Button, Form, InputGroup, Card } from 'react-bootstrap'


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
    const BASE_URL = "https://fakestoreapi.com/products?limit=20";
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
    // let parseContent = parseInt(this.state.content, 10);
    const selectPrice = this.state.get.filter(item => item.title);
    // console.log(selectPrice);
    // console.log(this.state.get[0]?.category);
    console.log(selectPrice);
    //     <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
    //  placeholder="Username"
    //<input type='text' onChange={this.InsertData} />
    //style={{ width: '300px',}}\
    // style={{ marginBottom: '4%' }}
    return (

      <div>

        <div className="wrapper">
          <InputGroup className="mb-3 " id="input" onChange={this.InsertData}>

            <Form.Control

              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <Button onClick={this.SubmitData}>Search</Button>
          </InputGroup>
        </div>
        <div className='row' style={{ marginTop: '4%', marginLeft: '2%' }}>
          {selectPrice.map((item) => (
            <div className='col-md-3 mb-4' >
              <Card  style={{ height: '30rem',  width: 'auto'}}>
                <div className="post" key={item.id}>
                  <Card.Body>
                    <Card.Title >{item.title}</Card.Title>
                    <Card.Img style={{ height: 'auto',  width: '10em', objectFit: 'contain'}} variant="top" src={item.image} alt='product' />
                  <div style={{ marginLeft: '9rem', marginTop: '4rem' }}> <i class="fa fa-shopping-cart" aria-hidden="true"></i></div> 

                  </Card.Body>

                 
               
                </div>
              </Card>
            </div>

          ))}
        </div>

      </div>

    )



  }
}

export default AsyncData;

//https://fakestoreapi.com/products?limit=10
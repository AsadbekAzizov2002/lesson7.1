import axios from "axios";
import React, { Component } from "react";

export default class Food extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      loading: true,
      console: null,
      page: 1,
    };
  }
  componentDidMount() {
    axios
      .get("https://dummyjson.com/recipes")
      .then((res) => {
        this.setState({ data: res.data });
      })

      .catch((err) => this.setState({ error: err }))
      .finally(()=> this.setState({loading : false}))
  }
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    const { data , loading } = this.state;
    console.log(data );

    return (
      <div>
        <h2>Food</h2>
        {
            loading && <p>loading...</p>
        }
        <div>
          {data?.recipes?.map((food) => (
            <div key={food.id}>
              <img src={food.image} width={300} alt="" />
              <h2>{food.name}</h2>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

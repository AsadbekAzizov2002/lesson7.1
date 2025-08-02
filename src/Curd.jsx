import React, { Component } from "react";

export default class Curd extends Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname: "",
      data: [],
      editingItemId: null,
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { editingItemId, fname, lname, data } = this.state;
    if (editingItemId) {
        // updete
      console.log("updeti");
      const updateDate = data.map((user) =>
        user.id === editingItemId ? { id: editingItemId, fname, lname } : user
      );
      this.setState({
        data: updateDate,
        fname: "",
        lname: "",
      });
      //  updeti
    } else {
        // create
      const user = {
        id: Date.now(),
        fname,
        lname,
      };
      this.setState({ data: [...data, user], fname: "", lname: "" });
    }
  };

  handleDelate = (id) => {
    this.setState({ data: this.state.data.filter((user) => user.id !== id) });
  };
  handleUpdate = (user) => {
    console.log(user);
    this.setState({
      fname: user.fname,
      lname: user.lname,
      editingItemId: user.id,
    });
  };
  render() {
    const { data, fname, lname } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} action="">
          <input
            value={fname}
            onChange={(e) => this.setState({ fname: e.target.value })}
            type="text"
          />
          <input
            value={lname}
            onChange={(e) => this.setState({ lname: e.target.value })}
            type="text"
          />
          <button>submit</button>
        </form>
        <div>
          {data?.map((user) => (
            <div key={user.id}>
              <h3>
                {user.fname} {user.lname}
              </h3>
              <button onClick={() => this.handleDelate(user.id)}>delete</button>
              <button onClick={() => this.handleUpdate(user)}>update</button>
              <hr />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

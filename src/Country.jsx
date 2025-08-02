import React, { Component } from "react";

export default class Country extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      capital: "",
      population: "",
      area: "",
      countries: [],
      isEditing: false,
      editId: null,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, capital, population, area, isEditing, editId, countries } =
      this.state;

    if (isEditing) {
      const updated = countries.map((item) =>
        item.id === editId ? { ...item, name, capital, population, area } : item
      );
      this.setState({
        countries: updated,
        name: "",
        capital: "",
        population: "",
        area: "",
        isEditing: false,
        editId: null,
      });
    } else {
      const newCountry = {
        id: Date.now(),
        name,
        capital,
        population,
        area,
      };
      this.setState({
        countries: [...countries, newCountry],
        name: "",
        capital: "",
        population: "",
        area: "",
      });
    }
  };

  handleDelete = (id) => {
    const filtered = this.state.countries.filter((item) => item.id !== id);
    this.setState({ countries: filtered });
  };

  handleUpdate = (item) => {
    this.setState({
      name: item.name,
      capital: item.capital,
      population: item.population,
      area: item.area,
      isEditing: true,
      editId: item.id,
    });
  };

  render() {
    const { name, capital, population, area, countries } = this.state;

    return (
      <div className="max-w-xl mx-auto mt-10 p-4 bg-gray-100 shadow rounded">
        <form onSubmit={this.handleSubmit} className="space-y-4">
            
          <input
            type="text"
            name="name"
            placeholder="Country Name"
            value={name}
            onChange={this.handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="capital"
            placeholder="Capital"
            value={capital}
            onChange={this.handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="number"
            name="population"
            placeholder="Population"
            value={population}
            onChange={this.handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="number"
            name="area"
            placeholder="Area (km²)"
            value={area}
            onChange={this.handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>

        <div className="mt-6 space-y-4">
            <h2>Country</h2>
          {countries.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded shadow flex justify-between items-center"
            >
              <div>
                <p>
                  <strong>Name:</strong> {item.name}
                </p>
                <p>
                  <strong>Capital:</strong> {item.capital}
                </p>
                <p>
                  <strong>Population:</strong> {item.population}
                </p>
                <p>
                  <strong>Area:</strong> {item.area} km²
                </p>
              </div>
              <div className="space-y-2 flex">
                <button
                  onClick={() => this.handleDelete(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
                <br />
                <button
                  onClick={() => this.handleUpdate(item)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

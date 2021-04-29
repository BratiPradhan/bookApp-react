import React, { Component } from 'react';
import axiox from 'axios';
import {Table, Button} from 'reactstrap';


class App extends Component {
  state ={
    books: []
  }

  componentWillMount() {
    axiox.get('http://localhost:3000/books')
    .then((response) => (
      this.setState({
        books: response.data
      })
    ));
  }
  render() {
    let books = this.state.books.map((book) => {
      return (
        <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
      <td>{book.rating}</td>
              <td>
                <Button color="success" size="sm" className="mr-4">Edit</Button>
                <Button color="danger" size="sm">Delete</Button>
              </td>
            </tr>
      )
    }) 
    return (
      <div className="App container">
        <Table>
          <thread>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thread>

          <tbody>
            <tr>
              <td>1</td>
              <td>Book title</td>
              <td>2.5</td>
              <td>
                <Button color="success" size="sm" className="mr-4">Edit</Button>
                <Button color="danger" size="sm">Delete</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      );
  }
}
 
export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import {Button, Table, Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class PostsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    this.fetchPostsList();
  }

  fetchPostsList = () => {
    fetch('/api/v1/posts').
      then((response) => response.json()).
      then((posts) =>  this.setState({ posts }));
  };

  fetchSortedPostsList = () => {
    fetch('/api/v1/posts/sort').
      then((response) => response.json()).
      then((posts) =>  this.setState({ posts }));
  };

  handleDelete = (postId) => {
    fetch(`/api/v1/posts/${postId}`, { method: 'delete' }).
      then((response) => {
        alert('Student deleted successfully')
        this.fetchPostsList();
      });
  }

  sortByName = () => {
    const sortedArray = this.state.posts.sort((a,b) => a.fullname.localeCompare(b.fullname))
    this.setState({posts: sortedArray})
  }

  sortByIDAscending = () => {
    const sortedArray = this.state.posts.sort((a,b) => {return parseInt(a.id) - parseInt(b.id)})
    this.setState({posts: sortedArray})
  }

  sortByIDDescending = () => {
    const sortedArray = this.state.posts.sort((a,b) => {return parseInt(b.id) - parseInt(a.id)})
    this.setState({posts: sortedArray})
  }

  render() {
    const { posts } = this.state;
    return (
      <Container>
      <div>
        <h1 align= 'center'>Students </h1>

        <div className='d-flex'>
        
          <DropdownButton id="dropdown-basic-button" 
          size="sm"
          title="Sort"
          >
            <Dropdown.Item  onClick={() => {this.sortByIDAscending()}}>Ascending</Dropdown.Item>
            <Dropdown.Item  onClick={() => {this.sortByIDDescending()}}>Descending</Dropdown.Item>
            <Dropdown.Item  onClick={() => {this.sortByName()}}>Name</Dropdown.Item>
          </DropdownButton>
        </div>
            
        <Table striped bordered hover className='mt-3'>
          <thead>
            <tr>
              <th>Sr. no</th>
              <th>Name</th>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
              
            </tr>
          </thead>
          <tbody>
          {
            posts.map((post) => {
              return (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.fullname}
                  </td>
                  <td>{post.description}</td>
                  <td>
                    <Link to={`/posts/${post.id}/edit`}>

                     <button className='btn btn-warning'> Edit </button>
                    </Link>
                    </td>
                    <td>
                    <button onClick={() => this.handleDelete(post.id)} className='btn btn-danger'>
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </Table>
      </div>
      </Container>
    );
  }
}


import { Component } from 'react';

import { StyledAppContainer } from 'App.styled';
import { fetchPosts, findPostById } from 'services/api';
import { ColorRing } from 'react-loader-spinner';

export class App extends Component {
  state = {
    posts: null,
    isLoading: false,
    error: null,
    searchedPostId: null,
  };

  fetchAllPosts = async () => {
    try {
      this.setState({ isLoading: true });
      const posts = await fetchPosts();

      this.setState({ posts: posts });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  fetchPostById = async () => {
    try {
      this.setState({ isLoading: true });
      const post = await findPostById(this.state.searchedPostId);

      this.setState({ posts: [post] });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.fetchAllPosts();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.searchedPostId !== this.state.searchedPostId) {
      this.fetchPostById();
    }
  }

  handleSearchSubmit = event => {
    event.preventDefault();

    const searchedPostId = event.currentTarget.elements.searchPostId.value;
    this.setState({
      searchedPostId: searchedPostId,
    });

    event.currentTarget.reset();
  };

  render() {
    const showPosts =
      Array.isArray(this.state.posts) && this.state.posts.length;

    return (
      <>
        <StyledAppContainer>
          <h1 className="title">App Title</h1>
          <form onSubmit={this.handleSearchSubmit}>
            <label>
              <p>Enter post ID to find in database:</p>
              <input
                type="text"
                name="searchPostId"
                placeholder="Enter postID"
              />
              <button type="submit">Search</button>
              <button onClick={() => this.fetchAllPosts()} type="button">
                Reset
              </button>
            </label>
          </form>

          {this.state.isLoading && (
            <div>
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
              />
            </div>
          )}
          {this.state.error && <p className="error">{this.state.error}</p>}
          <ul className="postList">
            {showPosts &&
              this.state.posts.map(post => {
                return (
                  <li key={post.id} className="postListItem">
                    <span>Id: {post.id}</span>
                    <h3>Title: {post.title}</h3>
                    <h4>User Id: {post.userId}</h4>
                    <p>Body: {post.body}</p>
                  </li>
                );
              })}
          </ul>
        </StyledAppContainer>
      </>
    );
  }
}

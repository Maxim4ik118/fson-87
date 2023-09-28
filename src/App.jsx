import { Component } from 'react';

import { StyledAppContainer } from 'App.styled';
import { fetchPosts } from 'services/api';

export class App extends Component {
  state = {
    posts: null,
    isLoading: false,
    error: null,
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

  componentDidMount() {
    this.fetchAllPosts();
  }
  // можете ще раз пояснити як ми отримаємо з аксіоса функцію пошуку?

  render() {
    const showPosts =
      Array.isArray(this.state.posts) && this.state.posts.length;
      
    return (
      <>
        <StyledAppContainer>
          <h1 className="title">App Title</h1>
          {this.state.isLoading && (
            <div>
              <p>Loading....</p>
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

import React, { useState } from 'react';

import Header from '../Header';
import Post from '../Post';
import { ThemeProvider } from '../../context/ThemeContext';

import { Title } from './styles';

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: 'Title01',
      subtitle: 'Subtitle01',
      likes: 20,
      read: true,
      removed: false,
    },
    {
      id: Math.random(),
      title: 'Title02',
      subtitle: 'Subtitle02',
      likes: 10,
      read: false,
      removed: false,
    },
    {
      id: Math.random(),
      title: 'Title03',
      subtitle: 'Subtitle03',
      likes: 5,
      read: true,
      removed: false,
    },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title#0${prevState.length + 1}`,
        subtitle: `Subtitle#0${prevState.length + 1}`,
        likes: 20,
        read: false,
      },
    ]);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) =>
      prevState.map((post) =>
        post.id === postId ? { ...post, removed: true } : post
      )
    );
  }

  return (
    <ThemeProvider>
      <Header>
        <Title as="h2">
          Post da Semana
          <button onClick={handleRefresh}>Atualizar</button>
        </Title>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post key={post.id} onRemove={handleRemovePost} post={post} />
      ))}
    </ThemeProvider>
  );
}

export default App;

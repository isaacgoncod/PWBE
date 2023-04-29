import React, { useState } from 'react';

import Header from './Header';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title01', subtitle: 'Subtitle01', likes: 20 },
    { id: Math.random(), title: 'Title02', subtitle: 'Subtitle02', likes: 20 },
    { id: Math.random(), title: 'Title03', subtitle: 'Subtitle03', likes: 20 },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title#0${prevState.length + 1}`,
        subtitle: `Subtitle#0${prevState.length + 1}`,
        likes: 20,
      },
    ]);
  }

  return (
    <>
      <Header>
        <h2>
          Post da Semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post
          key={post.id}
          likes={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle,
          }}
        />
      ))}

      {/* <Post
        likes={20}
        post={{
          title: 'Título da Notícia 01',
          subtitle: 'Subtítulo da Notícia 01',
        }}
      />
      <Post
        likes={10}
        post={{
          title: 'Título da Notícia 01',
          subtitle: 'Subtítulo da Notícia 01',
        }}
      />
      <Post
        likes={5}
        post={{
          title: 'Título da Notícia 01',
          subtitle: 'Subtítulo da Notícia 01',
        }}
      /> */}
    </>
  );
}

export default App;

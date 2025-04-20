import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import './App.css';

function App() {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('blog-posts');
    return savedPosts ? JSON.parse(savedPosts) : [];
  });
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('general');
  const [tags, setTags] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [currentUser, setCurrentUser] = useState(() => localStorage.getItem('current-user') || null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date');

  const categories = ['general', 'work', 'personal', 'ideas', 'travel'];

  useEffect(() => {
    localStorage.setItem('blog-posts', JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('current-user', currentUser);
    } else {
      localStorage.removeItem('current-user');
    }
  }, [currentUser]);

  const handleLogin = (username) => setCurrentUser(username);
  const handleLogout = () => setCurrentUser(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const newPost = {
      id: editingId || Date.now(),
      title: title.trim(),
      content: content.trim(),
      category,
      tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      date: new Date().toLocaleString(),
      author: currentUser
    };

    if (editingId !== null) {
      setPosts(posts.map(post => post.id === editingId ? newPost : post));
      setEditingId(null);
    } else {
      setPosts(prevPosts => [...prevPosts, newPost]);
    }

    setTitle('');
    setContent('');
    setCategory('general');
    setTags('');
  };

  const handleDelete = (id) => setPosts(prevPosts => prevPosts.filter(post => post.id !== id));

  const handleEdit = (post) => {
    if (post.author !== currentUser) return;
    setEditingId(post.id);
    setTitle(post.title);
    setContent(post.content);
    setCategory(post.category);
    setTags(post.tags.join(', '));
  };

  const filteredPosts = posts
    .filter(post => {
      const searchLower = searchQuery.toLowerCase();
      return (
        post.title.toLowerCase().includes(searchLower) ||
        post.content.toLowerCase().includes(searchLower) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
        post.category.toLowerCase().includes(searchLower)
      );
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date) - new Date(a.date);
        case 'title':
          return a.title.localeCompare(b.title);
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

  if (!currentUser) return <Login onLogin={handleLogin} />;

  return (
    <div className="App">
      <div className="header">
        <h1>Mini Blog</h1>
        <div className="user-info">
          <span>Welcome, {currentUser}!</span>
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      </div>

      <div className="controls">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search posts..."
          className="search-input"
        />
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sort-select">
          <option value="date">Sort by Date</option>
          <option value="title">Sort by Title</option>
          <option value="category">Sort by Category</option>
        </select>
      </div>
      
      <form onSubmit={handleSubmit} className="post-form">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="title-input"
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="category-select">
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
          ))}
        </select>
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Tags (comma separated)"
          className="tags-input"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          className="content-input"
        />
        <button type="submit" className="submit-button">
          {editingId !== null ? 'Save Changes' : 'Add Post'}
        </button>
      </form>

      <div className="posts-list">
        {filteredPosts.map(post => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <h2>{post.title}</h2>
              <span className="post-category">{post.category}</span>
            </div>
            <p>{post.content}</p>
            <div className="post-tags">
              {post.tags.map(tag => (
                <span key={tag} className="tag">#{tag}</span>
              ))}
            </div>
            <div className="post-footer">
              <div className="post-info">
                <span className="post-author">By: {post.author}</span>
                <span className="post-date">{post.date}</span>
              </div>
              <div className="post-actions">
                {post.author === currentUser && (
                  <>
                    <button onClick={() => handleEdit(post)} className="edit-button">Edit</button>
                    <button onClick={() => handleDelete(post.id)} className="delete-button">Delete</button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

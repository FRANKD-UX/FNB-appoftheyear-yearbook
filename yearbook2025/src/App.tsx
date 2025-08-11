import React, { useState } from "react";
import "./App.css";

// Enhanced Timeline Data with more detailed descriptions
const timelineData = [
  { 
    week: 1, 
    topic: "Intro to HTML & CSS",
    description: "You started with the basics of web development and were introduced to HTML and how it works in the Web",
    skills: ["HTML5", "Front end Dev intro ","IDE"]
  },
  { 
    week: 2, 
    topic: "JavaScript Basics",
    description: "Sed do eiusmod tempor incididunt ut labore. Mastering the fundamentals of programming logic and syntax.",
    skills: ["Variables", "Functions", "Arrays", "Objects"]
  },
  { 
    week: 3, 
    topic: "Advanced JS & DOM",
    description: "Ut enim ad minim veniam, quis nostrud exercitation. Interactive web pages and dynamic content manipulation.",
    skills: ["DOM Manipulation", "Event Handling", "Async/Await", "APIs"]
  },
  { 
    week: 4, 
    topic: "React Fundamentals",
    description: "Duis aute irure dolor in reprehenderit in voluptate. Component-based architecture and modern UI development.",
    skills: ["Components", "Props", "State", "Hooks"]
  },
  { 
    week: 5, 
    topic: "Backend with Node.js",
    description: "Excepteur sint occaecat cupidatat non proident. Server-side development and API creation.",
    skills: ["Express.js", "Routing", "Middleware", "REST APIs"]
  },
  { 
    week: 6, 
    topic: "Databases & APIs",
    description: "Sunt in culpa qui officia deserunt mollitia. Data persistence and external service integration.",
    skills: ["MongoDB", "SQL", "CRUD Operations", "API Integration"]
  },
  { 
    week: 7, 
    topic: "Authentication & Security",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing. User management and application security best practices.",
    skills: ["JWT", "OAuth", "Password Hashing", "Security Headers"]
  },
  { 
    week: 8, 
    topic: "Deployment & Hosting",
    description: "Sed ut perspiciatis unde omnis iste natus error. Taking applications from development to production.",
    skills: ["Docker", "AWS", "CI/CD", "Environment Variables"]
  },
  { 
    week: 9, 
    topic: "Final Projects & Demo Day",
    description: "At vero eos et accusamus et iusto odio dignissimos. Showcasing skills through comprehensive portfolio projects.",
    skills: ["Project Management", "Code Review", "Presentation", "Portfolio"]
  },
];

// Star SVG for rating
const Star = ({ filled, onClick }: { filled: boolean; onClick: () => void }) => (
  <svg
    onClick={onClick}
    height="24"
    width="24"
    viewBox="0 0 24 24"
    fill={filled ? "#fbc02d" : "#e0e0e0"}
    stroke="#999"
    strokeWidth="1"
    style={{ cursor: "pointer", transition: "fill 0.2s ease" }}
    className="star-icon"
  >
    <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
  </svg>
);

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="graduation-cap"></div>
        <h1>FNB APP OF THE YEAR Developer Bootcamp</h1>
        <h2>YOU MADE IT AND WE PROUD OF YOU!!!!!</h2>
        <p>
          Celebrating our incredible journey through 9 weeks of intensive learning, 
          collaborative coding, and transformative growth. From HTML novices to full-stack developers,
          this is our story of dedication, perseverance, and success.
        </p>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">9</span>
            <span className="stat-label">Weeks</span>
          </div>
          <div className="stat">
            <span className="stat-number">200+</span>
            <span className="stat-label">Hours</span>
          </div>
          <div className="stat">
            <span className="stat-number">15+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat">
            <span className="stat-number">∞</span>
            <span className="stat-label">Possibilities</span>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Developers collaborating"
          className="hero-img"
        />
      </div>
    </section>
  );
}

function Timeline() {
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);

  return (
    <section className="timeline">
      <h2>This is what your  9-Week Journey looked like </h2>
      <p className="timeline-intro">
        Every week brought new challenges, breakthroughs, and friendships.<br />
        Click on any week to see what made it special.
      </p>
      <div className="timeline-container">
        {timelineData.map(({ week, topic, description, skills }) => (
          <div 
            key={week} 
            className={`timeline-item ${selectedWeek === week ? 'expanded' : ''}`}
            onClick={() => setSelectedWeek(selectedWeek === week ? null : week)}
          >
            <div className="circle">{week}</div>
            <div className="content">
              <h3>Week {week}: {topic}</h3>
              {selectedWeek === week && (
                <div className="week-details">
                  <p>{description}</p>
                  <div className="skills">
                    <strong>Key Skills:</strong>
                    <div className="skill-tags">
                      {skills.map(skill => (
                        <span key={skill} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Comments() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [comments, setComments] = useState<{ text: string; rating: number; name: string; date: string }[]>([
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This bootcamp changed my life! The instructors were amazing and the curriculum was perfectly structured.",
      rating: 5,
      name: "Sarah Johnson",
      date: "2 days ago"
    },
    {
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Great experience, learned so much in just 9 weeks!",
      rating: 4,
      name: "Mike Chen",
      date: "1 week ago"
    }
  ]);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [userName, setUserName] = useState("");

  const handleLogin = () => {
    setLoggedIn(true);
    setUserName("Alex Developer");
  };

  const submitComment = () => {
    if (text.trim() && rating > 0) {
      const newComment = {
        text,
        rating,
        name: userName,
        date: "Just now"
      };
      setComments([newComment, ...comments]);
      setText("");
      setRating(0);
    }
  };

  const averageRating = comments.length > 0 
    ? (comments.reduce((sum, c) => sum + c.rating, 0) / comments.length).toFixed(1)
    : "0.0";

  return (
    <section className="comments">
      <h2>Share Your Experience</h2>
      <div className="rating-summary">
        <div className="avg-rating">
          <span className="rating-number">{averageRating}</span>
          <div className="rating-stars">
            {[1, 2, 3, 4, 5].map((num) => (
              <span key={num} className={`star ${parseFloat(averageRating) >= num ? 'filled' : ''}`}>★</span>
            ))}
          </div>
          <span className="rating-count">({comments.length} reviews)</span>
        </div>
      </div>

      {!loggedIn ? (
        <div className="login-section">
          <p>Connect with LinkedIn to share your bootcamp experience</p>
          <button onClick={handleLogin} className="btn linkedin-btn">
            <span>🔗</span> Continue with LinkedIn
          </button>
        </div>
      ) : (
        <div className="comment-form">
          <div className="form-header">
            <div className="user-info">
              <div className="user-avatar">👤</div>
              <span className="user-name">{userName}</span>
            </div>
          </div>
          <textarea
            placeholder="Share your bootcamp experience, favorite moments, or advice for future students..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="comment-textarea"
          ></textarea>
          <div className="form-footer">
            <div className="stars">
              <span>Rate your experience:</span>
              {[1, 2, 3, 4, 5].map((num) => (
                <Star key={num} filled={rating >= num} onClick={() => setRating(num)} />
              ))}
            </div>
            <button onClick={submitComment} className="btn submit-btn" disabled={!text.trim() || rating === 0}>
              Post Review
            </button>
          </div>
        </div>
      )}

      <div className="comment-list">
        <h3>What our graduates are saying</h3>
        {comments.map((comment, i) => (
          <div key={i} className="comment-item">
            <div className="comment-header">
              <div className="commenter-info">
                <div className="commenter-avatar">👤</div>
                <div>
                  <strong className="commenter-name">{comment.name}</strong>
                  <span className="comment-date">{comment.date}</span>
                </div>
              </div>
              <div className="comment-rating">
                {[1, 2, 3, 4, 5].map((num) => (
                  <span key={num} className={`star ${comment.rating >= num ? 'filled' : ''}`}>★</span>
                ))}
              </div>
            </div>
            <p className="comment-text">{comment.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function LifeAfterFNB() {
  const [posts, setPosts] = useState<{ 
    id: number;
    name: string; 
    title: string;
    content: string;
    type: 'update' | 'opportunity';
    date: string;
    likes: number;
    company?: string;
  }[]>([
    {
      id: 1,
      name: "Jessica Williams",
      title: "Frontend Developer at TechCorp",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit! Just landed my dream job as a Frontend Developer. The skills I learned at FNB bootcamp were exactly what they were looking for. Thank you to all my classmates and instructors! 🚀",
      type: 'update',
      date: '3 days ago',
      likes: 12,
      company: "TechCorp"
    },
    {
      id: 2,
      name: "David Park",
      title: "Full Stack Developer",
      content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We're hiring junior developers at StartupXYZ! Looking for recent bootcamp grads with React and Node.js experience. DM me if interested!",
      type: 'opportunity',
      date: '1 week ago',
      likes: 8,
      company: "StartupXYZ"
    }
  ]);
  const [newPost, setNewPost] = useState("");
  const [postType, setPostType] = useState<'update' | 'opportunity'>('update');
  const [showForm, setShowForm] = useState(false);

  const submitPost = () => {
    if (newPost.trim()) {
      const post = {
        id: posts.length + 1,
        name: "Alex Developer",
        title: "Recent Graduate",
        content: newPost,
        type: postType,
        date: 'Just now',
        likes: 0,
        company: postType === 'opportunity' ? "Your Company" : undefined
      };
      setPosts([post, ...posts]);
      setNewPost("");
      setShowForm(false);
    }
  };

  const likePost = (id: number) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  return (
    <section className="life-after-fnb">
      <div className="page-header">
        <h2>Life After FNB</h2>
        <p>Stay connected with your fellow graduates. Share career updates, job opportunities, and celebrate each other's successes!</p>
      </div>

      <div className="post-actions">
        <button 
          onClick={() => setShowForm(!showForm)} 
          className="btn create-post-btn"
        >
          {showForm ? 'Cancel' : '+ Create Post'}
        </button>
      </div>

      {showForm && (
        <div className="post-form">
          <div className="form-header">
            <div className="user-info">
              <div className="user-avatar">👤</div>
              <div>
                <strong>Alex Developer</strong>
                <span>Recent Graduate</span>
              </div>
            </div>
          </div>
          
          <div className="post-type-selector">
            <label className={`type-option ${postType === 'update' ? 'selected' : ''}`}>
              <input 
                type="radio" 
                name="postType" 
                value="update" 
                checked={postType === 'update'}
                onChange={(e) => setPostType(e.target.value as 'update')}
              />
              <span>Career Update</span>
            </label>
            <label className={`type-option ${postType === 'opportunity' ? 'selected' : ''}`}>
              <input 
                type="radio" 
                name="postType" 
                value="opportunity" 
                checked={postType === 'opportunity'}
                onChange={(e) => setPostType(e.target.value as 'opportunity')}
              />
              <span>Job Opportunity</span>
            </label>
          </div>

          <textarea
            placeholder={postType === 'update' 
              ? "Share your career progress, new role, or learning journey..."
              : "Post about job openings, freelance opportunities, or collaboration requests..."
            }
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            className="post-textarea"
          ></textarea>
          
          <div className="form-actions">
            <button onClick={submitPost} className="btn submit-btn">
              Share Post
            </button>
          </div>
        </div>
      )}

      <div className="posts-feed">
        {posts.map((post) => (
          <div key={post.id} className={`post ${post.type}`}>
            <div className="post-header">
              <div className="post-user-info">
                <div className="user-avatar">👤</div>
                <div className="user-details">
                  <strong className="user-name">{post.name}</strong>
                  <span className="user-title">{post.title}</span>
                  {post.company && <span className="user-company">at {post.company}</span>}
                  <span className="post-date">{post.date}</span>
                </div>
              </div>
              <div className={`post-badge ${post.type}`}>
                {post.type === 'update' ? '📢 Update' : '💼 Opportunity'}
              </div>
            </div>
            <div className="post-content">
              <p>{post.content}</p>
            </div>
            <div className="post-actions">
              <button 
                className="action-btn like-btn" 
                onClick={() => likePost(post.id)}
              >
                👍 {post.likes} {post.likes === 1 ? 'Like' : 'Likes'}
              </button>
              <button className="action-btn comment-btn">💬 Comment</button>
              <button className="action-btn share-btn">📤 Share</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'life-after-fnb'>('home');

  const renderPage = () => {
    if (currentPage === 'life-after-fnb') {
      return (
        <div className="page">
          <LifeAfterFNB />
        </div>
      );
    }
    
    return (
      <div className="page">
        <Hero />
        <Timeline />
        <Comments />
      </div>
    );
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-brand">
          <span className="nav-logo">🎓</span>
          <h1>FNB Yearbook 2025</h1>
        </div>
        <div className="nav-links">
          <button 
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => setCurrentPage('home')}
          >
            Home
          </button>
          <button 
            className={`nav-link ${currentPage === 'life-after-fnb' ? 'active' : ''}`}
            onClick={() => setCurrentPage('life-after-fnb')}
          >
            Life After FNB
          </button>
        </div>
      </nav>
      
      {renderPage()}
      
              <footer className="footer">
                <div className="footer-content">
                  <p>FNB Developer Bootcamp - Class of 2025</p>
                  <p>From code beginners to full-stack developers in 9 weeks 🚀</p>
                </div>
              </footer>
            </>
          );
      }
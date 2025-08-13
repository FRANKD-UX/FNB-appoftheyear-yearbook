import React, { useState, useEffect } from "react";
import './App.css';

// Enhanced Timeline Data with more detailed descriptions
const timelineData = [
  { 
    week: 1, 
    topic: "Intro to HTML & CSS",
    description: " crafting apps using HTML and beautifying them using CSS. Upon completion of this level, you will have built 2 apps in its entirety from the ground up",
    skills: ["HTML5", "The Software Development Live Cycle(SDLC)", "GitHub and Collaboration", "App Strategies",]
  },
  { 
    week: 2, 
    topic: "CSS Basics",
    description: "introduced to CSS, the language used to add style to your apps. You’re going to learn how to change fonts, add colors and include hover effects in your apps. Finally, you’ll combine this with what you’ve learned in week 1 to create your first complete app.",
    skills: ["CSS", "CSS Fonts", "List Bullet Image", "List Bullets"]
  },
  { 
    week: 3, 
    topic: "Pine Zoo",
    description: "walked through the Software Development Life Cycle, using our case study app, Pine City Zoo, to explore how developers go from an idea to a full-fledged app. It’s all about planning, designing, and thinking ahead—just like a real dev team would.",
    skills: ["Styling the Header Section", "EAnimal Page HTML", "Animal Page More Links", "Setting up the Development Environment"]
  },
  { 
    week: 4, 
    topic: "JavaScript Fundamentals",
    description: "using everything you’ve learned so far to build a fully functional calculator app. ",
    skills: ["Functions", "DOM manipulation",]
  },
  { 
    week: 5, 
    topic: "The Calculator App",
    description: "Excepteur sint occaecat cupidatat non proident. Server-side development and API creation.",
    skills: ["Express.js", "Routing", "Middleware", "REST APIs"]
  },
  { 
    week: 6, 
    topic: "Contact Book App",
    description: "time to take things up a notch. You’ll be building a fully functional Contact Book app, your most advanced project yet. What makes this one different? Instead of adding contacts manually, your app will connect to an API to fetch data from an external database.",
    skills: ["API", "API Key", "JSON Array", "Formdata Object"]
  },
  { 
    week: 7, 
    topic: "intro to python",
    description: "We’ll be leaving the safety and comfort of HTML, CSS and JS, and embarking on a whole new quest. This week, you’ll be starting your journey into Python Development!",
    skills: ["Python", "Strings", "Variables", "Operators "]
  },
  { 
    week: 8, 
    topic: "Deployment & Hosting",
    description: "This week, we’re continuing your Python journey. You’ll begin by exploring data structures in Python, then apply your skills to build a complete project, from the ground up, using only Python. It's a challenging but exciting step forward.",
    skills: ["Tuples", "Sets", "Dictionaries," ]
  },
  { 
    week: 9, 
    topic: "Exam",
    description: "time to put what you leanred to the test lets write the exam ",
    skills: ["Exam Preparation", "Mock Exam", "Final Exam", "Review and Feedback"]
  },
];

// Simulated JSON Server API
class PostAPI {
  private posts: any[] = [
    {
      id: 1,
      name: "Jessica Williams",
      title: "Frontend Developer at TechCorp",
      content: " Just landed my dream job as a Frontend Developer. The skills I learned at FNB Academy were exactly what they were looking for. Thank you to all my classmates and instructors! ",
      type: 'update',
      date: this.formatDate(new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)),
      likes: 12,
      company: "TechCorp",
      avatar: ""
    },
    {
      id: 2,
      name: "David Park",
      title: "Full Stack Developer",
      content: " We're hiring junior developers at StartupXYZ! Looking for recent bootcamp grads with React and Node.js experience. DM me if interested!",
      type: 'opportunity',
      date: this.formatDate(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)),
      likes: 8,
      company: "StartupXYZ",
      avatar: ""
    },
    {
      id: 3,
      name: "Sarah Mohamed",
      title: "Junior Developer at FNB",
      content: "Just got hired at FNB as a Junior Developer. The bootcamp prepared me so well for the technical interviews. Dreams do come true! ",
      type: 'update',
      date: this.formatDate(new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)),
      likes: 25,
      company: "FNB",
      avatar: ""
    }
  ];

  formatDate(date: Date): string {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays === 1) return '1 day ago';
    if (diffInDays < 7) return `${diffInDays} days ago`;
    
    const diffInWeeks = Math.floor(diffInDays / 7);
    if (diffInWeeks === 1) return '1 week ago';
    if (diffInWeeks < 4) return `${diffInWeeks} weeks ago`;
    
    return date.toLocaleDateString();
  }

  async getPosts(): Promise<any[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return [...this.posts].sort((a, b) => b.id - a.id);
  }

  async createPost(post: any): Promise<any> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const newPost = {
      ...post,
      id: Math.max(...this.posts.map(p => p.id)) + 1,
      date: 'Just now',
      likes: 0,
      avatar: ""
    };
    
    this.posts.unshift(newPost);
    return newPost;
  }

  async likePost(id: number): Promise<any> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const post = this.posts.find(p => p.id === id);
    if (post) {
      post.likes += 1;
      return post;
    }
    throw new Error('Post not found');
  }
}

const postAPI = new PostAPI();

// Star SVG for rating
const Star = ({ filled, onClick }: { filled: boolean; onClick: () => void }) => (
  <svg
    onClick={onClick}
    height="24"
    width="24"
    viewBox="0 0 24 24"
    fill={filled ? "#FF6B35" : "#e0e0e0"}
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
        <div className="fnb-logo">
          <span className="logo-text">FNB APP OF THE YEAR </span>
          <span className="academy-text"> ACADEMY </span>
        </div>
        <h1>Developer Bootcamp</h1>
        <h2>Class of 2025 Yearbook</h2>
        <p>
          Celebrating our incredible journey through 9 weeks of intensive learning, 
          collaborative coding, and transformative growth. From coding novices to full-stack developers,
          this is our story of dedication, perseverance, and success at FNB Academy App of the year.
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
          src="/fnb.png" 
          alt="FNB Hero"
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
      <h2>Our 9-Week Journey</h2>
      <p className="timeline-intro">
        Every week brought new challenges, breakthroughs, and friendships. 
        Click on any week to see what made it special.
      </p>
      <div className="timeline-container">
        {timelineData.map(({ week, topic, description, skills }) => (
          <div 
            key={week} 
            className={`timeline-item ${selectedWeek === week ? 'expanded' : ''}`}
            onClick={() => setSelectedWeek(selectedWeek === week ? null : week)}
          >
            <div className="timeline-connector"></div>
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
      text: " FNB Academy changed my life! The instructors were amazing and the curriculum was perfectly structured.",
      rating: 5,
      name: "Qhawe Mbele",
      date: "2 days ago"
    },
    {
      text: " Great experience at FNB Academy, learned so much in just 9 weeks!",
      rating: 4,
      name: "Frank Ndlovu",
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
          <p>Connect with LinkedIn to share your FNB Academy experience</p>
          <button onClick={handleLogin} className="btn linkedin-btn">
            <span></span> Continue with LinkedIn
          </button>
        </div>
      ) : (
        <div className="comment-form">
          <div className="form-header">
            <div className="user-info">
              <div className="user-avatar"></div>
              <span className="user-name">{userName}</span>
            </div>
          </div>
          <textarea
            placeholder="Share your FNB Academy bootcamp experience, favorite moments, or advice for future students..."
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
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [newPost, setNewPost] = useState("");
  const [postType, setPostType] = useState<'update' | 'opportunity'>('update');
  const [showForm, setShowForm] = useState(false);
  const [userName, setUserName] = useState("Alex Developer");
  const [userTitle, setUserTitle] = useState("Recent Graduate");

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      setLoading(true);
      const fetchedPosts = await postAPI.getPosts();
      setPosts(fetchedPosts);
    } catch (error) {
      console.error('Error loading posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const submitPost = async () => {
    if (!newPost.trim()) return;
    
    try {
      setSubmitting(true);
      const post = {
        name: userName,
        title: userTitle,
        content: newPost,
        type: postType,
        company: postType === 'opportunity' ? "Your Company" : "FNB Academy"
      };
      
      const createdPost = await postAPI.createPost(post);
      setPosts(prevPosts => [createdPost, ...prevPosts]);
      setNewPost("");
      setShowForm(false);
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const likePost = async (id: number) => {
    try {
      await postAPI.likePost(id);
      setPosts(prevPosts => 
        prevPosts.map(post => 
          post.id === id ? { ...post, likes: post.likes + 1 } : post
        )
      );
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  if (loading) {
    return (
      <section className="life-after-fnb">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading posts from our community...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="life-after-fnb">
      <div className="page-header">
        <h2>Life After FNB Academy</h2>
        <p>Stay connected with your fellow graduates. Share career updates, job opportunities, and celebrate each other's successes!</p>
      </div>

      <div className="post-actions">
        <button 
          onClick={() => setShowForm(!showForm)} 
          className="btn create-post-btn"
          disabled={submitting}
        >
          {showForm ? 'Cancel' : '+ Create Post'}
        </button>
      </div>

      {showForm && (
        <div className="post-form">
          <div className="form-header">
            <div className="user-info">
              <div className="user-avatar"></div>
              <div className="user-details-form">
                <input 
                  type="text" 
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Your name"
                  className="name-input"
                />
                <input 
                  type="text" 
                  value={userTitle}
                  onChange={(e) => setUserTitle(e.target.value)}
                  placeholder="Your title"
                  className="title-input"
                />
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
              <span> Career Update</span>
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
            <button 
              onClick={submitPost} 
              className="btn submit-btn"
              disabled={submitting || !newPost.trim()}
            >
              {submitting ? 'Posting...' : 'Share Post'}
            </button>
          </div>
        </div>
      )}

      <div className="posts-feed">
        {posts.length === 0 ? (
          <div className="empty-state">
            <p>No posts yet. Be the first to share your journey!</p>
          </div>
        ) : (
          posts.map((post) => (
            <div key={post.id} className={`post ${post.type}`}>
              <div className="post-header">
                <div className="post-user-info">
                  <div className="user-avatar">{post.avatar}</div>
                  <div className="user-details">
                    <strong className="user-name">{post.name}</strong>
                    <span className="user-title">{post.title}</span>
                    {post.company && <span className="user-company">at {post.company}</span>}
                    <span className="post-date">{post.date}</span>
                  </div>
                </div>
                <div className={`post-badge ${post.type}`}>
                  {post.type === 'update' ? 'Update' : ' Opportunity'}
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
                   {post.likes} {post.likes === 1 ? 'Like' : 'Likes'}
                </button>
                <button className="action-btn comment-btn"> Comment</button>
                <button className="action-btn share-btn"> Share</button>
              </div>
            </div>
          ))
        )}
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
          <div className="nav-logo">
            <span className="logo-text">FNB</span>
            <span className="academy-text">ACADEMY</span>
          </div>
          <h1>Yearbook 2025</h1>
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
          <div className="footer-logo">
            <span className="logo-text">FNB</span>
            <span className="academy-text">ACADEMY</span>
          </div>
          <p>Developer Bootcamp - Class of 2025</p>
          <p>From code beginners to full-stack developers in 9 weeks </p>
        </div>
      </footer>

    </>
  );
}
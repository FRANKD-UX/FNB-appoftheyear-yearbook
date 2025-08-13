deployed site 
[https://vercel.com/frank-ds-projects/fnb-appoftheyear-yearbook/7AhojBb1NpneGzHKkR1fcTfR7SBb](https://lnkd.in/dCrjYvk9)

# FNB Academy Developer Bootcamp Yearbook

A digital yearbook application celebrating the FNB Academy Developer Bootcamp Class of 2025. This interactive web application chronicles the 9-week intensive learning journey from coding novices to full-stack developers, featuring the **FNB App of the Year Academy** program.

##  Features

### Core Sections
- **Hero Section**: Welcome page with FNB App of the Year Academy branding and bootcamp statistics
- **Interactive Timeline**: 9-week curriculum journey with expandable week details
- **Reviews & Testimonials**: Student feedback system with 5-star ratings
- **Life After FNB**: Alumni networking platform for career updates and job opportunities

### Interactive Elements
- **Expandable Timeline**: Click on any week to view detailed curriculum and skills learned
- **Rating System**: Submit and view bootcamp reviews with star ratings
- **Social Feed**: Create posts for career updates or job opportunities
- **LinkedIn Integration**: Mock authentication for user engagement
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

##  Live Demo

Visit the live application: [https://fnb-appoftheyear-yearbook.vercel.app/](https://fnb-appoftheyear-yearbook.vercel.app/)

##  Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: External CSS file (`App.css`)
- **State Management**: React Hooks (useState, useEffect)
- **Hosting**: Vercel
- **Build Tool**: Create React App
- **Icons**: Unicode emojis and custom SVG components

##  Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/fnb-yearbook-app.git
   cd fnb-yearbook-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Add required assets**
   
   Ensure you have the FNB logo image in your public folder:
   ```
   public/
   └── fnb.png
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```
   
   The app will open at `http://localhost:3000`

5. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

##  Project Structure

```
src/
├── App.tsx                 # Main application component
├── App.css                 # Styling (external CSS file)
├── components/
│   ├── Hero()             # Landing section with FNB branding
│   ├── Timeline()         # 9-week curriculum timeline
│   ├── Comments()         # Review and rating system
│   └── LifeAfterFNB()     # Alumni networking feed
├── data/
│   └── timelineData       # Actual curriculum week details
├── services/
│   └── PostAPI           # Mock API for social features
└── assets/
    └── fnb.png           # FNB Academy logo
```

##  Actual Curriculum Timeline

The app showcases the real 9-week FNB Academy bootcamp curriculum:

1. **Week 1**: Intro to HTML & CSS - Building foundation apps with HTML/CSS
2. **Week 2**: CSS Basics - Styling, fonts, colors, and hover effects
3. **Week 3**: Pine Zoo Project - Software Development Life Cycle (SDLC) case study
4. **Week 4**: JavaScript Fundamentals - Functions and DOM manipulation
5. **Week 5**: The Calculator App - Full-stack calculator development
6. **Week 6**: Contact Book App - API integration and external data fetching
7. **Week 7**: Intro to Python - Beginning Python development journey
8. **Week 8**: Python Data Structures - Tuples, Sets, Dictionaries
9. **Week 9**: Final Exam - Assessment and review

Each week includes:
- Real project descriptions from the bootcamp
- Actual skills and technologies taught
- Interactive expandable content
- Authentic learning progression

## Key Components

### Hero Component
```tsx
function Hero() {
  // Features FNB App of the Year Academy branding
  // Displays bootcamp statistics: 9 weeks, 200+ hours, 15+ projects
  // Uses local FNB logo image (/fnb.png)
}
```

### Timeline Component
```tsx
function Timeline() {
  // Interactive week-by-week curriculum display
  // Real curriculum data from FNB Academy
  // Expandable details with authentic project descriptions
  // Click-to-expand functionality with state management
}
```

### Comments System
```tsx
function Comments() {
  // 5-star rating system with visual feedback
  // Pre-populated with testimonials from Qhawe Mbele and Frank Ndlovu
  // LinkedIn-style authentication simulation
  // Average rating calculation and display
}
```

### Life After FNB Feed
```tsx
function LifeAfterFNB() {
  // Social media-style post creation
  // Two post types: Career Updates & Job Opportunities
  // Real success stories from Jessica Williams, David Park, Sarah Mohamed
  // Like functionality with real-time updates
  // Mock API simulation for data persistence
}
```

### PostAPI Service
```typescript
class PostAPI {
  async getPosts(): Promise<any[]>      // Fetch all posts with 500ms delay
  async createPost(post: any): Promise<any>  // Create new post with 300ms delay  
  async likePost(id: number): Promise<any>   // Like post with 200ms delay
  formatDate(date: Date): string        // Smart date formatting utility
}
```

## Design & Branding

### FNB Academy Branding
- **Logo**: "FNB APP OF THE YEAR ACADEMY" prominently displayed
- **Hero Image**: Local FNB logo (`/fnb.png`)
- **Color Scheme**: FNB corporate colors (Gold, Navy, Orange)
- **Typography**: Professional, clean fonts

### Responsive Layout
- Mobile-first design approach
- Flexbox and CSS Grid layouts
- Touch-friendly interactive elements
- Responsive typography and spacing

## 🔧 Mock Data & API

### Real Student Testimonials
```typescript
const comments = [
  {
    name: "Qhawe Mbele",
    rating: 5,
    text: "FNB Academy changed my life! The instructors were amazing..."
  },
  {
    name: "Frank Ndlovu", 
    rating: 4,
    text: "Great experience at FNB Academy, learned so much in just 9 weeks!"
  }
];
```

### Alumni Success Stories
```typescript
const posts = [
  {
    name: "Jessica Williams",
    title: "Frontend Developer at TechCorp",
    content: "Just landed my dream job as a Frontend Developer..."
  },
  {
    name: "David Park",
    title: "Full Stack Developer", 
    content: "We're hiring junior developers at StartupXYZ..."
  },
  {
    name: "Sarah Mohamed",
    title: "Junior Developer at FNB",
    content: "Just got hired at FNB as a Junior Developer..."
  }
];
```

##  Navigation & Pages

### Two-Page Application
- **Home Page**: Hero + Timeline + Comments sections
- **Life After FNB**: Alumni networking and career updates
- **Navigation**: Clean navbar with FNB Academy branding
- **Footer**: Consistent branding and program information

##  Key Features

### Interactive Timeline
- Real curriculum from HTML/CSS to Python
- Authentic project descriptions (Pine Zoo, Calculator, Contact Book)
- Skills progression from basic HTML to advanced Python data structures
- Click-to-expand functionality showing weekly details

### Rating System
- 5-star visual rating with custom SVG stars
- Average rating calculation and display
- Real student testimonials with names and dates
- LinkedIn-style authentication flow

### Social Feed
- Career update vs job opportunity post types
- Real-time like functionality
- Smart date formatting (relative time)
- Professional LinkedIn-style interface

##  Deployment

The app is deployed on Vercel with automatic deployments from the main branch.

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

### Required Assets
Ensure `public/fnb.png` exists for proper logo display.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest) 
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

##  Development

### Available Scripts
```bash
npm start          # Development server
npm run build      # Production build
npm test           # Run tests
npm run eject      # Eject from CRA (irreversible)
```

### Key Dependencies
- React 18+
- TypeScript
- Create React App
- External CSS styling

##  Customization

### Adding New Timeline Weeks
Update the `timelineData` array:
```typescript
const timelineData = [
  { 
    week: 10, 
    topic: "Advanced Topics",
    description: "Your new week description...",
    skills: ["Skill1", "Skill2", "Skill3"]
  }
];
```

### Updating Testimonials
Modify the initial `comments` state:
```typescript
const [comments, setComments] = useState([
  {
    text: "Your testimonial...",
    rating: 5,
    name: "Student Name",
    date: "1 week ago"
  }
]);
```

##  Known Limitations

- External CSS file dependency (`App.css` not provided in code)
- Mock API data resets on page refresh (no persistent storage)
- LinkedIn authentication is simulated (not real OAuth)
- Requires `fnb.png` asset in public folder
- No real-time collaboration features
## Future Enhancements

- [ ] Add actual CSS file with FNB branding
- [ ] Real backend API integration
- [ ] User authentication system
- [ ] Photo upload capabilities for profiles
- [ ] Real-time notifications
- [ ] Student profile pages
- [ ] Graduation certificate generation
- [ ] Email sharing functionality
- [ ] PWA capabilities
- [ ] Dark mode support

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Ensure you have the required CSS file and assets
4. Commit changes: `git commit -m 'Add new feature'`
5. Push to branch: `git push origin feature/new-feature`
6. Submit a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **FNB Academy** - For the comprehensive developer bootcamp program
- **Class of 2025** - Qhawe Mbele, Frank Ndlovu, and all students
- **Alumni Success Stories** - Jessica Williams, David Park, Sarah Mohamed
- **FNB App of the Year** - For the competition and recognition
- **Instructors** - For guidance throughout the 9-week journey
- **Vercel** - For hosting and deployment platform

##  Support

For questions about this yearbook app:
- Create an issue in this repository
- Contact the FNB Academy development team
- Check the live demo for functionality examples

## Technical Notes

- **CSS Dependency**: Requires external `App.css` file (not included in TypeScript code)
- **Asset Dependency**: Requires `public/fnb.png` for hero image
- **Mock API**: All data is stored in memory and resets on refresh
- **TypeScript**: Fully typed components and interfaces

---

**Made with  to celebrate the FNB Academy Developer Bootcamp Class of 2025**

*From HTML/CSS beginners to Python developers in just 9 weeks! *

**FNB App of the Year Academy - Building Tomorrow's Developers Today**

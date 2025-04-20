# Project phase 1 - Definition and planning

# User Personas for Mini Blog

## 1. Students
**Role:** University Student  
**Experience Level:** Regular note-taker

**Goals:**
- Organize study notes and project ideas
- Track assignments and deadlines
- Share notes with classmates

**Frustrations:**
- Losing important notes
- Difficulty organizing different subjects
- Time spent searching for specific information

**Needs:**
- Simple, intuitive UI/UX
- Good categorization system
- Search functionality

## 2. Software Developers
**Role:** Independent Professional  

**Goals:**
- Track project ideas and client notes
- Organize work-related tasks
- Maintain personal productivity journal

**Frustrations:**
- Scattered information across devices
- Difficulty finding specific project notes
- Time wasted on organization
- No clear system for categorizing work

**Needs:**
- Efficient categorization
- Tag-based organization
- Quick search capabilities

## 3. Designer
**Role:** Creative Professional  
**Experience Level:** Innovative, idea-focused

**Goals:**
- Capture creative ideas and inspiration
- Organize project concepts
- Track creative progress
- Document artistic journey

**Frustrations:**
- Lost inspiration moments
- Disorganized creative process
- Difficulty retrieving past ideas
- No system for connecting related concepts

**Needs:**
- Intuitive tagging system
- Visual organization of ideas
- Quick capture functionality
- Flexible categorization
- Easy navigation between related content

---


# Use Cases and User Flows for Mini Blog

## 1. Create a New Post
**User:** Any registered user  
**Trigger:** User clicks "Add Post" button

**Process:**
- User enters post title
- Selects category from predefined options
- Adds comma-separated tags
- Writes post content
- Clicks "Add Post" to save

**Outcome:**
- Post is saved to LocalStorage
- Post appears in the main feed
- Post is categorized and tagged for easy retrieval

## 2. Search and Filter Posts
**User:** Any registered user  
**Trigger:** User enters search query or selects sort option

**Process:**
- User types in search box or selects sort criteria
- System filters posts in real-time
- Results update automatically

**Outcome:**
- User sees filtered posts matching search criteria
- Posts are sorted according to selected criteria
- User can quickly find specific content

## 3. Edit Personal Posts
**User:** Post author  
**Trigger:** User clicks "Edit" on their own post

**Process:**
- User modifies post title, content, category, or tags
- Changes are previewed in real-time
- User clicks "Save Changes" to update

**Outcome:**
- Post is updated in LocalStorage
- Changes are reflected immediately
- Post maintains its original ID and creation date

---

## 3. UI Prototypes

### Prototype 
  The prototype was first seen on the paper and I will send it to you by email

# Information Architecture and Technical Design for Mini Blog

## Information Architecture

### 1. Hierarchical Structure
1. **Login Screen:**
   - Username input
   - Login button

2. **Main Dashboard:**
   - Post creation form
   - Search and filter controls
   - Posts list

### 2. Information Flow
1. **User Authentication:**
   - User enters username
   - System stores user info in LocalStorage

2. **Post Creation:**
   - User fills post form
   - System saves to LocalStorage
   - Post appears in feed

3. **Post Management:**
   - Author can edit/delete posts
   - Changes update in real-time
   - Data persists between sessions

## Technical Design

### 1. System Architecture
**Frontend:**
- Framework: React.js
- State Management: React Hooks (useState, useEffect)
- Storage: LocalStorage
- Styling: CSS

### 3. Key Features Implementation
- LocalStorage for data persistence
- Real-time search and filtering
- Category and tag management
- Author-based permissions

## Project Management

### 1. Core Features
- User authentication
- Post creation and management
- Categorization and tagging
- Search and filtering
- Data persistence

### 2. Development Phases
1. **Setup & Authentication (Week 1)**
   - React project setup
   - Login functionality

2. **Core Blog Features (Week 2)**
   - Post creation
   - Post management
   - LocalStorage integration

3. **Enhanced Features (Week 3)**
   - Categories and tags
   - Search functionality
   - Sorting options

4. **Testing & Refinement (Week 4)**
   - Bug fixes
   - UI improvements
   - Performance optimization

### 3. Testing Strategy
- Manual testing of core features
- Cross-browser compatibility

---

# party-finder

# PROJECT 4 README <!-- omit in toc -->

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**Party Finder** is an app designed to help table top role playing gamers both find a game to join, and post a game that needs players. Players will sign up for an account and be able to browse through all the posting to find a game that fits in their schedule. Alternatively, users can also make a posting for a game they'd like to host.

<br>

## MVP

<br>

### Goals

- Have user accounts
- Have game postings created by users
- Full CRUD on the user postings
- Comment sections on each game posting
- Full CrUD on comments
- 8 + separate componenets in organized file structure.
- state and props used in React Components
- Ruby on Rails backend
- React front end
- attractive styling using flexbox and/or grid
- 2 media queries in css for 3 screen sizes

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|    Library    | Description                                                              |
| :-----------: | :----------------------------------------------------------------------- |
|     React     | Front end framework and user interface                                   |
| React Router  | _For users to navigate through different pages depending on their needs_ |
|     Ruby      | _Backend Language_                                                       |
| Ruby on Rails | Back end framework                                                       |

<br>

### Client (Front End)

#### Wireframes

[Wireframe](https://whimsical.com/partyfinderwireframe-ADUhddMNV8MbeHC3zoTs5N)

#### Component Tree

[Component Tree Sample](https://whimsical.com/QSZ7z2ZJchyioBMB2ifiFL)

#### Component Architecture

```structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Card
            |__Card.jsx
            |__Card.css
      |__UI
          |__Layout
              |__Layout.jsx
              |__Layout.css
          |__NavBar
              |__NavBar.jsx
              |__NavBar.css
          |__Footer
              |__Footer.jsx
              |__Footer.css
      |__User
          |__Login.jsx
          |__Login.css
          |__Register.jsx
          |__Register.css
          |__UserDetail.jsx
          |__UserDetail.css
      |__Post
          |__PostCreate.jsx
          |__PostEdit.jsx
          |_PostDetail.jsx
      |__Comment
          |__CommentCreate.jsx
          |__CommentEdit.jsx
          |__CommentDetail.jsx
      |__Home
          |__Home.jsx
          |__Home.css
|__Containers
    |__PostContainer.jsx
    |__PostContainer.css
    |__CommentContainer.jsx
    |__CommentContainer.css

|__ services/
      |__api-helper.js
      |__user.js
      |__post.js
      |__comment.js


```

#### Time Estimates

| Task                   | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------------- | :------: | :------------: | :-----------: | :---------: |
| User backend auth      |    H     |     3 hrs      |      hrs      |     TBD     |
| Postings Backend       |    H     |     1 hrs      |      hrs      |     TBD     |
| comments Backend       |    H     |     1 hrs      |      hrs      |     TBD     |
| Postings Backend       |    H     |     1 hrs      |      hrs      |     TBD     |
| edit controllers       |    H     |     2 hrs      |      hrs      |     TBD     |
| edit models            |    H     |     1 hrs      |      hrs      |     TBD     |
| backend testing        |    H     |     3 hrs      |      hrs      |     TBD     |
| set up front end files |    H     |     2 hrs      |      hrs      |     TBD     |
| services               |    H     |     2 hrs      |      hrs      |     TBD     |
| UI components          |    H     |     2 hrs      |      hrs      |     TBD     |
| User components        |    H     |     6 hrs      |      hrs      |     TBD     |
| Posting components     |    H     |     6 hrs      |      hrs      |     TBD     |
| comment components     |    H     |     6 hrs      |      hrs      |     TBD     |
| styling                |    H     |     10 hrs     |      hrs      |     TBD     |
| TOTAL                  |          |     40 hrs     |      hrs      |     TBD     |

<br>

### Server (Back End)

#### ERD Model

[ERD Sample](https://drive.google.com/file/d/1OSDzk44m8d815enL7F-ZakG18HFLpBBy/view?usp=sharing)
<br>

---

## Post-MVP

- Add a rating/review for GMs
- different types of user accounts: players and game masters
- Formal sign up system - sends email/message to GM user account
- A way to show how many seats for a game are available that dynamically updates as people sign up
- Filter settings so users can filter parties by what days and times they are available
- Featured games section
- Guest login for potential future employers

---

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.

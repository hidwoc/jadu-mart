# Jadu Mart

- [Overview](#overview)
- [MVP](#mvp)
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

_**Jadu Mart** is an e-commerce website for my business Jadu Banchan. Admin users will be able to log into their account, create, edit and delete dishes. Customers will be able to browse all dishes, add dishes to their basket and place an order._

_**Jadu Mart** will not include any exchange of money._

<br>

## MVP

- Back End

  - Build a Ruby on Rails server with 4 tables (Dishes, Line_Items, Baskets, Users)
  - Dishes will be READ and its stock will be UPDATED via submitting a Basket for order
  - Line_Items will be CREATED and DESTROYED by adding/removing them from Baskets
  - Line_Items are instances of a Dish that get added to Baskets to account for and decrement a Dish's stock
  - For MVP, User will consist of an admin who will be able to CREATE and UPDATE Dishes

- Front End

  - Built with React
  - Make AXIOS calls to the Ruby on Rails API
  - Use React Router for client side routing
  - Allow admin to log in and render admin options

- Styling

  - Styled with CSS
  - Implements at least 2 media queries

- Deployment

  - Fully functioning deployed front-end via Netlify
  - Fully functioning deployed back-end via Heroku

<br>

### Libraries and Dependencies

|    Library    | Description                                             |
| :-----------: | :------------------------------------------------------ |
|     React     | _Renders front end_                                     |
| React Router  | _Enables client side routing_                           |
|     Axios     | _Enables client side to make API calls to the back end_ |
|     Rails     | _Enables creation of custom back end server_            |
|    bcrypt     | _Provides cybersecurity by hashing passwords_           |
| JWT Web Token | _Provides ecrypted user authentication_                 |

<br>

### Client (Front End)

#### Wireframes

- Desktop View

[Link to Wireframe](https://www.figma.com/file/ZdClM51iFSjJztfUwXNzmC/JaduMart?node-id=0%3A1)

![Home](https://user-images.githubusercontent.com/83293460/129063452-b254f6b9-63c0-4914-98dc-dec7870e72b3.png)
![Shop](https://user-images.githubusercontent.com/83293460/129063535-9f9a7ea3-4ad3-4fc3-8818-d9e7a0a1788c.png)
![Basket](https://user-images.githubusercontent.com/83293460/129063564-3b4ac111-f359-465f-b8ff-f86b640e9ff8.png)
![Login](https://user-images.githubusercontent.com/83293460/129063496-3d816dec-d196-4934-8aad-0c4e3664df23.png)

#### Admin View (Shop)

![Shop (admin view)](https://user-images.githubusercontent.com/83293460/129063533-d58f3556-83e2-4716-9a2e-5bcaf6ec5a9a.png)

#### Admin Only

![AddDish (admin)](https://user-images.githubusercontent.com/83293460/129063562-f5fe9d57-4461-4c9f-ae46-f7ef7afe4b88.png)
![EditDish (admin)](https://user-images.githubusercontent.com/83293460/129063565-6936316e-0679-431e-8ed7-71a9db9b79d0.png)

- Mobile View

![N/A](url)

#### Component Tree

[Component Tree](https://whimsical.com/jadumart-3WjUZDdzN4ko71m82aFroZ)

![Screen Shot 2021-08-11 at 11 58 14 AM](https://user-images.githubusercontent.com/83293460/129063954-97a73550-4f8d-402a-896f-0ffe9ea1c1c5.png)

#### Component File Structure

```structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
|__ components/
      |__ Main/
      |__ Footer/
      |__ DishDetails/
      |__ EditDish/
|__ Layout/
|__ screens/
      |__ Welcome/
      |__ Shop/
      |__ Basket/
      |__ Login/
      |__ AddDish/
|__ services/
      |__ apiConfig
      |__ users
      |__ dishes
      |__ line_items
      |__ baskets
|__App.jsx
|__App.css


```

#### Project Schedule

| Day          |               Components               |   Status   |
| ------------ | :------------------------------------: | :--------: |
| Wed Aug 11   |        Project Pitches Approval        | Incomplete |
| Thurs Aug 12 |      Set up backend, test routes       | Incomplete |
| Fri Aug 13   | Deploy to Heroku, Build React Skeleton | Incomplete |
| Sat Aug 14   |         Render all components          | Incomplete |
| Sun Aug 15   |                  CSS                   | Incomplete |
| Mon Aug 16   |      Successful CRUD on Frontend       | Incomplete |
| Tue Aug 17   |              Advanced CSS              | Incomplete |
| Wed Aug 18   |              Presentation              | Incomplete |

#### Time Estimates

| Task | Priority | Estimated Time | Time Invested | Actual Time |
| ---- | :------: | :------------: | :-----------: | :---------: |
| Proposal | H | 5 hrs | 5 hrs | |
| Set up Models | H | 1 hr | TBD | TBD |
| Seed Data | H | .5 hrs | TBD | TBD |
| Set up Routes | H | .5 hrs | TBD | TBD |
| Set up Controllers | H | 3 hrs | TBD | TBD |
| Test Routes | H | 2 hrs | TBD | TBD |
| Deploy to Heroku | H | .5 hrs | TBD | TBD |
| Create React Skeleton | H | .5 hrs | TBD | TBD |
| Layout | H | 1 hr | TBD | TBD |
| Main | H | 1 hr | TBD | TBD |
| Footer | H | 1 hr | TBD | TBD |
| Welcome | H | 1 hr | TBD | TBD |
| Shop | H | 1 hr | TBD | TBD |
| DishDetails | H | 1 hrs | TBD | TBD |
| Basket | H | 3 hrs | TBD | TBD |
| Login | H | 2 hrs | TBD | TBD |
| AddDish | H | 1 hrs | TBD | TBD |
| EditDish | H | 1 hrs | TBD | TBD |
| Authentication | H | 2 hr | TBD | TBD |
| Global CSS| H | 2 hrs | TBD | TBD |
| Layout CSS| H | 1 hr | TBD | TBD |
| Main CSS| H | 1 hr | TBD | TBD |
| Footer CSS| H | 1 hrs | TBD | TBD |
| Welcome CSS| H | 1 hr | TBD | TBD |
| Shop CSS| H | 1 hrs | TBD | TBD |
| DishDetails CSS| H | 2 hrs | TBD | TBD |
| Basket CSS| H | 3 hrs | TBD | TBD |
| Login CSS| H | 1 hrs | TBD | TBD |
| AddDish CSS| H | 2 hrs | TBD | TBD |
| EditDish CSS| H | 1 hrs | TBD | TBD |
| Deploy to Netlify | H | .5 hrs | TBD | TBD |
| TOTAL | | 45.5 hrs | TBD | TBD |

<br>

### Server (Back End)

#### ERD Model

![ERD](https://user-images.githubusercontent.com/83293460/129064489-40a1fb34-3a6a-47e4-bfb8-e4721411fb15.png)
<br>

---

## Post-MVP

- Back End

  - Admin will be able to DELETE dishes
  - Customers will be able to create and log into their own accounts
  - Add Orders table to save past orders via submitted baskets
  - Expand Dishes to offer different sizes available for purchase (ex. 4oz, 8oz, 16oz)
  - Add Reviews table to collect ratings and reviews of each Dish

- Front End

  - Once logged in, customers will be able to view their past orders, reorder and leave reviews for each dish
  - Details of a Dish, such as ingredients and flavor profile, can be viewed on a separate details page

- Enable payments to be made through the app

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.

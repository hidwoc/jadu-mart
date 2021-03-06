# Jadu Mart

- [Overview](#overview)
- [MVP](#mvp)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Project Schedule](#project-schedule)
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

Netlify: https://jadumart.netlify.app/

Heroku: https://jadumart-api.herokuapp.com/dishes

<br>

## MVP

- Back End

  - Build a Ruby on Rails server with 4 tables (Dishes, Line Items, Baskets, Users)
  - Dishes will be READ and its stock will be UPDATED via submitting a Basket for order
  - Line Items will be CREATED and DESTROYED by adding/removing them from Baskets
  - Line Items are instances of a Dish that get added to Baskets to account for and decrement a Dish's stock
  - For MVP, User will consist of an admin who will be able to CREATE, UPDATE and DELETE Dishes

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

Backend tables modeled after [Rails Shopping Cart](https://github.com/howardmann/Tutorials/blob/master/Rails_Shopping_Cart.md)

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

![Home](https://user-images.githubusercontent.com/83293460/129109054-8a13c61d-93ab-46e2-a5e8-b4d00f27cd87.png)
![Shop](https://user-images.githubusercontent.com/83293460/129109096-8277a473-3b11-4aef-b67c-b43bf547ae45.png)
![Basket](https://user-images.githubusercontent.com/83293460/129109104-e86866be-630a-4eec-95ce-0d8318206bd3.png)
![Login](https://user-images.githubusercontent.com/83293460/129109927-b3b5bf43-7fba-4621-b5bf-f53d9210baa5.png)

##### Admin View (Shop)

![Shop (admin view)](https://user-images.githubusercontent.com/83293460/129109135-347014dc-8467-4b8e-82db-5eee555f569e.png)

##### Admin Only

![AddDish (admin)](https://user-images.githubusercontent.com/83293460/129109159-8f1afaca-d4eb-4b81-91a6-3aa4262b19c7.png)
![EditDish (admin)](https://user-images.githubusercontent.com/83293460/129109166-e346c4f9-1d16-4262-8f66-5f9a88120266.png)

- Mobile View

![Mobile Home](https://user-images.githubusercontent.com/83293460/129109211-2b70e001-96d4-42c4-9e9d-7d8f1844b27e.png)
![Mobile Hamburger Open](https://user-images.githubusercontent.com/83293460/129109565-14cc0a46-5b0c-4cad-a7c5-0d306da5fbae.png)
![Mobile Shop](https://user-images.githubusercontent.com/83293460/129109222-4247a00e-34ba-4476-96bd-e7e286906b30.png)
![Mobile Basket](https://user-images.githubusercontent.com/83293460/129109232-072f19b6-fd1c-413f-9d0c-67b68af6df41.png)
![Mobile Login](https://user-images.githubusercontent.com/83293460/129109243-a2d2eeec-c60e-4498-a99d-e64bf4845b17.png)

##### Admin View (Shop)

![Mobile Shop (admin view)](https://user-images.githubusercontent.com/83293460/129109259-52dde45b-743e-45ff-a7e0-0f792e526a14.png)

##### Admin Only

![Mobile AddDish (admin only)](https://user-images.githubusercontent.com/83293460/129109278-058c4793-1bb1-4abf-9a9e-22cce4dfa48e.png)
![Mobile EditDish (admin only)](https://user-images.githubusercontent.com/83293460/129109286-92f26282-cec6-4ac5-88ef-d2b34f927a4a.png)

#### Component Tree

[Link to Component Tree](https://whimsical.com/jadumart-3WjUZDdzN4ko71m82aFroZ)

![ComponentHierarchy](https://user-images.githubusercontent.com/83293460/129105003-f7b586c0-3af2-4b69-90d1-34303802f1c8.png)

#### Component Architecture

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
|__ Layout/
|__ screens/
      |__ Welcome/
      |__ Shop/
      |__ Basket/
      |__ Login/
      |__ AddDish/
      |__ EditDish/
|__ services/
      |__ apiConfig
      |__ users
      |__ dishes
      |__ lineItems
      |__ baskets
|__App.jsx
|__App.css


```

#### Project Schedule

| Day          |         Components          |  Status  |
| ------------ | :-------------------------: | :------: |
| Wed Aug 11   |  Project Pitches Approval   | Complete |
| Thurs Aug 12 | Set up backend, test routes | Complete |
| Fri Aug 13   |    Build React Skeleton     | Complete |
| Sat Aug 14   |    Render all components    | Complete |
| Sun Aug 15   | Successful CRUD on Frontend | Complete |
| Mon Aug 16   |    Deploy to Heroku, CSS    | Complete |
| Tue Aug 17   |        Advanced CSS         | Complete |
| Wed Aug 18   |        Presentation         | Complete |

#### Time Estimates

| Task                  | Priority | Estimated Time | Time Invested | Actual Time |
| --------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal              |    H     |      5hrs      |      ---      |    8hrs     |
| Research              |    H     |      2hrs      |      ---      |    3hrs     |
| Set up Models         |    H     |      1hr       |      ---      |   .75hrs    |
| Seed Data             |    H     |     .5hrs      |      ---      |    .9hrs    |
| Set up Routes         |    H     |     .5hrs      |      ---      |    .5hrs    |
| Set up Controllers    |    H     |      3hrs      |      ---      |   3.1hrs    |
| Test Routes           |    H     |      2hrs      |      ---      |   1.5hrs    |
| Deploy to Heroku      |    H     |     .5hrs      |      ---      |    .5hrs    |
| Create React Skeleton |    H     |     .5hrs      |      ---      |    .6hrs    |
| Frontend API Config   |    H     |      1hr       |      ---      |   .45hrs    |
| Layout                |    H     |      1hr       |      ---      |    .1hrs    |
| Main                  |    H     |      1hr       |      ---      |    .1hrs    |
| Footer                |    H     |      1hr       |      ---      |    .6hrs    |
| Welcome               |    H     |      1hr       |      ---      |     TBD     |
| Shop                  |    H     |      1hr       |      ---      |   .05hrs    |
| DishDetails           |    H     |      1hrs      |      ---      |    .7hrs    |
| Basket                |    H     |      3hrs      |      ---      |    4hrs     |
| Login                 |    H     |      2hrs      |      ---      |    .5hrs    |
| AddDish               |    H     |      1hrs      |      ---      |     1hr     |
| EditDish              |    H     |      1hrs      |      ---      |   .25hrs    |
| Authentication        |    H     |      2hr       |      ---      |    .6hrs    |
| Global CSS            |    H     |      2hrs      |      ---      |   1.6hrs    |
| Layout CSS            |    H     |      1hr       |      ---      |   .25hrs    |
| Main CSS              |    H     |      1hr       |      ---      |   .25hrs    |
| Footer CSS            |    H     |      1hrs      |      ---      |   1.55hrs   |
| Welcome CSS           |    H     |      1hr       |      ---      |     1hr     |
| Shop CSS              |    H     |      1hrs      |      ---      |    .4hrs    |
| DishDetails CSS       |    H     |      2hrs      |      ---      |   1.25hrs   |
| Basket CSS            |    H     |      3hrs      |      ---      |   3.75hrs   |
| Login CSS             |    H     |      1hrs      |      ---      |    .8hrs    |
| AddDish CSS           |    H     |      2hrs      |      ---      |    1hrs     |
| EditDish CSS          |    H     |      1hrs      |      ---      |    .5hrs    |
| Deploy to Netlify     |    H     |     .5hrs      |      ---      |    .5hrs    |
| TOTAL                 |          |    45.5hrs     |      ---      |  38.45hrs   |

<br>

### Server (Back End)

#### ERD Model

![ERD](https://user-images.githubusercontent.com/83293460/129206958-96f4b686-2709-49be-989e-262b6a9f67f7.png)

<br>

---

## Post-MVP

- Back End

  - Customers will be able to create and log into their own accounts
  - Add Orders table to save past orders via submitted baskets
  - Expand Dishes to offer different sizes available for purchase (ex. 4oz, 8oz, 16oz)
  - Add Reviews table to collect ratings and reviews of each Dish

- Front End

  - Once logged in, customers will be able to view their past orders, reorder and leave reviews for each dish
  - Details of a Dish, such as ingredients and flavor profile, can be viewed on a separate details page
  - Mini Basket view available throughout app (not just on Basket screen)

- Enable payments to be made through the app

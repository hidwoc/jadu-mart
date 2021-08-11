# Jadu Mart

> The Project Planning section **should be completed** for your project pitch with instructors.
>
> To ensure correct Markdown, copy and paste the raw template code into your project repo README file. Remove ALL template instructions and replace with your project details.

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

_**Jadu Mart** is an e-commerce website for my business Jadu Banchan. Admin users will be able to log into their account, create, edit and delete Dishes. Customers will be able to browse all dishes, add dishes to their cart and place an order._

_**Jadu Mart** will not include any exchange of money._

<br>

## MVP

> The Minimum Viable Product should be a well-planned, easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

- Back End

  - Build a Ruby on Rails server with 4 tables (Dishes, Line_Items, Carts, Users)
  - Dishes will be READ and its stock will be UPDATED via submitting a Cart for order
  - Line_Items will be CREATED and DESTROYED by adding/removing them from Carts
  - Line_Items are instances of a Dish that get added to Carts to account for and decrement a Dish's stock
  - For MVP, User will consist of an admin who will be able to CREATE, UPDATE, and DESTROY Dishes

- Front End

  - Built with React
  - Make AXIOS calls to the Ruby on Rails API
  - Use React Router for client side routing
  - Allow admin to log in and render admin options
  - When placing an order, render a form to collect customer information

- Styling

  - Styled with CSS
  - Implements at least 2 media queries

- Deployment

  - Fully functioning deployed front-end via Netlify
  - Fully functioning deployed back-end via Heroku


<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
| axios | _Lorem ipsum dolor sit amet, consectetur._ |
|     Rails      | _Lorem ipsum dolor sit amet, consectetur._ |
|  bcrypt  | _Lorem ipsum dolor sit amet, consectetur._ |
|  JWT  | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

- Desktop View

![Lnk to Wireframe](url)

- Mobile View

![Link to Wireframe](url)


#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. Include a link to your component tree

[Component Tree Sample](https://whimsical.com/tasteville-heirarchy-EXWBPohXhZBJU7tjgHn2rt)

#### Component File Structure

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

[ERD Sample](https://drive.google.com/file/d/1kLyQTZqfcA4jjKWQexfEkG2UspyclK8Q/view)
<br>

***

## Post-MVP

- Back End

  - Customers will be able to create and log into their own accounts
  - Add Orders table to save past orders via submitted carts
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
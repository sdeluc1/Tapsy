# Tapsy

[Tapsy live][heroku]

[heroku]: https://tapsy.herokuapp.com

Tapsy is a full-stack web application inspired by Untappd, where users can check in and write reviews for various beers.
It is built with Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the front end.

## Features & Implementation

### Check-in/Review Feed

Users have the ability to add check-ins/reviews of various beers with ratings, descriptions, and attached photos. Both users and beers maintain a
'has many' association with reviews. Depending on the current path, a customized ReviewFeed component is displayed, which is filtered by
beer, selected user, followed users, brewery, or all users. Each review is rendered through a ReviewFeedItem component and
has its own detail page where users can interact by leaving comments.

### User Profiles

Every user has their own profile/show-page where their statistics are displayed (# of reviews, followers, etc.), as well as a
customized ReviewFeed of only that user's check-ins/reviews, and a TopCheckins component, which compiles a sorted list of
beers that have been reviewed the most by that user. If the user is not 'currentUser', a button will be displayed to add or remove
them as a follow, depending on the current status of their relationship.

### Followers

Each user maintains a list of follows through a follows join table, connecting a user_id with a follow_id. The currentUser's list
of followers is stored in state upon login and is used to customize the ReviewFeed on the home page, which contains only reviews by
users who are being followed by the currentUser. This list is updated automatically by clicking the add/remove follows button on
each user's page.

### Beer/Brewery Pages

Beers and breweries each have a unique show page with a customized ReviewFeed displaying reviews that are specific to that item.
The header for each beer/brewery contains information like an overall rating, # of reviews, etc. A Brewery maintains a 'has many' association
with Beers. Additionally, users can add a new check-in from each Beer page, which prompts an immediate update to the page's
ReviewFeed.

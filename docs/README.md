# Tapsy

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Tapsy is a web application inspired by Untappd built using Ruby on Rails and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Checkins / Reviews
- [ ] Review Feed
- [ ] Friends
- [ ] Profile
- [ ] Infinite Scroll

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-heirarchy.md
[redux-structure]: redux-structure.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1.5 days)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Add NavBar to homepage
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Friendships (0.5 days)

**Objective:** Users can be friends with other users

- [ ] `Friendship` model/migration
- [ ] User has many frienships
- [ ] User has many friends through friendships
- [ ] Seed friendships

### Phase 3: Beers/Breweries Models, APIs, and components (2 days)

**Objective:** Beers/Breweries can be created, read, edited and destroyed through
the API.

- [ ] `Beer` and `Brewery` models
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for beers (`BeersController`) and breweries (`BreweriesController`)
- [ ] JBuilder views for beers and breweries
- [ ] Beer/Brewery components and respective Redux loops
- [ ] Add space for ReviewFeed and LoyalDrinkers
- [ ] Forms for adding beer/breweries
- [ ] Beer belongs to brewery
- [ ] Style beer/brewery components
- [ ] Seed beers/breweries

### Phase 4: Reviews (2 days)

**Objective:** Reviews belong to Users/Beers and can be created, read, edited and destroyed through the API.

- [ ] `Review` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for reviews (`ReviewsController`)
- [ ] JBuilder views for reviews
- [ ] A user can add a review for a beer
- [ ] ReviewDetail can have a photo
- [ ] Review belongs to Beer and User
- [ ] Style notebook components
- [ ] Seed notebooks

### Phase 5: ReviewFeed (1 day)

**Objective:** Reviews can be added to a ReviewFeed and a ReviewFeed can be displayed on User, Brews, Beer, and Brewery pages.

- [ ] User home page: contains reviews by friends
- [ ] User profile page: contains reviews by User
- [ ] Brews page: contains reviews for all beers by date
- [ ] Beer page: contains reviews for that beer
- [ ] Brewery page: contains reviews for beers by that brewery
- [ ] Links to ReviewDetail
- [ ] Allows infinite scroll

### Phase 6: Brews page (1 day)

**Objective:** Global review page with ReviewFeed for all beers, displayed in order by date

- [ ] Has ReviewFeed component
- [ ] ReviewFeed is organized by date
- [ ] Has TopBeerList component

### Phase 7: User Profile (1 day)

**objective:** Add various components to user profile page

- [ ] Add UserHeader component
 + [ ] Shows # of reviews/friends
 + [ ] has background picture and Add Friend button
- [ ] Link to FriendsList
 + [ ] lists friends by name with option to delete friendship
 + [ ] UserStats component

### Phase 8: - Add remaining components to Beer/Brewery pages (1 day)

**objective:** LoyalDrinkers, Followers, TopBeersList components to be added to Beer/Brewery/User pages

- [ ] LoyalDrinkers tracks users who have reviewed a certain beer
- [ ] LoyalDrinkers displays on Beer page
- [ ] Users can like a particular brewery and be listed in Followers
- [ ] Followers displays on Brewery page
- [ ] TopBeersList lists the highest rated beers with links
- [ ] TopBeersList displays on Brews page

### Bonus Features (TBD)
- [ ] Search in NavBar
- [ ] Add Badges for Users
- [ ] Add venues (bars, etc)
- [ ] Add photo streams
- [ ] Add Toasts and Comments to ReviewDetails

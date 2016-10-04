## Component Heirarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - ReviewFeed
 - NavBar
 - UserStats

**UserContainer**
 - UserHeader
 - ReviewFeed
 - TopBeersList

**BeerFormContainer**
 - BeerForm

**BreweryFormContainer**
 - BreweryForm

**BrewsContainer**
 - ReviewFeed
 - TopBeersList

**FriendsListContainer**
 - FriendsList
 - UserStats

**ReviewContainer**
 - ReviewDetail

**BeerContainer**
 - BeerHeader
 - ReviewFeed
 - LoyalDrinkers

 **BreweryContainer**
  - BreweryHeader
  - ReviewFeed
  - Followers

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/thebrews" | "BrewsContainer" |
| "/user/:user_id" | "UserContainer" |
| "/user/:user_id/friends" | "FriendsListContainer" |
| "/user/:user_id/reviews/:review_id" | "ReviewContainer" |
| "/beers/:beer_id" | "BeerContainer" |
| "/breweries/brewery_id" | "BreweryContainer" |
| "/add/beer" | "BeerFormContainer" |
| "/add/brewery" | "BreweryFormContainer" |

# Redux Structure

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `AuthForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `AuthForm` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## Review Cycles

### Reviews API Request Actions

* `fetchAllReviews`
  0. invoked from `ReviewsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/notes` is called.
  0. `receiveAllReviews` is set as the success callback.

* `createReview`
  0. invoked from new review button `onClick`
  0. `POST /api/reviews` is called.
  0. `receiveSingleReview` is set as the success callback.

* `fetchSingleReview`
  0. invoked from `ReviewDetail` `didMount`/`willReceiveProps`
  0. `GET /api/reviews/:id` is called.
  0. `receiveSingleReview` is set as the success callback.

* `destroyReview`
  0. invoked from delete note button `onClick`
  0. `DELETE /api/reviews/:id` is called.
  0. `removeReview` is set as the success callback.

### Reviews API Response Actions

* `receiveAllReviews`
  0. invoked from an API callback
  0. the `ReviewReducer` updates `reviews` in the application's state.

* `receiveSingleReview`
  0. invoked from an API callback
  0. the `ReviewReducer` updates `reviews[id]` in the application's state.

* `removeReview`
  0. invoked from an API callback
  0. the `ReviewReducer` removes `reviews[id]` from the application's state.

## Beer Cycles

### Beers API Request Actions

* `fetchAllBeers`
  0. invoked from `BeersIndex` `didMount`/`willReceiveProps`
  0. `GET /api/beers` is called.
  0. `receiveAllBeers` is set as the success callback.

* `createBeer`
  0. invoked from new beer button `onClick`
  0. `POST /api/beers` is called.
  0. `receiveSingleBeer` is set as the callback.

* `fetchSingleBeer`
  0. invoked from `BeerDetail` `didMount`/`willReceiveProps`
  0. `GET /api/beers/:id` is called.
  0. `receiveSingleBeer` is set as the success callback.

* `updateBeer`
  0. invoked from `BeerForm` `onSubmit`
  0. `POST /api/beers` is called.
  0. `receiveSingleBeer` is set as the success callback.

* `destroyBeer`
  0. invoked from delete beer button `onClick`
  0. `DELETE /api/beers/:id` is called.
  0. `removeBeer` is set as the success callback.

### Beers API Response Actions

* `receiveAllBeers`
  0. invoked from an API callback.
  0. The `Beer` reducer updates `beers` in the application's state.

* `receiveSingleBeer`
  0. invoked from an API callback.
  0. The `Beer` reducer updates `beers[id]` in the application's state.

* `removeBeer`
  0. invoked from an API callback.
  0. The `Beer` reducer removes `beers[id]` from the application's state.

## Brewery Cycles

### Breweries API Request Actions

* `fetchAllBreweries`
  0. invoked from `BreweriesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/breweries` is called.
  0. `receiveAllBreweries` is set as the success callback.

* `createBrewery`
  0. invoked from new beer button `onClick`
  0. `POST /api/breweries` is called.
  0. `receiveSingleBrewery` is set as the callback.

* `fetchSingleBrewery`
  0. invoked from `BreweryDetail` `didMount`/`willReceiveProps`
  0. `GET /api/breweries/:id` is called.
  0. `receiveSingleBrewery` is set as the success callback.

* `updateBrewery`
  0. invoked from `BreweryForm` `onSubmit`
  0. `POST /api/breweries` is called.
  0. `receiveSingleBrewery` is set as the success callback.

* `destroyBrewery`
  0. invoked from delete beer button `onClick`
  0. `DELETE /api/breweries/:id` is called.
  0. `removeBrewery` is set as the success callback.

### Breweries API Response Actions

* `receiveAllBreweries`
  0. invoked from an API callback.
  0. The `Brewery` reducer updates `breweries` in the application's state.

* `receiveSingleBrewery`
  0. invoked from an API callback.
  0. The `Brewery` reducer updates `breweries[id]` in the application's state.

* `removeBrewery`
  0. invoked from an API callback.
  0. The `Brewery` reducer removes `breweries[id]` from the application's state.

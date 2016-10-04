# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
name            | string    |
image_url       | string    |

## beers
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
brewery_id  | integer   | not null, foreign key (reference breweries), indexed
style       | string    |
abv         | float     |
ibu         | integer   |
description | text      |
image_url   | string    |

## breweries
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
location    | string    | not null
type        | string    |
description | text      |
image_url   | string    |

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
beer_id     | integer   | not null, foreign key (reference beers), indexed
rating      | float     | not null
description | text      |
image_url   | string    |

## friendships
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (reference users), indexed
friend_id   | integer   | not null, foreign key (reference users), indexed
status      | string    | not null

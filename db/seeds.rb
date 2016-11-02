# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all

user1 = User.create!(username: "DocWatson", password: "password",
                     email: "doc@watson.com", name: "Doc Watson",
                     image: open("http://images4.mtv.com/uri/mgid:file:docroot:cmt.com:/sitewide/assets/img/artists/watson_doc/docwatson05-280x210.jpg"))

user2 = User.create!(username: "OilMan12", password: "password",
                     email: "beer@milkshake.com", name: "Daniel Plainview",
                     image: open("http://designerswap.ca/wp-content/uploads/2013/10/Daniel-Plainview.jpg"))

user3 = User.create!(username: "CraftBeard", password: "password",
                    email: "craft@aol.com", name: "Rusty Jones",
                    image: open("http://scaredmonkeys.com/wp-content/uploads/2016/01/dan_haggerty.jpeg"))

user4 = User.create!(username: "NinjaTurtle85", password: "password",
                    email: "ninja@turtle.com", name: "Donatello",
                    image: open("https://images-na.ssl-images-amazon.com/images/I/419SXkzvhIL._SX355_.jpg"))

user5 = User.create!(username: "IHeartBeer", password: "password",
                    email: "beerguy@aol.com", name: "Mike Lowry",
                    image: open("http://www.celebritycarsblog.com/wp-content/uploads/Will-Smith.jpg"))

user6 = User.create!(username: "OneWhoKnocks", password: "password",
                    email: "walter@gmail.com", name: "Walter White",
                    image: open("http://media1.s-nbcnews.com/i/streams/2013/August/130808/6C8558749-130808-walter-white-tease.jpg"))

user7 = User.create!(username: "AdMan62", password: "password",
                    email: "DonDraper@gmail.com", name: "Don Draper",
                    image: open("http://cdn.theatlantic.com/static/mt/assets/culture_test/don%20draper%20thumb%201970s.jpg"))

user8 = User.create!(username: "WithTheFishes", password: "password",
                    email: "TonySoprano@aol.com", name: "Tony Soprano",
                    image: open("https://s-media-cache-ak0.pinimg.com/originals/ce/f6/04/cef60468bbc5f774a6a48678972062cc.jpg"))

user9 = User.create!(username: "FormerPrez42", password: "password",
                    email: "WestWing@hotmail.com", name: "Josiah Bartlett",
                    image: open("http://martinsheen.net/tww/potusheadshot.jpg"))

user10 = User.create!(username: "Admiral47", password: "password",
                    email: "adama@hotmail.com", name: "William Adama",
                    image: open("http://www.paperspencils.com/wp-content/uploads/2012/04/0002zc7q.jpeg"))

user11 = User.create!(username: "GuestUser", password: "password",
                    email: "guest@tapsy.com", name: "Guest")



Brewery.destroy_all

founders = Brewery.create!(name: "Founders Brewing Co.", location: "Grand Rapids, MI",
                     brewery_type: "Micro Brewery", description: "People in Michigan know their beer!")

anh_b = Brewery.create!(name: "Anheuser-Busch", location: "St. Louis, MO",
                        brewery_type: "Macro Brewery", description: "The leading American brewer, bringing people together for more than 160 years.")

boston = Brewery.create!(name: "Boston Beer Company", location: "Boston, MA",
                        brewery_type: "Micro Brewery", description: "Jim Koch founded the Boston Beer Company back in 1984 after brewing the first batch of Samuel Adams Boston Lager in his kitchen. It was his mission to reshape the way American beer drinkers thought of American beer.")

goose = Brewery.create!(name: "Goose Island Beer Co.", location: "Chicago, IL",
                        brewery_type: "Macro Brewery", description: "Goose Island Brewing Company began its operation in 1988 under the ownership of beer lover, John Hall. With a mission to prove the great ability of Midwesterners to produce great beers compared to the ones he has traveled to, John established the Goose Island Brewery")

stone = Brewery.create!(name: "Stone Brewing", location: "Escondido, CA",
                        brewery_type: "Micro Brewery", description: "Founded by Greg Koch and Steve Wagner in 1996, San Diego-based Stone Brewing is the 9th largest craft brewer in the United States. Stone has been listed on the Inc. 500 | 5000 Fastest Growing Private Companies list 11 times, and has been called the “All-time Top Brewery on Planet Earth” by BeerAdvocate magazine twice.")

dogfish = Brewery.create!(name: "Dogfish Head Craft Brewery", location: "Milton, DE",
                        brewery_type: "Micro Brewery", description: "Dogfish Head started in June 1995 when Dogfish Head Brewings & Eats was established in the beach community of Rehoboth Beach, Delaware. Dogfish Head was the first brewpub of the state.")

steve = Brewery.create!(name: "Steve's Brewery", location: "Harrison, NY",
                        brewery_type: "Micro Brewery", description: "Founded by world famous brewmaster Steve DeLuca in 2016. Steve's brewery specializes in every type of beer possible.")

bone = Brewery.create!(name: "Ken Bone's Brews", location: "New York, NY",
                        brewery_type: "Micro Brewery", description: "Brewed with the finest of red sweaters and skinny mustaches.")




Beer.destroy_all

bf_stout = Beer.create!(name: "Breakfast Stout", brewery_id: founders.id, style: "Stout",
                        abv: 8.3, ibu: 60, description: "Dark, thick stout with high ABV")

all_day_ipa = Beer.create!(name: "All Day IPA", brewery_id: founders.id, style: "IPA",
                        abv: 4.7, ibu: 42, description: "HOPS HOPS HOPS")

porter = Beer.create!(name: "Porter", brewery_id: founders.id, style: "Porter",
                        abv: 6.5, ibu: 45,
                        description: "Pours silky black with a creamy tan head. The nose is sweet with strong chocolate and caramel malt presence. No absence of hops gives Founders' robust porter the full flavor you deserve and expect. Cozy like velvet. It’s a lover, not a fighter.")

bud = Beer.create!(name: "Budweiser", brewery_id: anh_b.id, style: "Lager", abv: 5.0, ibu: 12,
                   description: "This is The King of Beers... enough said.")

bud_light = Beer.create!(name: "Bud Light", brewery_id: anh_b.id, style: "Lager", abv: 4.2, ibu: 27,
                   description: "This is The King of Light Beers... enough said.")

boston_lager = Beer.create!(name: "Samuel Adams Boston Lager", brewery_id: boston.id, style: "Lager", abv: 4.9, ibu: 30,
                   description: "Samuel Adams Boston Lager® is the best example of the fundamental characteristics of a great beer, offering a full, rich flavor that is both balanced and complex.")

rebel_ipa = Beer.create!(name: "Samuel Adams Rebel IPA", brewery_id: boston.id, style: "IPA", abv: 6.5, ibu: 45,
                   description: "Brewed with 5 varieties of west coast hops cascade, simcoe, centennial, chinook & amarillo. Big citrus & grapefruit flavors with subtle pine notes for a flavorful refreshing brew. ")

honker = Beer.create!(name: "Honker's Ale", brewery_id: goose.id, style: "Strong Bitter", abv: 4.3, ibu: 30,
                   description: "Inspired by visits to English country pubs, Honker’s Ale combines a fruity hop aroma with a rich malt middle to create a perfectly balanced beer.")

goose_ipa = Beer.create!(name: "Goose IPA", brewery_id: goose.id, style: "IPA", abv: 5.9, ibu: 55,
                   description: "Goose IPA is a hop lover’s dream with a fruity aroma, set off by a dry malt middle, and long hop finish.")

stone_ipa = Beer.create!(name: "Stone IPA", brewery_id: stone.id, style: "IPA", abv: 6.9, ibu: 77,
                   description: "This crisp, extra hoppy brew is hugely refreshing on a hot day, but will always deliver no matter when you choose to drink it.")

stone_coffee = Beer.create!(name: "Stone Coffee Milk Stout", brewery_id: stone.id, style: "Milk Stout", abv: 5.0, ibu: 40,
                   description: "With Lactose and Coffee from ACME Coffee Roasting Co. Brian Gallagher put together a delicious stout that can be considered a hybrid between Irish, Sweet, and a Milk Stout.")

smoked_porter = Beer.create!(name: "Stone Smoked Porter", brewery_id: stone.id, style: "Smoked Beer", abv: 5.9, ibu: 53,
                   description: "Stone Smoked Porter is dark, rich and complicated. A porter is substantially darker than a pale ale, but not as black or opaque as a stout.")

sixty_minute = Beer.create!(name: "60 Minute IPA", brewery_id: dogfish.id, style: "IPA", abv: 6.0, ibu: 60,
                   description: "Our flagship beer. A session India Pale Ale brewed with Warrior, Amarillo & 'Mystery Hop X.' A powerful East Coast I.P.A. with a lot of citrusy hop character. THE session beer for beer geeks like us!")

punkin = Beer.create!(name: "Punkin Ale", brewery_id: dogfish.id, style: "Pumpkin", abv: 7.0, ibu: 28,
                   description: "A full-bodied brown ale with smooth hints of pumpkin and brown sugar. We brew our Punkin Ale with pumpkin meat, brown sugar and spices.")

steve_ale = Beer.create!(name: "Awesome Ale", brewery_id: steve.id, style: "Ale", abv: 4.3, ibu: 22,
                   description: "This is the real King of Beers... take that Budweiser.")

bone_beer = Beer.create!(name: "Red Sweater Ale", brewery_id: bone.id, style: "Ale", abv: 24.5, ibu: 88,
                   description: "This beer will make you famous for being weird")

Review.destroy_all

review1 = Review.create!(rating: 4.25, description: "I loved this beer! It tastes good and gets you drunk fast!",
                         author_id: user1.id, beer_id: bf_stout.id, image: open("https://s-media-cache-ak0.pinimg.com/originals/28/1d/d4/281dd423ddd5dbfa4f8f4ea28e00fbe3.jpg"))

review2 = Review.create!(rating: 1.75, description: "This beer is terrible! What were they thinking when they made this?!",
                        author_id: user2.id, beer_id: bf_stout.id)

review3 = Review.create!(rating: 2.75, description: "The King of Beers? Yeah right!!!",
                         author_id: user1.id, beer_id: bud.id)

review4 = Review.create!(rating: 4.0, description: "Not an IPA fan, but this one was delicious!",
                         author_id: user2.id, beer_id: all_day_ipa.id)

review5 = Review.create!(rating:4.25, description: "This is beer is a classic! I drink it everywhere I go!",
                        author_id: user5.id, beer_id: boston_lager.id, image: open("http://beer-taster.com/wp-content/uploads/yapb_cache/samuel_adams_boston_lager.7r7ebnwshiwww844gsg0co8sw.6ylu316ao144c8c4woosog48w.th.jpeg"))

review6 = Review.create!(rating: 3.0, description: "Eh. Not impressed.",
                        author_id: user3.id, beer_id: bf_stout.id)

review7 = Review.create!(rating: 3.25, description: "A mediocre beer at best, but I do love geese.",
                        author_id: user7.id, beer_id: honker.id)

review8 = Review.create!(rating: 3.5, description: "What the heck is a milk stout? I don't know, but I enjoyed this beer.",
                        author_id: user1.id, beer_id: stone_coffee.id)

review9 = Review.create!(rating: 2.25, description: "Not a very good beer, but I'll drink almost anything.",
                        author_id: user6.id, beer_id: rebel_ipa.id, image: open("http://3.bp.blogspot.com/-u8QVahqyR9c/UvJK3T3BE4I/AAAAAAAAIJ4/fN1KMnE5uSk/s1600/Samuel+Adams+Rebel+IPA.JPG"))

review10 = Review.create!(rating: 4.5, description: "What a PUNderful beer!!!",
                        author_id: user4.id, beer_id: punkin.id, image: open("http://northdelawhere.happeningmag.com/wp-content/uploads/dogfish-head-punkin-ale.jpg"))

review11 = Review.create!(rating: 3.25, description: "Not my cup of tea... but it IS my cup of beer.",
                        author_id: user8.id, beer_id: bf_stout.id, image: open("https://beermetaldude.files.wordpress.com/2015/01/breakfast.jpg"))

review12 = Review.create!(rating: 2.0, description: "Why do I keep drinking this???!!!",
                        author_id: user10.id, beer_id: bud_light.id)

review13 = Review.create!(rating: 3.0, description: "I don't see the big deal... Not terrible though.",
                        author_id: user1.id, beer_id: sixty_minute.id, image: open("http://www.brainardbrewing.com/blog/wp-content/uploads/2008/11/60_min_2shot.jpg"))

review14 = Review.create!(rating: 1.25, description: "What were they thinking when they made this beer? Disgusting.",
                        author_id: user8.id, beer_id: steve_ale.id)

review15 = Review.create!(rating: 4.75, description: "THIS BEER IS MY CHAMPION",
                        author_id: user7.id, beer_id: bud.id, image: open("https://hywelsbiglog.files.wordpress.com/2008/07/image31-b-bottle.jpg"))

review16 = Review.create!(rating: 2.5, description: "This beer is way too fancy. Gimme some Miller Lite any day.",
                        author_id: user7.id, beer_id: smoked_porter.id)

review17 = Review.create!(rating: 3.0, description: "What does IPA even stand for? Decent beer.",
                        author_id: user1.id, beer_id: all_day_ipa.id, image: open("http://www.keysbeerandbubblyfest.com/wp-content/uploads/2015/12/founders-all-day-ipa.jpg"))

review18 = Review.create!(rating: 4.0, description: "Sam Adams is killin' it with this one. Keep 'em coming!",
                        author_id: user2.id, beer_id: rebel_ipa.id)

review19 = Review.create!(rating: 1.25, description: "Worst beer I've ever had. Hands down.",
                        author_id: user5.id, beer_id: bf_stout.id, image: open("http://bigbeefandbeer.com/wp-content/uploads/2010/01/FoundersBreakfastStout.jpg"))

review20 = Review.create!(rating: 4.0, description: "THE GOOSE IS LOOSE! Delicious beer!!!",
                        author_id: user9.id, beer_id: honker.id, image: open("http://media.virbcdn.com/cdn_images/resize_1024x1024/e9/4981888eb6ffed6a-GooseIslandHonkerAle.jpeg"))

review21 = Review.create!(rating: 5.0, description: "I must say... this is the best beer ever made.",
                        author_id: user3.id, beer_id: bone_beer.id)

Comment.destroy_all

comment1 = Comment.create!(body: "You're wrong. This beer is terrible!", user_id: user5.id, review_id: review20.id)

comment2 = Comment.create!(body: "I agree!", user_id: user7.id, review_id: review19.id)
comment3 = Comment.create!(body: "Well, I disagree", user_id: user6.id, review_id: review19.id)
comment4 = Comment.create!(body: "Hmm... you've got a point there.", user_id: user7.id, review_id: review19.id)

comment5 = Comment.create!(body: "That's a weird thing to say. Calm down.", user_id: user4.id, review_id: review15.id)

comment6 = Comment.create!(body: "They weren't thinking... this beer is gross.", user_id: user5.id, review_id: review14.id)

comment7 = Comment.create!(body: "I agree! Let's hang out sometime!", user_id: user9.id, review_id: review13.id)
comment8 = Comment.create!(body: "No", user_id: user1.id, review_id: review13.id)

comment9 = Comment.create!(body: "COME ON!!! THIS BEER IS GREAT!!!!!!", user_id: user8.id, review_id: review6.id)

comment10 = Comment.create!(body: "Because you're drunk!", user_id: user1.id, review_id: review12.id)


Follow.destroy_all

follow1 = Follow.create!(user_id: user1.id, follow_id: user8.id)

follow2 = Follow.create!(user_id: user1.id, follow_id: user3.id)

follow3 = Follow.create!(user_id: user1.id, follow_id: user4.id)

follow4 = Follow.create!(user_id: user1.id, follow_id: user5.id)

follow5 = Follow.create!(user_id: user1.id, follow_id: user6.id)

follow6 = Follow.create!(user_id: user1.id, follow_id: user9.id)

follow7 = Follow.create!(user_id: user2.id, follow_id: user1.id)

follow8 = Follow.create!(user_id: user2.id, follow_id: user3.id)

follow9 = Follow.create!(user_id: user2.id, follow_id: user4.id)

follow10 = Follow.create!(user_id: user2.id, follow_id: user5.id)

follow11 = Follow.create!(user_id: user2.id, follow_id: user6.id)

follow12 = Follow.create!(user_id: user2.id, follow_id: user7.id)

follow13 = Follow.create!(user_id: user3.id, follow_id: user1.id)

follow14 = Follow.create!(user_id: user3.id, follow_id: user2.id)

follow15 = Follow.create!(user_id: user3.id, follow_id: user8.id)

follow16 = Follow.create!(user_id: user4.id, follow_id: user1.id)

follow17 = Follow.create!(user_id: user4.id, follow_id: user9.id)

follow18 = Follow.create!(user_id: user4.id, follow_id: user6.id)

follow19 = Follow.create!(user_id: user4.id, follow_id: user2.id)

follow20 = Follow.create!(user_id: user5.id, follow_id: user2.id)

follow21= Follow.create!(user_id: user5.id, follow_id: user10.id)

follow22 = Follow.create!(user_id: user6.id, follow_id: user9.id)

follow23 = Follow.create!(user_id: user6.id, follow_id: user8.id)

follow24 = Follow.create!(user_id: user6.id, follow_id: user4.id)

follow25 = Follow.create!(user_id: user7.id, follow_id: user1.id)

follow26 = Follow.create!(user_id: user7.id, follow_id: user5.id)

follow27 = Follow.create!(user_id: user7.id, follow_id: user2.id)

follow28 = Follow.create!(user_id: user8.id, follow_id: user4.id)

follow29 = Follow.create!(user_id: user8.id, follow_id: user5.id)

follow30 = Follow.create!(user_id: user8.id, follow_id: user6.id)

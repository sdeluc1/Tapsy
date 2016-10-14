# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all

user1 = User.create!(username: "DocWatson", password: "password",
                     email: "doc@watson.com", name: "Doc Watson")

user2 = User.create!(username: "BeerLuVr12", password: "password",
                     email: "beer@drunk.com", name: "Daniel Plainview")

user3 = User.create!(username: "CraftBeard", password: "password",
                    email: "craft@aol.com", name: "Rusty Jones")

user4 = User.create!(username: "NinjaTurtle85", password: "password",
                    email: "ninja@turtle.com", name: "Donatello")

user5 = User.create!(username: "IHeartBeer", password: "password",
                    email: "beerguy@aol.com", name: "Mike Lowry")

user6 = User.create!(username: "OneWhoKnocks", password: "password",
                    email: "walter@gmail.com", name: "Walter White")

user7 = User.create!(username: "AdMan62", password: "password",
                    email: "DonDraper@gmail.com", name: "Don Draper")

user8 = User.create!(username: "WithTheFishes", password: "password",
                    email: "TonySoprano@aol.com", name: "Tony Soprano")

user9 = User.create!(username: "FormerPrez42", password: "password",
                    email: "WestWing@hotmail.com", name: "Josiah Bartlett")

user10 = User.create!(username: "Admiral47", password: "password",
                    email: "adama@hotmail.com", name: "William Adama")

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

stone = Brewery.create!(name: "Stone Brewing Co.", location: "Escondido, CA",
                        brewery_type: "Micro Brewery", description: "Founded by Greg Koch and Steve Wagner in 1996, San Diego-based Stone Brewing is the 9th largest craft brewer in the United States. Stone has been listed on the Inc. 500 | 5000 Fastest Growing Private Companies list 11 times, and has been called the “All-time Top Brewery on Planet Earth” by BeerAdvocate magazine twice.")

dogfish = Brewery.create!(name: "Dogfish Head Craft Brewery", location: "Milton, DE",
                        brewery_type: "Micro Brewery", description: "Dogfish Head started in June 1995 when Dogfish Head Brewings & Eats was established in the beach community of Rehoboth Beach, Delaware. Dogfish Head was the first brewpub of the state.")

steve = Brewery.create!(name: "Steve's Brewery", location: "Harrison, NY",
                        brewery_type: "Micro Brewery", description: "Founded by world famous brewmaster Steve DeLuca in 2016. Steve's brewery specializes in every type of beer possible.")



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

sam_adams = Beer.create!(name: "Samuel Adams Boston Lager", brewery_id: boston.id, style: "Lager", abv: 4.9, ibu: 30,
                   description: "Samuel Adams Boston Lager® is the best example of the fundamental characteristics of a great beer, offering a full, rich flavor that is both balanced and complex.")

bud = Beer.create!(name: "Budweiser", brewery_id: anh_b.id, style: "Lager", abv: 5.0, ibu: 12,
                   description: "This is The King of Beers... enough said.")

bud = Beer.create!(name: "Budweiser", brewery_id: anh_b.id, style: "Lager", abv: 5.0, ibu: 12,
                   description: "This is The King of Beers... enough said.")

bud = Beer.create!(name: "Budweiser", brewery_id: anh_b.id, style: "Lager", abv: 5.0, ibu: 12,
                   description: "This is The King of Beers... enough said.")

bud = Beer.create!(name: "Budweiser", brewery_id: anh_b.id, style: "Lager", abv: 5.0, ibu: 12,
                   description: "This is The King of Beers... enough said.")

bud = Beer.create!(name: "Budweiser", brewery_id: anh_b.id, style: "Lager", abv: 5.0, ibu: 12,
                   description: "This is The King of Beers... enough said.")

Review.destroy_all

review1 = Review.create!(rating: 4.25, description: "I loved this beer! It tastes good and gets you drunk fast!",
                         author_id: user1.id, beer_id: bf_stout.id)

review2 = Review.create!(rating: 1.75, description: "This beer is terrible! What were they thinking when they made this?!",
                        author_id: user2.id, beer_id: bf_stout.id)

review3 = Review.create!(rating: 2.75, description: "The King of Beers? Yeah right!!!",
                         author_id: user1.id, beer_id: bud.id)

review4 = Review.create!(rating: 4.0, description: "Not an IPA fan, but this one was delicious!",
                         author_id: user2.id, beer_id: all_day_ipa.id)

review5 = Review.create!(rating: 3.0, description: "Eh. Not impressed.",
                        author_id: user3.id, beer_id: bf_stout.id)

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

Brewery.destroy_all

founders = Brewery.create!(name: "Founders Brewing Co.", location: "Grand Rapids, MI",
                     brewery_type: "Micro Brewery", description: "People in Michigan know their beer!")

anh_b = Brewery.create!(name: "Anheuser-Busch", location: "St. Louis, MO",
                        brewery_type: "Macro Brewery", description: "The leading American brewer, bringing people together for more than 160 years.")

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

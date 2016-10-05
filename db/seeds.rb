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

Brewery.destroy_all

founders = Brewery.create!(name: "Founders Brewing Co.", location: "Grand Rapids, MI",
                     brewery_type: "Micro Brewery", description: "People in Michigan know their beer!")

Beer.destroy_all

bf_stout = Beer.create!(name: "Breakfast Stout", brewery_id: founders.id, style: "Stout",
                        abv: 8.3, ibu: 60, description: "Dark, thick stout with high ABV")

all_day_ipa = Beer.create!(name: "All Day IPA", brewery_id: founders.id, style: "IPA",
                        abv: 4.7, ibu: 42, description: "HOPS HOPS HOPS")

# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161102184703) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "beers", force: :cascade do |t|
    t.string   "name",        null: false
    t.integer  "brewery_id",  null: false
    t.string   "style"
    t.float    "abv"
    t.integer  "ibu"
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "beers", ["brewery_id"], name: "index_beers_on_brewery_id", using: :btree
  add_index "beers", ["name"], name: "index_beers_on_name", using: :btree

  create_table "breweries", force: :cascade do |t|
    t.string   "name",         null: false
    t.string   "location",     null: false
    t.string   "brewery_type"
    t.text     "description"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "breweries", ["name"], name: "index_breweries_on_name", using: :btree

  create_table "comments", force: :cascade do |t|
    t.text     "body",       null: false
    t.integer  "user_id",    null: false
    t.integer  "review_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "comments", ["review_id"], name: "index_comments_on_review_id", using: :btree
  add_index "comments", ["user_id"], name: "index_comments_on_user_id", using: :btree

  create_table "follows", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "follow_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "follows", ["follow_id"], name: "index_follows_on_follow_id", using: :btree
  add_index "follows", ["user_id"], name: "index_follows_on_user_id", using: :btree

  create_table "reviews", force: :cascade do |t|
    t.float    "rating",             null: false
    t.text     "description"
    t.integer  "author_id",          null: false
    t.integer  "beer_id",            null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  add_index "reviews", ["author_id"], name: "index_reviews_on_author_id", using: :btree
  add_index "reviews", ["beer_id"], name: "index_reviews_on_beer_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",           null: false
    t.string   "email",              null: false
    t.string   "password_digest",    null: false
    t.string   "session_token",      null: false
    t.string   "name"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end

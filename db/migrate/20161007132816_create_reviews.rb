class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.float :rating, null: false
      t.text :description
      t.integer :author_id, null: false
      t.integer :beer_id, null: false

      t.timestamps null: false
    end
    add_index :reviews, :author_id
    add_index :reviews, :beer_id
  end
end

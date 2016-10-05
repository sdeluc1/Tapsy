class CreateBeers < ActiveRecord::Migration
  def change
    create_table :beers do |t|
      t.string :name, null: false
      t.integer :brewery_id, null: false
      t.string :style
      t.float :abv
      t.integer :ibu
      t.text :description

      t.timestamps null: false
    end
    add_index :beers, :brewery_id
    add_index :beers, :name
  end
end

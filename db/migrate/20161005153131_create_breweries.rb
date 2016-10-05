class CreateBreweries < ActiveRecord::Migration
  def change
    create_table :breweries do |t|
      t.string :name, null: false
      t.string :location, null: false
      t.string :type
      t.text :description

      t.timestamps null: false
    end
    add_index :breweries, :name
  end
end

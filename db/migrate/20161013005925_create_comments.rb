class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :user_id, null: false
      t.integer :review_id, null: false

      t.timestamps null: false
    end
    add_index :comments, :user_id
    add_index :comments, :review_id
  end
end

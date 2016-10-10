class CreateFollows < ActiveRecord::Migration
  def change
    create_table :follows do |t|
      t.integer :user_id, null: false
      t.integer :follow_id, null: false

      t.timestamps null: false
    end
    add_index :follows, :user_id
    add_index :follows, :follow_id
  end
end

class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :game_system
      t.string :day
      t.time :time
      t.text :description
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end

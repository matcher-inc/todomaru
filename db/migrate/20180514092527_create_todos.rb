class CreateTodos < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|
      t.references :user, foreign_key: true
      t.string :title, null: false
      t.text :detail
      t.datetime :deadline
      t.datetime :completed_at

      t.timestamps
    end
  end
end

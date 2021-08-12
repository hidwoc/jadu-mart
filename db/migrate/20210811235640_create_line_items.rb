class CreateLineItems < ActiveRecord::Migration[6.1]
  def change
    create_table :line_items do |t|
      t.references :dish, null: false, foreign_key: true
      t.references :basket, null: false, foreign_key: true
      t.integer :quantity

      t.timestamps
    end
  end
end

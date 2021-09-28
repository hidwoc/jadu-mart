class CreatePrices < ActiveRecord::Migration[6.1]
  def change
    create_table :prices do |t|
      t.references :dish, null: false, foreign_key: true
      t.integer :quantity
      t.integer :price

      t.timestamps
    end
  end
end

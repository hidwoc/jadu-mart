class CreateDishes < ActiveRecord::Migration[6.1]
  def change
    create_table :dishes do |t|
      t.string :name
      t.string :description
      t.string :img_url
      t.integer :price
      t.integer :in_stock

      t.timestamps
    end
  end
end

class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.string :name, null: false
      t.string :address
      t.string :phone
      t.string :message
      t.string :email
      t.string :allergies
      t.boolean :delivery
      t.string :payment_method
      t.string :payment_info

      t.timestamps
    end
  end
end

class LineItem < ApplicationRecord
  belongs_to :dish
  belongs_to :basket

  def subtotal
    quantity * dish.price
  end
end

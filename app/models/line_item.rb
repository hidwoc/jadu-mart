class LineItem < ApplicationRecord
  belongs_to :dish
  belongs_to :basket
  belongs_to :order

  def subtotal
    quantity * dish.price
  end
end

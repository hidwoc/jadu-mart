class LineItem < ApplicationRecord
  belongs_to :dish
  belongs_to :basket

  def subtotal
    self.quantity * self.dish.price
  end
end

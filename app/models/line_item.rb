class LineItem < ApplicationRecord
  belongs_to :dish
  belongs_to :basket

  def total_price
    self.quantity * self.dish.price
  end
end

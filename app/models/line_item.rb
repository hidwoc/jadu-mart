class LineItem < ApplicationRecord
  belongs_to :dish
  belongs_to :basket
  belongs_to :order
  has_one :price, :through => :dish

  def subtotal
    quantity * dish.price
  end
end

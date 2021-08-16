class Basket < ApplicationRecord
  has_many :line_items, dependent: :destroy
  has_many :dishes, through: :line_items

  def total
    sum = 0
    line_items.each do |line_item|
      sum+= line_item.subtotal
    end
    return sum
  end
end

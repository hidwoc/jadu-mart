class Order < ApplicationRecord
  has_many :line_items

  def total
    sum = 0
    line_items.each do |line_item|
      sum+= line_item.subtotal
    end
    return sum
  end
end

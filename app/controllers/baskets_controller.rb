class BasketsController < ApplicationController
  before_action :set_basket
  after_action :destroy, only: :place_order

  def show
    render json: @basket, include: :line_items
  end

  def place_order
    @basket.line_items.map do |line_item|
      @dish = Dish.find(line_item.dish_id)
      @dish.in_stock -= line_item.quantity
      @dish.save
    end

    render json: Dish.all
  end

  # TODO: will we have to invoke this to clear a basket after each session?
  # TODO: or make this a private method?
  def destroy
    @basket.destroy
    session[:basket_id] = nil
  end

  private

  def set_basket
    @basket = @current_basket
  end
end

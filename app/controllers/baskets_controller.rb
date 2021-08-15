class BasketsController < ApplicationController
  before_action :set_basket, only: [:show, :place_order, :destroy, :add_line_item_to_basket]
  # after_action :destroy, only: :place_order

  # GET /baskets/:id
  def show
    render json: @basket, include: {:line_items => {include: :dish}}
  end

  # POST /baskets
  def create
    @basket = Basket.create!
    render json: @basket, status: :created
  end

  # DELETE /baskets/:id
  def place_order
    @basket.line_items.map do |line_item|
      @dish = Dish.find(line_item.dish_id)
      @dish.inventory -= line_item.quantity
      @dish.save
    end
    @basket.destroy
    render Dish.all, status: :ok
  end

  # DELETE /baskets/:id
  # TODO: will we have to invoke this to clear a basket after each session? --> clean up function
  def destroy
    @basket.destroy
    render "Basket destroyed!", status: :no_content
  end

  # PUT /baskets/:id/add
  def add_line_item_to_basket
    dish = Dish.find(line_item_params[:dish_id])

    if !@basket.dishes.include? dish 
      line_item = LineItem.new(line_item_params)
      @basket.line_items << line_item
    else
      line_item = @basket.line_items.find_by(:dish_id => dish)
      # TODO: will need to render UI for this!
      # TODO: probably have to refactor this
      line_item.quantity += 1 unless dish.inventory < line_item.quantity
    end
 
    line_item.save
    render json: @basket, include: :line_items, status: :ok
  end

  private

  def set_basket
    @basket = Basket.find(params[:id])
  end

  def line_item_params
    params.require(:line_item).permit(:dish_id)
  end
end

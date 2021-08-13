class BasketsController < ApplicationController
  before_action :set_basket, only: [:show, :place_order, :destroy]
  after_action :destroy, only: :place_order

  # GET /baskets/:id
  def show
    render json: @basket, include: :line_items
  end

  # POST /baskets
  def create
    @basket = Basket.create!
    render json: @basket, status: :created
  end

  # PUT /baskets/:id
  def place_order
    @basket.line_items.map do |line_item|
      @dish = Dish.find(line_item.dish_id)
      @dish.inventory -= line_item.quantity
      @dish.save
    end

    render json: Dish.all
  end

  # DELETE /baskets/:id
  # TODO: will we have to invoke this to clear a basket after each session? --> clean up function
  def destroy
    @basket.destroy
    render "Basket destroyed!", status: :no_content
  end

  private

  def set_basket
    @basket = Basket.find(params[:id])
  end

  # TODO: clear this if not using
  def basket_params
    params.require(:basket).permit(:id, :line_items)
  end
end

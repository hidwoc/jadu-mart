class LineItemsController < ApplicationController
  before_action :set_line_item, only: [:remove_from_basket, :add_quantity, :reduce_quantity]

  # GET /line_items
  # # TODO: might not need this, bc this will happen in Basket?
  # def index
  #   @line_items = LineItem.all

  #   render json: @line_items
  # end


  # POST /line_items
  def create
    current_basket = Basket.find(line_item_params[:basket_id])
    chosen_dish = Dish.find(line_item_params[:dish_id])
  
    if current_basket.dishes.include?(chosen_dish)
      @line_item = current_basket.line_items.find_by(:dish_id => chosen_dish)
      # TODO: will need to render UI for this!
      # TODO: probably have to refactor this
      if chosen_dish.inventory >= @line_item.quantity
        @line_item.quantity += 1
      end
    else
      @line_item = LineItem.new(line_item_params)
    end
  
    @line_item.save
    render json: current_basket, include: :line_items, status: :ok
  end
  
  # PUT /line_items/:id/add
  def add_quantity
    if Dish.find(@line_item.dish_id).inventory >= @line_item.quantity
      @line_item.quantity += 1
      @line_item.save
      render json: @line_item, status: :ok
    else
      render status: :not_modified
    end
  end
  
  # PUT /line_items/:id/reduce
  def reduce_quantity
    if @line_item.quantity > 1
      @line_item.quantity -= 1
      @line_item.save
      render json: @line_item, status: :ok
    else
      @line_item.destroy
      render 'Item removed from basket', status: :ok
    end
  end

  # DELETE /line_items/:id
  def remove_from_basket
    @line_item.destroy
  end

  private

  def set_line_item
    @line_item = LineItem.find(params[:id])
  end

  def line_item_params
    params.require(:line_item).permit(:dish_id, :basket_id)
  end
end


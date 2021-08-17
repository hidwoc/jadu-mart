class LineItemsController < ApplicationController
  before_action :set_line_item, only: [:remove_from_basket, :add_quantity, :reduce_quantity, :update]
  
  # # PUT /line_items/:id/add
  # def add_quantity
  #   if Dish.find(@line_item.dish_id).inventory >= @line_item.quantity
  #     @line_item.quantity += 1
  #     @line_item.save
  #     render json: @line_item, status: :ok
  #   else
  #     render status: :not_modified
  #   end
  # end
  
  # # PUT /line_items/:id/reduce
  # def reduce_quantity
  #   if @line_item.quantity > 1
  #     @line_item.quantity -= 1
  #     @line_item.save
  #     render json: @line_item, status: :ok
  #   else
  #     @line_item.destroy
  #     render 'Item removed from basket', status: :ok
  #   end
  # end

  # PUT /line_items/:id
  def update
    @line_item.update(line_item_params)
    render json: @line_item
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
    params.require(:line_item).permit(:quantity)
  end
end


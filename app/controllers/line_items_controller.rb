class LineItemsController < ApplicationController
  before_action :set_line_item, only: [:remove_from_basket, :add_quantity, :reduce_quantity, :update]

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
    params.require(:line_item).permit(:quantity, :dish_id, :basket_id)
  end
end

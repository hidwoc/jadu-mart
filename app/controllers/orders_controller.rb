class OrdersController < ApplicationController
  before_action :set_order, only: %i[show update destroy]

  # GET /orders
  def index
    @orders = Order.all

    render json: @orders.map do |order|
      order.to_json(
        :include => {
          :line_items {
            :include => :dish,
            :methods => :subtotal,
          },
        },
        :methods =>  :total,
      )
    end
  end

  # GET /orders/1
  def show
    render json: @order.to_json(
      :include => {
        :line_items {
          :include => :dish,
          :methods => :subtotal,
        },
      },
      :methods =>  :total,
    )
  end

  # POST /orders
  def create
    @order = Order.new(order_params)

    if @order.save
      render json: @order, status: :created, location: @order
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # TODO: POST request
  # POST /orders
  def place_order
    @order = Order.new(order_params)
    @basket.line_items.map do |line_item|
      @order.line_items << line_item
      item.basket_id = nil

      dish = Dish.find(line_item.dish_id)
      dish.inventory -= line_item.quantity
      dish.save
    end
    @order.save
    @basket.destroy
    render Dish.all, status: :ok
  end

  # PATCH/PUT /orders/1
  def update
    if @order.update(order_params)
      render json: @order
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # DELETE /orders/1
  def destroy
    @order.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_order
    @order = Order.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def order_params
    params
      .require(:order)
      .permit(
        :name,
        :address,
        :phone,
        :message,
        :email,
        :allergies,
        :delivery,
        :payment_method,
        :payment_info,
      )
  end
end

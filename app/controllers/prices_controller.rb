class PricesController < ApplicationController
  before_action :set_price, only: %i[show update destroy]

  # GET /dishes/:dish_id/prices
  def index
    @prices = Price.all.order(:quantity)

    render json: @prices
  end

  # GET /dishes/:dish_id/prices/:price_id
  def show
    render json: @price
  end

  # POST /dishes/:dish_id/prices
  def create
    @price = Price.new(price_params)

    if @price.save
      render json: @price, status: :created
    else
      render json: @price.errors, status: :unprocessable_entity
    end
  end

  # PUT /dishes/:dish_id/prices/:price_id
  def update
    if @price.update(price_params)
      render json: @price, status: :ok
    else
      render json: @price.errors, status: :unprocessable_entity
    end
  end

  # DELETE /dishes/:dish_id/prices/:price_id
  def destroy
    @price.destroy
  end

  private

  def set_price
    @price = Price.find(params[:id])
  end

  def price_params
    params
      .require(:price)
      .permit(:quantity, :price, :dish_id)
  end
end

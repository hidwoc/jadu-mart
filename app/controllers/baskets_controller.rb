class BasketsController < ApplicationController
  before_action :set_basket, only: [:show, :update, :destroy]

  # GET /baskets
  def index
    @baskets = Basket.all

    render json: @baskets
  end

  # GET /baskets/1
  def show
    render json: @basket
  end

  # POST /baskets
  def create
    @basket = Basket.new(basket_params)

    if @basket.save
      render json: @basket, status: :created, location: @basket
    else
      render json: @basket.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /baskets/1
  def update
    if @basket.update(basket_params)
      render json: @basket
    else
      render json: @basket.errors, status: :unprocessable_entity
    end
  end

  # DELETE /baskets/1
  def destroy
    @basket.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_basket
      @basket = Basket.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def basket_params
      params.fetch(:basket, {})
    end
end

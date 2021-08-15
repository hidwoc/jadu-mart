class DishesController < ApplicationController
  before_action :authorize_request, only: %i[create update destroy]
  before_action :set_dish, only: %i[show update destroy]

  # GET /dishes
  def index
    @dishes = Dish.all.order(:created_at)

    render json: @dishes
  end

  # GET /dishes/:id
  def show
    render json: @dish
  end

  # POST /dishes
  def create
    @dish = Dish.new(dish_params)

    if @dish.save
      render json: @dish, status: :created
    else
      render json: @dish.errors, status: :unprocessable_entity
    end
  end

  # PUT /dishes/:id
  def update
    if @dish.update(dish_params)
      render json: @dish, status: :ok
    else
      render json: @dish.errors, status: :unprocessable_entity
    end
  end

  # DELETE /dishes/:id
  def destroy
    @dish.destroy
  end

  private

  def set_dish
    @dish = Dish.find(params[:id])
  end

  def dish_params
    params
      .require(:dish)
      .permit(:name, :description, :img_url, :price, :inventory)
  end
end

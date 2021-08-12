class DishesController < ApplicationController
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_dish, only: [:show, :update, :destroy]

  # GET /dishes
  def index
    @dishes = Dish.all

    render json: @dishes
  end

  # GET /dishes/1
  def show
    render json: @dish
  end

  # POST /dishes
  def create
    @dish = Dish.new(dish_params)

    if @dish.save
      render json: @dish, status: :created
      redirect_to dishes_path
    else
      render json: @dish.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /dishes/1
  def update
    if @dish.update(dish_params)
      render json: @dish, status: :ok
      redirect_to dishes_path
    else
      render json: @dish.errors, status: :unprocessable_entity
    end
  end

  # DELETE /dishes/1
  def destroy
    @dish.destroy
    redirect_to dishes_path
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_dish
      @dish = Dish.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def dish_params
      params.require(:dish).permit(:name, :description, :img_url, :price, :in_stock)
    end
end

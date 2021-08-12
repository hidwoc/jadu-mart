class ApplicationController < ActionController::API
  before_action :current_basket

  private

  def current_basket
    if session[:basket_id]
      basket = Basket.find_by(id: session[:basket_id])
      if basket.present?
        @current_basket = basket
      else
        session[:basket_id] = nil
      end
    end

    if session[:basket_id] == nil
      @current_basket = Basket.create
      session[:basket_id] = @current_basket.id
    end
  end
end

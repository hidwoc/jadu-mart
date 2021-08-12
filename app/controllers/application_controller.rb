class ApplicationController < ActionController::API
  SECRET_KEY = Rails.application.secrets.secret_key_base.to_s
  before_action :current_basket

  # authorize
  def authorize_request
    header = request.headers['Authorization']
    token = header.split(' ').last if header
    begin
      payload = decode_token(token)[0]
      @current_user = User.find(payload["id"])

    rescue ActiveRecord::RecordNotFound => e
      render json: { errors: e.message }, status: :unauthorized
    rescue JWT::DecodeError => e
      render json: { errors: e.message }, status: :unauthorized
    end
  end

  private

  def decode_token token
    JWT.decode(token, SECRET_KEY)
  end
  
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

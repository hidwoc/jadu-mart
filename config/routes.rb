Rails
  .application
  .routes
  .draw do
    get '/baskets/:id' => 'baskets#show', :as => 'basket'
    post '/baskets' => 'baskets#create'
    put '/baskets/:id/add' => 'baskets#add_line_item_to_basket'
    delete '/baskets/:id/order' => 'baskets#place_order'
    delete '/baskets/:id' => 'baskets#destroy'

    get '/line_items/:id' => 'line_items#show', :as => 'line_item'
    put '/line_items/:id' => 'line_items#update'
    delete '/line_items/:id' => 'line_items#remove_from_basket'
    
    resources :dishes
    
    resources :users, only: [:create]
    post "/users/login", to: "users#login"
    get "/users/verify", to: "users#verify"

    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  end

Rails
  .application
  .routes
  .draw do
    get '/baskets/:id' => 'baskets#show', :as => 'basket'
    post '/baskets' => 'baskets#create'
    put '/baskets/:id' => 'baskets#place_order'
    delete '/baskets/:id' => 'baskets#destroy'

    post '/line_items' => 'line_items#create'
    put '/line_items/:id/add' => 'line_items#add_quantity',
          :as => 'line_item_add'
    put '/line_items/:id/reduce' => 'line_items#reduce_quantity',
          :as => 'line_item_reduce'
    get '/line_items/:id' => 'line_items#show', :as => 'line_item'
    delete '/line_items/:id' => 'line_items#remove_from_basket'
    
    resources :dishes
    
    resources :users, only: [:create]
    post "/users/login", to: "users#login"
    get "/users/verify", to: "users#verify"

    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  end

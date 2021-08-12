Rails
  .application
  .routes
  .draw do
    get 'baskets/:id' => 'baskets#show', :as => 'basket'
    post 'baskets/:id' => 'baskets#place_order'
    delete 'baskets/:id' => 'baskets#destroy'

    resources :users do
      resources :dishes do
        post 'line_items/:id/add' => 'line_items#add_quantity',
             :as => 'line_item_add'
        post 'line_items/:id/reduce' => 'line_items#reduce_quantity',
             :as => 'line_item_reduce'
        post 'line_items' => 'line_items#create'
        get 'line_items/:id' => 'line_items#show', :as => 'line_item'
        delete 'line_items/:id' => 'line_items#remove_from_basket'
      end
    end


    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  end

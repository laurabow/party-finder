Rails.application.routes.draw do
  
  resources :posts do
    resources :comments
  end
  resources :users

  # auth routes:
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'

  # custom route
  # get '/users/:user_id/posts', to: 'posts#get_user_posts'
  get '/users/:user_id/posts', to: 'users#posts'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

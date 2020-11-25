# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api, format: :json do
    namespace :v1 do
      resources :posts, except: %i[edit] do
        post 'comments', to: 'comments#create'
        put 'comment/:id', to: 'comments#update'
        get 'comment/:id', to: 'comments#show'
        delete 'comment/:id/', to: 'comments#destroy'
      end
    end
  end
end

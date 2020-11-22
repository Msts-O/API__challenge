# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api, format: :json do
    namespace :v1 do
      get 'posts/index'
      post   'posts/create'
      get    'post/new'
      get    'post/edit'
      put    'posts/update'
      delete 'posts/destroy'
      get    'posts/show'
      # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
    end
  end
end

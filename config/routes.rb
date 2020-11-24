# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api, format: :json do
    namespace :v1 do
     resources :posts, except: %i[edit] do
    end
   end
  end
end

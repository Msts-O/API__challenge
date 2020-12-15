# frozen_string_literal: true

json.array! @posts do |post|
  json.call(post, :title, :content, :name)
end

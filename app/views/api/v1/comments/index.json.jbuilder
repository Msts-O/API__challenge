# frozen_string_literal: true

json.array! @comments do |comment|
  json.call(comment, :content, :name)
end

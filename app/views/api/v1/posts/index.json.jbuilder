
json.array! @posts do |post|
  json.(post, :title, :content, :name)
end



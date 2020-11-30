
json.array! @comments do |comment|
  json.(comment,:content, :name)
end

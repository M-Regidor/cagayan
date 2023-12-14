json.review do
  json.extract! @review, :id, :author_id, :name, :title, :body, :rating, :created_at, :updated_at
end

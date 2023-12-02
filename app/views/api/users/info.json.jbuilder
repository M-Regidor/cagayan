json.user do
  json.extract! @user, :id, :email, :name
end

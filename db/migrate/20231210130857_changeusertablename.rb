class Changeusertablename < ActiveRecord::Migration[7.1]
  def change
    rename_column :reviews, :user_id, :author_id
  end
end

class RemoveFieldNameFromTableName < ActiveRecord::Migration[6.0]
  def change
  remove_column :users, :user_role

  end
end

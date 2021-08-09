class AddBugTypeTobug < ActiveRecord::Migration[6.0]
  def change
  add_column :bugs, :bug_type, :integer
  end
end

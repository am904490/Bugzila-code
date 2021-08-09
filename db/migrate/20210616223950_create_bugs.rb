class CreateBugs < ActiveRecord::Migration[6.0]
  def change
    create_table :bugs do |t|
      t.string :discription
      t.string :title
      t.string  :deadline
      t.integer :bug_type
      t.integer :status
      
      t.timestamps
    end
  end
end

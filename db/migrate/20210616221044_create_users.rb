class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.text :password
      t.references :user
      t.references :project
      t.references :qa

      t.timestamps
    end
  end
end

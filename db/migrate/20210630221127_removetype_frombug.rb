class RemovetypeFrombug < ActiveRecord::Migration[6.0]
  def change
  remove_column :bugs, :type
  end
end

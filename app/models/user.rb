class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :validatable
  has_many  :project_users 
  has_many :projects , through: :project_users
  has_many :bugs   
  has_many :qa_bugs , class_name: "bug" , foreign_key: "qa_id"
  enum usertype: {manager: 0, developer: 1, qa: 2}

  def role(role)
    usertype.include? role.to_s
  end   
end

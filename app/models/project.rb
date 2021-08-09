class Project < ApplicationRecord
  attr_accessor :developer_ids, :qa_ids
	has_many :bugs
	has_many :project_users
	has_many :users , through: :project_users 
	validates :name, presence: true

	def get_developer_ids
		self.project_users.joins(:user).where('users.usertype' => User.usertypes[:developer]).pluck(:user_id)
	end

	def get_qa_ids
		project_users.joins(:user).where('users.usertype' => User.usertypes[:qa]).pluck(:user_id)
	end

	def get_developers
		self.users.developer.pluck(:name , :user_id)
	end
end

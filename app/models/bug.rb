class Bug < ApplicationRecord
	belongs_to :user
	belongs_to :project
	belongs_to :qa, class_name: "User"
	validates :title , presence: true , uniqueness: true , null: false
	enum bug_type: {feature: 0 , bug: 1}
	enum status: {new_bug: 0, started: 1, completed: 2 , resolved: 3}
	mount_uploader :image, ImageUploader
end

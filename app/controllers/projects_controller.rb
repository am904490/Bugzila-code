class ProjectsController < ApplicationController
	load_and_authorize_resource
	before_action :load_project, only: [:edit, :update, :destroy]	
	before_action :load_developer_and_qa_ids, only: [:edit, :update, :destroy]	
	
	def index
		@projects = current_user.projects
	end

	def show
		@project = current_user.projects.find(params[:id])
	end	
	
	def new
		@project = Project.new
	end

	def create
		@project = current_user.projects.create(project_params)
		  if @project.persisted?
			  params[:developer_ids].try(:each) do |developer_id|
				@project.project_users.create(user_id: developer_id , project_id: @project.id)
		  end
			  params[:qa_ids].try(:each) do |qa_id|
				@project.project_users.create(project_id: @project.id ,user_id: qa_id)

			end
			redirect_to root_path
		  else
			  flash[:alert] = "Failed to create."
			  render :new
		  end
		
	end
	
	def destroy 
		@project.project_users.where(user_id: @developer_ids).destroy_all
		@project.project_users.where(user_id: @qa_ids).destroy_all
		@project.project_users.where(user_id: current_user.id).destroy_all
			if @project.destroy
				redirect_to root_path
			else
				flash[:alert] = "Deleted Successfully."
			end 
	end
	
	def update
		if @project.update(project_params)
			@project.project_users.where(user_id: @developer_ids).destroy_all
			params[:developer_ids].try(:each) do |developer_id|
			@project.project_users.create(project_id: @project.id , user_id: developer_id)
		end 
			@project.project_users.where(user_id: @qa_ids).destroy_all
			params[:qa_ids].try(:each) do |qa_id|
			@project.project_users.create(project_id: @project.id ,user_id: qa_id)
		end
			redirect_to root_path  
		else 
			flash[:alert] = "Name is compulsory."
			render :edit
		end

	end					
	
	private
	def project_params
		params.require(:project).permit(:name , :id)
	end

	def load_project
		@project = current_user.projects.find(params[:id])
	end
	
	def load_developer_and_qa_ids
		@developer_ids = @project.get_developer_ids
		@qa_ids = @project.get_qa_ids
	end
end

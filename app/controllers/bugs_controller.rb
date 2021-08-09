class BugsController < ApplicationController
  load_and_authorize_resource 
  before_action :load_project
  before_action :load_developers , only: [:new, :create , :edit , :update]
  
  def index
    @project = Project.find(params[:project_id])
    @bugs = @project.bugs
  end

  def show
    @project = Project.find(params[:project_id])
    @bug = @project.bugs.find(params[:id])
    @name = @bug
    @developer_id = @bug.user_id
    @user = User.find(@developer_id)
  end

  def new
    @project = current_user.projects.find(params[:project_id])
    @bug = Bug.new 
  end

  def create
    @bug = @project.bugs.new(bug_params)
    @bug.qa_id = current_user.id
    
    if @bug.save
      redirect_to   project_bugs_path 
    else
     flash[:alert] = "Fill Form."
     render :new   
    end
  end

  def edit
    @project = Project.find(params[:project_id])
    @bug = @project.bugs.find(params[:id]) 
    @developer_id = @bug.user_id
  end

  def update
    @project.bugs.update(bug_params)
    redirect_to  project_bugs_path 
  end

  def destroy
    @bug =  Bug.find(params[:id])
    @bug.destroy
    redirect_to project_bugs_path 
  end

  private
  def load_project
    @project = current_user.projects.find(params[:project_id])
  end

  def bug_params
    params.require(:bug).permit(:title , :discription , :bug_type, :deadline , :type , :status , :user_id , :image)
  end

  def load_developers
    @developers =  @project.get_developers
  end
end

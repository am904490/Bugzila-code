class Ability 
  include CanCan::Ability
  def initialize(user)
    if user.role :manager
      can :manage, Project
      can :read, Bug 
    elsif user.role :developer
      can :read, Project
      can :read, Bug, status: "resolved"
    elsif user.role :qa
      can :destroy, Bug
      can :update, Bug 
      can :read, Project
      can :read,   Bug
      can :create, Bug   
    end
  end
end

module ProjectHelper

  def all_qas
    User.qa.collect {|p| [ p.name, p.id ] }
  end

  def all_developers
    User.developer.collect {|p| [ p.name, p.id ] }
  end
end

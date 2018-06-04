class Web::TodosLoyalty < WebLoyalty
  def index?
    user && user.id == record.user_id
  end

  def create?
    user && user.id == record.user_id
  end

  def update?
    user && user.id == record.user_id
  end
end

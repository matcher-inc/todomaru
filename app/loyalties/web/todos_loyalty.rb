class Web::TodosLoyalty < WebLoyalty
  def create?
    user && user.id == record.user_id
  end
end

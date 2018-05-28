require 'rails_helper'

RSpec.describe Web::TodosController, type: :controller do
  before(:each) do
    request.env['HTTP_ACCEPT'] = 'application/json'
    request.env['devise.maaping'] = Devise.mappings[:user]
  end

  before(:all) do
    create(:user)
  end

  describe '#create' do
    let(:user) { User.first! }
    let(:todo_params) { attributes_for(:todo) }
    before(:each) { sign_in(user) }

    it "create a user's todo" do
      post :create, params: { user_id: user.id, todo: todo_params }
      expect(response.content_type).to eq('application/json')
      expect(response).to have_http_status(:ok)
      expect(response).to render_template(:create)
    end
  end
end

require 'rails_helper'

RSpec.describe Web::Users::SessionsController, type: :controller do
  before do
    request.env["HTTP_ACCEPT"] = 'application/json'
    request.env["devise.mapping"] = Devise.mappings[:user]
  end

  describe 'POST #create' do
    let(:user_params) { attributes_for(:user) }
    let!(:saved_user) { create(:user, user_params) }
    subject {
      post :create, params: {user: user_params}
    }
    render_views

    it "returns response 200" do
      expect(response.status).to eq 200
    end

    it "makes user logged in" do
      subject
      result = JSON.parse(response.body)
      expect(result['id']).to eq saved_user.id
    end

    it "returns user json " do
      subject
      result = JSON.parse(response.body)
      expect(result.keys).to include('id', 'name', 'email')
    end
  end
end

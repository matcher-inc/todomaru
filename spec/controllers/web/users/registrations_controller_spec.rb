require 'rails_helper'

RSpec.describe Web::Users::RegistrationsController, type: :controller do
  before do
    request.env["HTTP_ACCEPT"] = 'application/json'
    request.env["devise.mapping"] = Devise.mappings[:user]
  end

  describe 'POST #create' do
    let(:user_params) { attributes_for(:user) }
    subject { post :create, params: {user: user_params} }
    render_views

    it "returns response 200" do
      expect(response.status).to eq 200
    end

    it "saves the new user in the database" do
      expect{ subject }.to change(User, :count).by(1)
    end

    it "returns user json " do
      subject
      result = JSON.parse(response.body)
      expect(result.keys).to include('id', 'name', 'email')
    end
  end
end

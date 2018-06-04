require 'rails_helper'

RSpec.describe Web::TodosController, type: :controller do
  before(:each) do
    request.env['HTTP_ACCEPT'] = 'application/json'
    request.env['devise.maaping'] = Devise.mappings[:user]
  end

  before(:all) do
    create(:user)
  end

  describe '#index' do
    let(:user) { User.first! }
    let(:todos) { create_list!(:todo, 10, user: user, completed_at: nil) }
    before(:each) { sign_in(user) }

    it "assigns todos to @todos in the action" do
      get(:index, params: { user_id: user.id })
      expect(assigns(:todos)).to match_array(@todos)
    end

    it "returns Content-Type 'application/json'" do
      get(:index, params: { user_id: user.id })
      expect(response.content_type).to eq('application/json')
    end

    it "returns OK status code" do
      get(:index, params: { user_id: user.id })
      expect(response).to have_http_status(:ok)
    end

    it "renders index template" do
      get(:index, params: { user_id: user.id })
      expect(response).to render_template(:index)
    end
  end

  describe '#create' do
    let(:user) { User.first! }
    let(:todo_params) { attributes_for(:todo) }
    before(:each) { sign_in(user) }

    it "returns Content-Type 'application/json'" do
      post(:create, params: { user_id: user.id, todo: todo_params })
      expect(response.content_type).to eq('application/json')
    end

    it "returns OK status" do
      post(:create, params: { user_id: user.id, todo: todo_params })
      expect(response).to have_http_status(:ok)
    end

    it "renders create template" do
      post(:create, params: { user_id: user.id, todo: todo_params })
      expect(response).to render_template(:create)
    end

    it "increments Todo.count" do
      expect { post(:create, params: { user_id: user.id, todo: todo_params }) }.to change(Todo, :count).by(1)
    end
  end

  describe '#update' do
    let(:user) { User.first! }
    let(:todo) { create(:todo, user: user) }
    let(:todo_params) { attributes_for(:todo) }
    before(:each) { sign_in(user) }

    it "returns Content-Type 'application/json'" do
      patch :update, params: { user_id: user.id, id: todo.id, todo: todo_params }
      expect(response.content_type).to eq('application/json')
    end

    it "returns OK status" do
      patch :update, params: { user_id: user.id, id: todo.id, todo: todo_params }
      expect(response).to have_http_status(:ok)
    end

    it "renders update template" do
      patch :update, params: { user_id: user.id, id: todo.id, todo: todo_params }
      expect(response).to render_template(:update)
    end

    it "updates todo's title" do
      expect { patch :update, params: { user_id: user.id, id: todo.id, todo: todo_params } }
        .to change { todo.reload.title }.from(todo.title).to(todo_params[:title])
    end

    it "updates todo's detail" do
      expect { patch :update, params: { user_id: user.id, id: todo.id, todo: todo_params } }
        .to change { todo.reload.detail }.from(todo.detail).to(todo_params[:detail])
    end

    it "updates todo's deadline" do
      expect { patch :update, params: { user_id: user.id, id: todo.id, todo: todo_params } }
        .to change { todo.reload.deadline }.from(todo.deadline).to(todo_params[:deadline])
    end
  end
end

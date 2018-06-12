class Web::TodosController < WebController
  before_action :replace_me

  def index
    user = User.preload(:todos).find(params[:user_id] || todo_params[:user_id])
    @todos = user.todos
    @todos.each { |todo| authorize!(todo) }
  end

  def show
    user = User.preload(:todos).find(params[:user_id] || todo_params[:user_id])
    @todo = user.todos.find(params[:id])
  end

  def create
    user = User.preload(:todos).find(params[:user_id] || todo_params[:user_id])
    @todo = user.todos.new(todo_params)
    authorize!(@todo)
    @todo.save!
  end

  def update
    user = User.preload(:todos).find(params[:user_id] || todo_params[:user_id])
    @todo = user.todos.find(params[:id])
    @todo.assign_attributes(todo_params)
    authorize!(@todo)
    @todo.save!
  end

  private

    def todo_params
      params.require(:todo).permit(
        :user_id, :title, :detail, :deadline, :completed_at,
      )
    end

    def replace_me
      params[:user_id] = current_user&.id if params.dig(:user_id) == 'me'
      params[:todo][:user_id] = current_user&.id if params.dig(:todo, :user_id) == 'me'
    end
end

class Web::TodosController < ApplicationController
  def create
    @user = User.find(params[:user_id] || todo_params[:user_id])
    @todo = @user.todos.new(todo_params)
    authorize!(@todo)
    @todo.save!
  end

  private

    def todo_params
      params.require(:todo).permit(
        :user_id, :title, :detail, :deadline, :completed_at,
      )
    end
end

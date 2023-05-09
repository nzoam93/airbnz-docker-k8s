class Api::UsersController < ApplicationController

  #creates appropriate nesting, user[...] including for password, which wouldn't have been done by default by wrap_parameter
  wrap_parameters include: User.attribute_names + ['password']

  def show
    @user = current_user
    render :show
  end

  def create
    @user = User.new(user_params)
    if @user && @user.save
      login!(@user)
      render :show
    else
      render json: { errors: @user.errors.full_messages}, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :username, :password)
  end
end

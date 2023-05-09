#note: since this inherits from ApplicationController, all of its methods are considered to be here too and I can just call them directly

class Api::SessionsController < ApplicationController
  #if there is a curent user, grab the information from that current user's show page
  def show
    if current_user
      @user = current_user
      render 'api/users/show'
    else
      render json: {user: nil}
    end
  end

  #log a user in based on the credentials and password that they provided
  #uses the User.find_by_credentials method to do so
  def create
    @user = User.find_by_credentials(params[:credential], params[:password])
    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: { errors: ['The provided credentials were invalid.']}, status: :unauthorized
    end
  end

  #logout the user
  def destroy
      logout! if logged_in?
      render json: {message: 'success'}
  end

  private
  def user_params
    params.require(:user).permit(:credential, :password)
  end
end

class ApplicationController < ActionController::API
     #ensure that any non-get request includes the appropriate authenticity token in order for it to go through
     include ActionController::RequestForgeryProtection
     protect_from_forgery with: :exception

     #handles errors as defined in the private methods below
     rescue_from StandardError, with: :unhandled_error
     rescue_from ActionController::InvalidAuthenticityToken,
         with: :invalid_authenticity_token


     #Both methods defined below in private
     #converts to snake_case for Ruby consistency (and calls the attach authenticity token method)
     before_action :snake_case_params, :attach_authenticity_token

     #allows it to be used in views
     helper_method :current_user, :logged_in?

     #current user is whatever user matches the session token
     #returns the User whose session_token attribute matches the token provided in the session cookie
     def current_user
         @current_user ||= User.find_by(session_token: session[:session_token])
     end

     #sets the session token
     def login!(user)
         session[:session_token] = user.reset_session_token!
     end

     #performs the current_user method in order to see if there is a logged in user
     def logged_in?
         !!current_user
     end

     #resets session token of the user and of the cookie. Also, sets @current user to nil
     def logout!
         current_user.reset_session_token! if logged_in?
         session[:session_token] = nil
         @current_user = nil
     end

     #you can call this as a before_action for anything that requires a user to be logged in to function properly
     def require_logged_in
         unless current_user
             render json: {message: 'Unauthorized'}, status: :unauthorized
         end
     end

     private
     def snake_case_params
         params.deep_transform_keys!(&:underscore)
     end

     #this is called in before_action so it occurs before action
     #attaches the authenticity token to the header so that the browser has access to it
     def attach_authenticity_token
         headers['X-CSRF-Token'] = masked_authenticity_token(session)
     end

     #error handling (given on phase 3 of the backend hw)
     def invalid_authenticity_token
         render json: { message: 'Invalid authenticity token' },
           status: :unprocessable_entity
    end

    def unhandled_error(error)
      if request.accepts.first.html?
        raise error
      else
        @message = "#{error.class} - #{error.message}"
        @stack = Rails::BacktraceCleaner.new.clean(error.backtrace)
        render 'api/errors/internal_server_error', status: :internal_server_error
        logger.error "\n#{@message}:\n\t#{@stack.join("\n\t")}\n"
      end
    end
end

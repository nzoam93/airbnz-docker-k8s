json.user do
    json.extract! @user, :id, :email, :username, :created_at, :updated_at

    #.photo is the association in user model from AWS
    #.url is the AWS method
    json.profile_pic @user.photo.url
end

# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  #the 'has_secure_password' part does the P and I part of SPIRE
  has_secure_password

  #validations
  validates :username,
    uniqueness: true,
    length: { in: 3..30 },
    format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }
  validates :email,
    uniqueness: true,
    length: { in: 3..255 },
    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in: 6..255 }, allow_nil: true

  #has_manys
  has_many :listings,
        foreign_key: :owner_id,
        class_name: :Listing,
        dependent: :destroy

  has_many :reservations,
      foreign_key: :reserver_id,
      class_name: :Reservation,
      dependent: :destroy

  has_many :reviews,
      foreign_key: :reviewer_id,
      class_name: :Review,
      dependent: :destroy

  #aws stuff
  has_one_attached :photo

  #makes sure that the use has a session token before doing the validation that a session token must be present
  before_validation :ensure_session_token

  #user authentication below
  def self.find_by_credentials(credential, password)
    if (URI::MailTo::EMAIL_REGEXP).match(credential)
      user = User.find_by(email: credential)
    else
      user = User.find_by(username: credential)
    end

    if user && user.authenticate(password)
      return user
    else
      return false
    end
  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    self.save!
    return self.session_token
  end

  private
  def generate_unique_session_token
    token = SecureRandom::urlsafe_base64
    while User.exists?(session_token: token)
      token = SecureRandom::urlsafe_base64
    end
    return token
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end
end

# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  name            :string           not null
#


class User < ApplicationRecord
  attr_reader :password

  validates :name,
  presence: true,
  format: { without: /\d/, message: "should not contain numbers" }

  validates :email,
    uniqueness: true,
    # length: {in:3..100},
    format: {with: URI::MailTo::EMAIL_REGEXP, message: "Must be a valid email"}

  validates :session_token, presence: true, uniqueness: true
  validates :password, length: {in: 6..40, allow_nil:true}

  before_validation :ensure_session_token

  has_secure_password

  has_many :reviews,
    foreign_key: :author_id,
    dependent: :destroy

  has_many :reviewed_products,
  through: :reviews,
  source: :product

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user&.authenticate(password)
      user
    else
      nil
    end
  end

  def reset_session_token!
    self.session_token = generate_session_token
    save!
    session_token
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  private
  def generate_session_token
    loop do
      token = SecureRandom::urlsafe_base64
      return token unless User.exists?(session_token: token)
    end
  end
end

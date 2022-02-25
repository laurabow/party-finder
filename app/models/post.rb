class Post < ApplicationRecord
  belongs_to :user
  has_man :comments, dependent: :destroy
end

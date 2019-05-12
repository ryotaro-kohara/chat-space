class GroupUser < ApplicationRecord
  belongs_to :group
  belonds_to :user
end

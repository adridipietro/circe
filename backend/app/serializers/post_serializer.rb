class PostSerializer < ActiveModel::Serializer
  attributes :id, :name, :text, :likes
end

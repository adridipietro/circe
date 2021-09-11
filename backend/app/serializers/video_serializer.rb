class VideoSerializer < ActiveModel::Serializer
  attributes :id, :source, :name, :caption, :likes
end

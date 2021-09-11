class ImageSerializer < ActiveModel::Serializer
  attributes :id, :source, :name, :caption, :likes
end

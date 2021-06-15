class HouseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :slug, :image_url
end

# Image Optim
# File: _plugins/jekyll-assets.rb

require "jekyll-assets"
require "image_optim"

image_optim = ImageOptim.new
processor   = proc do |_, data|
  image_optim.optimize_image_data(data) || data
end

%w(image/gif image/jpeg image/png image/svg+xml).each do |type|
  Sprockets.register_preprocessor(
    type, :image_optim, &processor
  )
end

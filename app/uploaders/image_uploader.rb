class ImageUploader < CarrierWave::Uploader::Base
  storage :file
    
  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  def content_type_blacklist
    %w(image/jpeg image/jpg)
  end

  def extension_white_list
    %w( gif png)
  end
   
  def extension_allowlist
    %w(gif png)
  end
end

# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

# Force JSON key name to lower camelCase
Jbuilder.key_format(camelize: :lower)

ActionDispatch::Request.parameter_parsers[:json] = -> (raw_post) do
  # Modified from action_dispatch/http/parameters.rb
  data = ActiveSupport::JSON.decode(raw_post)
  data = {:_json => data} unless data.is_a?(Hash)

  # Transform camelCase param keys to snake_case:
  data.deep_transform_keys! do |key|
    key[0].match(/^[[:upper:]]/) ? key : key.underscore
  end
end

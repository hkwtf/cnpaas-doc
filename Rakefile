require "yaml"
require "tempfile"

namespace :server do

  # Create subtasks so we can run e.g. rake server:development
  %w(development production).each do |env|
    desc "Start server for #{env} environment"
    task env.to_sym do
      server env
    end
  end

  def server(env)
    puts "Starting server for '#{env}' environment..."
    config_files = (env == "production") ? "" : "--config _config.yml,_config.#{env}.yml"
    system "jekyll serve #{config_files}"
  end

end

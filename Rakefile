namespace :cnpaas do
  ALL_ENVS    = %w(development production)
  DEFAULT_ENV = "development"

  # Create subtasks so we can run e.g. rake cnpaas:development:start
  ALL_ENVS.each do |env|
    desc "Start CNPaaS Doc server for '#{env}' environment"
    task "#{env}:start" do
      start_server env
    end
  end

  # Shorthand
  desc "Start CNPaaS Doc server for '#{DEFAULT_ENV}' environment (shorthand)"
  task "start" => "#{DEFAULT_ENV}:start"

  def start_server(env)
    puts "Starting CNPaaS Doc server for '#{env}' environment..."
    config_files = "--config _config.yml,_config.#{env}.yml" if env != "production"
    exec "jekyll serve #{config_files}"
  end
end

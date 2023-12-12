if Rails.env.development?
  load(Rails.root.join('db', 'development_seeds.rb'))
elsif Rails.env.production?
  load(Rails.root.join('db', 'production_seeds.rb'))
end

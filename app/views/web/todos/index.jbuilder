json.array!(@todos) do |todo|
  json.merge! todo.attributes
end

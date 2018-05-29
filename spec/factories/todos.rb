FactoryBot.define do
  factory :todo do
    title { Faker::Lorem.word }
    detail { Faker::Lorem.paragraph }
    deadline { Faker::Time.forward(23, :morning)  }
  end
end

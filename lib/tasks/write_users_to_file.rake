namespace :tapsy do
  task users_to_file: :environment do
    users = User.all
    file_num = Dir.entries("log/users").length
    f = File.open("log/users/tapsy_users#{file_num}.txt", 'w')
    f.puts Time.now
    users.each do |user|
      f.puts "#{user.name}" + "  #{user.email}" + "  #{user.username}"
      puts "#{user.name}" + "  #{user.email}" + "  #{user.username}"
    end
    f.close
    puts "Successfully logged users to 'tapsy_users#{file_num}.txt'"
  end
end

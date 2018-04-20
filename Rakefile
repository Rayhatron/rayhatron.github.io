require 'html-proofer'
# rake test
desc "build and test website"
task :test do
  sh "bundle exec jekyll build"
  HTML::Proofer.new("./_site", {:href_ignore=> ['http://localhost:4000','https://linkedin.com/in/rufaro-madamombe-rayhatron','https://freecodecamp.com/rayhatron','https://www.talkplus.co.zw/','https://www.apachefriends.org/index.html'], :typhoeus => { :followlocation => true, :ssl_verifypeer => false, :headers => { 'User-Agent' => 'html-proofer' } }}).run
end
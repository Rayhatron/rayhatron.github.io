require 'html-proofer'
# rake test
desc "build and test website"
task :test do
  sh "bundle exec jekyll build"
  HTMLProofer.check_directory("./_site", {:only_4xx => true,:typhoeus => { :followlocation => true, :ssl_verifypeer => false, :headers => { 'User-Agent' => 'html-proofer' } }}).run
end
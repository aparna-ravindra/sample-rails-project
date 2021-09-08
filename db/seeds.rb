# db/seeds.rb
SAMPLE_POSTS = [{
  fullname: 'Rails Routes expanded view option',
  description: 'Rails 6 adds support to show rails routes in an expanded format with --expanded option.',
},{
  fullname: 'Rails find_in_batches vs find_each',
  description: 'This article discusses how we can use find_in_batches and find_each to query records in batches with ActiveRecord.',
}, {
  fullname: 'Rails Routes member vs collection',
  description: 'Member routes act on a member of the resource. Collection routes acts on resources in general.',
}]

SAMPLE_POSTS.each do |post|
  Student.create(post)
end

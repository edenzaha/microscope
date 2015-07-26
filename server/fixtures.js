if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  });
  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com'
  });
  Posts.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  });
}
if (Movies.find().count() === 0) {
  Movies.insert({
    name: 'Dirty Dancing',
    image: 'http://sachagreif.com/introducing-telescope/'
  });
}

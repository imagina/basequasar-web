/**
 * Config for Views and Routes of modules
 */
export default {
  /*
   * Routes and views of module qblog
   *
   * path if location is in module => '@imagina/qblog/_layouts/'
   * path if location isn't in module => 'src/layouts/'
   */
  qblog: {
    categoryBlog: {
      location: {module : false},
      layout: 'master',
      route: '/blog',
      children : [
        {
          location: {module : true},
          layout: 'index-blog',
          route: '/',
        }
      ]
    },
    categoryIndex: {
      location: {module : false},
      layout: 'master',
      route: '/:slugCategory',
      children : [
        {
          location: {module : true},
          layout: 'master',
          route: '/',
        },
        {
          location: {module : true},
          layout: 'master',
          route: '/:slugPost',
        }
      ]
    },
  },
}

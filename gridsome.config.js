// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome-Test ',
  plugins: [
      {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'src/pages/markdown/*.md',
        typeName: 'Post'
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Documentation', // Required
        baseDir: './content/docs', // Where .md files are located
        pathPrefix: '/docs', // Add route prefix. Optional
        template: './src/templates/Documentation.vue', // Optional
        includePaths: ['./src/sections'],
        route:'/blog/:id',
        refs:{
          tags:"Tag"
        }
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Tag', // Required
        baseDir: './tags', // Where .md files are located
        pathPrefix: '/tags', // Add route prefix. Optional
        template: './src/templates/Tag.vue' // Optional
      }
    },
  ]
}

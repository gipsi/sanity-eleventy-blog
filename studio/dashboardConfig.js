export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6227e68b033c192402d73e53',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-bgddn114',
                  apiId: 'a6d3caeb-053a-4110-add5-384d6db9afa0'
                },
                {
                  buildHookId: '6227e68bb1cc2f218cf58601',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-xp9fcibc',
                  apiId: 'c6f1e286-c5b3-4fb1-8784-3453ed540e77'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gipsi/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-xp9fcibc.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

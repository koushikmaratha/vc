module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'getting-started',
    },
    {
      type: 'category',
      label: 'Types',
      items: [
        {
          type: 'category',
          label: 'VC',
          items: ['vc/base', 'vc/main', 'vc/selective'],
        },
        {
          type: 'category',
          label: 'VP',
          items: ['vp/base'],
        },
      ],
    },
  ],
}
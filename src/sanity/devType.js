import { defineField, defineType } from 'sanity';

export const devType = defineType({
  name: 'development',
  title: 'development',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Post Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heading1',
      type: 'string',
      title: 'Heading 1',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heading2',
      type: 'string',
      title: 'Heading 2',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heading3',
      type: 'string',
      title: 'Heading 3',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heading4',
      type: 'string',
      title: 'Heading 4',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().warning('An image is a must for this post!'),
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          validation: (Rule) => Rule.required().warning('Alt text helps with accessibility.'),
        }),
      ],
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      title: 'Main Content',
      name: 'content',
      type: 'array',
      description: 'Add the main content of the post here—paragraphs, headings, images, whatever works!',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 1', value: 'h1' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Heading 4', value: 'h4' },
            { title: 'Heading 5', value: 'h5' },
            { title: 'Heading 6', value: 'h6' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Underline', value: 'underline' },
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  { title: 'URL', name: 'href', type: 'url' },
                  { title: 'Open in New Tab', name: 'blank', type: 'boolean' },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { title: 'Caption', name: 'caption', type: 'string', options: { isHighlighted: true } },
            {
              title: 'Alt Text',
              name: 'alt',
              type: 'string',
              validation: (Rule) => Rule.required().warning('Alt text is key for accessibility.'),
            },
            { title: 'Image Width', name: 'width', type: 'number' },
            { title: 'Image Height', name: 'height', type: 'number' },
            { title: 'Lazy Load', name: 'lazyLoad', type: 'boolean', initialValue: true },
          ],
        },
        {
          type: 'object',
          name: 'customEmbed',
          title: 'Custom Embed',
          fields: [
            { title: 'Embed URL', name: 'embedUrl', type: 'url' },
            { title: 'Embed Height', name: 'embedHeight', type: 'number', initialValue: 500 },  // Added height field
          ],
          preview: {
            select: { title: 'embedUrl' },
            prepare(selection) {
              const { title } = selection;
              return { title: title ? `Embed: ${title}` : 'Embed: No URL Set' };
            },
          },
        },
      ],
    }),
    // New FAQ Field Starts Here
    defineField({
      name: 'faq',
      title: 'FAQs',
      type: 'array',
      description: 'Add frequently asked questions and answers about skip bins or waste management here!',
      of: [
        {
          type: 'object',
          name: 'faqItem',
          title: 'FAQ Item',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule) => Rule.required().min(5).warning('Keep questions short and clear!'),
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'array',
              of: [{ type: 'block' }], // Rich text for answers
              validation: (Rule) => Rule.required().warning('Every question needs an answer!'),
            }),
          ],
          preview: {
            select: {
              title: 'question',
            },
            prepare(selection) {
              const { title } = selection;
              return {
                title: title || 'Unnamed FAQ',
              };
            },
          },
        },
      ],
    }),
    // End of FAQ Field
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      validation: (Rule) => Rule.max(10).warning('Keep it to 10 tags or fewer!').unique(),
    }),
    defineField({
      title: 'Link',
      name: 'href',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
      initialValue: () => new Date().toISOString(),
    }),
  ],
});

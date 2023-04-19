import React from 'react';
import Link from '@docusaurus/Link'
import {BlogPostProvider} from '@docusaurus/theme-common/internal';
import BlogPostItem from '@theme/BlogPostItem';

export default function BlogPostItems({
  items,
  component: BlogPostItemComponent = BlogPostItem,
}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-8'>
      {items.map((item) => {
        const BlogPostContent = item.content

        console.log(item)

        return (
          <article
            className={`
              relative
              rounded-2xl

              bg-[--custom-blog-card-background-color]
              transition-all
              shadow-sm shadow-yellow-500/25
              hover:shadow-lg hover:shadow-yellow-500/25

              border border-neutral-200/20
              flex flex-col space-y-3
              p-8
            `}
          >
            {/* Image */}
            <img 
              src={item.content.frontMatter.image}
                className={`
                  object-cover
                  rounded-xl mb-6
                  md:max-w-none h-64 md:-mx-6 md:-mt-6
                `}
            />

            {/* Title and other text */}
            <div className=''>
              <h3 className='text-xl h-28'>
                {item.content.frontMatter.title}
              </h3>

              <div className='text-sm text-[--custom-blog-card-timestamp-color]'>
                By {item.content.metadata.authors[0].name} on {item.content.metadata.formattedDate}
              </div>
            </div>

            <Link to={item.content.metadata.permalink} className='opacity-0 absolute inset-0'/>
          </article>
        )

        /* This is what it looked like right after swizzle --eject.
        return (
          <BlogPostProvider
            key={BlogPostContent.metadata.permalink}
            content={BlogPostContent}>
            <BlogPostItemComponent>
              <BlogPostContent />
            </BlogPostItemComponent>
          </BlogPostProvider>
        )
        */
      })}
    </div>
  );
}

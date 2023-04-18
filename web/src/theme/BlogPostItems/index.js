import React from 'react';
import Link from '@docusaurus/Link'
import {BlogPostProvider} from '@docusaurus/theme-common/internal';
import BlogPostItem from '@theme/BlogPostItem';
export default function BlogPostItems({
  items,
  component: BlogPostItemComponent = BlogPostItem,
}) {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-3 gap-5 mb-8'>
      {items.map((item) => {
        
        console.log(item)
        const BlogPostContent = item.content

        return (
          <div
            className={`
              rounded-lg shadow-lg
              border border-neutral-50/20
              flex flex-col space-y-3
            `}
          >
            <Link to={item.content.metadata.permalink}>
              <div
                className={`
                  h-64 w-full relative overflow-auto overflow-y-hidden
                  flex justify-center xl:items-center
                  bg-yellow-500/25
                  rounded-t-lg
                `}
              >
                <img 
                  src={item.content.frontMatter.image}
                  className='object-cover'
                />
              </div>
            </Link>

            <div className='p-5'>
              <Link to={item.content.metadata.permalink}>
                <h3 className='text-xl h-28'>
                  {item.content.frontMatter.title}
                </h3>
              </Link>

              <div className='text-sm'>
                By {item.content.metadata.authors[0].name} on {item.content.metadata.formattedDate}
              </div>
            </div>
          </div>
        )

        /*
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

import React from 'react';
import { Link } from 'gatsby';

const PostLink = ({ post }) => {
  let renderTags = '';
  let renderTagClasses = '';
  if (post.frontmatter.tags) {
    renderTags = post.frontmatter.tags.map((item, index) => (
      <p className='tag' key={index}>{item}</p>
    ));

    renderTagClasses = post.frontmatter.tags.map((item, index) => (
      `${item} `
    )).join('');
  }



  return (
    <article className={`card show ${renderTagClasses}`}>
      <Link to={post.frontmatter.path}>
        {!!post.frontmatter.thumbnail && (
          <img
            src={post.frontmatter.thumbnail}
            alt={post.frontmatter.title + '- Featured Shot'}
          />
        )}
      </Link>
      <header>
        <h2 className='post-title'>
          <Link to={post.frontmatter.path} className='post-link'>
            {post.frontmatter.title}
          </Link>
        </h2>
        <div class='post-meta'>{post.frontmatter.date}</div>
        <div class='post-meta'>{renderTags}</div>
      </header>
    </article>
  );
};
export default PostLink;

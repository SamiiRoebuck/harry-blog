import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostLink from '../components/post-link';
import HeroHeader from '../components/heroHeader';

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges }
  }
}) => {

    
  const tags = edges.filter( edge => { 
    if (edge.node.frontmatter.tags !== null) {
      return true
    } 
    return false
  }).map(function (edge) {
    return edge.node.frontmatter.tags;
  })

  const tagsMerged = [].concat.apply([], tags);

  let uniqueTags = [...new Set(tagsMerged)]


  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => {
    return <PostLink key={edge.node.id} post={edge.node} /> })

    
    

  const filter = e => {
    console.log(e.target.classList.value)
    let chosen = e.target.classList.value
    if (chosen === 'all') {
      let cards = document.querySelectorAll('.card')
      console.log(cards);
      cards.forEach(card => {
        if (!card.classList.contains('show')) {
          card.classList.remove('hide')
        card.classList.add('show')
        }
      });
    } else {
      let cards = document.querySelectorAll('.card')
      console.log(cards);
      cards.forEach(card => {
        if (!card.classList.contains(chosen)) {
        card.classList.remove('show')
        card.classList.add('hide')
        } else {
          card.classList.remove('hide')
        card.classList.add('show')
        }
      });

    }
  }

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name='description' content={site.siteMetadata.description} />
        {!site.siteMetadata.w3l_dom_key ? null : (
          <meta
            name='w3l-domain-verification'
            content={site.siteMetadata.w3l_dom_key}
          />
        )}
      </Helmet>
      <HeroHeader />
      <div className='filter'>
      <button className='all' onClick={filter}>
        All
      </button>
      {uniqueTags.map((tag, i) => {
        return <button key={i} className={tag} onClick={filter}>
          {tag}
        </button>

      })

      }
      </div>
      <h2>Posts &darr;</h2>
      <div className='grids'>{Posts}</div>
    </Layout>
  );
};

export default IndexPage;
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
        w3l_dom_key
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
            tags
          }
        }
      }
    }
  }
`;

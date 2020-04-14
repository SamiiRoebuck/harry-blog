import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Logo from '../../static/assets/logo.png';

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className='hero-header'>
        <div className='site-title'>
          <Link to='/'>
            <img src={Logo} alt='Harry York Design Logo' />
          </Link>
        </div>
        <div className='headline'>{data.site.siteMetadata.home.title}</div>
        <div className='primary-content'>
          <p>{data.site.siteMetadata.home.description}</p>
        </div>
      </div>
    )}
  />
);

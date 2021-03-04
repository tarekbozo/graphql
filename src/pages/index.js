import React, { useContext } from 'react';
import {
  Layout,
  SEO,
  HomePageCollectionsGrid,
  FeaturedProducts,
} from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const { collections } = useContext(ProductContext);
  console.log(collections);
  return (
    <Layout>
      <SEO description="The MadHatter store homepage" title="Homepage" />
      <HomePageCollectionsGrid
        collections={
          collections.filter(
            collection => collection.title !== 'Featured hats'
          ) || []
        }
      />
      {!!collections.find(
        collection => collection.title === 'Featured hats'
      ) && <FeaturedProducts />}
    </Layout>
  );
};

export default IndexPage;

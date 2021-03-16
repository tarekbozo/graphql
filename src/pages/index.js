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
  return (
    <Layout>
      <SEO description="Bouzo store homepage" title="Homepage" />
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

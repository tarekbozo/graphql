/* eslint-disable jsx-a11y/no-onchange */
import React, { useState, useContext, useEffect } from 'react';
import { graphql } from 'gatsby';
import { Layout, ImageGallery,ProductQantityAdder } from 'components';
import { Grid, SelectWrapper, Price } from './styles';
import CartContext from 'context/CartContext';
import {navigate,useLocation} from '@reach/router'
import  queryString  from 'query-string';

export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      shopifyId
      title
      description
      images {
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export default function ProductTemplate({ data }) {
  const { getProductById } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const {search,origin,pathname} = useLocation()
  const variantId = queryString.parse(search).variant


  useEffect(() => {
    (async () => {
      const result = await getProductById(data.shopifyProduct.shopifyId);
      setProduct(result);
      setSelectedVariant(result.variants.find(({id})=> id === variantId) || result.variants[0]);
    })();
  }, [getProductById, setProduct, data.shopifyProduct.shopifyId,variantId]);

  const handelVariantChange = e => {
    const newVariant = product?.variants.find(v => v.id === e.target.value);
    setSelectedVariant(newVariant);
    navigate(`${origin}${pathname}?variant=${encodeURIComponent(newVariant.id)}`,{
      replace:true
    })
  };

  return (
    <Layout>
      <Grid>
        <div>
          <h1>{data.shopifyProduct.title}</h1>
          <p>{data.shopifyProduct.description}</p>
          {product?.availableForSale && !!selectedVariant &&(
            <>
            {product?.variants.length > 1 && (
              <SelectWrapper>
                <strong>Variant</strong>
                <select value={selectedVariant.id} onChange={handelVariantChange}>
                  {product?.variants.map(v => (
                    <option key={v.id} value={v.id}>
                      {v.title}
                    </option>
                  ))}
                </select>
              </SelectWrapper>
              )}
              {!!selectedVariant && (
                <>
                <Price>
                  {selectedVariant?.priceV2.currencyCode}
                  {selectedVariant?.priceV2.amount}
                </Price>
                <ProductQantityAdder available={selectedVariant.available} variantId={selectedVariant.id}/>
                </>
              )}
            </>
          )}
        </div>
        <div>
          <ImageGallery selectedVariantImageId = {selectedVariant?.image.id}images={data.shopifyProduct.images} />
        </div>
      </Grid>
    </Layout>
  );
}

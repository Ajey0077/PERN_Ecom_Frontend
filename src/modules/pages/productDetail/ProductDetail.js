import React, { useEffect, useState } from 'react';
import { Box, Grid, Image, Heading, Text, Button } from '@chakra-ui/react';

import styles from './productDetail.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import PageNotFound from '../pageNotFound';
import { getSingleProduct } from '../../../utils/services/productService';
import { isEmpty } from '../../../utils/helpers/micro/helper';
import { ArrowBackIcon } from '@chakra-ui/icons';

function ProductDetail() {
  let navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSingleProduct(id);
        setProductData(data);
      } catch (error) {
        setError(error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const handlePrevImage = () => {
    setSelectedImageIndex(prevIndex =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex(prevIndex =>
      prevIndex < productData?.images?.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handleGoBack = () => {
    navigate('/');
  };

  const ProductDetailUi = () => {
    return (
      <>
        <Button
          leftIcon={<ArrowBackIcon />}
          onClick={handleGoBack}
          className={styles.backButton}
        >
          {'BAck'}
        </Button>
        <Box
          width="90%"
          margin="0 auto"
          paddingX="5%"
          className={styles.mainDiv}
        >
          <Grid templateColumns="80% 20%" gap={8}>
            {/* Left Side */}
            <Box>
              <Box
                height="65vh"
                marginBottom={4}
                className={styles.carouselContainer}
              >
                {/* Main Image */}
                <Image
                  src={productData?.images[selectedImageIndex]}
                  alt="Main Product"
                  objectFit="cover"
                  height="100%"
                  className={styles.mainImage}
                />
              </Box>

              {/* Additional Images Carousel */}
              <Box height="60%" overflowY="auto">
                <div className={styles.carouselButtons}>
                  <button
                    type="button"
                    className={`${styles.carouselButton} ${
                      selectedImageIndex === 0 && styles.disabled
                    }`}
                    onClick={handlePrevImage}
                    disabled={selectedImageIndex === 0}
                  >
                    {'<'}
                  </button>
                  <button
                    type="button"
                    className={`${styles.carouselButton} ${
                      selectedImageIndex === productData?.images?.length - 1 &&
                      styles.disabled
                    }`}
                    onClick={handleNextImage}
                    disabled={
                      selectedImageIndex === productData?.images?.length - 1
                    }
                  >
                    {'>'}
                  </button>
                </div>
                <div className={styles.tinyImages}>
                  {productData?.images?.map((image, index) => (
                    <div
                      key={`product Image ${index}`}
                      className={`${styles.tinyImage} ${
                        selectedImageIndex === index && styles.selected
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Image ${index}`}
                        className={styles.tinyImageImg}
                        onClick={() => setSelectedImageIndex(index)}
                      />
                    </div>
                  ))}
                </div>
              </Box>
            </Box>

            {/* Right Side */}
            <Box>
              <Heading as="h2" fontSize="xl" marginBottom={2}>
                {productData?.title}
              </Heading>
              <Text color="gray.500" marginBottom={2}>
                {productData?.category}
              </Text>
              <Text marginBottom={4}>{productData?.description}</Text>

              <Box display="flex" flexDirection="column" alignItems="center">
                <Text fontSize="lg" fontWeight="bold" marginBottom={2}>
                  ₹{productData?.price}
                </Text>
                <Button colorScheme="blue" marginBottom={2}>
                  Add to Cart
                </Button>
              </Box>
            </Box>
          </Grid>
        </Box>
      </>
    );
  };
  return (
    <>
      {error ? (
        <PageNotFound message={error.message} statusCode={error.statusCode} />
      ) : isEmpty(productData) ? (
        <PageNotFound />
      ) : (
        <ProductDetailUi />
      )}
    </>
  );
}

export default ProductDetail;

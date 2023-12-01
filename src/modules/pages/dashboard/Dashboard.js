import React, { useState, useEffect } from 'react';
import { getProducts } from './dashboardService';
import ProductGridList from '../../components/shared/organism/productGridList/ProductGridList';
import PaginationBar from '../../components/shared/molecule/PaginationBar/PaginationBar';

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPageCount, setTotalPageCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  console.log('dashboard');
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getProducts(currentPage);
        setProducts(data?.products);
        setTotalPageCount(data?.totalPages);
      } catch (err) {
        console.log('Error while Fetching Products: ', err);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = page => {
    if (page > 0) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <ProductGridList list={products} isLoading={isLoading} />
      <PaginationBar
        isLoading={isLoading}
        currentPage={currentPage}
        totalPages={totalPageCount}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default Dashboard;

import React, { useState, useEffect } from 'react';
import ProductGridList from '../../components/shared/organism/productGridList/ProductGridList';
import PaginationBar from '../../components/shared/molecule/PaginationBar/PaginationBar';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../../store/modules/dashboard/dashboardSlice';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, currentPage, totalPageCount, isLoading } = useSelector(
    state => {
      return state.dashboard;
    }
  );

  useEffect(() => {
    dispatch({
      type: 'dashboard/fetchProducts',
      payload: { page: currentPage },
    });
  }, [currentPage, dispatch]);

  const handlePageChange = page => {
    if (page > 0) {
      dispatch(setCurrentPage(page));
    }
  };

  const handleCardClick = id => {
    if (id) {
      navigate(`/product/${id}`, { replace: true });
    }
  };

  return (
    <>
      <ProductGridList
        list={products}
        isLoading={isLoading}
        handleCardClick={handleCardClick}
      />
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

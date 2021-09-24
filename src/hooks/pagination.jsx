import { useEffect, useState } from 'react';

export const pagination = (array, perPage = 10) => {
  if (!array?.length) throw new Error('Data is required');
  const [data] = useState(array);
  const [contents, setContents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(Math.ceil(data.length / perPage));
  
  const handleDecrement = () => {
    if (currentPage > 1) setCurrentPage((page) => page - 1);
  };
  
  const handleIncrement = () => {
    if (currentPage < totalPages) setCurrentPage((page) => page + 1);
  };
  
  useEffect(() => {
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = currentPage * perPage;
    setContents(data.slice(startIndex, endIndex));
  }, [currentPage]);
  
  return {
    contents,
    currentPage,
    totalPages,
    handleDecrement,
    handleIncrement,
  };
};

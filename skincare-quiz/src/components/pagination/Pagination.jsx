import './pagination.css';

const Pagination = ({
  productsPerPage,
  totalProducts,
  handlePagination,
  currentPage,
}) => {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts.length / productsPerPage); i++) {
    paginationNumbers.push(i);
  }

  return (
    <div className='pagination'>
      {paginationNumbers.map((pageNumber) => (
        <span
          onClick={() => handlePagination(pageNumber)}
          key={pageNumber}
          className={currentPage === pageNumber ? 'active dot' : 'dot'}
        ></span>
      ))}
    </div>
  );
};
export default Pagination;

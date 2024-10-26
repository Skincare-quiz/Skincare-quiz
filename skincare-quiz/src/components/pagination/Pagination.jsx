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
      {currentPage !== 1 && (
        <span
          className='paginate-btn'
          onClick={() => handlePagination(currentPage - 1)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='35'
            height='35'
            viewBox='0 0 16 16'
          >
            <path
              fill-rule='evenodd'
              d='M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5'
            />
          </svg>
        </span>
      )}

      {paginationNumbers.map((pageNumber) => (
        <span>
          <svg
            key={pageNumber}
            className={currentPage === pageNumber ? 'active dot' : 'dot'}
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
            viewBox='0 0 16 16'
          >
            <path d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3' />
          </svg>
        </span>
      ))}
      {currentPage !== paginationNumbers.length && (
        <span
          className='paginate-btn'
          onClick={() => handlePagination(currentPage + 1)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='35'
            height='35'
            viewBox='0 0 16 16'
          >
            <path
              fill-rule='evenodd'
              d='M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8'
            />
          </svg>
        </span>
      )}
    </div>
  );
};
export default Pagination;

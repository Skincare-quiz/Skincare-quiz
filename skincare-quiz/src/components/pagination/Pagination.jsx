import './pagination.css';

const Pagination = ({ productsPerPage, totalProducts, currentPage }) => {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts.length / productsPerPage); i++) {
    paginationNumbers.push(i);
  }

  return (
    <div className='pagination'>
      {paginationNumbers.map((pageNumber) => (
        <span key={pageNumber}>
          <svg
            className={currentPage === pageNumber ? 'active-dot dot' : 'dot'}
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
            viewBox='0 0 16 16'
          >
            <path d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3' />
          </svg>
        </span>
      ))}
    </div>
  );
};
export default Pagination;

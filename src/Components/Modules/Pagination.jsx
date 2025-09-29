import styles from "./Pagination.module.css";

function Pagination({ page, setPage }) {
  const totalPages = 10;

  const previousHandler = () => {
    if (page > 1) setPage(page - 1);
  };

  const nextHandler = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const renderPages = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      
      if (i === 1 || i === 2 || i === totalPages - 1 || i === totalPages || (i >= page - 1 && i <= page + 1)) {
        pages.push(
          <p
            key={i}
            className={page === i ? styles.selected : ""}
            onClick={() => setPage(i)}
          >
            {i}
          </p>
        );
      } else if (
        i === 3 && page > 4 || 
        i === totalPages - 2 && page < totalPages - 3 
      ) {
        pages.push(<span key={i}>...</span>);
      }
    }

    return pages;
  };

  return (
    <div className={styles.pagination}>
      <button
        onClick={previousHandler}
        className={page === 1 ? styles.disabled : ""}
      >
        Previous
      </button>
      {renderPages()}
      <button
        onClick={nextHandler}
        className={page === totalPages ? styles.disabled : ""}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;

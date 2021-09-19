import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {

  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalPosts / postsPerPage) + 1; i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(el => (
          <li key={el} className="page-item">
            <a onClick={() => paginate(el)} href='#' className="page-link">
              {el}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination

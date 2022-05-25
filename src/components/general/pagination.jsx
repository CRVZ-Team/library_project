import React from "react";


//default pagination component
//file can be copied and used for other projects
const Pagination = ({booksPerPage, totalBooks, paginate}) => {
    const pageNumbers = [];

    console.log(booksPerPage);
    console.log(totalBooks);
    for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} className="page-link" id="paginate_button" href="#">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;

// import React, { Component, useContext } from 'react';
import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

// Class component usando contextType.

// class BookList extends Component {
//   static contextType = ThemeContext;
//     render() { 
//       const { isLightTheme, light, dark } = this.context;
//       const theme = isLightTheme ? light : dark;
//     return (
//       <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
//         <ul>
//           <li style={{ background: theme.ui }}>The way of kings</li>
//           <li style={{ background: theme.ui }}>The name of the wind</li>
//           <li style={{ background: theme.ui }}>Anthem</li>
//         </ul>
//       </div>
//     );
//   }
// }

// export default BookList;

// Stateless function component utilizando useContexte

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
      <ul>
        {books.map(book => {
          return(
            <li key={book.id} style={{ background: theme.ui }}>{ book.title }</li>
          )
        })}
      </ul>
    </div>
  );
}
 
export default BookList;

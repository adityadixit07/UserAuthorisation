// import React, { useState } from 'react';

// function LinkFunc() {
//   const [links, setLinks] = useState([]);

//   function handleLinkSubmit(event) {
//     event.preventDefault();
//     const linkUrl = event.target.elements.linkInput.value;
//     const newLinks = [...links, linkUrl];
//     setLinks(newLinks);
//     event.target.reset();
//   }

//   return (
//     <div>
//       <form onSubmit={handleLinkSubmit}>
//         <label htmlFor="linkInput">Enter a link:</label>
//         <input type="text" id="linkInput" name="linkInput" />
//         <button type="submit">Save</button>
//       </form>
//       <ul>
//         {links.map(linkUrl => (
//           <li key={linkUrl}>
//             <a href={linkUrl} target="_blank" rel="noopener noreferrer">{linkUrl}</a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default LinkFunc;


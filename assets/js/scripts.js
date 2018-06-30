// Show/hide for mobile menu.
const menu = document.querySelector( '#menu-btn' );

if ( menu ) {
  menu.addEventListener( 'click', function() {
    document.querySelector( '#menu-main-nav' ).classList.toggle( 'show' );
  });
}

// Reverse numbering for book lists.
const bookList = document.querySelectorAll( '.books ol' );

if ( bookList ) {
  for ( let i=0; i<bookList.length; i++ ) {
    bookList[i].setAttribute( 'reversed', 'reversed' );
  }
}

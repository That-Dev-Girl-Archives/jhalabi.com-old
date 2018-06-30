// Show/hide for mobile menu.
const menu = document.querySelector( '#menu-btn' );

if ( menu ) {
  menu.addEventListener( 'click', function() {
    document.querySelector( '#menu-main-nav' ).classList.toggle( 'show' );
  });
}

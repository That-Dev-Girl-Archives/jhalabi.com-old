/**
 * Toggle the mobile menu.
 */
const menu = {
  opener: function() {
    $( '#menu-btn' ).click( () => {
      $( '#menu-main-nav' ).toggleClass( 'show' );
    });
  }
};

/**
 * Photo lightbox.
 */
const lightbox = {
  go: function() {
    this.block = $( '#photos-lightbox' );

    // Open click events.
    $( '.photos-brick' ).click(( e ) => { this.open( e ); });

    // Close click events.
    $( '#close-photos-lightbox' ).click(( e ) => { this.close(e); });

    $( document ).keydown( ( e ) => {
      if ( e.keyCode == 27 ) {
        this.close( e );
      }
    });
  },

  open: function( e ) {
    // Set up the image.
    $( 'img', this.block ).attr( 'src', e.target.src );

    // Set up the caption.
    $( 'figcaption', this.block ).html( e.target.title );

    this.block.show();
  },

  close: function( e ) {
    e.preventDefault();

    // Clear everything out.
    $( 'img', this.block ).attr( 'src', '' ).attr( 'alt', '' );
    $( 'figcaption', this.block ).html( '' );

    this.block.hide();
  }
};


$( document ).ready(() => {
  menu.opener();
  lightbox.go();
});

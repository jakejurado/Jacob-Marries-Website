$(document).ready(function(){
  $('ul').sortable();


  /*
   * Content-Type:text/javascript
   *
   * A bridge between iPad and iPhone touch events and jquery draggable,
   * sortable etc. mouse interactions.
   * @author Oleg Slobodskoi
   *
   * modified by John Hardy to use with any touch device
   * fixed breakage caused by jquery.ui so that mouseHandled internal flag is reset 
   * before each touchStart event
   *
   */
  (function( $ ) {

      $.support.touch = typeof Touch === 'object';

      if (!$.support.touch) {
          return;
      }

      var proto =  $.ui.mouse.prototype,
      _mouseInit = proto._mouseInit;

      $.extend( proto, {
          _mouseInit: function() {
              this.element
              .bind( "touchstart." + this.widgetName, $.proxy( this, "_touchStart" ) );
              _mouseInit.apply( this, arguments );
          },

          _touchStart: function( event ) {
              if ( event.originalEvent.targetTouches.length != 1 ) {
                  return false;
              }

              this.element
              .bind( "touchmove." + this.widgetName, $.proxy( this, "_touchMove" ) )
              .bind( "touchend." + this.widgetName, $.proxy( this, "_touchEnd" ) );

              this._modifyEvent( event );

              $( document ).trigger($.Event("mouseup")); //reset mouseHandled flag in ui.mouse
              this._mouseDown( event );

              return false;
          },

          _touchMove: function( event ) {
              this._modifyEvent( event );
              this._mouseMove( event );
          },

          _touchEnd: function( event ) {
              this.element
              .unbind( "touchmove." + this.widgetName )
              .unbind( "touchend." + this.widgetName );
              this._mouseUp( event );
          },

          _modifyEvent: function( event ) {
              event.which = 1;
              var target = event.originalEvent.targetTouches[0];
              event.pageX = target.clientX;
              event.pageY = target.clientY;
          }

      });

  })( jQuery );

//End of this code











(function($){
    $.fn.shuffle = function() {

        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
           });

        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });

        return $(shuffled);
    };
})(jQuery);





var SAVEforEND = function(){
  var x = ['zero', 'one', 'two', 'three', 'four', 'five','six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen'];
  var tally = [];

  var y = $('ul li:nth-child('+[climb]+')');
  var yID = y.prop('id');

  if(yID===x[climb]){
   y.hide();
  }
};



var endPart1 = function(){
  var x = ['zero', 'one', 'two', 'three', 'four', 'five','six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen'];

var z = function(numberr){
  var y = $('ul li:nth-child('+numberr+')');
  var yID = y.prop('id');
  return yID;
};


 if(z(1)===x[1] && z(2)===x[2] && z(3)===x[3] && z(4)===x[4] && z(5)===x[5] && z(6)===x[6] && z(7)===x[7] && z(8)===x[8] && z(9)===x[9] && z(10)===x[10] && z(11)===x[11] && z(12)===x[12] && z(13)===x[13] && z(14)===x[14] && z(15)===x[15] && z(16)===x[16]){
    $('ul').addClass('puzzleFinished').removeClass('puzzle');
    $('li').hide();
  }
};



var runEnd = function() {
$(document).click(function(){
  endPart1();
});
};

$('ul.puzzle li').shuffle();
runEnd();

});

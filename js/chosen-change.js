// window.addEventListener('load',function(){
// 	var checkbxsCheckmark = Array.prototype.slice.call( document.querySelectorAll( 'form.ac-checkmark input[type="checkbox"]' ) );
// 	 var hot=$.('#hot');
// });
$(function(){
	var checkbxsCheckmark = Array.prototype.slice.call( document.querySelectorAll( 'form.ac-checkmark input[type="checkbox"]' ) );
	// var hot=$.('#hot');

	checkbxsCheckmark.forEach( function( el, i ) {
		
		alert(i);

		isCheck(el,i);
		
	})

	function isCheck(el,i){
		el.addEventListener( 'change', function() {

			

				if( el.checked ) {
					swith(i)
					case 0:hot.updateSettings({
								rowHeaders: true,
							});
					case 1:hot.updateSettings({
								fixedRowsTop: 2,
			    				fixedColumnsLeft: 3		
					});
					case 2:hot.updateSettings({
								columnSorting: true,
							    sortIndicator: true,
							    autoColumnSize: {
							        samplingRatio: 23
							    }		
					});
				}
				else {
					swith(i)
					case 0:hot.updateSettings({
								rowHeaders: false,
							});
					case 1:hot.updateSettings({
								fixedRowsTop: 0,
			    				fixedColumnsLeft: 0		
					});
					case 2:hot.updateSettings({
								columnSorting: false,
							    sortIndicator: false,
							    autoColumnSize: {
							        samplingRatio: 23
							    }		
					});
				}
			} );
	}
});


	
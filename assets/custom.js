/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 */
function googleTranslateElementInit() {
  console.log('avyu');
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}     

$('document').ready(function(){
   var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var result = JSON.parse(this.responseText);
      var countrycode = result.countryCode;
      if(countrycode=='DE'){
      console.log('111')
      setTimeout(function(){
      	$('select.goog-te-combo').val('nl').trigger('change').attr('id','google_language');
        var element = document.getElementById('google_language');
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent("change", false, true);
        element.dispatchEvent(evt);
      },500)
      }
      
    }
  };
  xhttp.open("GET", "https://apps.dotmagicinfotech.com/geolocation/location.php", true);
  xhttp.send();
});

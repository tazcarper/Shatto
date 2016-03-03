<div class="footer container-fluid">
  <div class="container">
    <div class="row">
      <div class="col-md-3 hidden-sm hidden-xs">
        <a href="/">
          <?php get_template_part(THEME_PARTS.'footer-logo'); ?>
        </a>
      </div>
      <div class="col-md-2 col-md-offset-1 hidden-sm hidden-xs">
        <ul>
          <li><a href="products">Products</a>
            <ul>
              <li><a href="#">Milk</a></li>
              <li><a href="#">Flavored Milks</a></li>
              <li><a href="#">Cheeses</a></li>
              <li><a href="#">Butter</a></li>
              <li><a href="#">Ice Crean</a></li>
              <li><a href="#">Non-Dairy</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="col-md-2 hidden-sm hidden-xs">
        <ul>
          <li><a href="events-tours">Events/Tours</a>
            <ul>
              <li><a href="#">Photos</a></li>
            </ul>
          </li>
        </ul>
        <ul>
          <li><a href="locate">Store Locator</a></li>
        </ul>
        <ul>
          <li><a href="merchandise">Merchandise</a></li>
        </ul>
      </div>
      <div class="col-md-2 hidden-sm hidden-xs">
        <ul>
          <li><a href="about">About Shatto</a>
            <ul>
              <li><a href="faq">FAQs</a></li>
              <li><a href="history">History</a></li>
            </ul>
          </li>
        </ul>
        <ul>
          <li><a href="#">News</a></li>
        </ul>
        <ul>
          <li><a href="contact">Contact</a>
            <ul>
              <li><a href="#">Directions to the farm</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="col-md-2">
        <div class="icons">
        </div>
        <div class="address">
          <p class="hidden-sm hidden-xs">9406 N. HWY. 33 <br> Osborn, MO 64474 <br> 816-930-3862</p>
          <p class="hidden-md hidden-lg">9406 N. HWY. 33 &bull; Osborn, MO 64474 <br> 816-930-3862</p>
        </div>
        <div class="copy">
          <p>&copy; Shatto Milk Company</p>
        </div>
      </div>
    </div>
  </div>
</div>
<?php wp_footer(); ?>
<!--<script>
  (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
  function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
  e=o.createElement(i);r=o.getElementsByTagName(i)[0];
  e.src='//www.google-analytics.com/analytics.js';
  r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
  ga('create','UA-XXXXX-X');ga('send','pageview');
</script>-->
<script src="http://maps.google.com/maps/api/js?libraries=places,geometry"></script>
<script src="<?php echo get_template_directory_uri(); ?>/dist/scripts/plugins.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/dist/scripts/main.js"></script>

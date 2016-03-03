<?php get_header(); ?>

<section class="container-fluid mapContainer">
      <div id="jlocator">
        <div class="mapOverlay">
          <div data-type="panel">
            <div data-type="controls" class="controls">
              <div class="findInput">
                <input type="text" placeholder="City, State or ZIP" data-zoom="13" data-control-name="autocomplete" data-control-type="autocomplete" autocompelte="on" class="form-control">
              </div>
            </div>
            <div data-type="stores" class="stores">
              <div data-type="store" data-latitude="39.0936738" data-longitude="-94.589048" data-marker-icon="<?php echo get_template_directory_uri(); ?>/dist/images/map-icon.png" class="store">
                <p class="milk"><span data-type="title" class="title">Store 1<br/></span><span data-type="address" class="address">10 E 13th St, Kansas City, MO 64106<br/></span><span data-type="phone" class="phone">(816)595-0050     </span></p>
              </div>
            </div>
          </div>
        </div>
        <div data-type="map" class="map"></div>
      </div>
    </section>

<?php get_footer(); ?>
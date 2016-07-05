<?php get_header(); ?>

<section class="container-fluid mapContainer">
      <div id="jlocator">
      <div data-type="map" class="map"></div>
        <div class="mapOverlay">
          <div data-type="panel">
            <div data-type="controls" class="controls">
              <div class="findInput">
                <input type="text" placeholder="City, State or ZIP" data-zoom="13" data-control-name="autocomplete" data-control-type="autocomplete" autocompelte="on" class="form-control">
                <div class="btn invert search">
                <span class="hidden-xs">GO</span>
                <img src="<?php echo get_template_directory_uri(); ?>/dist/images/map-mobile-pin.png" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/map-mobile-pin.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/map-mobile-pin_2x.png" alt="Search Location" class="visible-xs">
                </div>
                <span class="geoCode">Or, you can just use my location. I'm not hiding.</span>
                <span class="resetGeo">Looks like you denied us using your location. <br/>You have to <a href="https://support.google.com/chrome/answer/142065?hl=en">reset it yourself</a>.</span>
              </div>
            </div>
            
            <?php // new query for all locations
            $args = array(
              'post_type'  => 'shatto-location',
              'nopaging' => true,
              'orderby' => 'postal',
              'order' => 'ASC'
            );

            $locations = new WP_Query( $args );
            if ( $locations->have_posts() ) : ?>

            <div data-type="stores" class="stores">

              <?php while ( $locations->have_posts() ) : $locations->the_post(); ?>

              <div data-type="store" data-latitude="<?php the_field('latitude'); ?>" data-longitude="<?php the_field('longitude'); ?>" data-marker-icon="<?php echo get_template_directory_uri(); ?>/dist/images/map-icon.png" class="store">
                <p class="milk"><span data-type="title" class="title"><?php the_title(); ?><br/></span><span data-type="address" class="address"><?php the_field('address_1'); ?>, <?php the_field('city'); ?>, <?php the_field('state'); ?> <?php the_field('postal'); ?><br/></span><span data-type="phone" class="phone"><?php the_field('phone'); ?>     </span></p>
              </div>
              <?php endwhile; ?>
            </div>
            <?php endif;?>
            <?php wp_reset_postdata(); ?>
          </div>
        </div>
        
      </div>
    </section>

<?php get_footer(); ?>
<?php get_header(); ?>

    <section class=" mainContent " style="overflow:hidden;">
    <div class="hero about container-fluid" data-parallax="true" data-speed="0.4">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1><?php the_field('hero_title'); ?></h1>
          </div>
        </div>
      </div>
      </div>
    </section>

    <section class="container-fluid shattoStory">
        <div class="row">
          <div class="col-md-8 col-md-offset-2 text-center">
            <?php the_field('intro_copy'); ?>
          </div>
        </div>
        <div class="row pods">
          <div class="col-lg-10 col-lg-offset-1">
          <div class="row">
          <div class="col-md-3">
          <div class="podImage"></div>
            <div class="headliner">
            <h4 class="center"><?php the_field('intro_column_1_title'); ?></h4>
            </div>
            <p class="center"><?php the_field('intro_column_1_copy'); ?></p>
          </div>
          <div class="col-md-3">
         <div class="podImage"></div>
         <div class="headliner">
            <h4 class="center"><?php the_field('intro_column_2_title'); ?></h4>
          </div>
            <p class="center"><?php the_field('intro_column_2_copy'); ?></p>
          </div>
          <div class="col-md-3">
         <div class="podImage"></div>
         <div class="headliner">
            <h4 class="center"><?php the_field('intro_column_3_title'); ?></h4>
          </div>
            <p class="center"><?php the_field('intro_column_3_copy'); ?></p>
          </div>
          <div class="col-md-3">
          <div class="podImage"></div>
          <div class="headliner">
            <h4 class="center "><?php the_field('intro_column_4_title'); ?></h4>
          </div>
            <p class="center"><?php the_field('intro_column_4_copy'); ?></p>
          </div>
          </div>
          <div class="row smallLegal">
            <div class="col-sm-12 text-center">
              <p>*No significant difference has been shown between milk derived from rbST-treated and non-rbST-treated cows.</p>
            </div>
          </div>
        </div>
        </div>
      

    </section>
    <section class="container-fluid scheduleTour viveVideo noPadding"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/tours-mobile.jpg" class="mobile visible-xs">
      <div class="container-fluid">
        <div class="row ">
          <div class="col-sm-7 col-sm-offset-5 col-md-5 col-md-offset-6">
            <?php the_field('tours_copy'); ?>
            <a href="/events-tours" class="btn invert center">Schedule a tour</a>
          </div>

      </div>
    </section>
    <section class="container-fluid findUs">
      <div class="container">
        <div class="row">
          <div class="col-sm-7 col-sm-push-5">
            <h2 class="visible-xs">We're only a stone's throw away.</h2>
            <h3 class="visible-xs">(Depending on how far you can throw a stone.)</h3><img src="<?php echo get_template_directory_uri(); ?>/dist/images/map.png">
          </div>
          <div class="col-sm-5 col-sm-pull-7 comeVisit">
            <h2 class="hidden-xs">Come Visit Us.</h2>
            <h3 class="hidden-xs">(And milk a cow and stuff.)</h3>
            <?php the_field('maps_copy'); ?>
            <a href="/locate" class="btn invert center">Find Shatto Near You</a>
          </div>
        </div>
      </div>
      </div>
    </section>
<?php get_template_part(THEME_PARTS.'footer-locate'); ?>
<?php get_footer(); ?>
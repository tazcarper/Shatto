<?php get_header(); ?>

    <section class="container-fluid mainContent belowNavigation news">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <?php
            if ( have_posts() ) :
              $i = 0;
              while ( have_posts() ) :
                the_post(); ?>

            <div class="row">
              <div class="col-md-12">
                <img src="//placehold.it/1920x800">
              </div>
              <div class="col-md-10 col-md-offset-1 overlapPhoto">
                <h6><?php the_time('M j, Y'); ?></h6>
                <h1><?php the_title(); ?></h1>
                social
                <hr>
                <?php the_content(); ?>
                <hr>
                Categories
                <hr>
              </div>
            </div>

            <div class="row">
              <div class="col-md-8 col-md-offset-2 center">
                <h4>Sign Up for News Alerts</h4>
                <form class="form-inline">
                  <input placeholder="Email Address" class="form-control"/>
                  <button class="form-control btn invert">Sign Up</button>
                </form>
              </div>
            </div>

              <?php endwhile;
            endif; ?>
          </div>
        </div>
      </div>
    </section>

<?php get_footer(); ?>
<?php get_footer(); ?>
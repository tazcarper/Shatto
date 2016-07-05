<?php get_header(); ?>

    <section class="container-fluid mainContent belowNavigation news">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2 center">
            <p class="largerCopy">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <form class="form-inline">
              <input placeholder="Email Address" class="form-control"/>
              <button class="form-control btn invert">Sign Up</button>
            </form>
          </div>
        </div>
        <div class="row">
          <div class="col-md-10 center center-block">
            <hr>
            <h4>Filter Posts <a class="btn center invert">All</a> <a class="btn center">At The Farm</a> <a class="btn center">Events</a> <a class="btn center">Products</a> <a class="btn center">Misc</a></h4>
            <hr>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <?php
            if ( have_posts() ) :
              $i = 0;
              while ( have_posts() ) :
                the_post();
                $i++; ?>
            <div class="row">
              <?php if ( $i === 1 || $i === 3 ) : ?>
              <div class="col-md-7">
                img
              </div>
              <div class="col-md-5">
                <hr>
                <h6><?php the_time('M j, Y'); ?></h6>
                <h1><?php the_title(); ?></h1>
                <p><?php echo get_the_excerpt(); ?></p>
                <hr>
              </div>
              <?php elseif ( $i === 2 ) : ?>
              <div class="col-md-7">
                img
              </div>
              <div class="col-md-5">
                <hr>
                <h6><?php the_time('M j, Y'); ?></h6>
                <h1><?php the_title(); ?></h1>
                <p><?php echo get_the_excerpt(); ?></p>
                <hr>
              </div>
              <?php else : ?>

              <?php endif; ?>
            </div>
              <?php endwhile;
            endif;
            ?>
          </div>
        </div>
      </div>
    </section>

<?php get_footer(); ?>
<?php get_footer(); ?>
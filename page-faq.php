<?php get_header(); ?>

    <section class="container-fluid mainContent hero faq">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1>Frequently Asked Questions</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-7">
          <?php // new query for all locations
          $args = array(
            'post_type'  => 'faqs',
            'nopaging' => true,
            'meta_key' => 'weight',
            'orderby' => 'meta_value_num',
            'order' => 'ASC'
          );

          $locations = new WP_Query( $args );
          if ( $locations->have_posts() ) : ?>

            <?php while ( $locations->have_posts() ) : $locations->the_post(); ?>

            <div class="faqContainer">
              <p class="question"><?php the_title(); ?></p>
              <div class="answer"><?php the_content(); ?></div>
            </div>

            <?php endwhile; ?>
          <?php endif;?>
          <?php wp_reset_postdata(); ?>
          </div>
        </div>
      </div>
    </section>

<?php get_footer(); ?>
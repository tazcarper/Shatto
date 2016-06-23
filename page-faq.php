<?php get_header(); ?>
<section class="container-fluid mainContent hero faq">
  <div class="container noPaddingMobile">
    <div class="row">
      <div class="col-md-12">
        <h1>Frequently Asked Questions</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-7 noPaddingMobile faqSlot">
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
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 25.09 47.38" style="enable-background:new 0 0 25.09 47.38;" xml:space="preserve">
            <style type="text/css">
            .Drop_x0020_Shadow{fill:none;}
            .Round_x0020_Corners_x0020_2_x0020_pt{fill:#FFFFFF;stroke:#000000;stroke-miterlimit:10;}
            .Live_x0020_Reflect_x0020_X{fill:none;}
            .Bevel_x0020_Soft{fill:url(#SVGID_1_);}
            .Dusk{fill:#FFFFFF;}
            .Foliage_GS{fill:#FFDD00;}
            .Pompadour_GS{fill-rule:evenodd;clip-rule:evenodd;fill:#44ADE2;}
            </style>
            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-205.9091" y1="-185.1583" x2="-205.202" y2="-184.4512">
              <stop  offset="0" style="stop-color:#DEDFE3"/>
              <stop  offset="0.1738" style="stop-color:#D8D9DD"/>
              <stop  offset="0.352" style="stop-color:#C9CACD"/>
              <stop  offset="0.5323" style="stop-color:#B4B5B8"/>
              <stop  offset="0.7139" style="stop-color:#989A9C"/>
              <stop  offset="0.8949" style="stop-color:#797C7E"/>
              <stop  offset="1" style="stop-color:#656B6C"/>
            </linearGradient>
            <rect x="-4.19" y="11.54" transform="matrix(0.7071 0.7071 -0.7071 0.7071 12.5455 -5.1965)" width="33.48" height="2.01"/>
            <rect x="-4.19" y="33.83" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -20.9586 19.0743)" width="33.48" height="2.01"/>
          </svg>
        </div>
        <?php endwhile; ?>
        <?php endif;?>
        <?php wp_reset_postdata(); ?>
      </div>
    </div>
  </div>
</section>
<?php get_footer(); ?>
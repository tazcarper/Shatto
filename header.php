<html class="no-js">
  <head>
    <meta charset="utf-8"/>
    <title><?php wp_title(); ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <!-- Place favicon.ico and apple-touch-icon.png in the root directory-->
    <?php wp_head(); ?>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/dist/styles/main.css"/>
    <script src="<?php echo get_template_directory_uri(); ?>/dist/scripts/vendor/modernizr.js"></script>
    <script>
      (function(d) {
      var config = {
      kitId: 'eci1rtm',
      scriptTimeout: 3000,
      async: true
      },
      h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
      })(document);
    </script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script>var stylesheet_directory_uri = "<?php echo get_template_directory_uri(); ?>"; $(window).load(function(){$('#status').fadeOut();$('#preloader').delay(350).fadeOut(150);$('body').delay(350);$('body').fadeIn(1000);});</script>
  </head>
  <body>
    <div id="preloader">
      <div id="status"></div>
    </div>
    <header class="container-fluid">
      <div class="container-fluid headerContainer">
        <div class="row">
          <div class="headerMain">
            <a href="/">
              <?php get_template_part(THEME_PARTS.'header-logo'); ?>
            </a>
          </div>
          <?php get_template_part(THEME_PARTS.'navigation'); ?>
        </div>
      </div>
    </header>
  </body>
  <main>
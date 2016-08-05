<?php
/*
 *  Author: shs
 *  Functions file for shatto theme
 */

show_admin_bar(false);

if (!isset($content_width))
{
  $content_width = 1280;
}

define(THEME_PARTS,'template_parts/');

if (function_exists('add_theme_support'))
{
  // Add Menu Support
  add_theme_support('menus');
}

function shatto_nav()
{
  wp_nav_menu(
  array(
    'theme_location'  => 'header-menu',
    'menu'            => '',
    'container'       => 'nav',
    'container_class' => '',
    'container_id'    => '',
    'menu_class'      => 'menu',
    'menu_id'         => '',
    'echo'            => true,
    'fallback_cb'     => 'wp_page_menu',
    'before'          => '',
    'after'           => '',
    'link_before'     => '<span data-hover="%s">',
    'link_after'      => '</span>',
    'items_wrap'      => '<ul class="cd-primary-nav">%3$s</ul>',
    'depth'           => 0,
    'walker'          => new Shatto_Walker_Menu()
    )
  );
}

add_filter( 'wp_nav_menu_items', 'add_social_to_nav', 10, 2 );

function add_social_to_nav( $items, $args )
{
  ob_start();
  include THEME_PARTS.'socialNav.php';
  $items .= ob_get_clean();;
  return $items;
}

function shatto_styles()
{
    // wp_register_style('normalize', get_template_directory_uri() . '/normalize.css', array(), '1.0', 'all');
    // wp_enqueue_style('normalize'); // Enqueue it!

    wp_register_style('shatto', get_template_directory_uri() . '/style.css', array(), '1.0', 'all');
    wp_enqueue_style('shatto'); // Enqueue it!
}

// Register shatto Blank Navigation
function register_shatto_menu()
{
  register_nav_menus(array( // Using array to specify more menus if needed
    'header-menu' => __('Header Menu', 'shatto'), // Main Navigation
    'sidebar-menu' => __('Mobile Menu', 'shatto'), // Mobile Navigation
    'extra-menu' => __('Footer Menu', 'shatto') // Footer Navigation
  ));
}

// Add page slug to body class, love this - Credit: Starkers Wordpress Theme
function add_slug_to_body_class($classes)
{
  global $post;
  if (is_home()) {
    $key = array_search('blog', $classes);
    if ($key > -1) {
      unset($classes[$key]);
    }
  } elseif (is_page()) {
    $classes[] = sanitize_html_class($post->post_name);
  } elseif (is_singular()) {
    $classes[] = sanitize_html_class($post->post_name);
  }

  return $classes;
}

// If Dynamic Sidebar Exists
if (function_exists('register_sidebar'))
{
  // Define Sidebar Widget Area 1
  register_sidebar(array(
    'name' => __('Widgets', 'shatto'),
    'description' => __('TODO', 'shatto'),
    'id' => 'widget-area-1',
    'before_widget' => '<div id="%1$s" class="%2$s">',
    'after_widget' => '</div>',
    'before_title' => '<h3>',
    'after_title' => '</h3>'
  ));
}

function shatto_pagination()
{
  global $wp_query;
  $big = 999999999;
  echo paginate_links(array(
    'base' => str_replace($big, '%#%', get_pagenum_link($big)),
    'format' => '?paged=%#%',
    'current' => max(1, get_query_var('paged')),
    'total' => $wp_query->max_num_pages
  ));
}

add_action('wp_enqueue_scripts', 'shatto_styles'); // Add Theme Stylesheet
add_action('init', 'register_shatto_menu'); // Add shatto Blank Menu
add_action('init', 'create_post_type_product'); // Add our Product Custom Post Type
add_action('init', 'create_post_type_location'); // Add our Location Custom Post Type
add_action('init', 'create_post_type_faq'); // Add our FAQ Custom Post Type
add_action('init', 'create_faq_taxonomies', 0 ); // Add categories for FAQs
add_action('init', 'shatto_pagination'); // Add our shatto Pagination
remove_action('wp_head', 'wp_generator'); // Display the XHTML generator that is generated on the wp_head hook, WP version

// Create Product Custom Post type
function create_post_type_product()
{
  register_taxonomy_for_object_type('category', 'shatto-product'); // Register Taxonomies for Category
  register_taxonomy_for_object_type('post_tag', 'shatto-product');
  register_post_type('shatto-product', // Register Custom Post Type
    array(
    'labels' => array(
      'name' => __('Products', 'shatto'), // Rename these to suit
      'singular_name' => __('Product', 'shatto'),
      'add_new' => __('Add New', 'shatto'),
      'add_new_item' => __('Add New Product', 'shatto'),
      'edit' => __('Edit', 'shatto'),
      'edit_item' => __('Edit Product', 'shatto'),
      'new_item' => __('New Product', 'shatto'),
      'view' => __('View Product', 'shatto'),
      'view_item' => __('View Product', 'shatto'),
      'search_items' => __('Search Products', 'shatto'),
      'not_found' => __('No Products found', 'shatto'),
      'not_found_in_trash' => __('No Products found in Trash', 'shatto')
    ),
    'public' => true,
    'hierarchical' => true, // Allows your posts to behave like Hierarchy Pages
    'has_archive' => true,
    'supports' => array(
      'title',
      'editor',
      'excerpt',
      'thumbnail'
    ), // Go to Dashboard Custom shatto Blank post for supports
    'can_export' => true, // Allows export in Tools > Export
    'taxonomies' => array(
      'post_tag',
      'category'
    ) // Add Category and Post Tags support
  ));
}

// Create Location Custom Post type
function create_post_type_location()
{
  register_taxonomy_for_object_type('category', 'shatto-location'); // Register Taxonomies for Category
  register_taxonomy_for_object_type('post_tag', 'shatto-location');
  register_post_type('shatto-location', // Register Custom Post Type
    array(
    'labels' => array(
      'name' => __('Locations', 'shatto'), // Rename these to suit
      'singular_name' => __('Location', 'shatto'),
      'add_new' => __('Add New', 'shatto'),
      'add_new_item' => __('Add New Location', 'shatto'),
      'edit' => __('Edit', 'shatto'),
      'edit_item' => __('Edit Location', 'shatto'),
      'new_item' => __('New Location', 'shatto'),
      'view' => __('View Location', 'shatto'),
      'view_item' => __('View Location', 'shatto'),
      'search_items' => __('Search Locations', 'shatto'),
      'not_found' => __('No Locations found', 'shatto'),
      'not_found_in_trash' => __('No Locations found in Trash', 'shatto')
    ),
    'public' => true,
    'hierarchical' => true, // Allows your posts to behave like Hierarchy Pages
    'has_archive' => true,
    'supports' => array(
      'title',
      'editor',
      'excerpt',
      'thumbnail'
    ), // Go to Dashboard Custom shatto Blank post for supports
    'can_export' => true, // Allows export in Tools > Export
  ));
}

// Create faq Custom Post type
function create_post_type_faq()
{
    register_post_type('faqs', // Register Custom Post Type
        array(
        'labels' => array(
            'name' => __('FAQs', 'shatto'), // Rename these to suit
            'singular_name' => __('FAQ', 'shatto'),
            'add_new' => __('Add New', 'shatto'),
            'add_new_item' => __('Add New FAQ', 'shatto'),
            'edit' => __('Edit', 'shatto'),
            'edit_item' => __('Edit FAQ', 'shatto'),
            'new_item' => __('New FAQ', 'shatto'),
            'view' => __('View FAQ', 'shatto'),
            'view_item' => __('View FAQ', 'shatto'),
            'search_items' => __('Search FAQs', 'shatto'),
            'not_found' => __('No FAQs found', 'shatto'),
            'not_found_in_trash' => __('No FAQs found in Trash', 'shatto')
        ),
        'public' => true,
        'capability_type' => 'post',
        'hierarchical' => true, // Allows your posts to behave like Hierarchy Pages
        'has_archive' => false,
        'supports' => array(
            'title',
            'editor',
            'excerpt',
            'thumbnail',
            'revisions'
        ),
        'can_export' => true // Allows export in Tools > Export
    ));
}

function create_faq_taxonomies()
{
    register_taxonomy( 'faqs_categories',
        array( 'faqs' ),
        array(
            'hierarchical'      => true, // Set this to 'false' for non-hierarchical taxonomy (like tags)
            'labels'            => array(
                'name'              => _x( 'FAQ Categories', 'taxonomy general name' ),
                'singular_name'     => _x( 'FAQ Category', 'taxonomy singular name' ),
                'search_items'      => __( 'Search FAQ Categories' ),
                'all_items'         => __( 'All FAQ Categories' ),
                'parent_item'       => __( 'Parent FAQ Category' ),
                'parent_item_colon' => __( 'Parent FAQ Category:' ),
                'edit_item'         => __( 'Edit FAQ Category' ),
                'update_item'       => __( 'Update FAQ Category' ),
                'add_new_item'      => __( 'Add New FAQ Category' ),
                'new_item_name'     => __( 'New FAQ Category Name' ),
                'menu_name'         => __( 'Categories' ),
            ),
            'show_ui'           => true,
            'show_admin_column' => true,
            'query_var'         => true,
            'rewrite'           => array( 'slug' => 'faqs_categories' )
        )
    );
}

// override min-height from ACF
add_action('admin_head', 'my_custom_fonts');

function my_custom_fonts() {
  echo '<style>
    textarea {
      min-height: auto !important;
    }
  </style>';
}


/**
 * Create a nav walker
 */
class Shatto_Walker_Menu extends Walker_Nav_Menu
{
  /**
   * Start the element output.
   *
   * @see Walker::start_el()
   *
   * @since 3.0.0
   * @since 4.4.0 'nav_menu_item_args' filter was added.
   *
   * @param string $output Passed by reference. Used to append additional content.
   * @param object $item   Menu item data object.
   * @param int    $depth  Depth of menu item. Used for padding.
   * @param array  $args   An array of arguments. @see wp_nav_menu()
   * @param int    $id     Current item ID.
   */
  public function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
    $indent = ( $depth ) ? str_repeat( "\t", $depth ) : '';

    $classes = empty( $item->classes ) ? array() : (array) $item->classes;
    $classes[] = 'menu-item-' . $item->ID;


    /**
     * Filter the arguments for a single nav menu item.
     *
     * @since 4.4.0
     *
     * @param array  $args  An array of arguments.
     * @param object $item  Menu item data object.
     * @param int    $depth Depth of menu item. Used for padding.
     */
    $args = apply_filters( 'nav_menu_item_args', $args, $item, $depth );

    /**
     * Filter the CSS class(es) applied to a menu item's list item element.
     *
     * @since 3.0.0
     * @since 4.1.0 The `$depth` parameter was added.
     *
     * @param array  $classes The CSS classes that are applied to the menu item's `<li>` element.
     * @param object $item    The current menu item.
     * @param array  $args    An array of {@see wp_nav_menu()} arguments.
     * @param int    $depth   Depth of menu item. Used for padding.
     */
    $class_names = join( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item, $args, $depth ) );
    $class_names = $class_names ? ' class="' . esc_attr( $class_names ) . '"' : '';

    /**
     * Filter the ID applied to a menu item's list item element.
     *
     * @since 3.0.1
     * @since 4.1.0 The `$depth` parameter was added.
     *
     * @param string $menu_id The ID that is applied to the menu item's `<li>` element.
     * @param object $item    The current menu item.
     * @param array  $args    An array of {@see wp_nav_menu()} arguments.
     * @param int    $depth   Depth of menu item. Used for padding.
     */
    $id = apply_filters( 'nav_menu_item_id', 'menu-item-'. $item->ID, $item, $args, $depth );
    $id = $id ? ' id="' . esc_attr( $id ) . '"' : '';

    $output .= $indent . '<li' . $id . $class_names .'>';

    $atts = array();
    $atts['title']  = ! empty( $item->attr_title ) ? $item->attr_title : '';
    $atts['target'] = ! empty( $item->target )     ? $item->target     : '';
    $atts['rel']    = ! empty( $item->xfn )        ? $item->xfn        : '';
    $atts['href']   = ! empty( $item->url )        ? $item->url        : '';
    $atts['class']  = 'textSlide';

    /**
     * Filter the HTML attributes applied to a menu item's anchor element.
     *
     * @since 3.6.0
     * @since 4.1.0 The `$depth` parameter was added.
     *
     * @param array $atts {
     *     The HTML attributes applied to the menu item's `<a>` element, empty strings are ignored.
     *
     *     @type string $title  Title attribute.
     *     @type string $target Target attribute.
     *     @type string $rel    The rel attribute.
     *     @type string $href   The href attribute.
     * }
     * @param object $item  The current menu item.
     * @param array  $args  An array of {@see wp_nav_menu()} arguments.
     * @param int    $depth Depth of menu item. Used for padding.
     */
    $atts = apply_filters( 'nav_menu_link_attributes', $atts, $item, $args, $depth );

    $attributes = '';
    foreach ( $atts as $attr => $value ) {
      if ( ! empty( $value ) ) {
        $value = ( 'href' === $attr ) ? esc_url( $value ) : esc_attr( $value );
        $attributes .= ' ' . $attr . '="' . $value . '"';
      }
    }

    /** This filter is documented in wp-includes/post-template.php */
    $title = apply_filters( 'the_title', $item->title, $item->ID );

    /**
     * Filter a menu item's title.
     *
     * @since 4.4.0
     *
     * @param string $title The menu item's title.
     * @param object $item  The current menu item.
     * @param array  $args  An array of {@see wp_nav_menu()} arguments.
     * @param int    $depth Depth of menu item. Used for padding.
     */
    $title = apply_filters( 'nav_menu_item_title', $title, $item, $args, $depth );

    $link_before = $args->link_before;
    $link_before = sprintf( $link_before, $title );

    $item_output = $args->before;
    $item_output .= '<a'. $attributes .'>';
    $item_output .= $link_before . "$title" . $args->link_after;
    $item_output .= '</a>';
    $item_output .= $args->after;

    /**
     * Filter a menu item's starting output.
     *
     * The menu item's starting output only includes `$args->before`, the opening `<a>`,
     * the menu item's title, the closing `</a>`, and `$args->after`. Currently, there is
     * no filter for modifying the opening and closing `<li>` for a menu item.
     *
     * @since 3.0.0
     *
     * @param string $item_output The menu item's starting HTML output.
     * @param object $item        Menu item data object.
     * @param int    $depth       Depth of menu item. Used for padding.
     * @param array  $args        An array of {@see wp_nav_menu()} arguments.
     */
    $output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );
  }

  /**
   * @see Walker::start_lvl()
   *
   * @param string $output Passed by reference. Used to append additional content.
   * @return void
   */
  public function start_lvl( &$output )
  {
    $output .= '<ul class="sub-menu">';
  }
}

add_action( 'gform_after_submission_3', 'post_to_third_party', 10, 2 );
function post_to_third_party( $entry, $form ) {
  $emailHash = md5(strtolower(rgar( $entry, '1' )));
  $post_url = 'https://us13.api.mailchimp.com/3.0/lists/fbf532618c/members/' . $emailHash;

  $headers = array(
    'Authorization' => 'Basic ' . base64_encode( "anystring:9f68c72095b397f02ea2144692cb435b-us13" ),
  );
  $body = array(
    'email_address' => rgar( $entry, '1' ),
    'status_if_new' => 'subscribed'
  );
  $data = array(
    'headers' => $headers,
    'method' => 'PUT',
    'body' => json_encode($body)
  );
  GFCommon::log_debug( 'gform_after_submission: body => ' . print_r( $data, true ) );

  $request = new WP_Http();
  $response = $request->request( $post_url, $data );
  GFCommon::log_debug( 'gform_after_submission: response => ' . print_r( $response, true ) );
}
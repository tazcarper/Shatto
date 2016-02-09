<?php
/*
 *  Author: SHS
 *  Functions file for shatto theme
 */

if (!isset($content_width))
{
  $content_width = 1280;
}

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
    'container'       => 'div',
    'container_class' => 'menu-{menu slug}-container',
    'container_id'    => '',
    'menu_class'      => 'menu',
    'menu_id'         => '',
    'echo'            => true,
    'fallback_cb'     => 'wp_page_menu',
    'before'          => '',
    'after'           => '',
    'link_before'     => '',
    'link_after'      => '',
    'items_wrap'      => '<ul>%3$s</ul>',
    'depth'           => 0,
    'walker'          => ''
    )
  );
}

function shatto_styles()
{
    // wp_register_style('normalize', get_template_directory_uri() . '/normalize.css', array(), '1.0', 'all');
    // wp_enqueue_style('normalize'); // Enqueue it!

    wp_register_style('shatto', get_template_directory_uri() . '/style.css', array(), '1.0', 'all');
    wp_enqueue_style('shatto'); // Enqueue it!
}

// Register HTML5 Blank Navigation
function register_html5_menu()
{
    register_nav_menus(array( // Using array to specify more menus if needed
        'header-menu' => __('Header Menu', 'shatto'), // Main Navigation
        'sidebar-menu' => __('Sidebar Menu', 'shatto'), // Sidebar Navigation
        'extra-menu' => __('Extra Menu', 'shatto') // Extra Navigation if needed (duplicate as many as you need!)
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
        'name' => __('Widget Area 1', 'shatto'),
        'description' => __('Description for this widget-area...', 'shatto'),
        'id' => 'widget-area-1',
        'before_widget' => '<div id="%1$s" class="%2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3>',
        'after_title' => '</h3>'
    ));

    // Define Sidebar Widget Area 2
    register_sidebar(array(
        'name' => __('Widget Area 2', 'shatto'),
        'description' => __('Description for this widget-area...', 'shatto'),
        'id' => 'widget-area-2',
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
add_action('init', 'register_html5_menu'); // Add HTML5 Blank Menu
add_action('init', 'create_post_type_client'); // Add our Client Custom Post Type
add_action('init', 'html5wp_pagination'); // Add our HTML5 Pagination
remove_action('wp_head', 'wp_generator'); // Display the XHTML generator that is generated on the wp_head hook, WP version

// Create Client Custom Post type
function create_post_type_client()
{
    register_taxonomy_for_object_type('category', 'shs-client'); // Register Taxonomies for Category
    register_taxonomy_for_object_type('post_tag', 'shs-client');
    register_post_type('shs-client', // Register Custom Post Type
        array(
        'labels' => array(
            'name' => __('Clients', 'shatto'), // Rename these to suit
            'singular_name' => __('Client', 'shatto'),
            'add_new' => __('Add New', 'shatto'),
            'add_new_item' => __('Add New Client', 'shatto'),
            'edit' => __('Edit', 'shatto'),
            'edit_item' => __('Edit Client', 'shatto'),
            'new_item' => __('New Client', 'shatto'),
            'view' => __('View Client', 'shatto'),
            'view_item' => __('View Client', 'shatto'),
            'search_items' => __('Search Clients', 'shatto'),
            'not_found' => __('No Clients found', 'shatto'),
            'not_found_in_trash' => __('No Clients found in Trash', 'shatto')
        ),
        'public' => true,
        'hierarchical' => true, // Allows your posts to behave like Hierarchy Pages
        'has_archive' => true,
        'supports' => array(
            'title',
            'editor',
            'excerpt',
            'thumbnail'
        ), // Go to Dashboard Custom HTML5 Blank post for supports
        'can_export' => true, // Allows export in Tools > Export
        'taxonomies' => array(
            'post_tag',
            'category'
        ), // Add Category and Post Tags support
        'revisions' => true,
        'page-attributes' => true
    ));
}

?>
<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://www.artargus.in.ua/insurancePlugin
 * @since      1.0.0
 *
 * @package    Mtpl_Insurance
 * @subpackage Mtpl_Insurance/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Mtpl_Insurance
 * @subpackage Mtpl_Insurance/public
 * @author     Yaroslaw Livchak <sljar147@gmail.com>
 */
class MTPLIC_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;
		
		include_once plugin_dir_path( __FILE__ ) .  'mtbl-insurance-shortcode.php';
	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function MTPLIC_enqueue_styles() {

		wp_enqueue_style( $this->plugin_name.'-css', plugin_dir_url( __FILE__ ) . 'css/sljar_mtpl_public_css.css', array(), $this->version, 'all' );

		wp_enqueue_style( $this->plugin_name.'-media', plugin_dir_url( __FILE__ ) . 'css/sljar_mtpl_media.css', array($this->plugin_name.'-css'), $this->version, 'all' );
	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function MTPLIC_enqueue_scripts() {

		wp_enqueue_script( $this->plugin_name.'-vue', plugin_dir_url( __FILE__ ) . 'js/vue.min.js', array( 'jquery' ), $this->version, true );

		wp_enqueue_script( $this->plugin_name.'-js', plugin_dir_url( __FILE__ ) . 'js/sljar_mtpl_public_js.js', array( $this->plugin_name.'-vue' ), $this->version, true );
	}
}
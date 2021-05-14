# name: Toolbar Code Fences Buttons (cfbtn)
# about: Add additional buttons for language-specific code fences to the composer toolbar
#        https://meta.discourse.org/t/syntax-highlighting-of-code-blocks
# version: 0.7.0
# authors: Thomas Dietrich
# url: https://github.com/ThomDietrich/discourse-plugin-code-fences-buttons

enabled_site_setting :cfbtn_enabled

register_svg_icon "far-file-text" if respond_to?(:register_svg_icon)
register_svg_icon "far-file-code" if respond_to?(:register_svg_icon)
register_svg_icon "far-file-image" if respond_to?(:register_svg_icon)

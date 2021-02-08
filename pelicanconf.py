#!/usr/bin/env python
# -*- coding: utf-8 -*- #

AUTHOR = 'Jen Sparks'
SITENAME = 'Jen Sparks'
SITEURL = 'https://jenrsparks.github.io'

# Flex theme specific settings
SITETITLE = 'j/s'
SITESUBTITLE = 'A personal playground'
BROWSER_COLOR = '#666666'
COPYRIGHT_NAME = 'Jen Sparks'
COPYRIGHT_YEAR = '2021'

DISPLAY_CATEGORIES_ON_MENU = True
USE_FOLDER_AS_CATEGORY = False

PATH = 'content'
STATIC_PATHS = ['articles/images',]
PAGE_PATHS = ['pages']
ARTICLE_PATHS = ['articles']

TIMEZONE = 'US/Central'
DEFAULT_LANG = 'en'

THEME = 'theme/Flex'
THEME_COLOR = 'rust'
THEME_COLOR_AUTO_DETECT_BROWSER_PREFERENCE = False

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (
            ('Github', 'https://github.com/jenrsparks/'),
        )

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 5

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

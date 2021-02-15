#!/usr/bin/env python
# -*- coding: utf-8 -*- #

AUTHOR = 'Jen Sparks'
SITENAME = 'Jen Sparks'
SITEURL = 'https://jenrsparks.github.io'
SITESUBTITLE = 'A personal playground'

TIMEZONE = 'US/Central'
DEFAULT_LANG = 'en'
DEFAULT_DATE_FORMAT = '%b %d, %Y'
DATE_FORMATS = {
    'en': '%b %d, %Y',
}

PATH = 'content'
STATIC_PATHS = [
    'articles/images',
    ]
PAGE_PATHS = ['pages']
ARTICLE_PATHS = ['articles']

THEME = 'theme/spark-material'

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

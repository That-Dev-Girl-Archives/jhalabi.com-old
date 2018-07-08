---
layout: page
title: Travel
id: photos-album

galleries:
  - { dir: '2018-04--new-york-city/', title: 'Apr 2018: New York City', thumb: 'IMG_0026.jpg', qty: '27' }
  - { dir: '2017-03--california/', title: 'Mar 2017: California', thumb: '042-Napa.JPG', qty: '66' }
  - { dir: '2016-09--minnesota/', title: 'Sep 2016: Minnesota', thumb: 'IMG_0035.JPG', qty: '23' }
  - { dir: '2015-09--road-trip/', title: 'Sep 2015: Road Trip', thumb: '258-Yellowstone.JPG', qty: '384' }
  - { dir: '2014-09--virginia-beach/', title: 'Sep 2014: Virginia Beach', thumb: 'IMG_0013.JPG', qty: '21' }
  - { dir: '2014-09--montana/', title: 'Sep 2014: Montana', thumb: '159-Friday-Glacier-bus-tour.JPG', qty: '233' }
  - { dir: '2013-09--italy/', title: 'Sep 2013: Italy', thumb: '1087-thursday-frascati-wine-tour.jpg', qty: '831' }
  - { dir: '2012-09--chicago/', title: 'Sep 2012: Chicago', thumb: 'IMG_0015.JPG', qty: '41' }
  - { dir: '2012-07--switzerland/', title: 'Jul 2012: Switzerland', thumb: '0662-July-5-Kleine-Schidegg.JPG', qty: '493' }
---

# Travel

{% for gallery in page.galleries %}
  * [![{{ gallery.title }}]({{ gallery.dir }}photos/{{ gallery.thumb}}) {{ gallery.title }}]({{ gallery.dir }}) **{{ gallery.qty }}** Photos
{% endfor %}

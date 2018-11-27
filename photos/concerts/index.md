---
layout: page
title: Concerts
id: photos-album

galleries:
  - { dir: '2018-01--efo-birchmere/', title: 'January 2018: Eddie From Ohio at the Birchmere', thumb: '02-Saturday-07.jpg', qty: '29' }
  - { dir: '2018-01--dan-and-mike-concerts/', title: 'January 2018: Dan Navarro and Michael Clem Concerts', thumb: 'IMG_0013.jpg', qty: '12' }
  - { dir: '2017-01--michael-clem-birthday-show/', title: 'January 2017: Michael Clem Birthday Show', thumb: 'IMG_0030.JPG', qty: '15' }
  - { dir: '2017-01--efo-birchmere/', title: 'January 2017: Eddie From Ohio at the Birchmere', thumb: 'Saturday_0023.JPG', qty: '32' }
  - { dir: '2016-12--boston-nye/', title: 'December 2016: New Year''s Eve in Boston', thumb: 'IMG_0052.JPG', qty: '27' }
  - { dir: '2016-01--efo-birchmere/', title: 'January 2016: Eddie From Ohio at the Birchmere', thumb: '003-EFO-Friday.JPG', qty: '49' }
  - { dir: '2015-01--efo-birchmere/', title: 'January 2015: Eddie From Ohio at the Birchmere', thumb: 'IMG_0076.JPG', qty: '14' }
  - { dir: '2014-02--efo-birchmere/', title: 'February 2014: Eddie From Ohio at the Birchmere', thumb: '37-saturday.jpg', qty: '33' }
  - { dir: '2014-01--efo-rams-head/', title: 'January 2014: Eddie From Ohio at the Rams Head', thumb: 'img_0128.jpg', qty: '12' }
  - { dir: '2013-09--efo-one-voice/', title: 'September 2013: Eddie From Ohio - One Voice', thumb: 'img_8984.jpg', qty: '18' }
  - { dir: '2013-08--falcon-ridge/', title: 'August 2013: Falcon Ridge Folk Festival', thumb: '001-Friday-The-site.JPG', qty: '248' }
  - { dir: '2013-02--efo-birchmere/', title: 'February 2013: Eddie From Ohio at the Birchmere', thumb: '128-EFO-Concert-Sunday.JPG', qty: '60' }
  - { dir: '2013-01--michael-clem-trio-birthday-show/', title: 'January 2013: Michael Clem Trio Birthday Show', thumb: 'img_0007.jpg', qty: '21' }
  - { dir: '2012-08--dan-navarro-shows/', title: 'August 2012: Dan Navarro Shows', thumb: '23-Saturday-House-concert.JPG', qty: '36' }
  - { dir: '2012-07--falcon-ridge/', title: 'July 2012: Falcon Ridge Folk Festival', thumb: '52-Gospel-Wake-Up-Call.JPG', qty: '56' }
  - { dir: '2012-01--dc-efo-birchmere/', title: 'January 2012: Eddie From Ohio at the Birchmere', thumb: '126-Saturday-Eddie-From-Ohio.JPG', qty: '118' }
  - { dir: '2011-12--nye-passim/', title: 'December 2011: New Year Eve at Passim', thumb: 'img_3053.jpg', qty: '48' }
---

# Concerts

{% for gallery in page.galleries %}
  * [![{{ gallery.title }}]({{ gallery.dir }}photos/{{ gallery.thumb}}) {{ gallery.title }}]({{ gallery.dir }}) **{{ gallery.qty }}** Photos
{% endfor %}

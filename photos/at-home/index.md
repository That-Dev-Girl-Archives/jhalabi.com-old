---
layout: page
title: At Home
id: photos-album

galleries:
  - { dir: '2018-06--baby-shower/', title: 'June 2018: My Baby Shower', thumb: 'IMG_0029.jpg', qty: '46' }
  - { dir: '2017-01--womens-march/', title: 'January 2017: Women''s March', thumb: 'IMG_2053.JPG', qty: '59' }
  - { dir: '2016-05--manassas-air-show/', title: 'May 2016: Manassas Air Show', thumb: 'IMG_0017.JPG', qty: '21' }
  - { dir: '2016-03--meadowlark-cherry-blossoms/', title: 'March 2016: Meadowlark Cherry Blossoms', thumb: 'IMG_0017.JPG', qty: '37' }
  - { dir: '2015-04--dc-cherry-blossoms/', title: 'April 2015: DC Cherry Blossoms', thumb: 'IMG_1484.JPG', qty: '33' }
  - { dir: '2014-11--meadowlark-walk-of-lights/', title: 'November 2014: Meadowlark Walk of Lights', thumb: 'IMG_0065.JPG', qty: '16' }
  - { dir: '2014-06--mom-visits-dc/', title: 'June 2014: Mom Visits DC', thumb: 'IMG_0023.JPG', qty: '18' }
  - { dir: '2014-05--moms-retirement-party/', title: 'May 2014: Mom''s Retirement Party', thumb: '21-Surprise-picnic.JPG', qty: '22' }
  - { dir: '2012-12--dc-christmas-ntnl-cemetery/', title: 'December 2012: DC Christmas, National Cemetery', thumb: '089-Arlington-National-Cemetary-Wreath-Laying.JPG', qty: '73' }
  - { dir: '2012-10--emilys-visit-to-dc/', title: 'October 2012: Emily''s Visit to DC', thumb: '005-White-House-Garden-Tour.JPG', qty: '45' }
  - { dir: '2012-10--burke-lake/', title: 'October 2012: Burke Lake', thumb: 'IMG_6302.JPG', qty: '18' }
---

# At Home

{% for gallery in page.galleries %}
  * [![{{ gallery.title }}]({{ gallery.dir }}photos/{{ gallery.thumb}}) {{ gallery.title }}]({{ gallery.dir }}) **{{ gallery.qty }}** Photos
{% endfor %}

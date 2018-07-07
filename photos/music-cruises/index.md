---
layout: page
title: Music Cruises
id: photos-album

galleries:
  - { dir: '2017-10--europe-day-10-barcelona/', title: 'Oct 2017: Europe Day 10 - Barcelona', thumb: 'IMG_0024.JPG', qty: '72' }
  - { dir: '2017-10--europe-day-9-day-at-sea/', title: 'Oct 2017: Europe Day 9 - Day at Sea', thumb: 'IMG_0023.JPG', qty: '8' }
  - { dir: '2017-10--europe-day-8-napoli/', title: 'Oct 2017: Europe Day 8 - Napoli', thumb: 'IMG_0048.JPG', qty: '171' }
  - { dir: '2017-10--europe-day-7-rome/', title: 'Oct 2017: Europe Day 7 - Rome', thumb: 'IMG_0117.JPG', qty: '112' }
  - { dir: '2017-10--europe-day-6-la-spezia/', title: 'Oct 2017: Europe Day 6 - La Spezia', thumb: 'IMG_0084.JPG', qty: '93' }
  - { dir: '2017-10--europe-day-5-nice/', title: 'Oct 2017: Europe Day 5 - Nice', thumb: 'IMG_0131.JPG', qty: '91' }
  - { dir: '2017-10--europe-day-4-marseille/', title: 'Oct 2017: Europe Day 4 - Marseille', thumb: 'IMG_0013.JPG', qty: '123' }
  - { dir: '2017-10--europe-day-3-barcelona/', title: 'Oct 2017: Europe Day 3 - Barcelona', thumb: 'IMG_0039.JPG', qty: '25' }
  - { dir: '2017-10--europe-day-2-barcelona/', title: 'Oct 2017: Europe Day 2 - Barcelona', thumb: 'IMG_0173.JPG', qty: '144' }
  - { dir: '2017-10--europe-day-1-barcelona/', title: 'Oct 2017: Europe Day 1 - Barcelona', thumb: 'IMG_0037.JPG', qty: '47' }
---

# Music Cruises

{% for gallery in page.galleries %}
  * [![{{ gallery.title }}]({{ gallery.dir }}photos/{{ gallery.thumb}}) {{ gallery.title }}]({{ gallery.dir }}) **{{ gallery.qty }}** Photos
{% endfor %}

---
layout: page
title: Music Cruises
id: photos-album

galleries:
  - { dir: '2017-10--europe-day-10-barcelona/', title: 'October 2017: Europe Day 10 - Barcelona', thumb: 'IMG_0024.JPG', qty: '72' }
  - { dir: '2017-10--europe-day-9-day-at-sea/', title: 'October 2017: Europe Day 9 - Day at Sea', thumb: 'IMG_0023.JPG', qty: '8' }
  - { dir: '2017-10--europe-day-8-napoli/', title: 'October 2017: Europe Day 8 - Napoli', thumb: 'IMG_0048.JPG', qty: '171' }
  - { dir: '2017-10--europe-day-7-rome/', title: 'October 2017: Europe Day 7 - Rome', thumb: 'IMG_0117.JPG', qty: '112' }
  - { dir: '2017-10--europe-day-6-la-spezia/', title: 'October 2017: Europe Day 6 - La Spezia', thumb: 'IMG_0084.JPG', qty: '93' }
  - { dir: '2017-10--europe-day-5-nice/', title: 'October 2017: Europe Day 5 - Nice', thumb: 'IMG_0131.JPG', qty: '91' }
  - { dir: '2017-10--europe-day-4-marseille/', title: 'October 2017: Europe Day 4 - Marseille', thumb: 'IMG_0013.JPG', qty: '123' }
  - { dir: '2017-10--europe-day-3-barcelona/', title: 'October 2017: Europe Day 3 - Barcelona', thumb: 'IMG_0039.JPG', qty: '25' }
  - { dir: '2017-10--europe-day-2-barcelona/', title: 'October 2017: Europe Day 2 - Barcelona', thumb: 'IMG_0173.JPG', qty: '144' }
  - { dir: '2017-10--europe-day-1-barcelona/', title: 'October 2017: Europe Day 1 - Barcelona', thumb: 'IMG_0037.JPG', qty: '47' }
  - { dir: '2016-05--alaska-day-10-vancouver/', title: 'May 2016: Alaska Day 10 - Vancouver', thumb: 'IMG_0017.JPG', qty: '5' }
  - { dir: '2016-05--alaska-day-9-day-at-sea/', title: 'May 2016: Alaska Day 9 - Day at Sea', thumb: 'IMG_0041.JPG', qty: '26' }
  - { dir: '2016-05--alaska-day-8-ketchikan/', title: 'May 2016: Alaska Day 8 - Ketchikan', thumb: 'IMG_0056.JPG', qty: '64' }
  - { dir: '2016-05--alaska-day-7-icy-strait/', title: 'May 2016: Alaska Day 7 - Icy Strait', thumb: 'IMG_0252.JPG', qty: '101' }
  - { dir: '2016-05--alaska-day-6-skagway/', title: 'May 2016: Alaska Day 6 - Skagway', thumb: 'IMG_0187.JPG', qty: '125' }
  - { dir: '2016-05--alaska-day-5-juneau/', title: 'May 2016: Alaska Day 5 - Juneau', thumb: 'IMG_0108.JPG', qty: '132' }
  - { dir: '2016-05--alaska-day-4-hubbard-glacier/', title: 'May 2016: Alaska Day 4 - Hubbard Glacier', thumb: 'IMG_0085.JPG', qty: '66' }
  - { dir: '2016-05--alaska-day-3-seward/', title: 'May 2016: Alaska Day 3 - Seward', thumb: 'IMG_0029.JPG', qty: '116' }
  - { dir: '2016-05--alaska-day-1-anchorage/', title: 'May 2016: Alaska Day 1 - Anchorage', thumb: 'IMG_0130.JPG', qty: '91' }
  - { dir: '2011-11--eddie-from-ohio-cruise/', title: 'Nov 2011: Eddie From Ohio Cruise', thumb: '249-sunday-concert.jpg', qty: '187' }
---

# Music Cruises

{% for gallery in page.galleries %}
  * [![{{ gallery.title }}]({{ gallery.dir }}photos/{{ gallery.thumb}}) {{ gallery.title }}]({{ gallery.dir }}) **{{ gallery.qty }}** Photos
{% endfor %}

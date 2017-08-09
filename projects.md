---
layout: page
title: "Projects"
description: "Here is a selected list of projects that I have worked on."
group: "navigation"
---
## [Open DNS resolver](https://dns.seby.io)

2017

{% include image.html path="dns.png" alt="DNS Statistics" width="802" height="650" %}

A free Australian DNS resolver with DNSSEC support. The server resolves [OpenNIC TLD's](https://www.opennic.org/). Connections are only supported through [DNSCrypt](https://dnscrypt.org) and (experimental) [DNS-Over-TLS](https://dnsprivacy.org/wiki/display/DP/DNS+Privacy+Implementation+Status) for increased security and privacy. The [Ansible playbook and configuration files are open source](https://github.com/publicarray/dns-resolver) for you to inspect at your leisure. For pretty graphs and stats see [metronome from powerdns](https://metronome1.powerdns.com/?server=dnsdist.dns.seby)

### Technologies
* [Unbound](https://www.unbound.net/) (DNS Resolver with DNSSEC)
* [NSD](https://www.nlnetlabs.nl/projects/nsd/) (for OpenNIC)
* [dnsdist](http://dnsdist.org/) - PowerDNS (for DNSCrypt, abuse protection and statistics)
* [Ansible](https://www.ansible.com/) (for deployment)
* [Molecule](https://molecule.readthedocs.io/en/master/) and [Vagrant](https://www.vagrantup.com/) (for testing)

## [map-dl](https://www.npmjs.com/package/map-dl)

October 2016

{% include image.html path="map-dl.jpg" alt="Showing export progress from Google Maps" width="1280" height="1280" %}

A npm module, CLI (command line) and Website designed to download Google map images, using the Google Maps API. It was created to help researchers easily get image data for a specific area.

### Technologies:

* JavaScript
* [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/)
* [Google Static Map API](https://developers.google.com/maps/documentation/static-maps/)
* [npm](https://npmjs.com)

## Work Integrated Learning

June 2016

{% include image.html path="workintegratedlearing.png" alt="Work Integrated Learning" width="1280" height="1280" %}

Work Integrated Learning (WIL) is a program designed to integrate final year, undergraduate and postgraduate UNI students into the workplace. This is a website for the course. It aims to facilitate the process of matching students and industry partners with the added ability to share files and schedule events or meetings.

I was the backend programmer and system administrator during the development of the site.

### Technologies:
* [Laravel](https://laravel.com/) 5.2 (laravel-debugbar, maatwebsite/excel, laracasts/generators, ...)
* [Rocketeer](http://rocketeer.autopergamene.eu/) (a deployment tool)
* [Digital Ocean](https://www.digitalocean.com/) (Debian jessie, php 7, MySQL, Apache2)
* [Papertrail](https://papertrailapp.com/) (a log file aggregator and query tool)
* [Mailgun](https://mailgun.com/) (send and receive email)
* [Bitbucket](https://bitbucket.org/)
* and many more development tools such as git, ufw, fail2ban ...

<!-- **Update** I have since moved the website to Azure so that I no longer have to maintain the server. -->

## [Solar System](https://publicarray.github.io/solarsystem/)

September 2015

{% include image.html path="solarsystem.jpg" alt="Solar System" width="740" height="608" %}

The aim was to teach kids and teenagers about the solar system. The learning object was designed with multiple learning styles in mind. There is textual, audio, visual and minimal kinetic content to facilitate multiple learning styles. 

See the slides for More info: [slides.com/publicarray/solar-system](https://slides.com/publicarray/solar-system)

### Technologies:

* [WebGl](https://en.wikipedia.org/wiki/WebGL) with [gooengine.js](https://github.com/GooTechnologies/goojs) and [goocreate.com](https://goocreate.com/)
* [Jekyll](https://jekyllrb.com/)
* [git](https://git-scm.com/) with [Github](https://github.com/) and [Github Pages](https://pages.github.com/)

*More projects are at [Github](https://github.com/publicarray).*

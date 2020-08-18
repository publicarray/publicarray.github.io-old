---
layout: page
title: "Projects"
description: "Here is a selected list of projects that I have worked on."
group: "navigation"
---

## [dnscrypt-proxy package for Synology](https://github.com/publicarray/spksrc/releases)

April 2018

{% include image.html path="syno-dnscrypt-proxy.png" alt="dnscrypt-proxy" width="1392" height="660" %}

dnscrypt-proxy package for Synology NASs and Routers enables encrypted DNS for your network, custom blacklists, a DNS cache and optional logging. Credits for dnscrypt-proxy goto Frank Denis ([@jedisct1](https://twitter.com/jedisct1)). I merely packaged it and added a simple text editor GUI.

### Technologies
* [dnscrypt-proxy](https://github.com/jedisct1/dnscrypt-proxy)
* [CodeMirror](https://codemirror.net/)
* [Go lang](https://golang.org)
* [spksrc](https://github.com/SynoCommunity/spksrc)
* [Synology Open Source Project](https://sourceforge.net/projects/dsgpl/)

## [Open DNS resolver](https://dns.seby.io)

January 2017 - Ongoing

{% include image.html path="unbound_munin_by_rcode-year.svg" alt="DNS Statistics" width="660" height="494.667" %}

A free Australian DNS resolver with DNSSEC support. The server resolves [OpenNIC TLD's](https://www.opennic.org/). Connections are only supported through [DNSCrypt](https://dnscrypt.info/protocol), [DNS-over-TLS (DoT)](https://tools.ietf.org/html/rfc7858) and [DNS-over-HTTPS (DoH)](https://tools.ietf.org/html/draft-ietf-doh-dns-over-https) for increased security and privacy. The [server configuration and docker files are open source](https://github.com/publicarray/dns-resolver-infra) for you to inspect at your leisure. You can find pretty [graphs and statistics generated from munin](https://dns.seby.io/stats.html) here.

### Technologies
* [Unbound](https://www.unbound.net/) DNS Resolver with DNSSEC and Query minimisation
* [NSD](https://www.nlnetlabs.nl/projects/nsd/) for hosting a slave zone of the OpenNIC alt-root
* [Haproxy ](https://www.haproxy.org/) as a proxy and to terminate TLS (TLS 1.2) for DNS-over-TLS and DNS-over-HTTPS (HTTP/2)
* [dnscrypt-wrapper](https://github.com/cofyc/dnscrypt-wrapper) for supporting the dnscrypt protocol
* [rust-doh](https://github.com/jedisct1/rust-doh) for implementing the DNS-over-HTTPS protocol. Needs haproxy for HTTPS
* [Docker](https://docker.com/), [Docker hub](https://hub.docker.com/u/publicarray/) and [Docker swarm](https://docs.docker.com/engine/swarm/) for packaging, isolation and deployment
* [Alpine Linux](https://alpinelinux.org/) used as base Operating System in docker containers
* [Kubernetes](https://kubernetes.io/) deployment, scaling, and management of docker applications
* [Chrony](https://chrony.tuxfamily.org/) timekeeping with ntp. [The server](http://www.pool.ntp.org/user/b9nv9cqbjuhggucwvz364) is part of [ntppool.org](https://ntppool.org/)

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

## [Solar System](https://publicarray.github.io/solarsystem/)

September 2015

{% include image.html path="solarsystem.jpg" alt="Solar System" width="740" height="608" %}

The aim was to teach kids and teenagers about the solar system. The learning object was designed with multiple learning styles in mind. There is textual, audio, visual and minimal kinetic content to facilitate multiple learning styles.

See the slides for more information: [slides.com/publicarray/solar-system](https://slides.com/publicarray/solar-system)

### Technologies:

* [WebGl](https://en.wikipedia.org/wiki/WebGL) with [gooengine.js](https://github.com/GooTechnologies/goojs) and [goocreate.com](https://goocreate.com/)
* [Jekyll](https://jekyllrb.com/)
* [git](https://git-scm.com/) with [Github](https://github.com/) and [Github Pages](https://pages.github.com/)

*More projects are at [Github](https://github.com/publicarray).*

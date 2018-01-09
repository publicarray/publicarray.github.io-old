---
layout: page
title: "Contact"
description: "Social media accounts and places to reach me on-line 📫 . <br>Drop me a line or ask a question. I'd be delighted to hear from you."
group: "navigation"
preloads:
  - as: 'font'
    href: 'ionicons4.woff2'
    type: 'font/woff2'
    asset: true
---

{%- if site.social.twitter %}
<span class="icon icon-social-twitter" aria-hidden="true"></span>
Twitter: [{{site.social.twitter}}](https://twitter.com/{{site.social.twitter}})  <a href="https://twitter.com/messages/compose?recipient_id=765886034106351616" class="twitter-dm-button"><span class="icon icon-social-twitter" aria-hidden="true"></span> Message</a>
{% endif %}

{%- if site.social.facebook %}
<span class="icon icon-social-facebook" aria-hidden="true"></span>
Facebook: [{{site.social.facebook}}](https://www.facebook.com/{{site.social.facebook}})
{% endif %}

{%- if site.social.github %}
<span class="icon icon-social-github" aria-hidden="true"></span>
Github: [{{site.social.github}}](https://github.com/{{site.social.github}})
{% endif %}

{%- if site.social.dribble %}
<span class="icon icon-social-dribble-outline" aria-hidden="true"></span>
Dribble: [{{site.social.dribble}}](https://dribble.com/{{site.social.dribble}})
{% endif %}

{%- if site.social.linkedin %}
<span class="icon icon-social-linkedin" aria-hidden="true"></span>
Linkedin: [{{site.social.linkedin}}](https://www.linkedin.com/in/{{site.social.linkedin}})
{% endif %}

{%- if site.social.keybase %}
<span class="icon icon-locked" aria-hidden="true"></span>
Keybase: [{{site.social.keybase}}](https://keybase.io/{{site.social.keybase}})
{% endif %}

{%- if site.social.tox %}
<span class="icon icon-tox" aria-hidden="true"></span>
Tox: [{{site.social.tox}}](https://toxme.io/u/{{site.social.tox}})
{% endif %}

{%- if site.social.bitcoin %}
<span class="icon icon-bitcoin" aria-hidden="true"></span>
Bitcoin: [{{site.social.bitcoin}}]({{site.social.bitcoin}})
{% endif %}

{%- if site.social.email %}
<span class="icon icon-email" aria-hidden="true"></span>
Email: [{{site.social.email}}](mailto:{{site.social.email}})
{% endif %}

{%- if site.social.freenode %}
<span class="icon icon-freenode" aria-hidden="true"></span>
IRC: [{{site.social.freenode}}](irc://freenode.com/{{site.social.freenode}})
{% endif %}

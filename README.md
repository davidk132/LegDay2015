# LegDay2015

### Description

This is a concept frontend site create for managing attendees for the 2015 Legislative Day event in Sacramento, Calif., hosted by the California Association of REALTORS&reg;. Approximate 2,000-4,000 Realtors attend each year. Seating assignments are complicated, as attendees come from all over the state and are sponsored by their local Association of REALTORS&reg; which must coordinate with the state board.

This site is created in [Jekyll](http://jekyllrb.com/), a Ruby-based static site generator. It uses Bootstrap and jQuery to manage front end styling and input of user data.

Because the site was generated with Jekyll, the actual site is available in the folder `_site` and is launchable with the file `index.html` in that folder. See the excellent [Jekyll website](http://jekyllrb.com/) for more information. CSS is styled in vanilla [Bootstrap](http://getbootstrap.com/) so that it is fully responsive, if not excessively creative.

This repository houses the front end only. Backend functionality to persist the data entered is being developed separately. How it works:

Users (association staff) enter a registration (security) code and then can add and delete their attending members on the fly. The jQuery form can add or remove list items as needed and does not make assumptions about the number of people attending from each local association.

This site is intended for association staff only! If you are a California Realtor and you want to go to Legislative Day in Sacramento, then contact your local association for details.

Suggestions and pull requests are always welcome! I may rewrite this app in AngularJS or even Meteor where it seems to make more sense. Please use all security cautions when implementing this functionality in your own apps, and santize all your user data.

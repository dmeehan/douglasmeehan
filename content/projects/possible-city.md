---
templateKey: project
intro: A web-enabled social mapping platform with a mission to connect and
  incubate citizen-driven reclamation of vacant properties for innovative
  community uses.
client: Personal
isPublished: true
featuredImage: ../../static/assets/possible_city_map.png
order: 2
title: Possible City
company: Freelance
role: Founder, Designer & Developer
date: 2015-07-30T18:43:51.231Z
isFeatured: false
isCaseStudy: false
category: UI Design, Development, Mapping
---
## What's the Big Idea?

> Possible City was an experiment in engaging the city's forgotten spaces to bridge a crucial gap in current urban planning practice.

Possible City was an experiment in engaging the city's forgotten spaces to bridge a crucial gap in current urban planning practice. Top-down master planning, while cohesive and potentially visionary, is static and often insensitive to the needs of communities and individuals. Bottom-up advocacy planning addresses these issues, but can be fragmented and fall victim to "design by committee". The Web provides the virtual medium for a sophisticated new approach whereby an organized vision for an entire city can emerge from networks of citizens working to improve their local environments . Vacant land provides the physical medium, open to transformative new possibilities. Neither top down, nor bottom up, Possible City is a web-based framework for a symbiotic network of continuous experimentation, feedback, and synthesis more in-tune with the city as a complex and evolving entity.

## Where to Start?

Philadelphia, like many post-industrial cities in the U.S. has an issue with vacant land. Current research estimates the number at over 40,000 vacant lots. This is over 5000 acres, or over 8 square miles of land. Perhaps unsurprisingly, much of this land is situated in under-served and economically impoverished neighborhoods and the individual parcels are small and fragmented. These conditions leave a combined area bigger than that of Center City largely incompatible with traditional economic and political structures; a whole segment of the city for which established planning processes and techniques have failed. At Possible City, we see these conditions as an opportunity rather than a problem to be solved.

## What Do We Plan to Do About It?

The Possible City seeks to create community and economy structured around re-purposing vacant and underutilized land for innovative new uses. First, we plan to uncover people and organizations who are already working in this space and provide tools and community to strengthen and enhance their projects.  Second, we want to inspire and empower additional entrepreneurs, designers, activists, artists, and everyday citizens to capitalize on the opportunities presented through vacancy. Third, we want to connect these individuals and groups together to amplify their impact on a city-wide scale. Fourth, we want to feed this information back into governments and institutions so that they can develop policies and programs to support these emergent structures. We believe that the Possible City will emerge from the city's forgotten spaces, and that the plan for the  future city will emerge from the Possible City in a constant state of making and remaking.

## How Are We Going to Do It?

> City processes in real life are too complex to be routine, too particularized for application as abstractions. They are always made up of interactions among unique combinations of particulars, and there is no substitute for knowing the particulars. - Jane Jacobs

Possible City is developing a set of tools to address "the particulars" and to network these particulars together in a holistic way. We will focus on the most fundamental building blocks of a city: 1. citizens 2. parcels of land 3. ideas. We are building a set of networked web applications to address each category. 

### Free Agent

Free Agent consists of user profiles of people interested in developing their own agency in the city - a place for individuals to express an interest in making a direct impact in their neighborhood. People can share what they would like to help create as well as what they are able to offer, whether that be time, money, materials, or expertise.

### lotXlot

lotXlot is an application for mapping the city on a parcel by parcel basis, starting with open data provided by the city. It allows Agents to locate "Lots" with specific characteristics, gather up-to-date data about them, add their own data, and organize around them. The initial focus of lotXlot will be vacant lots, but every parcel in the city will have its own profile page and will be open to intervention.

![](/assets/lot.png)

### Float

Float allows Agents to "float" interventions for specific lots in the city. The interventions can range from simple seed ideas to more fully realized projects. Once the concepts have been floated, other Agents can comment, join, support, and fund the realization of the project -- together they begin to "ground" the project - where the project transitions from the virtual space to physical ground. Related projects can be networked with each other to allow those involved to share knowledge and resources and begin to populate the city with new emergent physical and social structures.

### The Networks and The Marketplace

> What happens next will be powered by individual innovation and collaborative sharing. We are on the verge of a massive mutual co-arising. - Bre Petis (founder of Makerbot)

By connecting, organizing, and mapping citizens, land, and ideas through the tools outlined above, Possible City will visualize the formation of  networks around topics such as Food, Energy, Health, Education, and Public Space. We plan to support these networks through the creation of virtual marketplaces for the exchange of ideas, time, and resources. We believe that citizens can develop more equitable and authentic economic opportunities by leveraging economies of agglomeration to compete with traditional economies of scale.
Together, we can build a community of governance focused on agency and experimentation. Rather than guessing about what urban redevelopment policies might work, we can test them out, find examples that work, and support those emergent networks of action. Possible City will not only give people a voice in urban development, it will also help to give shape to that voice.

## Outcome

Between 2013 and 2015, I built a fully-functional web application using Django, PostGIS, Leaflet, Open Street Maps, and open parcel data from the City of Philadelphia.

The work included the need to enable GIS functionality into django-rest-framework and so I authored the open-source Django package django-rest-framework-gis. I have since handed over the respository to a new maintainer and the package now has 51 contributors and 509 commits.

Possible City was a finalist in the 2013 Knight News Challenge on Open Government. While we didn’t receive the seed funding, the momentum led to several other people joining the initiative, helping to make connections with community groups, urban farmers, and other allies. The website came alive with hundreds of projects, users, and comments. Over time the momentum slowed through lack of funding and support. I learned a painful lesson: despite the enthusiasm and interest in the idea of ground-up, cooperative, and local transformation of a city’s forgotten spaces, our institutions and systems are often designed in ways that actively prevent it. This experience greatly impacted my perception and understanding of the political and economic structures in which we operate, and left me wiser to the fact that technology, while powerful, is not alone enough to drive positive change.

**Github repositories:**

https://github.com/possiblecity/possiblecity

https://github.com/openwisp/django-rest-framework-gis

![](/assets/possible_city_screenshot.jpg)
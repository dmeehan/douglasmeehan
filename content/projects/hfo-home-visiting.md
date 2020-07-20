---
title: HFO Home Visiting Interface
intro: New features and an optimized interface for a Oregon State DOE family support and parent
  education home visiting program.
client: Oregon Department of Education
company: Vistalogic, Inc
role: UI / UX Designer
date: 2020-07-19T02:28:15.112Z
isFeatured: true
isCaseStudy: true
featuredImage: ../../static/assets/three_screens.png
tags:
  - UI Design
category: UI Design
---
## Our Client

> Healthy Families Oregon (HFO) is a free family support and parent education home visiting program.

Healthy Families Oregon (HFO) is a free family support and parent education home visiting program. HFO is voluntary and it focuses on strengthening the parent-child relationship to assure healthy growth and development. Home visitors support parents in cultivating and strengthening a nurturing, positive relationship with their baby at each visit. Parents receive information on topics like child development, infant care, and keeping their baby healthy, and learn what is going on in their communities to support new families. Many families are eligible for home visits with a trained home visitor, who coaches them as they build their skills as parents and help their baby be safe, healthy, and learn.

<hr />

## My Role

> I was the sole UI designer and front-end developer on this project...

At Vistalogic we had a very small but agile team. I was the sole UI designer and front-end developer on this project and worked together with program managers and the head software architect to transform the clients needs into a compelling and user-friendly user interface for the CLARA software product. Unfortunately, this project did not get to the implementation phase due to budget constraints, but had it moved forward, I would have been the engineer for all aspects of frontend development.

<hr />

## The Challenge

> the system, as it was designed, did not sufficiently match how \[HFO] handled their workflows and processes.

Healthy Families Oregon was already a user of <a href="https://vistalogic.net/Products/Clara" target="_blank">Vistalogic's CLARA system</a>, a technology platform that offers vital data collection and management tools to public agencies, non-profits, and healthcare organizations. However, the system, as it was designed, did not sufficiently match how they handled their workflows and processes.

Vistalogic had already developed a new _Care Plan_ interface that HFO utilized to document their work with clients, but it was focused on a single client. HFO needed to work on a _Case_ level where they would be able to work on multiple client Care Plans within a household simultaneously. In addition, we needed to develop new features to support the specific eligibility requirements of their program. Finally, we needed to tie the new features together with existing features into a seamless workflow across four different user types to support screening, review & assignment, case work and management, and program supervision and analysis.

<hr />

## Requirements Gathering

> I worked with the Program Managers to prioritize the list of 30 requirements and 97 sub-requirments and to identify items that would require intensive design iteration prior to development...

Vistalogic’s Program Managers worked with HFO to develop a list of requirements for the new features that they wanted to build into the CLARA system. They also identified a set of these features that would require design documentation as a deliverable.

I worked with the Program Managers to prioritize the list of 30 requirements and 97 sub-requirments and to identify items that would require intensive design iteration prior to development, whether as a deliverable or to be used internally within Vistalogic. We developed a list of of 19 major requirements that required design exploration and documentation.

![Requirements Spreadsheet](/assets/HFO_excel.png "Requirements Spreadsheet")

<hr />

## The Users

We identified four different users who had distinct roles in the process:

![Four users](/assets/four_users.png "Four users")

### Screeners

The screener is responsible for conducting the initial screening of the potential client to determine if they are eligible for home visiting services.

### Program Managers

The program manager is responsible for reviewing the screening, approving the service request for home visiting services, and assigning the service request to a home visitor. They also work closely with the home visitors to help manage cases, case loads, and performance. 

### Home Visitors

The home visitors are the users who interface directly with the clients and manage cases. They conduct home visits and are responsible for outreach and enrollment. Once the client is enrolled, they are responsible for developing their own personal Care Plans. They manage and document all of their work through the CLARA system.

### Supervisors

Supervisors are interested in understanding the performance of the HFO team across locations and agencies through metrics such as home visit completion rate, case load, and number of enrolled focus children.

<hr />

## Creating the Design Story

Once we had the requirement set organized and prioritized, and a good understanding of our users and their roles, I synthesized the work into an overall design story that would guide the design process by helping us to determine where each of the features fit within the existing system, what new features needed to be developed, and how all of these pieces fit together into a coherent work flow.

![Design Story](/assets/design_story.png "Design Story")

<hr />

## Diagraming User Flows

![Client Screening Diagram](/assets/client_screening_workflow.png "Client Screening Diagram")

I dove further into the individual features represented in the design story to map out user flows, particularly for places where the existing system would need to be modified. For example, shown below is where we eventually landed for the organization of the Client Information step of the Client Screening work flow. We worked through several iterations to develop a user flow that would meet the needs of the HFO program while being flexible enough to accomodate different program requirements for different clients. Overall, we explored and documented 7 different work flows and the connections between them.

![Client Information Diagram](/assets/client_screening_schematic.png "Client Information Diagram")

<hr />

## Design iteration utilizing the Design System

> Utilizing this design system, I began to create design iterations for each of the pieces identified in the design story.

Over my five years working at Vistalogic, I completely overhauled the user interface of the CLARA software system. This included introducing modern techniques and tooling for CSS, organizing and improving the javascript code base, and developing a design system of resuable and nestable components (<a href="https://build.vistalogic.net/claraBeta/styleguide" target="_blank">View documentation in progress</a>). 

![Design System](/assets/design_system.png "Design System")

Utilizing this design system, I began to create design iterations for each of the pieces identified in the design story. When necessary, I would develop new components to add to the design system, such as the indicators for the Key Performance Indicator Dashboard. Through frequent meetings with the program managers, who had intimate knowledge of the needs of the HFO program and users, we audited the designs and incorporated comments into the subsequent iterations.

<hr />

## Outcome

![Design document](/assets/overview.png "Set of over 50 high-fidelity mockups")

Through iteration and analysis we arrived at a set of over 50 high-fidelity mockups documenting the design direction for the HFO system, for 19 new and/or modified feature sets. 

### Case Console

![Console Evolution](/assets/console-evolution.png "The evolution of the Clara Console interface over my time at Vistalogic.")

The center piece of thew new interface, the Case Console, represents a further evolution in my work to streamline the CLARA interface. When I began working with Vistalogic, the system was closer to a database administration interface than a purpose-built application. Over time, I worked to focus the interface more on use-cases and away from the underlying data records. The _Console_ became the organizing metaphor for a single-page application that could handle what previously required multiple server side page renders tied to a confusing navigation system. The Case Console, coupled with modal workflows, will allow HFO's Home Visitors to manage their Cases and Client Care Plans from a single clear interface.

### Deliverable

The final deliverable to the client was a design document and an interactive prototype outlining the interface and the user flow. <a href="https://xd.adobe.com/view/25f46961-978f-43ca-6de2-293b837d6569-53c5/?fullscreen" target="_blank">View the complete protoype</a>.

![HFO interface interaction](/assets/hfo-flow.gif "HFO interface interaction")
---
layout: post
title: Food Truck Finder Design Challenge
feature-img: "/imgs/foodtruck/outcome.jpg"
summary: Cross-platform design from ideation to launch
hidden: true
---

> Food Truck Finder (FTF) is an app we’re developing that helps users locate food trucks they love, find new food trucks in their area, see menus of those food trucks, and pay for their meals using the app. What we need to pitch the idea is a set of 3 screens, plus any supporting sketches or wire frames for the **food truck feed**, a **food truck profile**, and a **search results** page.

# Research 
The assumed target users for this app are people who love food trucks. To better understand the problem, I talked to my friends who have the experience of finding food trucks as part of the research. Some insights from the conversations:
* Food trucks are mobile and **location sensitive**.
* Finding a food truck is **situational**. People often want to locate food trucks near to them.
* People make decisions on which food trucks to go mainly based on three factors: **quality, convenience, and preference**.
* The existing alternatives used by people are **Google Maps and Yelp**, while neither of them is able to provide accurate information about food trucks.
* The food truck finder app needs to be **efficient and intuitive to use**.

In order to figure out what the information priority should be when the user makes a decision on food trucks, I conducted a quick session to ask my friends to map different information from higher priority to lower priority. From this session, I learned what information matters the most to the user. The results will be used as a guide to the **information hierarchy** design.
![image](/imgs/foodtruck/research.jpg)

# Design
### Initial Explorations
By sketching the initial ideas, I explored various structures for each module, and roughly evaluated each idea by listing pros and cons.
![image](/imgs/foodtruck/sketch_feed.jpg)
![image](/imgs/foodtruck/sketch_profile.jpg)
![image](/imgs/foodtruck/sketch_search.jpg)

### Mid-Fidelity & Iterations
In this step, I selected better ideas from initial explorations, created mid-fidelity mocks to test the concept with users, and iterated on the design based on user feedback.

For the **Feed (home screen)**, users would like to see both the map and list at the same time to get more context when they open the app. Instead of separating two views, I used a draggable bottom sheet to create a split view. Users can scroll down the sheet to see the full list, or collapse the sheet to get a full-screen map view. 
![image](/imgs/foodtruck/mid_feed.jpg)

For the **Food Truck Profile** page, the design changes I made include 1) placing all action buttons at the middle of the screen to make them easier to reach and reduce users' cognitive load. 2) Adding a map view to show more context about the relative location.
![image](/imgs/foodtruck/mid_profile.jpg)

For the **search results** page, I used the same layout as the feed to keep the consistency.
![image](/imgs/foodtruck/mid_search.jpg)


# Outcome
![image](/imgs/foodtruck/hifi.jpg)

# Next Steps
Due to time limit, many of my design decisions in this exercise were made based on some casual conversations and assumptions, so the concept and design still need to be iterated based on further user testing and feedback. If time allows, I would conduct **more structured user research and user testing** to understand these questions:
- Does the layout of each listing provide clear information for users?
- Is the interaction of the split view on Feed page intuitive and easy to use for new users?
- Do people find "trending now" on Search page helpful?
- Does the order of the modules on Food Truck Profile match people's perceptions?

Additionally, except for the features asked by the prompt, there're many **more opportunity areas** that can help make the experience better. For example,
- Can we provide more similar recommendations at the bottom of each food truck profile?
- What kinds of filters would be useful to help users make decisions? eg. cuisine, price?
- How do we prioritize the search results? In addition to listing the results by distance or relevance, how about listing by preferences predicted based on your favorited food trucks?

After getting more solid insights and feedback from the field, I would do more iterations to polish the solution and interface design.

---
layout:     post
title:      Protecting Copyright in an Innovative Way
feature-img: "/imgs/copyright/cover2.jpg"
summary: How I pushed myself from an obvious solution to a more effective one
---
## Problem Space
Starting from 2015, more and more cases emerged that people took the content created by Zhihu users to other platforms without asking for original authors' permission. The goal of this project was to intervene these increasing copyright infringement. The design problem is:
> **How might we protect authors' copyright to decrease unauthorized reproduction?**

## My Role
I was responsible for all UI/UX design and prototyping, and brainstormed the idea with my mentor, a front-end engineer and a product manager.

## Getting Insights from Authors
I started with empathizing with authors. From guerrilla interviews at the office, I learned how people suffered from copyright infringement on the Internet, and how their contents were taken without permission.

Insights:
- For most of the time, people didn't hate reproduction **as long as appropriate credits were given to the author**.
- Part of copyright infringement were **unintentional actions**. People who had taken the content were not aware that they needed to ask for permission in advance. In this case, if the author asks them to add credits or remove the content, they would obey.
- **Authors would use roundabouts** to declare copyright, like putting the bold black statements ending with multiple exclamation points to the start or end of their content.

## Refining the Problem
Based on my learnings, I found that authors expected their work and efforts to be respected and wanted a way to support their standpoint. Meanwhile, many offenders had little awareness of copyright and sometimes they copied and pasted without noticing they were offending the original author. We decided to refine the problem to focus on this specific aspect:

> **How might we help authors better deliver copyright message to raise people's awarenesses of copyright?**

## Finding Solutions
### First Iterations Inspired by the Community
Inspired by the existing roundabouts used by people, I was thinking if we could productize the existing form people used, **adding standard copyright declarations** for users instead of they typing it manually. Here are some explorations on this idea.

![image](/imgs/copyright/first_iteration.jpg)

The solution could work, but on second thought, it had two major problems:
- **Easy to be ignored.** Either putting before or after the main text, It is out of sight when the text is long.
- The addition of this new element was on the expense of **interface complexity**.

### A New Angle
To gather more inputs and avoid being limited by the "easiest solution", I brainstormed with my colleagues. Throughout the discussion, I realized the existing solution lacked a direct connection between copyright declaration and reproduction action, which was exactly the reason why it was not very effective. So when is the perfect moment to deliver the copyright information?

With a simple click of the ‘copy’ button, text can be transferred with no effort. People rarely think about copying and pasting words and utilizing them for their own use.

> **How about we intervene the flow of "copy" even before "paste" happens?**

![image](/imgs/copyright/flow.jpg)

### Iterating on the Tone
Having decided when to show the information, my next challenge was how to deliver the copyright message. I worked on a bunch of iterations to explore the best tone. Based on feedback, I chose the solution of combining author avatar and positive heads-up from the first person view, which helped create a friendly vibe and **make "people" stand out** from the content.

![image](/imgs/copyright/style_iterations.jpg)

## Final Design

![image](/imgs/copyright/final_design.gif)

## Positive Results
In January 2016, we launched the feature and it received **positive feedback** from users. The rate of manually marking copyright information in content decreased by **16%**.

I also co-wrote an article with our product manager to share our thinking behind the scene:  **[Respecting copyright: Contact me for permission before reproducing my content](https://zhuanlan.zhihu.com/p/20135322?columnSlug=zhihu-product)**, and received a lot of positive and constructive feedback.

# Decision log

Your methods section. About one page total.

Answer these as you go, not the night before it is due.
Specifics beat polish - a short honest answer is worth more than a long vague one.

Delete these instructions when you are done, or leave them. It does not matter.

---

## 1. What did you set out to build, and what changed?

What you wanted at the start, and what is actually live now.
Name one thing you dropped or added along the way, and why.

I started with the single-page site from Lab 04 and developed it into a multi-page personal website with sections for my About, Research, Experience, Education, Skills, Hobbies, Journey, Travelling, and Contact information. I also added a custom logo, photo dashboards, and cards linking to Wikipedia. Along the way, I replaced the original pink theme with a light-blue design and removed the painted SVG illustrations from the Hobbies page because I preferred using my own photos.

---

## 2. A fork in the road

Name one real choice where you could have gone two ways.
Plain HTML or a framework. One page or several. Your own CSS or someone's template.
What goes on the front page and what does not.

Say which you picked, what the alternative was, and what you gave up by not taking it.

"There was no alternative" is not an answer. Find the fork.

One major choice was keeping the site as a single page or changing it to multiple pages. I chose multiple pages because it made the different parts of my background easier to organize and navigate. The tradeoff was having more HTML files and more consistency to maintain across the site.

---

## 3. Where you overruled the agent

One time Claude suggested, wrote, or claimed something and you did not take it.

What did it do? How did you notice? What did you do instead?

If it genuinely never happened, say so plainly, and then say what you would have had to
check in order to notice. Being honest here costs you far less than a story you cannot
defend when you record your video.

The Hobbies page had several photos paired with the wrong descriptions. I noticed that the pictures and captions did not match, so I stopped and re-checked each photo against its actual content before correcting the page. This showed me that I should verify image-based information rather than assume the agent matched everything correctly.

---

## 4. How you know it works

What check did you run, and what did it tell you?

Then the real question: **what would have made this check fail?**
A check that could not have failed is not a check.

Link to your `verification/` folder.

I checked the site using a local server and verified that the pages returned HTTP 200 responses and that the HTML and CSS could be loaded. However, this does not confirm how everything looks in a real browser. The check could fail if a page returned an error, a file path was broken, or required CSS/assets were missing.

The verification files are in the `verification/` folder.

---

## 5. What is still wrong

One thing on your own site that is not right, not finished, or that you do not
fully understand.

What would you do next, and how would you find out?

The site had some repeated photos, especially TBM-related photos, because I did not have enough different source photos. I would also like to verify the external GitHub and LinkedIn links and test the site in an actual browser. My next step would be to check those links and visually inspect every page at different screen sizes.

#.Update: I checked and they are all working.

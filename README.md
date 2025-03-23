#  ✨ Virtual Pizza ✨
This project was to create a pizza eating app for Code Networker's to digitally consume.
Typically, on Monday nights, the events team orders ~20 pizzas which are free for consumption for attendees.
At the time of the creation of this project, weather events prevented student clubs from physically meeting on campus.
The joke suggestion, for consistency in our commitment to provide free pizza on Mondays, was to offer digital pizza.
This suggestion spawned this app, which was intended to be launched the following Monday.

<p></p>
Some essential features of this app, at the design stage, included:

- They should have the pizza box openning experience.
- Users must be able to 'digitally consume' the pizza slices in some way.
- On consuming the pizzas should update, and reflect for other users.

<p></p>
Some other features, to be implemented, include:

- Leaderboard for most pizzas eaten. Leaderboard resets when pizzas reset.

<br>

> [!NOTE]  
> If you are a student at QUT-GP studying a coding related subject, come join us at Code Network most Monday nights.  
> See our social media for more @ https://www.linkedin.com/company/codenetwork/

<br>

Here is a demo of the application as current:  
![gif demo of the Virtual Pizza web-app](images/v1-example.gif)


# 📦 Stack 📦
This webapp uses React + Vite (Javascript + SWC) and uses Cloudflare's Worker KV data storage, and Serverless Workers to communicate between the front-end and the KV.
Cloudflare KV means just Key-Value. Since this project just needed to know the live slice count for each pizza, KV was all that was required.
Code for the serverless worker can also be found in this repositry under the `serverless` directory.
<img src="images/frameworks-and-services-used.png" alt="Image of the stack used: React + Vite + Cloudflare" style="width:400px;"/>

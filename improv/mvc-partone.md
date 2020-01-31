Hey, ho! It's Friday! Let's rock at night, shall we? I hope you'll give your brain some rest.
Just don't binge watching Netflix a lot. 

Today we'll share my thoughts about MVC pattern.
It's maybe one of the oldest patterns that I know and use it a lot.
Invented by Trubve Reenskaug(thanks!) Theory and basic description were published on December 10th, 1979.

A lot of time passes by, right?
Most interestingly, how this pattern was adopted and raise during the Internet Age.
Long story short: MVC(Model - View - Controller) is a concept of separation of logic.
The application is divided into three actors that are interacting with each other according to some rules.


## Model 
[meme]

It represents business logic. Classes used to store and manipulate state are usually in DB.

## View
[meme]
Contains Use Interface elements(in the web it's HTML blocks) that display data that was passed into it.

## Controller
[meme]
It's our brain. It "eats" user input and tells to model what "she" needs to do and what resulting view will be used for this situation.

One of the essential things is to understand that this is a design pattern.

It's abstract. And it is a pretty commonly used pattern. Even right now.

Part of the success of the Web itself should go to MVC - IMHO.

Another part should go to those bright engineers that have creative brains. They have limited resources, especially in the beginning. And we all should appreciate their work.

Now a lot of web development frameworks are using MVC principles such as Django (even it was not used from the beginning), Ruby on Rails, Laravel and ASP.NET MVC

I started to code at my first job using MVC. It was part of our success strategy. We were small, but adequately organized -> we used to beat our competitors by delivering completed projects fast. We had a great architect as a team member. He built a project skeleton, and I created forms & fixing frontend bugs. Another guy was working with Controllers logic + he created custom JS plugins.

We all used the Zend Framework(PHP). Oh, good old days.

What I like about Zend and it goes from MVC  is the project organization. It's still haunting me in my current code :) yes, recently, we have moved away from this structure, but de-facto MVC principles are still used pretty often.

X years ago, expressjs, Koa, SailsKS incorporated MVC and sharing similar logic to newbie developers.

When it was invented, it was a pretty fresh idea. By separating things, you get a lot of cool perks:  devs should have knowledge in different areas: backend + frontend.
(There were a jQuery and jQuery UI time. if you know what I'm talking about)

And Boom! Project complexity starts to snowball.

MVC helps to separate parts of the work. You can connect designers with Frontend Markup developers. The first one will make everything looks pretty; the second one will produce a pure HTML/CSS template.

While those "artists are playing," backend developers can work on DB schema, registration flow, and other essential parts.


----
----
----


No, we didn't have significant processes ten years ago. Even Manual testers were a luxury in our cheap projects.
Programmers & managers could argue about features. We didn't have any CI practices at that time!
Yes, it was a stone age, and it was a few years ago. 
Not a decade as you can think.

Web servers were our "overlords." They routed requests to handlers + logic of what drivers should do + Controllers received POST requests and processed them.


====
====

Same logic is incorporated nowadays.
ExpressJS, Koa, SailsJS have similar logic inside.
Here is a cool test that was offered a long time ago. It should tell you if your project is properly "MVC"-style organized. If your app can easily support redesign or changes in a color scheme -> then you did a great job and significant "players" have been separated and organized correctly.

Old designers don't care a lot about how everything should work.
It's not like now.

And it's ok because we use and develop software in a different way right now.

I use the same principles when I teach my friend Frontend development skills.
Instead of doing solid fundamentals and learning rules!rules!rules! - I shared his code of Bootstrap Framework. And he learns it from the best. A few years ago, he was able to create a high UI Library that saves a lot of time and money to his company.


If it's not ready to work with different color schemes -> then you should refactor your code.
Because in this case -> it's pretty hard to update it; even simple changes will require developers to look at different places to change something.
And it sucks!



It's undeniable how powerful a simple correct MVC project can look.
But the most important thing is to understand "Why it works."

Yes, for experienced developers - all of these things are pretty natural — you separate logic, presentation, data layers.

You work on them at different time and project stages, and it's not because of MVC principles only.

+ MVC can sound pretty generic. And we have a lot of debates, during beer sessions, about how to implement it better.

This is why different Frameworks have their won version of MVC inside.


Still, MVC is an old concept, and a lot of things have changed. Some projects may not want to stick with those strick frames, using only three types of actors. Observers/Subscriptors were also not very important before. So in recent times, we don't usually fit everything in a "clean."
 MVC rules.


 Another useful pattern is Inversion of Control. Classes inside MVC don't need to know about specifics. They are just interfaces. Their role is pretty simple and defined.

 But yeah, it's like the next level of how engineers build their backend logic. It's also well optimized for the testing part. And I LUV Testers! (Q&A engineers) You are my buddies Foreva ^_^

 While preparing this newsletter, one of our developers noticed that for the last few months, we have been avoiding Ruby on Rails stories. It's not cool, I agree. So here is our vast list of Ruby on Rails stories from our excellent authors.

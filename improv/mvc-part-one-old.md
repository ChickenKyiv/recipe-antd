Hey, ho! It's Friday! Let's rock at night, will ya? I hope you'll give your brain some rest.
Just don't Netflixing a lot. 

Today we'll share my thoughts about MVC pattern.
It's maybe one of the oldest patterns that I know about and uses it a lot.
Invented by Trubve Reenskaug(thanks!) Theory and basic description were published on December 10th, 1979.

A lot of time passes by, right?
Most interestingly, how this pattern was adopted and raise during the Internet Age.
Long story short: MVC(Model - View - Controller) is a concept of separation of logic.
The application divided into three actors that are interacting with others by some rules.


## Model 
[meme]

It Representing business logic. Classes used to store and manipulate state, usually in DB.

## View
[meme]
Contains Use Interface elements(in the web it's HTML blocks) that displaying data that was passed by into it.

## Controller
[meme]
It's our brains. It's "eating" user input and tell to model what "she" needs to do and what resulting view will be used for this situation.

One of the essential things to understand that this is a design pattern.

It's abstract. And pretty commonly used pattern. Even right now.

Part of the success of the Web itself should go to MVC - my IMHO.

Another part should go to those bright engineers, that have creative brains. They have limited resources, especially in the beginning. And we all should praise their work.

Now a lot of web development frameworks using MVC principles. Django(even it was not used from the beginning), Ruby on Rails, Laravel and ASP.NET MVC

I started to code in my first job using MVC. It was part of our success strategy. We were small, but adequately organized -> we beat our competitors with our time to deliver completed projects. We have a great architect as a team member. He built a project skeleton, and I created forms & fixing frontend bugs. Another guy was working with Controllers logic + he creates custom JS plugins.

We all used the Zend Framework(PHP). Oh, good old days.

What I like in Zend and it goes from MVC - project organization. It's still haunting me in my current code :) yes, recently, we are moving away from this structure, but de-facto MVC principles still used pretty often.

X years ago, expressjs, Koa, SailsKS incorporated MVC and sharing similar logic to newbie developers.

When it was invented, it was pretty fresh ideas. By separating things, you get a lot of cool perks: from the one side, devs should have knowledge in different areas: backend + frontend.
(There were a jQuery and jQuery UI time. if you know what I'm talking about)

And Boom! Project complexity starts to snowball.

MVC helps to separate parts of the work. YOu can connect designers with Frontend Markup developers. First will make everything looks pretty; the second one will produce a pure HTML/CSS template.

While those "artists are playing," backend developers can work on DB schema, registration flow, and other essential parts.


----
----
----


No, we didn't have significant processes ten years ago. Even Manual testers were a luxury in our cheap projects.
Programmers & managers can argue about features. We don't have any CI practices at that time!
Yes, it was a stone age, and it was a few years ago. 
Not a decades as you can think.

Web servers were our "overlords." They route requests to handlers + logic of what drivers should do + Controllers receive POST requests and process them.


====
====

Same logic incorporated nowadays.
ExpressJS, Koa, SailsJS has similar logic inside.
Here is a cool test that was offered a long time ago. It should tell you if your project properly "MVC"-style organized. If your app can easily support redesign or changes in a color scheme -> then you did a great job and significant "players" separated and organized correctly.

Old designers don't care a lot about how everything should work.
It's not like now.

And it's ok because we use and develop software differently right now.

I use the same principles when I teach my friend Frontend development skills.
Instead of doing solid fundamentals and learning rules!rules!rules! - I shared with his code of Bootstrap Framework. And he learns it from the best. A few years ago, he was able to create a high UI Library that saving a lot of time and money to his company.


If it's not ready to work with different color schemes -> then you should refactor your code.
Because in that case -> it's pretty hard to update it; even simple changes will require developers to look at different places to change something.
And it sucks!



It's undeniable how powerful nor simple a correct MVC project can look.
But the most important thing is to understand "Why it works."

Yes, for an experienced developers - all of these things are pretty natural — you separating logic, presentation, data layers.

You work on them at different time and project stages, and it's not because of MVC principles only.

+ MVC can sound pretty generic. And we have a lot of debates, during beer sessions, about how to implement it better.

This is why different Frameworks have their won version of MVC inside.


Still, MVC is an old concept, and a lot of things changed. Some projects may don't want to stick in those strick frames, using only three types of actors. Observers/Subscriptors also was not very important before. So in recent times, we usually don't fit everything in a "clean."
 MVC rules.


 Another useful pattern is Inversion of Control. Classes inside MVC don't need to know about specifics. They are just interfaces. Their role is pretty simple and defined.

 But yeah, it's like the next level of how engineers building their backend logic. It's also a good optimized for the testing part. And I LUV Testers! (Q&A engineers) You are my buddies Foreva ^_^

 While preparing this newsletter preparation, one of our developers noticed that for the last few months, we were avoiding Ruby on Rails stories. It's not cool, I agree. So here is our vast list of Ruby on Rails stories from our excellent authors.

 

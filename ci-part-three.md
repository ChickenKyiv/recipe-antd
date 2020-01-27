	Let`s simplify CI as much, as possible, ok?
	The main idea of this practice is to have an integration server, that will run code builds a few times per day.
	Developers can submit their changes like nothing without CI. But consequences can be huge, and hidden error can sneak into the system, and finally break it. Yes, CI is some sort of a barrier, like a shield, that playing against developers… Moreover, it is playing against errors and human mistakes; against bad modules that can be shipped into the production version. Code submissions aren't complete with CI practice, while all compilation scripts, test jobs, and code inspections are done. And if all those checks have green status, you have a green light to add your changes into the main codebase.

----

The ideal way is when you start your project with CI in mind, plus you understand everything and ready to battle with any issues that this approach will give you.
However, life is not ideal. What do you need to do, if your project is ongoing, and it doesn`t have DevOps methodology from the beginning?
This is how I did it: I split my codebase into small pieces instead of trying to domesticate the whole herd of issues. You just trying to improve one part. You can reduce a lot of pain points and improve code quality by doing it step-by-step. 
Or, you can all-in with the hardcore approach. But please notify your manager. Tell him that it will be a painful way, but it may be worth it. Therefore, it depends on project goals.

----------

[missing part]

Sometimes you can't just fix a bug or introduce a new approach without breaking previously developer foundation that keeping your project above the water. Nevertheless, it's your choice. My advice is while you fixing/updating something, also try to spend some time refactoring. I don't know a better approach, actually. I mean refactoring way was battle-tested a lot of times on practice. Especially it's cool to see some process improvements when you are short in resources. I'm pretty often was working with code, developed by more experienced developers. It's really actually a perfect way to learn => they making backbone structure, and your goal is to understand client requirements and make some adjustments. Usually, it's more made-up changes, rather than something huge and backend related. It means two goals – make better software and satisfy your client.
However, as it's a code with higher quality and advanced logic – it's not easy to extend it or fix a bug with my limited knowledge. So I did it in my way: I split complex code into parts. Small parts that are easy to test or debug. I applied different design patterns in order to make it more clear (as the major part of code was done and I had a clear picture of how things should work; it was not so hard as build it from scratch).
Sometimes I just move out some functionality into a separate file/module. We start to crash less often giving it more independence. Even such kinds of improvements make it better and more stable.

Subtitle: CI giving you a room to make a mistake
Do you remember Doctor House series? "Everybody lie".
Or for example Murphy's law: "Anything that can go wrong will go wrong"

Damn, using CI is like working in a science field. When you doing scientific research you can't just trust your results. While someone else doesn't approve or replicate your experiment and will get the same results.

Developers are real people, and we tend to make mistakes. Instead of trying to work in a tornado, it's better to have solid ground under your feet.


Sports analogy: you can purchase a star, that will be on a peak and will score at any game, but often a good, solid team with a plan, created by a smart coach will give you more predictable results. 

Poker analogy: you better trust your luck with a pocket Aces, rather than go all-in with 7-2, aren`t you?

So, what will you pick(Neo)? – The way, full of pain? Or you'll admit that CI is not just a wish. It's an important thing that will improve fricking code quality and we all want that quality, right?


Convincing, huh? 


----
----
----

(2)

Let`s simplify CI as much, as possible, ok?
The main idea of this practice -> to have an integration server, that will run code builds a few times per day.
Without CI developers can submit their changes without a lot of restrictions. But consequences can be huge, and hidden error can sneak into cool system, and... break it. Yes, CI is some sort of a barrier, shield, obstacle, that playing against developers.
Against errors and human mistakes. Against bad modules that can be shipped into the production version. With CI practice, code submissions aren't complete, while all compilation scripts, test jobs, and code inspections are done. And if all those checks have green status - you have a green light to add your changes into the main codebase.

----

The best, ideal way is when you starting your project with CI in mind, plus you understand everything and ready to battle with any issues that this approach will give you.
But life is not ideal. What do you need to do, if your project is ongoing, and it didn't have DevOps methodology from the beginning?
This is how I did it: I split my codebase into small pieces and instead of trying to domesticate the whole herd of issues. You just trying to improve one part. Doing it step-by-step you can reduce a lot of pain points and improve code quality. 
Or, you can all-in with the hardcore approach. But please notify your manager. Tell him it'll be a painful way, but it may be worth it. But it depends on project goals.

----------

[missing part]

And sometimes you can't just fix a bug or introduce a new approach without breaking previously developer foundation that keeping your project above the water. What I can say, it's your choice. My advice, while you fixing/updating something, also try to spend some time refactoring. I don't know a better approach, actually. I mean refactoring way was battle-tested a lot of times on practice. Especially it's cool to see some process improvements when you short in resources. In my practice, I'm pretty often was working with code, developed by more experienced developers. It's really actually a perfect way to learn => they making backbone structure, and your goal to understand client requirements and make some adjustments. Usually, it's more makeup changes, rather than something huge and backend related. 
it meets two goals - make better software and satisfy your client.
But as it's a code with higher quality and advanced logic - it's not that easy to extend it or fix a bug with my limited knowledge. So I did it in my way: I split complex code into parts. Small parts that easy to test or debug. I applied different design patterns in order to make it more clear(As the major part of code was done and I have a clear picture of how things should work - it was not hard as build it from scratch).
Sometimes i just move out some functionality into separated file/module. By giving it more independence - our start to crash less often. Even those kinds of improvements make it better and more stable.

subtitle: CI giving you a room to make a mistake
Do you remember Doctor House series? "Everybody lie".
Or Murphy's law: "Anything that can go wrong will go wrong"

Damn, using CI is like working in a science field. When you doing scientific research you can't just trust your results. While someone else doesn't approve or replicate your experiment and will get the same results - you're not done.

Developers are real people, and we tend to make mistakes. Instead of trying to work in a tornado, it's better to have solid ground under your feet.


Sports analogy: you can purchase a star, that will be on a peak and will score at any game, but often a good, solid team with a plan, created by smart coach will give you more predictable results. 

Poker analogy: you better trust your luck with a pocket Aces, rather than go all-in with 7-2, right?

So, what will you pick(Neo)?
The way, full of pain? Or you'll admit that CI is not just a wish. It's an important thing that will improve fricking code quality and we all want that quality, right?


Convincing, huh? 

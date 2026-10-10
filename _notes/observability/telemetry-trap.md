---
title: The Telemetry Trap
layout: page
published: false
---

In late 2019, as the team was being stripped to a skeleton crew as we were 'reorganized,' I was asked to 'overhaul our platform monitoring' as a team of one. As with many things, I took this new assignment quite seriously and began my first deep-dive into what the industry was doing. I looked around the various vendors and realized they were all singing the same praises of the Three Pillars of logs, metrics, and traces. Fortunately, my employer already had a few of the major tool competitors in-house, so I began to expand our investment beyond logs and into APM spaces, where the metrics and traces were generated for us by the agent running alongside our software.

It took 6 months to roll out the new instrumentation into production, but I kept seeing significant win-potential and I kept preaching it to my team. Unfortunately, it was a rather large platform to say the least, and no matter the hours I worked, I couldn't keep up implementing new approaches or tuning the alerts at the same speed as the platform changed. Still, incremental wins were made, and my leadership began asking me to work with partner teams to help bring them up to snuff, too. I had the opportunity to begin codifying the 'golden dashboards,' and I even began to educate across the organization, which was incredibly fulfilling.

Something was still niggling at me, though: none of these teams had anything I didn't have, and I was able to come in and make changes to their monitoring that didn't require code changes. What was I doing differently?

> *_Give an analogy example to describe why having signals doesn't mean you have o11y._*

## Signal Overload / Fatigue

What I saw most commonly while working with teams was that so many of them had given up and stopped trusting their alerts and began filtering them into a mailbox folder. To some, this probably sounds preposterous: firstly, their _alerts_ were in their _inbox,_ and easily ignored. But more: if you 


> *_Talk about capturing everything 'just in case' and why this can lead to noise in alerting, plus huge cost with minimal benefit._*

## Context Matters

> _Talk about what's missing without the context of the business._

> _Walk through example scenario where the only signals are poorly understood API call increases and HTTP failures. Business-aware views, however, see that customer calls are failing and getting retried by the customers, and the failures are coming from a downstream system sending bad responses (but considering them a success)._

## Close Out / Call to Action

> _Challenge just using domain-agnostic signals_

> _Encourage understanding the business and focusing on customer impact_


___

After doing this for a while, I came to the conclusion there was nothing novel about the three pillars; it was simply a sales pitch for their tools which _just so happened_ to be exactly what their product did. Still, we'd made progress in leaps and bounds, thinning out the noise and building what had become a good groundwork.

___
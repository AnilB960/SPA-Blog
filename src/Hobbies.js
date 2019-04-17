import React, { Component } from "react";

class Hobbies extends Component {
  render() {
    return (
      <div className="post-page">
        <h1>LET’S TALK ABOUT HOBBIES</h1>
        <p>I've been passionate about hobbies my whole life. I love learning, collecting, researching and developing new skills. Some of these skills have proven useful in my career, and some are just for me to enjoy. Today we're gonna talk about the private ones. The ones that make life better and help us decompress at the end of a long day. </p>
        <img src={require('./images/hobbies.jpg')}></img>
        <p>
          Growing up together Emma and I had a LOT of hobbies including: horse back riding, gymnastics, basketball (yes really), writing children's books, knitting, line dancing, cooking, reading, acting, painting, drawing, singing, dying our hair (every color!), collecting vintage, cheerleading, photography, running, scrapbooking, wood working, beer making, sewing, baking, collecting and everything in between. It's fun to stay busy with stuff that makes you happy. Hobbies come and go over the years. I love the idea of always having a "current obsession".
        </p>
        <p className="special-text">
          If you're in the market for a new hobby, here are a few tips to help you choose the right one for you…
        </p>
        <h2>1. Find something that helps you forget your day and unwind. </h2>
        <p>
          Running is my perfect "alone time" hobby. I like to run with headphones and listen to my favorite guilty pleasure music. I have time to think. I forget about work. When I'm done I feel renewed. I love all of these things. It's also a good hobby for my personality type, because I can make and achieve small goals, which is a huge source of motivation for me. Right now I'm working my way up to a 10 mile run and it feels amazing to get closer and closer to my goal. In the end the goals are secondary, though. What I get out of my hobby is that it sets aside time just for me. Some people may feel exactly the opposite, needing a social hobby instead.
        </p>
        <h2>
          2. Take inventory.
        </h2>
        <p>Literally, look around your home and see if there are any neglected hobbies that you started but haven't completed. Last week our brother reminded Emma how she had been writing a children's book (this was four or five years ago), and she had totally forgotten about it! She never finished that project, and now she's thinking she might pick it up again, just for fun.
        </p>
        <p>
          You also need to take inventory of your life and think about what kind of time you have to devote to a hobby. We are all busy, especially during certain seasons of life. So be honest with yourself about what kind of time you have to devote to a hobby and don't over-commit or try something that you just realistically can't accomplish. A hobby is something you should do for you and should make you feel good about yourself, not constantly sad that you aren't achieving as much as you think you should or are unable to really enjoy it.
        </p>
        <h2>
          3. Explore things first.
        </h2>
        <p>
          If you're feeling stuck, try going to a hobby store and just walking around. You don't have to buy anything. Just look around and dream about what you might like to try. Talk to your friends and see what they are doing. Maybe you can join them? Or maybe they will give you an idea for a project you might like to try. And if possible, try things out before you commit (financially or otherwise). For example, if you're thinking you might like to try rock climbing, go with a friend and use their equipment before you dive in and commit to joining a gym or buying supplies. Use your mom's sewing machine and see if you like sewing before you buy your own. This may seem like a no-brainer, but I've definitely been guilty of making those impulse buys only to watch it later collect dust. Giving yourself freedom to explore different options is a great way to feel like you don't have to stick with something you end up not loving. Go ahead and dip your toes in the water!
        </p>
        <p>
          What about you? What hobbies are you in love with right now? What helps you relax? xo- Elsie (& Emma too)
        </p>
      </div>
    );
  }
}

export default Hobbies;

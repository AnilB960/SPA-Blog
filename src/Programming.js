import React, { Component } from "react";

class Programming extends Component {
  render() {
    return (
      <div className="post-page">
        <h1>Why I Love Programming?</h1>
        <p>Programming has many faces. It is the science of structured thinking.
          It is the art of eloquent expression. It teaches you to be humble when you look at other peoples'
          fascinating work. Most of all, it teaches you a lot about yourself.</p>
        <p className="special-text">While the syntax may change, the concepts will not.</p>
        <p>This post is split into two parts. In the first part, I will talk about the joy of programming.
          The second part will deal with the notion of being a professional programmer.</p>
        <p>If you're not sure yet whether you want to learn how to program, this article is for you.</p>
        <img src={require('./images/coding.png')}></img>
        <h2>
          Automating stuff gives you superhero strengths
        </h2>
        <p>Being able to program is infinitely rewarding.
          You can help your sister sort a thousand pictures in a few seconds.
          You write a little backup script for your grandma. The possibilities are endless.</p>
        <h2>Coding is fun!</h2>
        <p>Coding something is more fun than using it. It's even better than playing games.
           Why? Learn how to program a computer and get the best games for free — your own.
           You're in total control. It's your idea, your logic, even your laws of physics.
           It's like building a house but without paying anything for the building materials.
           You can build a mansion for free.</p>
        <h2>Sharing is fun, too!</h2>
        <p>To get new inspiration for your next project, read the programs of others.
          This will give you an idea of how they think and how they solve problems.
          Many great programmers share their best code with you.
          You can do the same and share your project - or just the prettiest parts of it - with other programmers.
          Watching somebody else use your work is one of the most satisfying things you will ever experience.
          It's very fulfilling to see your tool serve a purpose it wasn't built for.</p>
        <h2>Elegant, creative solutions</h2>
        <p>It's very appealing to work so hard on your vision that everything unnecessary peels off.
          All these little ideas and fundamental insights suddenly fall into place.
          What's remaining is the distilled truth, the result of an ambitious but rewarding thought process
          and when you write it down as a program you can see all the little pieces working together.
          This makes it so gratifying to figure stuff out on your own.
          Programming is about understanding a problem so thoroughly,
          that you can teach a piece of metal how to solve it. Even the way your program is
          structured can be a piece of art. It can be concise, witty and fast all at the same time.</p>
        <h2>Talk to a machine</h2>
        <p>It's fascinating that something is understood by machines and humans using the same language.
           I'm baffled when I realize that these circuits can actually "understand" and interpret words - in a way.</p>
        <h2>Standing on the shoulders of giants</h2>
        <p>Talking to other programmers and watching them work is a fascinating inspiration.
          The very system you are using to read this text relies on their work.
          Even if you're far apart, you can study their work on Open Source projects online.
          But if you get a chance, watch them giving talks at conferences and meet them at local user groups.
          Becoming part of a community is gratifying. To exchange ideas and to collaborate on projects helps you push your boundaries and learn something new every day.</p>
        <h2>Have fun and forget the rest!</h2>
        <p>The machine is agnostic to your skin color.
          It doesn't matter if you're a twelve-year-old girl or a lecturer at University.
          If you keep making the same mistake for ten hours straight, your computer won't scream at you.
          It won't punish you. It will happily await your commands.
          Also, the hurdles of entry are pretty low. An old computer is enough;
          even pen and paper and a book will suffice to work on cool programming ideas.</p>
        <h2>Get Started</h2>
        <p>You choose your own projects; nobody else. Don't let anybody tell you that you're not smart enough for this stuff. Ever.
          Each program is a wonderful journey so join us and code the world around you.</p>
      </div>
    );
  }
}

export default Programming;

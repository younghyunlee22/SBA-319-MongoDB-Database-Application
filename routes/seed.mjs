import express from "express";
import User from "../models/user.mjs";
import Post from "../models/post.mjs";
import Comments from "../models/comment.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    await User.deleteMany({});
    await User.insertMany([
      {
        _id: "65b4531f3a89d130cd931641",
        userId: 7,
        firstName: "Laure",
        lastName: "Akess",
        email: "lakess6@reference.com",
        username: "lakess6",
      },
      {
        _id: "65b4531f3a89d130cd931649",
        userId: 15,
        firstName: "Shena",
        lastName: "Hoyles",
        email: "shoylese@ameblo.jp",
        username: "shoylese",
      },
      {
        _id: "65b4531f3a89d130cd93163d",
        userId: 3,
        firstName: "Micki",
        lastName: "Savile",
        email: "msavile2@theatlantic.com",
        username: "msavile2",
      },
      {
        _id: "65b4531f3a89d130cd931642",
        userId: 8,
        firstName: "Janith",
        lastName: "Liptrot",
        email: "jliptrot7@wisc.edu",
        username: "jliptrot7",
      },
      {
        _id: "65b4531f3a89d130cd931643",
        userId: 9,
        firstName: "Mattias",
        lastName: "Hains",
        email: "mhains8@amazon.co.uk",
        username: "mhains8",
      },
      {
        _id: "65b4531f3a89d130cd931646",
        userId: 12,
        firstName: "Pall",
        lastName: "Beagen",
        email: "pbeagenb@a8.net",
        username: "pbeagenb",
      },
      {
        _id: "65b4531f3a89d130cd93164d",
        userId: 19,
        firstName: "David",
        lastName: "Prozescky",
        email: "dprozesckyi@blinklist.com",
        username: "dprozesckyi",
      },
      {
        _id: "65b4531f3a89d130cd931645",
        userId: 11,
        firstName: "Ignaz",
        lastName: "Alban",
        email: "ialbana@bloglines.com",
        username: "ialbana",
      },
      {
        _id: "65b4531f3a89d130cd93163b",
        userId: 1,
        firstName: "Chick",
        lastName: "Lorence",
        email: "clorence0@bbb.org",
        username: "clorence0",
      },
      {
        _id: "65b4531f3a89d130cd931648",
        userId: 14,
        firstName: "Vanya",
        lastName: "McCerery",
        email: "vmccereryd@yahoo.co.jp",
        username: "vmccereryd",
      },
      {
        _id: "65b4531f3a89d130cd93163f",
        userId: 5,
        firstName: "Dorisa",
        lastName: "Calley",
        email: "dcalley4@tripod.com",
        username: "dcalley4",
      },
      {
        _id: "65b4531f3a89d130cd931647",
        userId: 13,
        firstName: "Marjie",
        lastName: "Gribble",
        email: "mgribblec@themeforest.net",
        username: "mgribblec",
      },
      {
        _id: "65b4531f3a89d130cd93164b",
        userId: 17,
        firstName: "Eloise",
        lastName: "Tale",
        email: "etaleg@storify.com",
        username: "etaleg",
      },
      {
        _id: "65b4531f3a89d130cd93163c",
        userId: 2,
        firstName: "Jolee",
        lastName: "Mannooch",
        email: "jmannooch1@simplemachines.org",
        username: "jmannooch1",
      },
      {
        _id: "65b4531f3a89d130cd931640",
        userId: 6,
        firstName: "Danna",
        lastName: "Ridley",
        email: "dridley5@mit.edu",
        username: "dridley5",
      },
      {
        _id: "65b4531f3a89d130cd93164a",
        userId: 16,
        firstName: "Chrissie",
        lastName: "Letty",
        email: "clettyf@marketwatch.com",
        username: "clettyf",
      },
      {
        _id: "65b4531f3a89d130cd93164c",
        userId: 18,
        firstName: "Lurlene",
        lastName: "Colomb",
        email: "lcolombh@etsy.com",
        username: "lcolombh",
      },
      {
        _id: "65b4531f3a89d130cd93163e",
        userId: 4,
        firstName: "Glen",
        lastName: "Harber",
        email: "gharber3@vk.com",
        username: "gharber3",
      },
      {
        _id: "65b4531f3a89d130cd931644",
        userId: 10,
        firstName: "Ly",
        lastName: "Ekkel",
        email: "lekkel9@flavors.me",
        username: "lekkel9",
      },
    ]);

    await Post.deleteMany({});
    await Post.insertMany([
      {
        id: 1,
        title: "They rushed out the door.",
        body: "They rushed out the door, grabbing anything and everything they could think of they might need. There was no time to double-check to make sure they weren't leaving something important behind. Everything was thrown into the car and they sped off. Thirty minutes later they were safe and that was when it dawned on them that they had forgotten the most important thing of all.",
        userId: 1,
        tags: ["fiction", "magical", "history"],
        reactions: 4,
      },
      {
        id: 2,
        title: "The paper was blank.",
        body: "The paper was blank. It shouldn't have been. There should have been writing on the paper, at least a paragraph if not more. The fact that the writing wasn't there was frustrating. Actually, it was even more than frustrating. It was downright distressing.",
        userId: 1,
        tags: ["mystery", "english", "love"],
        reactions: 0,
      },
      {
        id: 3,
        title: "So what is the answer? How can you stand",
        body: "From the moment you go to prison you must put your cozy past firmly behind you. At the very threshold, you must say to yourself: “My life is over, a little early to be sure, but there’s nothing to be done about it. I shall never return to freedom.",
        userId: 1,
        tags: ["love", "fiction", "history"],
        reactions: 2,
      },
      {
        user: "65b4531f3a89d130cd93163c",
        id: 4,
        title:
          "It's an unfortunate reality that we don't teach people how to make money",
        body: "It's an unfortunate reality that we don't teach people how to make money (beyond getting a 9 to 5 job) as part of our education system. The truth is there are a lot of different, legitimate ways to make money. That doesn't mean they are easy and that you won't have to work hard to succeed, but it does mean that if you're willing to open your mind a bit you don't have to be stuck in an office from 9 to 5 for the next fifty years o your life.",
        userId: 2,
        tags: ["crime", "english"],
        reactions: 4,
      },
      {
        user: "65b4531f3a89d130cd93163c",
        id: 5,
        title: "Things aren't going well at all",
        body: "Things aren't going well at all with mom today. She is just a limp noodle and wants to sleep all the time. I sure hope that things get better soon.",
        userId: 2,
        tags: ["american", "love", "fiction"],
        reactions: 0,
      },
      {
        user: "65b4531f3a89d130cd93163c",
        id: 6,
        title: "He swung back the fishing pole and cast the line",
        body: "He swung back the fishing pole and cast the line which ell 25 feet away into the river. The lure landed in the perfect spot and he was sure he would soon get a bite. He never expected that the bite would come from behind in the form of a bear.",
        userId: 2,
        tags: ["mystery", "american", "english"],
        reactions: 2,
      },
      {
        user: "65b4531f3a89d130cd93163c",
        id: 7,
        title: "Are you getting my texts???",
        body: "Are you getting my texts??? she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting them, how would he ever be able to answer? He put the phone down and continued on his project. He was ignoring her texts and he planned to continue to do so.",
        userId: 2,
        tags: ["mystery", "magical", "history"],
        reactions: 1,
      },

      {
        user: "65b4531f3a89d130cd93163d",
        id: 8,
        title: "Balloons are pretty and come in different colors",
        body: "Balloons are pretty and come in different colors, different shapes, different sizes, and they can even adjust sizes as needed. But don't make them too big or they might just pop, and then bye-bye balloon. It'll be gone and lost for the rest of mankind. They can serve a variety of purposes, from decorating to water balloon wars. You just have to use your head to think a little bit about what to do with them.",
        userId: 9,
        tags: ["american", "crime", "magical"],
        reactions: 9,
      },
      {
        user: "65b4531f3a89d130cd93163d",
        id: 10,
        title: "Happiness was different in childhood.",
        body: "so much then a matter simply of accumulation, of taking things – new experiences, new emotions – and applying them like so many polished tiles to what would someday be the marvellously finished pavilion of the self.",
        userId: 3,
        tags: ["american", "crime", "mystery"],
        reactions: 2,
      },
      {
        user: "65b4531f3a89d130cd93163d",
        id: 11,
        title: "Imagine the silence now, in that place which",
        body: "is no-place, that anteroom to God where each hour is ten thousand years long. Once you imagined the souls held in a great net, a web spun by God,",
        userId: 3,
        tags: ["magical", "crime", "american"],
        reactions: 7,
      },
      {
        user: "65b4531f3a89d130cd93163d",
        id: 12,
        title: "A judgment that is necessarily hampered",
        body: "A judgment that is necessarily hampered, bot only by the scope and limits of his imagination, but by the ever-changing measure of his doubt and self-esteem.",
        userId: 3,
        tags: ["love", "english"],
        reactions: 6,
      },
    ]);

    await Comments.deleteMany({});
    await Comments.insertMany([
      {
        id: 1,
        body: "This is some awesome thinking!",
        postObjectId: "65b6c519e6587fc54c477d27",
        postId: 1,
      },
      {
        id: 2,
        body: "What terrific math skills you’re showing!",
        postObjectId: "65b6c519e6587fc54c477d27",
        postId: 1,
      },
      {
        id: 3,
        body: "You are an amazing writer!",
        postObjectId: "65b6c519e6587fc54c477d27",
        postId: 1,
      },
      {
        id: 4,
        body: "Wow! You have improved so much!",
        postObjectId: "65b6c519e6587fc54c477d27",
        postId: 1,
      },
      {
        id: 5,
        body: "Nice idea!",
        postObjectId: "65b6c519e6587fc54c477d27",
        postId: 1,
      },
      {
        id: 6,
        body: "You are showing excellent understanding!",
        postObjectId: "65b6c519e6587fc54c477d28",
        postId: 2,
      },
      {
        id: 7,
        body: "This is clear, concise, and complete!",
        postObjectId: "65b6c519e6587fc54c477d28",
        postId: 2,
      },
      {
        id: 8,
        body: "What a powerful argument!",
        postObjectId: "65b6c519e6587fc54c477d28",
        postId: 2,
      },
      {
        id: 9,
        body: "I knew you could do it!",
        postObjectId: "65b6c519e6587fc54c477d28",
        postId: 2,
      },
      {
        id: 10,
        body: "Wonderful ideas!",
        postObjectId: "65b6c51ae6587fc54c477d29",
        postId: 3,
      },
      {
        id: 11,
        body: "It was a pleasure to grade this!",
        postObjectId: "65b6c51ae6587fc54c477d29",
        postId: 3,
      },
      {
        id: 12,
        body: "Keep up the incredible work!",
        postObjectId: "65b6c51ae6587fc54c477d29",
        postId: 3,
      },
    ]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

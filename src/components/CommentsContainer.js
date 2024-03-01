import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const commentsData = [
  {
    name: "@Vishwa",
    cmt: "Rod Tucker- 12th man of England",
    replies: [],
  },
  {
    name: "@user-123",
    cmt: "Agree with Harshith, Root dismissal should have been umpire's call. Even to the naked eye it looked so",
    replies: [
      {
        name: "@Rocky",
        cmt: "Bro it was toh 50 50 , it depends who you are supporting ,if you are English fan then it should have been umpire’s call but ball was turning and it straightened after pitching just like Bashir ball to Akashdeep .",
        replies: [],
      },
      {
        name: "@user-123",
        cmt: "@Rocky bro, nothing to do with fandom, it was very obvious. The straightening of the ball is irrelevant. Pitched more outside the leg stump.",
        replies: [],
      },
      {
        name: "@Akash",
        cmt: "No problem brother most of decision in this game gone against India. Specially Rod Tucker was raising finger on every appeal when India batted.",
        replies: [],
      },
    ],
  },
  {
    name: "@Rahul33",
    cmt: "Ash 🐐",
    replies: [],
  },
  {
    name: "@Dhanushl6465",
    cmt: " Will Shreyas, Kishan be dropped from ODIs & T20Is as they lost central contracts",

    replies: [
      {
        name: "@buttysingh3166",
        cmt: "Should be .. no one can be greater than the game.. These two gentlemen are incomplete batsmen  coupled with this kind of attitude I think BCCI should mandatorily have them sit out  first 4 games of IPL without financial compensation. This will send a loud and clear message to all Indian cricketers - domestic cricket is paramount!!",

        replies: [],
      },
      {
        name: "@ramesh22",
        cmt: "Yes",
        replies: [],
      },
      {
        name: "@jalal11",
        cmt: "@buttysingh3166 That will never happen because virat also have same issue,he has taken leave and have no injury so according to that rule if it comes ideally virat also have to play domestic matches.You know this is indian cricket and rules arent same for every one",
        replies: [],
      },
    ],
  },
  {
    name: "@ganeshhtd5454",
    cmt: "Can we start calling your show as ' bowlers corner ' bowling aspect of the game was discussed in detail and other aspects 'as as a matter of fact ' enough of technicalities on spin bowling majority of us dont understand on a spinning wicket all you have to do is put the ball on a right spot and leave it to the pitch to do the rest For me the unsung  hero of this match so far is Kuldeep he batted extremely well his impeccable forward defence would have made an accomplished batter proud bowled extremely well and took four important wickets If India is in driver's seat today it is because of his alround display and regarding his fielding on the  boundary line run after the ball pounçe on it go tumbling down get up like a spring and return the ball to either end of the wicket all in one action  the swiftness for his size is deceiving and he did that time and again with great  consistency  and saved many precious runs Not a word on it from your side 😢 Sir pl don't count the chickens - - - -  pl don't forget we are playing a game of cricket anything can happen any time",
    replies: [],
  },
];

const Comments = ({ comments }) => {
  const { name, cmt } = comments;

  return (
    <div className="text-white flex gap-2 m-5">
      <div>
        <FontAwesomeIcon
          className="bg-[#3c3c3c] p-1 rounded-full"
          icon={faUser}
        />
      </div>
      <div>
        <h1 className="font-bold ">{name}</h1>
        <h2 className="text-xs font-semibold ">{cmt}</h2>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map((cmtsData) => (
        <div>
          <Comments comments={cmtsData} />
          <div className="ml-8">
            <CommentsList comments={cmtsData.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

const CommentsContainer = () => {
  const [cmtTxt, setCmtTxt] = useState("");
  return (
    <div>
      <h1 className="font-bold text-xl text-white mb-5">Comments:</h1>
      <input
        type="text"
        className="w-full bg-transparent border-b-2 ml-5"
        value={cmtTxt}
        onChange={(e) => setCmtTxt(e.target.value)}
      />
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;

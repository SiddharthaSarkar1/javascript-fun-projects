import React, { useState } from "react";

const ASPECTS = ["Redability", "Performence", "Security", "Documentation", "Testing"];

const FeedbackSystem = () => {

  const [votes, setVotes] = useState(
    ASPECTS.reduce((acc, aspect) => ({
      ...acc,
      [aspect.toLowerCase()]: {upvote: 0, downvote: 0}
    }), {})
  );

  const handleUpvote = (aspectName) => {
    const key = aspectName.toLowerCase();
    setVotes((prevVotes) => ({
      ...prevVotes,
      [key]: {
        ...prevVotes[key],
        upvote: prevVotes[key].upvote + 1
      }
    }))
  }

  const handleDownvote = (aspectName) => {
    const key = aspectName.toLowerCase();
    setVotes((prevVotes) => ({
      ...prevVotes,
      [key]: {
        ...prevVotes[key],
        downvote: prevVotes[key].downvote + 1
      }
    }))
  }

  return (
    <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
        {
          ASPECTS.map((item, idx) => (
            <div key={item} className="pa-10 w-300 card">
              <h2>{item}</h2>
              <div className="flex my-30 mx-0 justify-content-around">
                <button className="py-10 px-15" data-testid={`upvote-btn-${idx}`}
                onClick={() => handleUpvote(item)}>
                  👍 Upvote
                </button>
                <button className="py-10 px-15 danger" data-testid={`downvote-btn-${idx}`}
                onClick={() => handleDownvote(item)}>
                  👎 Downvote
                </button>
              </div>
              <p className="my-10 mx-0" data-testid={`upvote-count-${idx}`}>
                Upvotes: <strong>{votes[item.toLowerCase()].upvote}</strong>
              </p>
              <p className="my-10 mx-0" data-testid={`downvote-count-${idx}`}>
                Downvotes: <strong>{votes[item.toLowerCase()].downvote}</strong>
              </p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default FeedbackSystem;

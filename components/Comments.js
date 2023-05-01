import { DiscussionEmbed } from "disqus-react";

const Comments = ({ posts }) => {
  const disqusShortname = "macbeth";

  const disqusConfig = {
    url: "http://localhost:3000",
    // identifier: posts.id,
    // title: posts.title
  };

  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};

export default Comments;

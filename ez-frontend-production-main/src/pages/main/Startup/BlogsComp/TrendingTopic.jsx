import Style from "./QA.module.css";

const trendTopics = [
  {
    id: 1,
    text: "Artificial Intelligence",
    link: "/",
  },
  {
    id: 2,
    text: "Productivity",
    link: "/",
  },
  {
    id: 3,
    text: "Marketing",
    link: "/",
  },
  {
    id: 4,
    text: "Developer Tools",
    link: "/",
  },
];

const TrendingTopic = () => {
  return (
    <div
      className={`w-full mt-4 flex gap-3 ${Style.trending_topics} items-center flex-wrap`}
    >
      <span className="font-semibold">Trending topics:</span>
      {trendTopics.map((topics) => (
        <a href={topics.link} key={topics.id}>
          {topics.text}
        </a>
      ))}
    </div>
  );
};

export default TrendingTopic;

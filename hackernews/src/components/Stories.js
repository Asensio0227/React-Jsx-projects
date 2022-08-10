import Loading from "./Loading";
import { useGlobalContext } from './context';

const Stories = () => {
  const { loading, hits,removeStory } = useGlobalContext();

  if (loading) {
  return <Loading/>
  };

  return (
    <section className="stories">
      {hits.map((hit) => {
        const {
          objectID: id,
          title,
          url,
          num_comments: comments,
          author,
          points
        } = hit;
        return (
          <article key={id} className="story">
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by <span>{author}</span> | {comments} {''} comments
            </p>
            <div>
              <a
                href={url}
                className="read-link"
                target="_blank"
                rel="noopener noreferrer">
                read more
              </a>
              <button
                className="remove-btn"
                onClick={() => removeStory(id)}
              >
              remove
          </button>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Stories

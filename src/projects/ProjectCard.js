export default function ProjectCard({ title, description, githubLink, siteLink }) {
  return (
    <div className="max-w-sm p-6 m-3 bg-slate-900 rounded-lg shadow dark:bg-slate-800">
      <h5 className="mb-2 text-2xl font-bold text-blue-400 text-center">
        {title}
      </h5>
      <p className="mb-3 font-normal text-slate-300">{description}</p>
      <div className="text-center">
        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
          className="inline-flex items-center px-3 py-2 mr-2 text-sm font-medium text-center text-white rounded-lg bg-blue-800 hover:bg-blue-600 active:bg-blue-900 dark:bg-blue-600 dark:hover:bg-blue-800"
        >
          GitHub Repo
        </a>
        {
          siteLink ?
          <a
            href={siteLink}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
            className="inline-flex items-center px-3 py-2 mr-2 text-sm font-medium text-center text-white rounded-lg bg-blue-800 hover:bg-blue-600 active:bg-blue-900 dark:bg-blue-600 dark:hover:bg-blue-800"
          >
            Deployed Site
          </a> : null
        }
      </div>
    </div>
  );
}

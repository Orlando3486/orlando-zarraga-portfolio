async function getProjects() {
  const res = await fetch('http://localhost:4000/projects', {
    cache: 'no-store', // importante para SSR dinámico
  });

  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }

  return res.json();
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Proyectos</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project: any) => (
          <div
            key={project.id}
            className="p-6 rounded-xl border shadow-sm hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="opacity-80 mt-2">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.stack.map((tech: string) => (
                <span
                  key={tech}
                  className="text-sm px-2 py-1 rounded-md bg-gray-200 dark:bg-gray-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
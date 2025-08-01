export default async function BlogPage({ params }) {
  const { slug } = params;

  const query = `
    *[ _type in ["Project", "project"] && slug.current == $slug][0]{
      title,
      description,
      "slug": slug.current,
      image,
      publishedAt,
      href,
      content,
      faq,
      documents,
      googleDriveLinks
    }
  `;

  try {
    const blog = await client.fetch(query, { slug });

    if (!blog) {
      notFound();
      return null;
    }

    // Extract headings from content
    const headings = [];
    if (Array.isArray(blog.content)) {
      blog.content.forEach((block, index) => {
        if (block._type === "block" && block.style?.startsWith("h")) {
          headings.push({
            text: block.children?.map((child) => child.text).join(" ") || "",
            slug: `heading-${index}`,
            level: parseInt(block.style.replace("h", ""), 10),
          });
        }
      });
    }

    const imageUrl = blog.image ? urlFor(blog.image).url() : siteMetadata.socialBanner;

    const { projectId, dataset } = client.config();

    function getFileUrl(file, extensionOverride = null) {
      if (!file?.asset?._ref) return null;
      const ref = file.asset._ref;
      const [, id, extension] = ref.split('-');
      const finalExtension = extensionOverride || extension;
      return `https://${projectId}.cdn.sanity.io/files/${dataset}/${id}.${finalExtension}?dl=${encodeURIComponent(file.title + '.' + finalExtension)}`;
    }

    return (
      <article>
        <div className="relative w-full h-[70vh] bg-gray-800">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={blog.title || "Blog featured image"}
              fill
              className="object-cover opacity-75"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gray-800/60" />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
            <VisitCourseButton href={blog.href} />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 mt-8 px-5 md:px-10">
          {/* Blog Content */}
          <div className="col-span-12 lg:col-span-8 text-black bg-light dark:bg-dark text-dark dark:text-light transition-colors duration-200">
            <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>

            {/* Downloads Section */}
            {(blog.documents?.length > 0 || blog.googleDriveLinks?.length > 0) && (
              <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-4 text-[#FF6F61]">Downloads</h2>
                {/* Document Downloads */}
                {blog.documents?.map((doc, index) => {
                  const fileUrl = getFileUrl(doc);
                  if (!fileUrl) return null;
                  return (
                    <div key={`doc-${index}`} className="mb-4">
                      <a
                        href={fileUrl}
                        download
                        className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all"
                      >
                        Download Document: {doc.title}
                      </a>
                      {doc.description && <p className="mt-2 text-gray-600">{doc.description}</p>}
                    </div>
                  );
                })}
                {/* Google Drive Links */}
                {blog.googleDriveLinks?.map((file, index) => {
                  return (
                    <div key={`file-${index}`} className="mb-4">
                      <a
                        href={file.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all"
                      >
                        Download File: {file.title}
                      </a>
                      {file.description && <p className="mt-2 text-gray-600">{file.description}</p>}
                    </div>
                  );
                })}
              </section>
            )}

            {blog.content ? (
              <PortableText
                value={blog.content}
                components={{
                  ...portableTextComponents,
                  types: {
                    ...portableTextComponents.types,
                    image: ({ value }) => (
                      <div className="my-4">
                        <Image
                          src={urlFor(value).url()}
                          alt={value.alt || blog.title}
                          width={800}
                          height={400}
                          className="w-full h-auto rounded"
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      </div>
                    ),
                    youtubeEmbed: ({ value }) => {
                      if (!value?.videoUrl) return null;
                      const videoId = new URL(value.videoUrl).searchParams.get('v');
                      if (!videoId) return null;
                      return (
                        <div className="my-4">
                          <iframe
                            width={value.videoWidth || 800}
                            height={value.videoHeight || 450}
                            src={`https://www.youtube.com/embed/${videoId}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full rounded-lg shadow-md"
                          />
                        </div>
                      );
                    },
                  },
                  marks: {
                    link: ({ value, children }) => (
                      <a
                        href={value?.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline hover:text-blue-800"
                      >
                        {children}
                      </a>
                    ),
                  },
                  block: {
                    h1: ({ children }) => (
                      <h1 id={`heading-${children.join("")}`} className="text-4xl font-bold my-4">
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 id={`heading-${children.join("")}`} className="text-3xl font-semibold my-4">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 id={`heading-${children.join("")}`} className="text-2xl font-medium my-3">
                        {children}
                      </h3>
                    ),
                    normal: ({ children }) => <p className="my-2">{children}</p>,
                  },
                }}
              />
            ) : (
              <p>No content available</p>
            )}

            {/* Categories & Certifications Section */}
            <div className="mt-8">
              <h2 className="text-lg font-bold mb-4 text-[#FF6F61]">Categories</h2>
              <div className="space-y-2">
                <Link href="/blogs" className="block text-gray-700 dark:text-gray-300 hover:text-[#FF6F61]">
                  Blogs
                </Link>
              </div>
            </div>

            <hr className="my-8 border-gray-300 dark:border-gray-600" />

            <div>
              <h2 className="text-lg font-bold mb-4 text-[#FF6F61]">Certifications</h2>
              <div className="space-y-2">
                <Link href="/Revit" className="block text-gray-700 dark:text-gray-300 hover:text-[#FF6F61]">
                  Revit
                </Link>
                <Link href="/designing" className="block text-gray-700 dark:text-gray-300 hover:text-[#FF6F61]">
                  Designing
                </Link>
                <Link href="/control" className="block text-gray-700 dark:text-gray-300 hover:text-[#FF6F61]">
                  Control
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  } catch (err) {
    console.error("Error fetching blog content:", err);
    return <div className="text-center mt-16 text-red-500">Error loading blog data.</div>;
  }
}

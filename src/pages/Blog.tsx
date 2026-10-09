import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag, Share2, AlertCircle, ChevronRight } from "lucide-react";
import { blogPosts } from "../data";

// Blog Archive
export function BlogArchive() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];
  const filtered = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="section-label">Insights</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Digital Marketing <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Practical thinking on SEO, paid media, conversion optimization, and digital growth strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-border bg-graphite/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-acid text-midnight"
                    : "bg-graphite border border-border text-text-secondary hover:text-acid hover:border-acid"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Draft notice */}
          <div className="mb-8 p-4 rounded-lg bg-violet/5 border border-violet/20 flex items-start gap-3">
            <AlertCircle size={18} className="text-violet flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-text-primary font-medium">Draft Articles</p>
              <p className="text-xs text-text-secondary mt-1">
                These articles are placeholder drafts to demonstrate the blog structure. Content will be replaced with original published articles.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <Link
                key={post.id}
                to={`/insights/${post.slug}`}
                className="hover-card group p-6 rounded-lg bg-graphite border border-border flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="tag">{post.category}</span>
                  {post.isDraft && (
                    <span className="text-[10px] font-mono text-violet bg-violet/10 px-2 py-0.5 rounded border border-violet/20">
                      DRAFT
                    </span>
                  )}
                </div>

                <h2 className="text-lg font-semibold text-text-primary mb-3 group-hover:text-acid transition-colors line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-sm text-text-secondary mb-4 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-3 text-xs text-text-muted">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readingTime}
                    </span>
                  </div>
                  <ChevronRight size={16} className="text-text-muted group-hover:text-acid transition-colors" />
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-text-secondary">No articles in this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

// Individual article page
export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <Link to="/insights" className="btn-primary">
            <ArrowLeft size={16} />
            Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  return (
    <div>
      {/* Back nav */}
      <div className="border-b border-border bg-graphite/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/insights" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-acid transition-colors">
            <ArrowLeft size={16} />
            Back to Insights
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main content */}
            <div className="lg:col-span-8">
              {/* Header */}
              <header className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="tag">{post.category}</span>
                  {post.isDraft && (
                    <span className="text-[10px] font-mono text-violet bg-violet/10 px-2 py-0.5 rounded border border-violet/20">
                      DRAFT
                    </span>
                  )}
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readingTime}
                  </span>
                </div>
              </header>

              {/* Article content */}
              <div className="prose prose-invert max-w-none">
                {post.content.split("\n").map((line, i) => {
                  if (line.startsWith("## ")) {
                    return <h2 key={i} className="text-2xl font-bold text-text-primary mt-10 mb-4" id={line.slice(3).toLowerCase().replace(/\s+/g, "-")}>{line.slice(3)}</h2>;
                  }
                  if (line.startsWith("### ")) {
                    return <h3 key={i} className="text-xl font-semibold text-text-primary mt-6 mb-3">{line.slice(4)}</h3>;
                  }
                  if (line.startsWith("1. ") || line.startsWith("2. ") || line.startsWith("3. ") || line.startsWith("4. ") || line.startsWith("5. ") || line.startsWith("6. ")) {
                    return <p key={i} className="text-text-secondary leading-relaxed ml-4 mb-2">{line}</p>;
                  }
                  if (line.startsWith("- ")) {
                    return <p key={i} className="text-text-secondary leading-relaxed ml-4 mb-2 flex items-start gap-2"><span className="w-1.5 h-1.5 bg-acid rounded-full mt-2 flex-shrink-0" />{line.slice(2)}</p>;
                  }
                  if (line.trim() === "") {
                    return <br key={i} />;
                  }
                  return <p key={i} className="text-text-secondary leading-relaxed mb-4">{line}</p>;
                })}
              </div>

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex items-center gap-3">
                  <Share2 size={16} className="text-text-muted" />
                  <span className="text-sm text-text-muted">Share this article</span>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                {/* Table of Contents */}
                {post.toc.length > 0 && (
                  <div className="p-5 rounded-lg bg-graphite border border-border">
                    <h3 className="text-sm font-semibold text-text-primary mb-3">Table of Contents</h3>
                    <nav className="space-y-2">
                      {post.toc.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className="block text-sm text-text-secondary hover:text-acid transition-colors py-1"
                        >
                          {item.title}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                {/* Author */}
                <div className="p-5 rounded-lg bg-graphite border border-border">
                  <h3 className="text-sm font-semibold text-text-primary mb-3">Author</h3>
                  <p className="text-sm text-text-secondary">
                    Digital Marketing Strategist specializing in SEO, paid media, and conversion optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Related articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-border">
              <h2 className="text-2xl font-bold text-text-primary mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.id}
                    to={`/insights/${related.slug}`}
                    className="hover-card group p-6 rounded-lg bg-graphite border border-border"
                  >
                    <span className="tag mb-3">{related.category}</span>
                    <h3 className="text-lg font-semibold text-text-primary mt-3 group-hover:text-acid transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-sm text-text-secondary mt-2 line-clamp-2">{related.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}

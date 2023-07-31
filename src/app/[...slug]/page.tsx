export default async function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="flex justify-center min-h-screen">
      <h1 className="text-2xl mt-16">
        🏗️ Page {`"${params.slug}"`} is under construction
      </h1>
    </div>
  );
}

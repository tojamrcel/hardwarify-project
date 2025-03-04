import ContentLoader from "@/app/_components/ContentLoader";

function Loading() {
  return (
    <div className="flex h-96 items-center justify-center">
      <ContentLoader />
    </div>
  );
}

export default Loading;

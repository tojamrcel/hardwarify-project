import Button from "./_components/Button";

function Error() {
  return (
    <div className="flex flex-col gap-6 p-24">
      <h1 className="text-center text-5xl font-bold uppercase tracking-wider text-red-600">
        Ooops...
      </h1>
      <p className="text-center text-2xl text-gray-700">
        This page could not be found :(
      </p>
      <div className="flex justify-center">
        <Button type="primary" link="/">
          GO BACK
        </Button>
      </div>
    </div>
  );
}

export default Error;

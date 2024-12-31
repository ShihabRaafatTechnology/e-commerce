import { memo } from "react";

const Heading = memo(({title}: {title: React.ReactNode}) => {
  console.log("Heading");
  return (
    <h2 className="px-10 py-2 bg-gray-300 capitalize w-full">{title}</h2>
  )
});

export default Heading
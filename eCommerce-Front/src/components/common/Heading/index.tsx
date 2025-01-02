import { memo } from "react";

const Heading = memo(({title}: {title: React.ReactNode}) => {
  console.log(title);
  return (
    <h2 className="px-10 py-2 bg-black capitalize w-full">{title}</h2>
  )
});

export default Heading
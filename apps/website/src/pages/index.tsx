import { cn } from "@my-workspace/utils";
import { Button } from "@my-workspace/ui";

export default function () {
  return (
    <div
      className={cn([
        "flex flex-row",
        "items-center justify-center",
        "h-screen w-screen",
        "bg-gray-900",
      ])}
    >
      <Button variant={"destructive"}>Hello World</Button>
    </div>
  );
}

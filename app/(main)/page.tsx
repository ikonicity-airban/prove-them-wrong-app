import Clicker from "@/components/home/clicker";
import DailyTask from "@/components/tasks/daily-task";
import Link from "next/link";

const data = [
  {
    key: 1,
    name: "Missions",
    icon: "🚀",
    href: "/missions",
    value: 200,
  },
  {
    key: 2,
    name: "Earn per hour",
    icon: "🚀",
    href: "/missions",
    value: 200,
  },
  {
    key: 3,
    name: "total earned",
    icon: "🚀",
    href: "/missions",
    value: 200,
  },
];

function Summary() {
  return (
    <div className="my-4">
      <ul className="flex w-full gap-4 items-center justify-between">
        {data.map(({ href, icon, name, value, key }) => (
          <li className="flex flex-col capitalize items-center" key={key}>
            <Link href={href}>{name}</Link>
            <span className="font-semibold text-xl">
              +{value}
              {icon}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] w-full px-6 flex flex-col items-center gap-4 min-h-screen">
      <Clicker />
      <Summary />
      <DailyTask title="Daily Tasks" />
    </div>
  );
}

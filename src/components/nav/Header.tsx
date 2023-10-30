import Image from "next/image";

type Props = {};

const sectionItems = [
  {
    name: "S1",
    href: "#section-1",
  },
  {
    name: "S2",
    href: "#section-2",
  },
  {
    name: "S3",
    href: "#section-3",
  },
  {
    name: "S4",
    href: "#section-4",
  },
  {
    name: "S5",
    href: "#section-5",
  },
  {
    name: "S6",
    href: "#section-6",
  },
  {
    name: "S7",
    href: "#section-7",
  },
  {
    name: "S8",
    href: "#section-8",
  },
];

export default function Header({}: Props) {
  return (
    <div className="bg-gray-50 shadow-lg z-50">
      <div className="max-w-5xl mx-auto py-6 px-2">
        <div className="flex justify-between">
          {/* Logo */}
          <div>
            <Image src="/Nit.png" alt="" width={135} height={25} />
          </div>

          {/* Sections */}
          <div className="">
            {sectionItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-gray-800 px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-100 cursor-pointer "
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* End */}
          <div className="hidden lg:inline">
            <img
              className="inline-block h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

type Props = {};

const sectionItems = [
  {
    name: "Section 1",
    href: "#section-1",
  },
];

export default function Header({}: Props) {
  return (
    <div className="bg-gray-200">
      <div className="max-w-5xl mx-auto py-6 px-2">
        <div className="flex justify-between">
          {/* Logo */}
          <div>
            <Image src="/Nit.png" alt="" width={135} height={25} />
          </div>

          {/* Sections */}
          <div className="sm:hidden lg:inline">
            {sectionItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* End */}
          <div className="sm:hidden lg:inline"></div>
        </div>
      </div>
    </div>
  );
}

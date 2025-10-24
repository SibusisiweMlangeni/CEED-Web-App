export interface SubLink {
  title: string;
  href: string;
}

export interface NavItem {
  title: string;
  href?: string;
  submenu?: SubLink[];
}

export const navLinks: NavItem[] = [
  {
    title: "Home",
    href: "/"
  },
  {
    title: "About Us",
    href: "/about"
  },
  {
    title: "Courses",
    submenu: [
      { title: "Courses Sidebar", href: "/courses" },
      { title: "Course Details", href: "/courses/details" },
    ],
  },
  {
    title: "Donate",
    href: "/donate",
  },
];
interface IMenuItem {
  id: number;
  name: string;
  path: string;
}

export const NavbarMenuItems: IMenuItem[] = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Contact",
    path: "/contact",
  },
  {
    id: 4,
    name: "Todos",
    path: "/todos",
  },
  {
    id: 5,
    name: "Todo",
    path: "/todos/1",
  },
];

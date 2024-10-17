
import Logo from "../../assets/1.png";

const NavbarLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Features",
    link: "#",
  },
  {
    id: 3,
    title: "Shop",
    link: "#",
  },
  {
    id: 4,
    title: "About us",
    link: "#",
  },
  {
    id: 5,
    title: "Contact",
    link: "#",
  },
];

const Navbar = () => {
  return (
    <div className="py-8 container flex justify-between items-center">
      {/*Logo Section*/}
      <div className="flex items-center gap-1">
        <img src={Logo} alt="logo" className="w-[70px]"/>
        <p className="font-bold text-2xl">HUSTLE</p>
      </div>
      {/*Navegation Section*/}
      <div className="hidden md:block">
        <ul className="flex gap-3 xl:gap-7">
          {
            NavbarLinks.map((data) => {
              return (
                <li key={data.id}>
                  <a href={data.link}>
                    {data.title}
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
      {/*Button Section*/}
      <div>
        <button className="primary-btn">Request for Quotes</button>
      </div>
    </div>
  )
}

export default Navbar
